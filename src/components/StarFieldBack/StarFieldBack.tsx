import React, { useRef, useEffect, useCallback } from 'react';
import './StarFieldBack.scss';
import { useAnimationFrame } from '../../hooks/useAnimationFrame';

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
}

// Configuration constants - easily adjustable
const CONFIG = {
    NUM_STARS: 200,
    DISABLE_TRAILS: true, // Set to false if you want trails back
    MIN_STAR_SIZE: 0.5,
    MAX_STAR_SIZE: 2.5,
    MIN_STAR_SPEED: 0.1,
    MAX_STAR_SPEED: 0.8,
    MIN_OPACITY: 0.2,
    MAX_OPACITY: 1.0,
    STAR_GLOW_THRESHOLD: 1.5, // Stars larger than this get glow effect
    GLOW_MULTIPLIER: 2, // How much larger the glow is compared to star
    GLOW_OPACITY: 0.3 // Opacity of glow effect
};

const StarFieldBack = ({ children }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const starsRef = useRef<Star[]>([]);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    // Initialize stars using CONFIG
    const initStars = useCallback((canvas: HTMLCanvasElement) => {
        const stars: Star[] = [];
        
        for (let i = 0; i < CONFIG.NUM_STARS; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * (CONFIG.MAX_STAR_SIZE - CONFIG.MIN_STAR_SIZE) + CONFIG.MIN_STAR_SIZE,
                speed: Math.random() * (CONFIG.MAX_STAR_SPEED - CONFIG.MIN_STAR_SPEED) + CONFIG.MIN_STAR_SPEED,
                opacity: Math.random() * (CONFIG.MAX_OPACITY - CONFIG.MIN_OPACITY) + CONFIG.MIN_OPACITY,
                twinkleSpeed: Math.random() * 0.02 + 0.01
            });
        }
        
        starsRef.current = stars;
    }, []);

    // Animation callback using useAnimationFrame
    const animate = useCallback((deltaTime: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = contextRef.current;
        if (!ctx) return;

        // Clear canvas completely - no trails
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const stars = starsRef.current;
        
        // Draw and update stars
        stars.forEach(star => {
            // Update opacity for twinkling effect
            star.opacity += star.twinkleSpeed;
            if (star.opacity > CONFIG.MAX_OPACITY || star.opacity < CONFIG.MIN_OPACITY) {
                star.twinkleSpeed = -star.twinkleSpeed;
            }

            // Draw star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();

            // Add glow effect for larger stars
            if (star.size > CONFIG.STAR_GLOW_THRESHOLD) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * CONFIG.GLOW_MULTIPLIER, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * CONFIG.GLOW_OPACITY})`;
                ctx.fill();
            }

            // Move star with deltaTime for frame-rate independence
            star.y += star.speed * (deltaTime / 16.67);
            
            // Reset star when it goes off screen
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
                star.opacity = Math.random() * (CONFIG.MAX_OPACITY - CONFIG.MIN_OPACITY) + CONFIG.MIN_OPACITY;
            }
        });
    }, []);

    // Use the animation frame hook
    useAnimationFrame(animate);

    // Handle resize
    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Reinitialize stars with new dimensions
        initStars(canvas);
    }, [initStars]);

    // Initialize canvas and start animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Set initial size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Get 2D context
        contextRef.current = canvas.getContext('2d');
        if (!contextRef.current) return;
        
        // Initialize stars
        initStars(canvas);
        
        // Add resize listener
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
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
