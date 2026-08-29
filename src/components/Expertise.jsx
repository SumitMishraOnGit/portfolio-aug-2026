// Devicon class reference: https://devicon.github.io/devicon/
// icon: devicon class name | null = use symbol fallback
const SKILL_GROUPS = [
  {
    label: 'Technical',
    skills: [
      { name: 'JavaScript',             icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript',             icon: 'devicon-typescript-plain colored' },
      { name: 'React.js',               icon: 'devicon-react-original colored' },
      { name: 'Next.js',                icon: 'devicon-nextjs-plain' },
      { name: 'Node.js',                icon: 'devicon-nodejs-plain colored' },
      { name: 'Express.js',             icon: 'devicon-express-original' },
      { name: 'PHP',                    icon: 'devicon-php-plain colored' },
      { name: 'CodeIgniter',            icon: 'devicon-codeigniter-plain colored' },
      { name: 'Laravel',                icon: 'devicon-laravel-plain colored' },
      { name: 'MongoDB',                icon: 'devicon-mongodb-plain colored' },
      { name: 'MySQL',                  icon: 'devicon-mysql-plain colored' },
      { name: 'Flutter',                icon: 'devicon-flutter-plain colored' },
      { name: 'Dart',                   icon: 'devicon-dart-plain colored' },
      { name: 'Kotlin',                 icon: 'devicon-kotlin-plain colored' },
      { name: 'HTML',                   icon: 'devicon-html5-plain colored' },
      { name: 'CSS',                    icon: 'devicon-css3-plain colored' },
      { name: 'Tailwind CSS',           icon: 'devicon-tailwindcss-plain colored' },
      { name: 'Bootstrap',              icon: 'devicon-bootstrap-plain colored' },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'Git',                    icon: 'devicon-git-plain colored' },
      { name: 'GitHub',                 icon: 'devicon-github-original' },
      { name: 'Firebase',               icon: 'devicon-firebase-plain colored' },
      { name: 'Postman',                icon: 'devicon-postman-plain colored' },
      { name: 'VS Code',                icon: 'devicon-vscode-plain colored' },
      { name: 'Linux',                  icon: 'devicon-linux-plain' },
      { name: 'Razorpay',               icon: null, symbol: '₹' },
      { name: 'Google Places API',      icon: null, symbol: '📍' },
      { name: 'JWT',                    icon: null, symbol: '🔐' },
      { name: 'Recharts',               icon: null, symbol: '📊' },
      { name: 'Multer',                 icon: null, symbol: '📁' },
      { name: 'bcryptjs',               icon: null, symbol: '🔑' },
    ],
  },
  {
    label: 'Concepts',
    skills: [
      { name: 'ACID Transactions',      icon: null, symbol: '⬡' },
      { name: 'RESTful API Design',     icon: null, symbol: '⬡' },
      { name: 'JWT Auth + Refresh',     icon: null, symbol: '⬡' },
      { name: 'Payment Integration',    icon: null, symbol: '⬡' },
      { name: 'API Versioning',         icon: null, symbol: '⬡' },
      { name: 'MongoDB Aggregation',    icon: null, symbol: '⬡' },
      { name: 'Pagination & Filtering', icon: null, symbol: '⬡' },
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
                <li key={skill.name} className="skill-chip">
                  {skill.icon ? (
                    <i className={`${skill.icon} skill-icon`} aria-hidden="true" />
                  ) : (
                    <span className="skill-symbol" aria-hidden="true">{skill.symbol}</span>
                  )}
                  <span className="skill-name">{skill.name}</span>
                </li>
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
