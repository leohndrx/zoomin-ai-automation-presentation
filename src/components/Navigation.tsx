"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface SlideData {
  id: string;
  title: string;
}

interface NavigationProps {
  slides: SlideData[];
}

const Navigation: React.FC<NavigationProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length && !scrolling) {
      setScrolling(true);
      setCurrentSlideIndex(index);
      
      const element = document.getElementById(slides[index].id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Release scrolling lock after animation completes
        setTimeout(() => {
          setScrolling(false);
        }, 800);
      } else {
        setScrolling(false);
      }
    }
  }, [slides, scrolling]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      goToSlide(currentSlideIndex + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      goToSlide(currentSlideIndex - 1);
    }
  }, [goToSlide, currentSlideIndex]);

  const handleWheel = useCallback((e: WheelEvent) => {
    // Prevent default scrolling behavior
    e.preventDefault();
    
    if (scrolling) return;
    
    // Only trigger after a significant scroll
    if (Math.abs(e.deltaY) > 30) {
      if (e.deltaY > 0) {
        goToSlide(currentSlideIndex + 1);
      } else {
        goToSlide(currentSlideIndex - 1);
      }
    }
  }, [goToSlide, currentSlideIndex, scrolling]);

  // Set up intersection observer to detect which slide is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7, // 70% of the element needs to be visible
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !scrolling) {
          const id = entry.target.id;
          const index = slides.findIndex(slide => slide.id === id);
          if (index !== -1 && index !== currentSlideIndex) {
            setCurrentSlideIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    // Observe all slides
    slides.forEach(slide => {
      const element = document.getElementById(slide.id);
      if (element) observer.observe(element);
    });

    // Add wheel event listener to the main container
    const container = document.querySelector('.slide-container');
    if (container) {
      container.addEventListener('wheel', handleWheel as EventListener, { passive: false });
    }

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      slides.forEach(slide => {
        const element = document.getElementById(slide.id);
        if (element) observer.unobserve(element);
      });
      
      if (container) {
        container.removeEventListener('wheel', handleWheel as EventListener);
      }
      
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [slides, currentSlideIndex, scrolling, handleKeyDown, handleWheel]);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex gap-4">
      <div className="fixed top-8 right-8 text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
        Slide {currentSlideIndex + 1}/{slides.length}
      </div>
      <button
        onClick={() => goToSlide(currentSlideIndex - 1)}
        disabled={currentSlideIndex === 0 || scrolling}
        className="p-3 rounded-full bg-orange-600 text-white disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
        aria-label="Vorige slide"
      >
        <IoChevronBack size={24} />
      </button>
      <button
        onClick={() => goToSlide(currentSlideIndex + 1)}
        disabled={currentSlideIndex === slides.length - 1 || scrolling}
        className="p-3 rounded-full bg-orange-600 text-white disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
        aria-label="Volgende slide"
      >
        <IoChevronForward size={24} />
      </button>
    </div>
  );
};

export default Navigation; 