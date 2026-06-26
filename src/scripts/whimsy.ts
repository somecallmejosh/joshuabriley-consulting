/* ─────────────────────────────────────────────────────────────────────────
   Whimsy — the sneakers worn with the suit. Two deliberate flourishes:

   1. Magnetic elements (.js-magnetic) lean toward the cursor with a soft spring
      and squish on press. Used in exactly two places (hero CTA + JB monogram),
      never sprayed across the page — the site removed hover-lifts everywhere
      else on purpose, so this stays a signature, not a default.
   2. A blurred-tab wink: the title nods at you when you look away.

   Transform/opacity only. Magnetism is gated to fine pointers and bows out
   entirely under prefers-reduced-motion.
   ───────────────────────────────────────────────────────────────────────── */

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const finePointer = window.matchMedia('(pointer: fine)').matches

const clamp = (v: number, max: number) => Math.max(-max, Math.min(max, v))

// ── Magnetic CTAs ──────────────────────────────────────────────────────────
if (!reduce && finePointer) {
  const STRENGTH = 0.32 // how hard the element leans toward the cursor
  const MAX = 10 // px clamp so it never visibly detaches from its slot

  document.querySelectorAll<HTMLElement>('.js-magnetic').forEach((el) => {
    // First icon (the trailing arrow on a CTA) drifts at half strength for a
    // touch of internal parallax. Null for the icon-less monogram tile.
    const icon = el.querySelector<HTMLElement>('iconify-icon, svg')
    let mx = 0
    let my = 0
    let pressed = false

    el.style.willChange = 'transform'
    el.style.transition = 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)'

    const render = () => {
      el.style.transform = `translate(${mx}px, ${my}px) scale(${pressed ? 0.96 : 1})`
      if (icon) icon.style.transform = `translate(${mx * 0.5}px, ${my * 0.5}px)`
    }

    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect()
      mx = clamp((e.clientX - (r.left + r.width / 2)) * STRENGTH, MAX)
      my = clamp((e.clientY - (r.top + r.height / 2)) * STRENGTH, MAX)
      render()
    })

    const release = () => {
      mx = 0
      my = 0
      pressed = false
      el.style.transform = ''
      if (icon) icon.style.transform = ''
    }

    el.addEventListener('pointerleave', release)
    el.addEventListener('pointerdown', () => {
      pressed = true
      render()
    })
    window.addEventListener('pointerup', () => {
      if (!pressed) return
      pressed = false
      render()
    })
  })
}

// ── Blurred-tab wink ─────────────────────────────────────────────────────────
// The site speaks in "drift" — pages that "drifted out of the system." When you
// look away, the tab leans into the joke, then snaps back when you return.
const restingTitle = document.title
document.addEventListener('visibilitychange', () => {
  document.title = document.hidden ? '🫈 You left!' : restingTitle
})
