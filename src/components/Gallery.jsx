// src/components/Gallery.jsx
import { useRef, useEffect, useCallback } from 'react';

// --- Assets ---
import logo from '../assets/logo_no_background.png';
import slider1 from '../assets/slider1.webp';
import slider2 from '../assets/slider2.webp';
import slider3 from '../assets/slider3.webp';
import slider4 from '../assets/slider4.webp';
import slider5 from '../assets/slider5.webp';
import slider6 from '../assets/slider6.webp';

// --- Configuration ---
const CONFIG = {
  parallax: { factor: -0.15 },
  observer: { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  reveal: { delayMs: 300 },
};

// Toggle this when there is a new event.
// When enabled, images are auto-loaded from src/assets with filename pattern: event*.*
const SHOW_SPECIAL_COLLABORATION = false;

const GALLERY_IMAGES = [
  { src: slider1, alt: 'Gallery Image 1' },
  { src: slider2, alt: 'Gallery Image 2' },
  { src: slider3, alt: 'Gallery Image 3' },
  { src: slider4, alt: 'Gallery Image 4' },
  { src: slider5, alt: 'Gallery Image 5' },
  { src: slider6, alt: 'Gallery Image 6' },
];

const COLLAB_IMAGE_MODULES = import.meta.glob('../assets/event*.*', {
  eager: true,
  import: 'default',
});

const COLLAB_IMAGES = Object.entries(COLLAB_IMAGE_MODULES)
  .sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' })
  )
  .map(([, src], index) => ({
    src,
    alt: `Special Collaboration ${index + 1}`,
  }));

// --- Custom Hooks ---
const useRevealOnScroll = (sectionRef) => {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      }),
      CONFIG.observer
    );

    section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionRef]);
};

const useParallaxScroll = (scrollRef, cardRefs) => {
  const updateParallax = useCallback(() => {
    if (!scrollRef.current) return;
    const center = window.innerWidth / 2;

    cardRefs.current.forEach((card) => {
      if (!card) return;
      const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
      card.style.setProperty('--px', `${(cardCenter - center) * CONFIG.parallax.factor}px`);
    });
  }, [scrollRef, cardRefs]);

  useEffect(() => {
    updateParallax();
    window.addEventListener('resize', updateParallax);
    return () => window.removeEventListener('resize', updateParallax);
  }, [updateParallax]);

  return useCallback(() => requestAnimationFrame(updateParallax), [updateParallax]);
};

// --- Sub-Component ---
const GalleryCard = ({ src, alt, isPriority, cardRef, fit = 'cover' }) => (
  <div
    ref={cardRef}
    style={{ '--px': '0px' }}
    className="snap-center shrink-0 w-[90vw] sm:w-[65vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] aspect-4/5 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-shadow duration-500 relative group cursor-grab active:cursor-grabbing"
  >
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 pointer-events-none" />
    <div className="w-full h-full translate-x-(--px) will-change-transform">
      <img
        src={src}
        alt={alt}
        decoding="async"
        fetchPriority={isPriority ? 'high' : 'auto'}
        className={
          fit === 'contain'
            ? 'w-full h-full object-contain object-center'
            : 'w-full h-full object-cover object-center scale-[1.2] transition-transform duration-700 group-hover:scale-[1.25]'
        }
      />
    </div>
  </div>
);

// --- Main Component ---
export default function Gallery() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);

  const collabScrollRef = useRef(null);
  const collabCardRefs = useRef([]);

  useRevealOnScroll(sectionRef);
  const handleScroll = useParallaxScroll(scrollRef, cardRefs);
  const handleCollabScroll = useParallaxScroll(collabScrollRef, collabCardRefs);

  return (
    <section ref={sectionRef} className="bg-white py-24 relative w-full overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 reveal">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Rooma"
            className="h-24 sm:h-28 md:h-32 w-auto object-contain"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="reveal flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-8 pb-12 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mask-edge-fading"
        style={{ scrollBehavior: 'smooth', transitionDelay: `${CONFIG.reveal.delayMs}ms` }}
      >
        {GALLERY_IMAGES.map(({ src, alt }, index) => (
          <GalleryCard
            key={index}
            src={src}
            alt={alt}
            isPriority={index === 0}
            cardRef={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>

      {/* Footer */}
      <p className="px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
        slide photos
      </p>

      {SHOW_SPECIAL_COLLABORATION && COLLAB_IMAGES.length > 0 ? (
        <>
          <div
            className="px-4 sm:px-6 lg:px-8 mt-8 reveal"
            style={{ transitionDelay: `${CONFIG.reveal.delayMs}ms` }}
          >
            <h3 className="text-lg font-semibold text-gray-900 text-center">Special Collaboration</h3>
          </div>

          <div
            ref={collabScrollRef}
            onScroll={handleCollabScroll}
            className="reveal flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-8 pb-12 pt-6 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mask-edge-fading"
            style={{ scrollBehavior: 'smooth', transitionDelay: `${CONFIG.reveal.delayMs}ms` }}
          >
            {COLLAB_IMAGES.map(({ src, alt }, index) => (
              <GalleryCard
                key={index}
                src={src}
                alt={alt}
                isPriority={false}
                fit="contain"
                cardRef={(el) => (collabCardRefs.current[index] = el)}
              />
            ))}
          </div>

          <p className="px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
            slide photos
          </p>
        </>
      ) : null}
    </section>
  );
}
