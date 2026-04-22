// src/components/Gallery.jsx
import { useRef, useEffect, useCallback } from 'react';
import logo from '../assets/logo_no_background.png';
import slider1 from '../assets/slider1.webp';
import slider2 from '../assets/slider2.webp';
import slider3 from '../assets/slider3.webp';
import slider4 from '../assets/slider4.webp';
import slider5 from '../assets/slider5.webp';
import slider6 from '../assets/slider6.webp';

export default function Gallery() {
  const images = [
    { src: slider1, alt: 'Gallery Image 1' },
    { src: slider2, alt: 'Gallery Image 2' },
    { src: slider3, alt: 'Gallery Image 3' },
    { src: slider4, alt: 'Gallery Image 4' },
    { src: slider5, alt: 'Gallery Image 5' },
    { src: slider6, alt: 'Gallery Image 6' },
  ];

  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);

  const updateParallax = useCallback(() => {
    if (!scrollRef.current) return;
    const centerPoint = window.innerWidth / 2;

    cardRefs.current.forEach((card) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distanceFromCenter = cardCenter - centerPoint;
      const translateX = distanceFromCenter * -0.15;
      card.style.setProperty('--px', `${translateX}px`);
    });
  }, []);

  const handleScroll = () => {
    requestAnimationFrame(updateParallax);
  };

  useEffect(() => {
    updateParallax();
    window.addEventListener('resize', updateParallax);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (sectionRef.current) {
      const revealElements = sectionRef.current.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }

    return () => {
      window.removeEventListener('resize', updateParallax);
      observer.disconnect();
    };
  }, [updateParallax]);

  return (
    <section ref={sectionRef} className="bg-white py-24 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 reveal">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Rooma"
            className="h-10 sm:h-12 w-auto object-contain"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
      
      <div 
        ref={(node) => {
          scrollRef.current = node;
          if (node) node.classList.add('reveal');
        }}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-8 pb-12 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mask-edge-fading"
        style={{ scrollBehavior: 'smooth', transitionDelay: '300ms' }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{ '--px': '0px' }}
            className="snap-center shrink-0 w-[90vw] sm:w-[65vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] aspect-4/5 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-shadow duration-500 relative group cursor-grab active:cursor-grabbing"
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 pointer-events-none"></div>
            
            <div className="w-full h-full translate-x-(--px) will-change-transform">
              <img 
                src={image.src} 
                alt={image.alt}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className="w-full h-full object-cover object-center scale-[1.2] transition-transform duration-700 group-hover:scale-[1.25]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}