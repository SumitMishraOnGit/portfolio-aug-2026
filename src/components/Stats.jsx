import { useEffect, useRef, useState } from 'react'

const STATS = [
  { symbol: '✦', target: 1,       suffix: 'yr', label: 'production experience' },
  { symbol: '✦', target: 3,       suffix: '+',  label: 'shipped projects' },
  { symbol: '✦', target: 4,       suffix: '',   label: 'production apps refactored' },
  { symbol: '✦', textTarget: 'Delhi',           label: 'based in' },
]

function useStatAnimation(target, textTarget, duration = 1200) {
  const [displayValue, setDisplayValue] = useState(textTarget ? '' : 0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()

          if (textTarget) {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            const step = (now) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              const revealedLength = Math.floor(progress * textTarget.length)

              let scrambled = textTarget.slice(0, revealedLength)
              for (let i = revealedLength; i < textTarget.length; i++) {
                if (textTarget[i] === ' ') {
                  scrambled += ' '
                } else {
                  scrambled += chars[Math.floor(Math.random() * chars.length)]
                }
              }
              setDisplayValue(scrambled)
              if (progress < 1) requestAnimationFrame(step)
              else setDisplayValue(textTarget)
            }
            requestAnimationFrame(step)
          } else {
            const step = (now) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplayValue(Math.round(eased * target))
              if (progress < 1) requestAnimationFrame(step)
              else setDisplayValue(target)
            }
            requestAnimationFrame(step)
          }
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, textTarget, duration])

  return { displayValue, ref }
}

function StatItem({ symbol, target, textTarget, suffix = '', label }) {
  const { displayValue, ref } = useStatAnimation(target, textTarget)

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-deco">{symbol}</span>
      <div>
        <span className="stat-value">
          {textTarget ? displayValue : `${displayValue}${suffix}`}
        </span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="stats-strip">
      <div className="container">
        <div className="stats-inner">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </div>
  )
}
