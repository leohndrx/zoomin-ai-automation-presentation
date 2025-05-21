"use client";

import React, { useEffect, useRef } from 'react';

interface ContinuousBackgroundProps {
  className?: string;
}

const ContinuousBackground: React.FC<ContinuousBackgroundProps> = ({ 
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size to match window
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Fixed colors - using direct hex colors to avoid HSL color shifts
    // const ORANGE_PRIMARY = '#FF6600'; // Exact hex color
    // const ORANGE_DARKER = '#CC5200'; // Darker version for gradients
    // const BEIGE_COLOR = '#FFF5E6';   // Light beige for middle slides
    
    // HSL values for particles (we'll still use HSL for particles and waves)
    const orangeHSL = {
      h: 24,   // Orange hue
      s: 100,  // Full saturation
      l: 50    // Medium lightness
    };
    
    // const beigeHSL = {
    //   h: 36,   // Warm beige hue
    //   s: 30,   // Low saturation
    //   l: 94    // High lightness (very light)
    // };
    
    // Particles configuration
    const particles: Particle[] = [];
    const particleCount = 70;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.15 + 0.05
      });
    }
    
    // Track current scroll position to adjust background
    let currentSlide = 0;
    let totalSlides = 0;
    let transitionProgress = 0; // For smooth transitions
    
    const updateScrollPosition = () => {
      const scrollContainer = document.getElementById('slide-container');
      if (scrollContainer) {
        const slides = Array.from(scrollContainer.children).filter(
          el => el.tagName === 'SECTION'
        );
        totalSlides = slides.length;
        
        // Calculate which slide we're on and the exact scroll position
        const scrollY = scrollContainer.scrollTop;
        const windowHeight = window.innerHeight;
        const exactScrollPosition = scrollY / windowHeight; // This will be a floating point number
        
        // Get the integer slide number and the fractional part for transitions
        currentSlide = Math.floor(exactScrollPosition);
        const fractionalPart = exactScrollPosition - currentSlide;
        
        // Calculate transition progress (0-1) for first slide transition
        if (currentSlide === 0) {
          // When on first slide, transition out as we scroll down
          transitionProgress = fractionalPart;
        } else if (currentSlide === totalSlides - 2) {
          // When on second-to-last slide, transition in as we approach the last slide
          transitionProgress = fractionalPart;
        } else if (currentSlide === totalSlides - 1) {
          // When on last slide, background is fully transitioned in
          transitionProgress = 1;
        } else {
          // For all other slides, keep transition out
          transitionProgress = 0;
        }
      }
    };
    
    // Add scroll listener
    window.addEventListener('scroll', updateScrollPosition, true);
    document.addEventListener('wheel', updateScrollPosition, { passive: true });
    updateScrollPosition();
    
    // Animation timestamp for wave animation
    const startTime = Date.now();
    
    // Animation frame
    let animationId: number;
    
    const render = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000;
      
      // Calculate if we're on first or last slide
      const isFirstSlide = currentSlide === 0 && transitionProgress < 1;
      const isLastSlide = currentSlide === totalSlides - 1 || 
                          (currentSlide === totalSlides - 2 && transitionProgress > 0);
      
      // Calculate transition factor
      let orangeFactor = 0;
      
      if (isFirstSlide) {
        // Fade out the orange background when leaving first slide
        orangeFactor = 1 - transitionProgress;
      } else if (isLastSlide) {
        // Fade in the orange background when approaching last slide
        orangeFactor = currentSlide === totalSlides - 1 ? 1 : transitionProgress;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Create a transition between colors
      const r1 = 255, g1 = 102, b1 = 0; // Orange
      const r2 = 255, g2 = 245, b2 = 230; // Beige
      
      // Transition between colors
      const r = Math.round(r2 + (r1 - r2) * orangeFactor);
      const g = Math.round(g2 + (g1 - g2) * orangeFactor);
      const b = Math.round(b2 + (b1 - b2) * orangeFactor);
      
      // Fill with blended background color
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(0, 0, width, height);
      
      // Draw subtle glow
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.8;
      
      const glowGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      );
      
      if (orangeFactor > 0.5) {
        // Subtle darker glow in the corners for orange slides
        glowGradient.addColorStop(0, `rgba(204, 82, 0, ${(orangeFactor - 0.5) * 2 * 0})`); // Transparent center
        glowGradient.addColorStop(0.7, `rgba(153, 61, 0, ${(orangeFactor - 0.5) * 2 * 0.2})`); // Edges
      } else {
        // Subtle warm glow for beige slides
        glowGradient.addColorStop(0, 'rgba(255, 153, 102, 0)'); // Transparent center
        glowGradient.addColorStop(0.8, `rgba(255, 204, 153, ${(1 - orangeFactor * 2) * 0.1})`); // Edges
      }
      
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0.05)');
      
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, width, height);
      
      // Draw particles
      for (const particle of particles) {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        
        // Draw particle with transitioning color
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        if (orangeFactor > 0.5) {
          // White particles for orange backgrounds
          const whiteOpacity = particle.opacity * 1.5 * ((orangeFactor - 0.5) * 2);
          const orangeOpacity = particle.opacity * 1.2 * (1 - ((orangeFactor - 0.5) * 2));
          ctx.fillStyle = `rgba(255, 255, 255, ${whiteOpacity + orangeOpacity})`;
        } else {
          // Orange-tinted particles for beige backgrounds
          ctx.fillStyle = `hsla(${orangeHSL.h}, ${orangeHSL.s * 0.5}%, 70%, ${particle.opacity * 1.2})`;
        }
        
        ctx.fill();
      }
      
      // Add subtle waves - use consistent wave motion based on elapsed time
      ctx.beginPath();
      ctx.moveTo(0, height * 0.8 + Math.sin(elapsed * 0.5) * 40);
      
      for (let x = 0; x < width; x += 20) {
        const y = height * 0.8 + 
                 Math.sin(elapsed * 0.5 + x * 0.003) * 25 +
                 Math.sin(elapsed + x * 0.005) * 15;
        
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      
      if (orangeFactor > 0.5) {
        // More prominent white waves for orange backgrounds
        ctx.fillStyle = `rgba(255, 255, 255, ${0.15 * ((orangeFactor - 0.5) * 2)})`;
      } else {
        // More visible orange waves on beige backgrounds
        ctx.fillStyle = `rgba(255, 153, 102, ${0.1 * (1 - orangeFactor * 2)})`;
      }
      
      ctx.fill();
      
      animationId = requestAnimationFrame(render);
    };
    
    render();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('scroll', updateScrollPosition);
      document.removeEventListener('wheel', updateScrollPosition);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none ${className}`}
      style={{ position: 'fixed', zIndex: -1 }}
    />
  );
};

// Particle type for TypeScript
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default ContinuousBackground; 