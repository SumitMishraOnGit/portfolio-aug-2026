const TIMELINE = [
  {
    num: '1',
    type: 'job',
    company: '⚡ Atomxel',
    role: 'Software Engineer Intern',
    duration: 'June 2025 – May 2026',
    location: 'Noida, India',
    bullets: [
      <>Migrated legacy PHP CodeIgniter routes to Node.js/Express — accelerated <a href="https://play.google.com/store/apps/details?id=com.dartmic.bridg&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="timeline-inline-link">Bridg ↗</a> e-commerce launch by 30% and integrated Google Places + Razorpay APIs across 4 order types.</>,
      'Slashed API response times by 95% (32s → 1.3s) by profiling queries, adding indexes, and optimizing payload serialization — killed timeouts under concurrent load.',
      <>Rebuilt <a href="https://play.google.com/store/apps/details?id=com.dartmic.orbitbearings&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="timeline-inline-link">Orbit ↗</a> loyalty platform for 10K+ users: automated attendance tracking with anti-spoofing GPS verification and real-time alarm notifications.</>,
      'Engineered full service dispatch + billing flow from scratch — automated invoicing with online/COD payments, eliminating manual technician dispatching.',
      'Refactored 4 Play Store apps (Bridg, Orbit, JMP, S Mobility) to dynamically load branding configs from a tenant admin panel, staying under Play Store\'s strict 16KB size limits.',
      'Achieved 100% audit accuracy for travel reimbursements — built a GPS sensor-to-backend cumulative distance tracking system replacing manual travel logs.',
    ],
    badge: '🏢 startup environment',
  },
  {
    num: '2',
    type: 'freelance',
    company: '🏨 Hotel Casual',
    role: 'Flutter Developer',
    duration: 'Aug 2026',
    location: 'Remote · Freelance',
    description:
      'A full-featured 3-role hospitality marketplace — built entirely solo from concept to code. Workers find casual banquet shifts, hotels post and manage job slots, and a super admin oversees the whole platform.',
    stack: ['Flutter', 'Firebase Auth', 'Firestore', 'Firebase RTDB', 'FCM'],
    github: 'https://github.com/SumitMishraOnGit/hotel-casual',
    bullets: [
      'Owned the entire product lifecycle — market research, UI/UX design, architecture decisions, and every line of code shipped.',
      'Engineered phone OTP auth (+91) with automatic role-based routing, KYC document upload (Aadhaar / License), and human-readable job IDs (HC-XXXX).',
      'Built real-time notifications via Firebase RTDB (new applicant, accepted, job cancelled) with FCM token management and mark-as-read support across all 3 user types.',
    ],
    badge: '📱 freelance mvp',
  },
  {
    num: '3',
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
    num: '4',
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
            className={`timeline-item reveal${item.type === 'freelance' ? ' timeline-item--freelance' : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="timeline-num">{item.num}</div>

            <div className="timeline-body">
              <div className="timeline-header">
                <span className="timeline-company">{item.company}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="timeline-ext-link">
                      github ↗
                    </a>
                  )}
                  <span className="timeline-duration">{item.duration}</span>
                </div>
              </div>
              <p className="timeline-role">
                {item.role} · <em>{item.location}</em>
              </p>
              {item.description && (
                <p className="timeline-description">{item.description}</p>
              )}
              {item.stack && (
                <div className="timeline-stack">
                  {item.stack.map((tag) => (
                    <span key={tag} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              )}
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
