const PROJECTS = [
  {
    name: 'thePaymentApp',
    date: 'Aug 2025',
    desc: 'A secure digital wallet supporting real money transactions via Razorpay. Three-layer payment defense: HMAC signing, server-side balance verification, and ACID transactions to ensure zero inconsistencies. 95% mobile responsiveness.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT', 'Zod', 'Tailwind'],
    live: 'https://thepaymentapp.vercel.app/',
    github: null,
  },
  {
    name: 'AlTogether',
    date: '2025',
    desc: 'Full-stack task management system supporting 100+ concurrent CRUD operations. MongoDB aggregation pipelines power an interactive Recharts dashboard — increased productivity visibility by 60%. JWT auth with refresh token rotation, Multer file uploads, paginated REST API.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Recharts', 'Multer'],
    live: null,
    github: 'https://github.com/SumitMishraonGit',
  },
]

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <div className="container">
      <span className="section-label">projects</span>
      <h2 className="section-heading reveal">things i've shipped</h2>
      <p className="section-sub reveal">real code, real users</p>

      <div className="projects-list">
        {PROJECTS.map((proj, i) => (
          <div
            key={proj.name}
            className="project-card reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="project-header">
              <div>
                <span className="project-name">{proj.name}</span>
                <span style={{ color: 'var(--faint)', fontSize: '13px', marginLeft: '10px', fontStyle: 'italic' }}>
                  {proj.date}
                </span>
              </div>
              <div className="project-links">
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-link" id={`live-${proj.name}`}>
                    <ExternalIcon /> live ↗
                  </a>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link" id={`github-${proj.name}`}>
                    <ExternalIcon /> github ↗
                  </a>
                )}
              </div>
            </div>

            <p className="project-desc">{proj.desc}</p>

            <div className="project-stack">
              {proj.stack.map((tech) => (
                <span key={tech} className="project-pill">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
