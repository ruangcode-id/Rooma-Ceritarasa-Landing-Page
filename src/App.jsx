import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-bg-dark font-sans selection:bg-primary selection:text-white">
      {/* 
        This is the main application container. 
        Navigation bar can be added above the Hero component in the future.
      */}
      <main>
        <Hero />
        {/* Additional sections like About, Menu, Testimonials can go here. */}
      </main>
      
      <Footer />
    </div>
  )
}

export default App
