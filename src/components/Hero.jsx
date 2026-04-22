// src/components/Hero.jsx
import dummyVideo from '../assets/hero.mov';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={dummyVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 z-10 grid place-items-center px-6 text-center bg-linear-to-t from-black/40 via-transparent to-transparent">
        <a
          href="https://api.whatsapp.com/send/?phone=6285725539262&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base md:px-10 md:py-4 md:text-xl text-white bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors transform translate-y-20 md:translate-y-32 animate-fade-in-up shadow-lg border border-white/30"
        >
          Make a reservation
        </a>
      </div>
    </div>
  );
}