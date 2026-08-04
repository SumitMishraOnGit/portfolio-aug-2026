import { useEffect, useState } from 'react'
import profileImg from '../assets/profile.jpg'

const NAME = 'sumit mishra'

function LetterSpan({ char }) {
  if (char === ' ') return <span className="word">&nbsp;</span>
  return <span className="letter">{char}</span>
}

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const opts = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }
      setTime(new Intl.DateTimeFormat('en-IN', opts).format(now))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="container">
      <div className="hero-content">
        {/* ── Text side ── */}
        <div className="hero-text">
          {/* Greeting */}
          <div className="hero-greeting">
            hello, i'm 👋
          </div>

          {/* Name */}
          <h1 className="hero-name">
            {NAME.split('').map((ch, i) =>
              ch === ' '
                ? <span key={i} className="word"> </span>
                : <span key={i} className="letter">{ch}</span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Software Engineer focused on building real-world systems. Shipping production code across Web, Mobile & Backend — adapting tools and tech stacks to solve the problem at hand.
          </p>

          {/* Location + live clock */}
          <div className="hero-meta">
            <span>📍 delhi, india</span>
            <span className="hero-meta-dot">·</span>
            <span id="clock">{time} IST</span>
          </div>

          {/* CTAs */}
          <div className="hero-cta">
            <a href="mailto:sumitmishra9606@gmail.com" className="btn-primary" id="cta-hello">
              say hello 👋
            </a>
            <a
              href="/Sumit-Mishra-august-resume.pdf"
              download="Sumit-Mishra-august-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="cta-resume"
            >
              resume ↗
            </a>
            <span className="cta-note">i actually reply</span>
          </div>

          {/* Stack pills */}
          <div className="stack-row">
            {['JS', 'React', 'Node.js', 'MongoDB', 'PHP', 'JWT', 'Razorpay'].map((tech) => (
              <span key={tech} className="stack-pill">{tech}</span>
            ))}
          </div>
        </div>

        {/* ── Photo side ── */}
        <div className="hero-photo-wrap">
          <span className="photo-deco" aria-hidden="true">✦</span>
          <span className="photo-deco" aria-hidden="true">✦</span>
          <span className="photo-deco" aria-hidden="true">✦</span>
          <img
            src={profileImg}
            alt="Sumit Mishra"
            className="hero-photo"
            loading="eager"
          />
        </div>
      </div>
    </div>
  )
}
