import React from 'react';
import dummyVideo from '../assets/dummy_video.mp4';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 brightness-50 transform scale-105 transition-transform duration-1000">
        <video
          className="w-full h-full object-cover"
          src={dummyVideo}
          autoPlay
          muted
          playsInline
          onTimeUpdate={(e) => {
            if (e.target.currentTime >= 6) {
              e.target.currentTime = 0;
            }
          }}
        />
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.8)_120%)] pointer-events-none" />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 drop-shadow-lg">
          Rooma
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-primary/50">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
