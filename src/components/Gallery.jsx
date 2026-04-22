import React from 'react';
import slider1 from '../assets/slider1.JPEG';
import slider2 from '../assets/slider2.JPEG';
import slider3 from '../assets/slider3.JPEG';
import slider4 from '../assets/slider4.JPEG';
import slider5 from '../assets/slider5.JPEG';
import slider6 from '../assets/slider6.JPEG';

const Gallery = () => {
  const images = [
    { src: slider1, alt: 'Gallery Image 1' },
    { src: slider2, alt: 'Gallery Image 2' },
    { src: slider3, alt: 'Gallery Image 3' },
    { src: slider4, alt: 'Gallery Image 4' },
    { src: slider5, alt: 'Gallery Image 5' },
    { src: slider6, alt: 'Gallery Image 6' },
  ];

  return (
    <section className="bg-white py-24 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-5xl md:text-6xl font-serif text-black uppercase tracking-widest text-center">
          Gallery
        </h2>
        <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
      </div>
      
      {/* Slider Container */}
      <div 
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-8 pb-12 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[25vw] aspect-4/5 rounded-xl overflow-hidden shadow-2xl relative group cursor-grab active:cursor-grabbing"
          >
            {/* Adding a subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 pointer-events-none"></div>
            
            <img 
              src={image.src} 
              alt={image.alt}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "auto"}
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
