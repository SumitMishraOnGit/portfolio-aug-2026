import { useEffect, useRef, useState } from 'react'

const STATS = [
  { symbol: '✦', target: 1,    suffix: 'yr', label: 'production experience' },
  { symbol: '✦', target: 3,    suffix: '+',   label: 'shipped projects' },
  { symbol: '✦', target: 1,    suffix: '',    label: 'Razorpay integration' },
  { symbol: '✦', target: null, suffix: 'Delhi', label: 'based in' },
]

function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (target === null) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function StatItem({ symbol, target, suffix, label }) {
  const { count, ref } = useCountUp(target)

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-deco">{symbol}</span>
      <div>
        <span className="stat-value">
          {target === null ? suffix : `${count}${suffix}`}
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
