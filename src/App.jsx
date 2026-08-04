import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Expertise from './components/Expertise.jsx'
import Connect from './components/Connect.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [dark, setDark] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [showResumeNav, setShowResumeNav] = useState(false)

  // Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // Scroll progress & past-hero check
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setScrollPct(Math.min(pct, 100))

      const heroEl = document.getElementById('hero')
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom
        setShowResumeNav(heroBottom < 100)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -60px 0px' }
    )
    reveals.forEach((el) => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />
      <Navbar
        dark={dark}
        setDark={setDark}
        activeSection={activeSection}
        showResumeNav={showResumeNav}
      />
      <main>
        <section id="hero"><Hero /></section>
        <Stats />
        <section id="about" className="section"><About /></section>
        <div className="section-divider" />
        <section id="experience" className="section"><Experience /></section>
        <div className="section-divider" />
        <section id="projects" className="section"><Projects /></section>
        <div className="section-divider" />
        <section id="expertise" className="section"><Expertise /></section>
        <div className="section-divider" />
        <section id="connect" className="section"><Connect /></section>
      </main>
      <Footer />
    </>
  )
}
