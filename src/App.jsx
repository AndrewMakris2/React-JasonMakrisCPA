import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  // Read initial theme from localStorage (index.html already applies it to <html>
  // to avoid flash — here we just sync React state with that value)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('dm-theme') || 'light'
  })

  // Whenever theme changes, update the <html> attribute and persist it
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('dm-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
