const SKILL_GROUPS = [
  {
    label: 'Technical',
    skills: [
      'JavaScript', 'TypeScript', 'React.js', 'Next.js',
      'Node.js', 'Express.js', 'PHP (CodeIgniter, Laravel)',
      'MongoDB', 'MySQL', 'Flutter', 'Dart', 'Kotlin',
      'HTML & CSS',
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      'Git & GitHub', 'JWT', 'Razorpay',
      'Google Places API', 'Postman', 'VS Code',
      'Multer', 'bcryptjs', 'Recharts',
      'Tailwind CSS', 'Bootstrap', 'Linux basics',
    ],
  },
  {
    label: 'Concepts',
    skills: [
      'ACID Transactions', 'API Versioning',
      'Payment Integration', 'Cryptographic Verification',
      'RESTful API Design', 'JWT Auth + Refresh Tokens',
      'MongoDB Aggregation', 'Pagination & Filtering',
    ],
  },
]

export default function Expertise() {
  return (
    <div className="container">
      <span className="section-label">expertise</span>
      <h2 className="section-heading reveal">what i work with</h2>
      <p className="section-sub reveal">always learning more</p>

      <div className="skills-grid reveal">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <span className="skill-group-label">{group.label}</span>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Honest gaps */}
      <div className="skill-gaps reveal">
        <span className="skill-gaps-label">currently levelling up</span>
        <span className="skill-gaps-text">
          Laravel (going deeper) · TypeScript patterns · system design
        </span>
      </div>

      {/* Quote */}
      <div className="quote-block reveal">
        <p className="quote-text">
          "coding ideas into reality, byte by byte — sumit"
        </p>
      </div>
    </div>
  )
}
