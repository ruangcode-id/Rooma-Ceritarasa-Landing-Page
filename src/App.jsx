import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full relative bg-bg-dark font-sans selection:bg-primary selection:text-white">
      {/* 
        This is the main application container. 
        Navigation bar can be added above the Hero component in the future.
      */}
      <main>
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <Hero />
        </div>
        {/* Additional sections like About, Menu, Testimonials can go here. */}
      </main>
      
      <div className="relative z-10 mt-[100vh]">
        {/* Soft top gradient transition with non-linear easing to prevent 'hard line' perception */}
        <div 
          className="absolute bottom-full left-0 w-full h-64 pointer-events-none" 
          style={{ background: 'linear-gradient(to top, rgba(252,251,249,1) 0%, rgba(252,251,249,0.85) 15%, rgba(252,251,249,0.65) 35%, rgba(252,251,249,0.45) 55%, rgba(252,251,249,0.25) 75%, rgba(252,251,249,0.1) 88%, rgba(252,251,249,0) 100%)' }}
        />
        <Footer />
      </div>
    </div>
  )
}

export default App
