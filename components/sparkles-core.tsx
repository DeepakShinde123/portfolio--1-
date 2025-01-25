"use client";

import type React from "react";
import { useRef, useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";

type SparklesProps = {
  particleCount?: number;
  particleSize?: number;
  particleSpeed?: number;
  particleColor?: string;
};

export const SparklesCore: React.FC<SparklesProps> = ({
  particleCount = 50,
  particleSize = 2,
  particleSpeed = 0.5,
  particleColor = "#FFFFFF",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, height] = useWindowSize();
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    // Mouse move event to track mouse position
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener for mousemove
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update particle positions
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      // Attract particles to mouse position
      if (mousePosition.x !== null && mousePosition.y !== null) {
        particles.forEach((particle) => {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // If the particle is near the mouse, apply attraction force
          if (distance < 100) {
            particle.vx += dx * 0.01;
            particle.vy += dy * 0.01;
          }
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup logic if needed
    };
  }, [
    width,
    height,
    particleCount,
    particleSize,
    particleSpeed,
    particleColor,
    mousePosition,
  ]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
  );
};
