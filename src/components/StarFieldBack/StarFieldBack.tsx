import React, { useRef, useEffect, useCallback } from "react";
import "./StarFieldBack.scss";
import { useAnimationFrame } from "../../hooks/useAnimationFrame";

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
}

type Props = {
    children?: React.ReactNode;
};

// Config variables
const CONFIG = {
    NUM_STARS: 1000,
    MIN_STAR_SIZE: 0.3,
    MAX_STAR_SIZE: 1.0,
    MIN_STAR_SPEED: 0.2,
    MAX_STAR_SPEED: 1.0,
};

const StarFieldBack = ({ children }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const starsRef = useRef<Star[]>([]);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    // Screen size detection and scaling
    const getStarSizeScale = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return 1;

        // Get actual pixel density
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        // Calculate scale factor based on screen dimensions
        // Smaller screens get smaller stars
        const screenScale = Math.min(rect.width, rect.height) / 2000;

        // Adjust for pixel density - higher density needs smaller stars
        const densityScale = 1 / Math.sqrt(dpr);

        // Combine scaling factors
        return screenScale * densityScale;
    }, []);

    // Modified star initialization
    const initStars = useCallback((canvas: HTMLCanvasElement) => {
        const stars: Star[] = [];
        const sizeScale = getStarSizeScale();

        // Calculate aspect ratio correction factor
        const aspectRatio = canvas.width / canvas.height;
        const heightCorrectionFactor = 1 / aspectRatio;

        for (let i = 0; i < CONFIG.NUM_STARS; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                // Apply size scaling for responsive behavior
                size:
                    (Math.random() *
                        (CONFIG.MAX_STAR_SIZE - CONFIG.MIN_STAR_SIZE) +
                        CONFIG.MIN_STAR_SIZE) *
                    heightCorrectionFactor *
                    sizeScale,
                speed:
                    Math.random() *
                    (CONFIG.MAX_STAR_SPEED - CONFIG.MIN_STAR_SPEED) +
                    CONFIG.MIN_STAR_SPEED,
            });
        }

        starsRef.current = stars;
    }, [getStarSizeScale]);

    // Optimized animation callback
    const animate = useCallback((deltaTime: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = contextRef.current;
        if (!ctx) return;

        ctx.fillStyle = "#010810";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const stars = starsRef.current;

        // Star rendering loop
        stars.forEach((star) => {
            ctx.fillStyle = `rgba(255, 255, 255)`;
            ctx.fillRect(
                star.x - star.size / 2,
                star.y - star.size / 2,
                star.size,
                star.size,
            );

            // Move star upward
            star.y -= star.speed * (deltaTime / 16.67);

            // Reset star when it goes off screen
            if (star.y < 0) {
                star.y = canvas.height;
                star.x = Math.random() * canvas.width;
            }
        });
    }, []);

    // Use the animation frame hook
    useAnimationFrame(animate);

    // Updated resize handler to recalculate scaling
    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Get the ACTUAL display size of the canvas
        const rect = canvas.getBoundingClientRect();

        // Set resolution to match display size exactly
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Reinitialize stars with new dimensions and scaling
        initStars(canvas);
    }, [initStars]);

    // Initialize canvas and start animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Set initial size to match display
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        contextRef.current = canvas.getContext("2d");
        if (!contextRef.current) return;

        initStars(canvas);

        // Add resize listener
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [initStars, handleResize]);

    return (
        <div ref={containerRef} className="starfield-container">
            <canvas
                ref={canvasRef}
                className="starfield-canvas"
                aria-hidden="true"
            />
            {children}
        </div>
    );
};

export default StarFieldBack;
