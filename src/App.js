import React from 'react'
import { HeroSection } from './components/hero-section'
import { AboutSection } from './components/about-section'


import { TopBar } from './components/TopBar'
import { ImportExportSection } from './components/import-export-section'
import { GlobalReachSection } from './components/global-reach-section'
import { ContactSection } from './components/contact-section'
import { Navigation } from './components/navigation'
import { ServicesSection } from './components/services-section'
import { Footer } from './components/footer'
import './App.css'

const App = () => {
  return (
    <div
    >
      <TopBar />
      <Navigation />
      <HeroSection />
      <ImportExportSection />
      <AboutSection />
      <GlobalReachSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
