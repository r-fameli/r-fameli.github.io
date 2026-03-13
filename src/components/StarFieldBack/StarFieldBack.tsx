import React, { useRef, useEffect, useCallback } from "react";
import "./StarFieldBack.scss";
import { useAnimationFrame } from "../../hooks/useAnimationFrame";

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    twinkleSpeed: number;
}

type Props = {
    children?: React.ReactNode;
};

// Configuration constants - easily adjustable
const CONFIG = {
    NUM_STARS: 300,
    DISABLE_TRAILS: true, // Set to false if you want trails back
    MIN_STAR_SIZE: 0.1,
    MAX_STAR_SIZE: 1,
    MIN_STAR_SPEED: 0.1,
    MAX_STAR_SPEED: 0.8,
    MIN_OPACITY: 0.2,
    MAX_OPACITY: 1.0,
    STAR_GLOW_THRESHOLD: 1.5, // Stars larger than this get glow effect
    GLOW_MULTIPLIER: 2, // How much larger the glow is compared to star
    GLOW_OPACITY: 0.3, // Opacity of glow effect
};

const StarFieldBack = ({ children }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const starsRef = useRef<Star[]>([]);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    // Initialize stars with aspect ratio correction
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
                twinkleSpeed: Math.random() * 0.02 + 0.01,
            });
        }

        starsRef.current = stars;
    }, []);

    const animate = useCallback((deltaTime: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = contextRef.current;
        if (!ctx) return;

        // Clear canvas completely - NO TRAILS
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const stars = starsRef.current;

        stars.forEach((star) => {
            star.opacity += star.twinkleSpeed;
            if (star.opacity > 1 || star.opacity < 0.2) {
                star.twinkleSpeed = -star.twinkleSpeed;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();

            if (star.size > 1.5) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.3})`;
                ctx.fill();
            }

            // Move star upward
            star.y -= star.speed * (deltaTime / 16.67);

            if (star.y < 0) {
                star.y = canvas.height;
                star.x = Math.random() * canvas.width;
                star.opacity = Math.random() * 0.8 + 0.2;
            }
        });
    }, []);

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
