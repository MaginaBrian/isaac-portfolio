import { useEffect, useRef } from 'react'

/**
 * Attaches IntersectionObserver to a container ref.
 * Adds 'is-visible' to every .reveal child when it enters the viewport.
 *
 * @param {Object}  options
 * @param {number}  options.threshold  - 0–1 ratio to trigger (default 0.12)
 * @param {string}  options.rootMargin - rootMargin string (default '0px')
 * @param {boolean} options.once       - Unobserve after first reveal (default true)
 */
export default function useScrollReveal({
  threshold  = 0.12,
  rootMargin = '0px',
  once       = true,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold, rootMargin }
    )

    const targets = el.classList.contains('reveal')
      ? [el]
      : Array.from(el.querySelectorAll('.reveal'))

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}