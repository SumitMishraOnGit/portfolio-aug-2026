const CARDS = [
  {
    emoji: '💼',
    label: 'EXPERIENCE',
    title: 'Software Engineer @ Atomxel',
    body: 'June 2025 – May 2026. Refactored 4 production apps, built payment systems, and optimized database queries — shipping production features at scale.',
    note: '* 1 year production experience',
    span2: true,
  },
  {
    emoji: '📍',
    label: 'BASED IN',
    title: 'Delhi, India',
    body: 'Remote-friendly. Open to relocation.',
    note: '* IST timezone',
    span2: false,
  },
  {
    emoji: '🎓',
    label: 'EDUCATION',
    title: 'BCA @ IGNOU',
    body: 'Dec 2027 graduate — building real applications alongside degree coursework.',
    note: '* self-taught first',
    span2: false,
  },
  {
    emoji: '🧠',
    label: 'WHAT DRIVES ME',
    title: 'Clean UX, Robust Backends & Real Users',
    body: 'Passionate about building scalable web solutions that real users rely on — from zero-latency REST APIs to secure digital payment flows.',
    note: '* the real stuff',
    span2: true,
  },
]

export default function About() {
  return (
    <div className="container">
      <span className="section-label">about</span>
      <h2 className="section-heading reveal">the short version</h2>
      <p className="section-sub reveal">psst — keep reading</p>

      <div className="about-cards">
        {CARDS.map((card, i) => (
          <div
            key={card.label}
            className={`about-card ${card.span2 ? 'span-2' : ''} reveal`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="about-card-emoji">{card.emoji}</div>
            <div className="about-card-label">{card.label}</div>
            <div className="about-card-title">{card.title}</div>
            <p className="about-card-body">{card.body}</p>
            <p className="about-card-note">{card.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
