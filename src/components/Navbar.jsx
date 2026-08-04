const NAV_LINKS = [
  { href: '#hero',       label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#projects',   label: 'projects' },
  { href: '#connect',    label: 'connect' },
]

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2" x2="12" y2="6"/>
      <line x1="12" y1="18" x2="12" y2="22"/>
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
      <line x1="2" y1="12" x2="6" y2="12"/>
      <line x1="18" y1="12" x2="22" y2="12"/>
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar({ dark, setDark, activeSection, showResumeNav }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#hero" className="nav-logo">sumit.</a>

          {/* Desktop nav links */}
          <div className="nav-right nav-links-desktop">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            {showResumeNav && (
              <a
                href="/Sumit-Mishra-august-resume.pdf"
                download="Sumit-Mishra-august-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-resume-link"
              >
                cv ↗
              </a>
            )}
            <div className="nav-sep" />
            <button
              className="theme-btn"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile top-right: CV link + theme toggle */}
          <div className="mobile-topbar-right">
            <a
              href="/Sumit-Mishra-august-resume.pdf"
              download="Sumit-Mishra-august-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-link"
              style={{ fontSize: '13px', padding: '5px 10px' }}
            >
              cv ↗
            </a>
            <button
              className="theme-btn"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <div className="mobile-nav">
        <div className="mobile-nav-inner">
          {NAV_LINKS.map((link, i) => (
            <>
              {i > 0 && <div key={`msep-${i}`} className="nav-sep" />}
              <a key={link.href} href={link.href}>{link.label}</a>
            </>
          ))}
        </div>
      </div>
    </>
  )
}
