const LINKS = [
  {
    platform: 'Email',
    value: 'sumitmishra9606@gmail.com',
    href: 'mailto:sumitmishra9606@gmail.com',
    id: 'connect-email',
  },
  {
    platform: 'GitHub',
    value: 'SumitMishraonGit',
    href: 'https://github.com/SumitMishraonGit',
    id: 'connect-github',
  },
  {
    platform: 'LinkedIn',
    value: 'Sumit Mishra',
    href: 'https://www.linkedin.com/in/sumit-mishra-a41508335/',
    id: 'connect-linkedin',
  },
  {
    platform: 'Twitter / X',
    value: '@SumitMishraonX',
    href: 'https://x.com/SumitMishraonX',
    id: 'connect-twitter',
  },
]

export default function Connect() {
  return (
    <div className="container">
      <span className="section-label">connect</span>
      <h2 className="section-heading reveal">let's be friends</h2>
      <p className="section-sub reveal">don't be a stranger</p>

      <div className="connect-links">
        {LINKS.map((link, i) => (
          <a
            key={link.id}
            id={link.id}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="connect-link reveal"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="connect-label-wrap">
              <span className="connect-platform">{link.platform}</span>
              <span className="connect-value">{link.value}</span>
            </div>
            <span className="connect-arrow">↗</span>
          </a>
        ))}
      </div>

      <p className="connect-note reveal">don't be shy — say hi!</p>
    </div>
  )
}
