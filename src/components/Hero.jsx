import React from 'react';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center brightness-50 transform scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
          Lorem <span className="text-primary">Ipsum</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl font-light mb-8 opacity-90 drop-shadow-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-primary/50">
            Reservasi
          </button>
        </div>
      </div>

      {/* Decorative Bottom Gradient element */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#fcfbf9] to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default Hero;
