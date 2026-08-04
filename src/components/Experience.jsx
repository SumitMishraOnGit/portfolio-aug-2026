const TIMELINE = [
  {
    num: '1',
    company: '⚡ Atomxel',
    role: 'Software Engineer Intern',
    duration: 'June 2025 – May 2026',
    location: 'Noida, India',
    bullets: [
      'Migrated legacy PHP CodeIgniter routes to Node.js/Express — accelerated Bridg e-commerce launch by 30% and integrated Google Places + Razorpay APIs across 4 order types.',
      'Slashed API response times by 95% (32s → 1.3s) by profiling queries, adding indexes, and optimizing payload serialization — killed timeouts under concurrent load.',
      'Rebuilt Orbit loyalty platform for 10K+ users: automated attendance tracking with anti-spoofing GPS verification and real-time alarm notifications.',
      'Engineered full service dispatch + billing flow from scratch — automated invoicing with online/COD payments, eliminating manual technician dispatching.',
      'Refactored 4 Play Store apps (Bridg, Orbit, JMP, S Mobility) to dynamically load branding configs from a tenant admin panel, staying under Play Store\'s strict 16KB size limits.',
      'Achieved 100% audit accuracy for travel reimbursements — built a GPS sensor-to-backend cumulative distance tracking system replacing manual travel logs.',
    ],
    badge: '🏢 startup environment',
  },
  {
    num: '2',
    company: '💳 thePaymentApp',
    role: 'Solo Builder',
    duration: 'Aug 2025',
    location: 'Digital Wallet Project',
    bullets: [
      'Engineered a secure digital wallet supporting real money transactions with Razorpay integration.',
      'Implemented three-layer defense (HMAC signing, server-side balance verification, and automated reconciliation) to eliminate payment exploits and ensure zero inconsistencies via ACID transactions.',
      'Achieved 95% mobile responsiveness with React and Tailwind CSS, reducing navigation friction by 40% using real-time balance polling.',
    ],
    badge: null,
  },
  {
    num: '3',
    company: '💸 AlTogether',
    role: 'Solo Builder',
    duration: '2025',
    location: 'Task Management Project',
    bullets: [
      'Full-stack task management system supporting 100+ concurrent CRUD ops — built with React, Node.js, Express, MongoDB aggregation pipelines, and interactive Recharts dashboard.',
      'Implemented secure JWT authentication with refresh token rotation, paginated REST API, and file upload support via Multer.',
    ],
    badge: null,
  },
]

export default function Experience() {
  return (
    <div className="container">
      <span className="section-label">experience</span>
      <h2 className="section-heading reveal">the path so far</h2>
      <p className="section-sub reveal">
        the journey ✨ ·{' '}
        <a
          href="/Sumit-Mishra-august-resume.pdf"
          download="Sumit-Mishra-august-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', color: 'var(--muted)', fontSize: '13.5px' }}
        >
          formal resume pdf ↗
        </a>
      </p>

      <div className="timeline">
        {TIMELINE.map((item, i) => (
          <div
            key={item.num}
            className="timeline-item reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="timeline-num">{item.num}</div>

            <div className="timeline-body">
              <div className="timeline-header">
                <span className="timeline-company">{item.company}</span>
                <span className="timeline-duration">{item.duration}</span>
              </div>
              <p className="timeline-role">
                {item.role} · <em>{item.location}</em>
              </p>
              <ul className="timeline-bullets">
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {item.badge && (
                <span className="timeline-badge">{item.badge}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
