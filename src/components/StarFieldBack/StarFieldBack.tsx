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

const StarFieldBack = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    // Initialize stars
    const initStars = useCallback((canvas: HTMLCanvasElement, numStars: number = 200) => {
        const stars: Star[] = [];
        
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speed: Math.random() * 0.5 + 0.1,
                opacity: Math.random() * 0.8 + 0.2,
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

        // Clear canvas with slight fade effect for trails
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const stars = starsRef.current;
        
        // Draw and update stars
        stars.forEach(star => {
            // Update opacity for twinkling effect
            star.opacity += star.twinkleSpeed;
            if (star.opacity > 1 || star.opacity < 0.2) {
                star.twinkleSpeed = -star.twinkleSpeed;
            }

            // Draw star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();

            // Add glow effect for larger stars
            if (star.size > 1.5) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.3})`;
                ctx.fill();
            }

            // Move star (parallax effect)
            star.y += star.speed;
            
            // Reset star when it goes off screen
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
                star.opacity = Math.random() * 0.8 + 0.2;
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
        <canvas 
            ref={canvasRef} 
            className="starfield-canvas"
            aria-hidden="true"
        />
    );
};

export default StarFieldBack;
