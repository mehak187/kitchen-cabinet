import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Features from './components/Features.jsx'
import Gallery from './components/Gallery.jsx'
import Process from './components/Process.jsx'
import VideoSection from './components/VideoSection.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import MobileCallBar from './components/MobileCallBar.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Gallery />
        <Process />
        <VideoSection />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCallBar />
    </>
  )
}
