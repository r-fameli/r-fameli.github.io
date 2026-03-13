import React, { useRef, useEffect, useCallback } from "react";
import "./StarFieldBack.scss";
import { useAnimationFrame } from "../../hooks/useAnimationFrame";

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
}

type Props = {
    children?: React.ReactNode;
};

// High-performance configuration
const CONFIG = {
    NUM_STARS: 1000, // Increased star count for density
    MIN_STAR_SIZE: 0.3, // Smaller stars for better performance
    MAX_STAR_SIZE: 1.0, // Smaller range
    MIN_STAR_SPEED: 0.2, // Faster movement for better visual effect
    MAX_STAR_SPEED: 1.0,
    MIN_OPACITY: 0.5, // Higher minimum opacity for simpler rendering
    MAX_OPACITY: 1.0,
};

const StarFieldBack = ({ children }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const starsRef = useRef<Star[]>([]);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    // Initialize stars - simplified for performance
    const initStars = useCallback((canvas: HTMLCanvasElement) => {
        const stars: Star[] = [];

        // Calculate aspect ratio correction factor
        const aspectRatio = canvas.width / canvas.height;
        const heightCorrectionFactor = 1 / aspectRatio;

        for (let i = 0; i < CONFIG.NUM_STARS; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                // Adjust star size based on canvas height to maintain proportionality
                size:
                    (Math.random() *
                        (CONFIG.MAX_STAR_SIZE - CONFIG.MIN_STAR_SIZE) +
                        CONFIG.MIN_STAR_SIZE) *
                    heightCorrectionFactor,
                speed:
                    Math.random() *
                        (CONFIG.MAX_STAR_SPEED - CONFIG.MIN_STAR_SPEED) +
                    CONFIG.MIN_STAR_SPEED,
                opacity:
                    Math.random() * (CONFIG.MAX_OPACITY - CONFIG.MIN_OPACITY) +
                    CONFIG.MIN_OPACITY,
            });
        }

        starsRef.current = stars;
    }, []);

    // Optimized animation callback
    const animate = useCallback((deltaTime: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = contextRef.current;
        if (!ctx) return;

        // Faster clear operation - no trails
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const stars = starsRef.current;

        // Simplified star rendering loop
        stars.forEach((star) => {
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            // Draw square instead of arc - MUCH FASTER
            ctx.fillRect(
                star.x - star.size / 2,
                star.y - star.size / 2,
                star.size,
                star.size,
            );

            // Move star upward - simplified
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

    // Handle resize with proper resolution matching
    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Get the ACTUAL display size of the canvas
        const rect = canvas.getBoundingClientRect();

        // Set resolution to match display size exactly
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Reinitialize stars with new dimensions
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
