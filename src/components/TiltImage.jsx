import { useRef, useState } from 'react'

const BASE = { x: 4, y: -12 } // default angle, so it looks 3D even without hovering

export default function TiltImage({ src, alt, width, height }) {
  const ref = useRef(null)
  const [rot, setRot] = useState(BASE)
  const [active, setActive] = useState(false)

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setRot({ x: -py * 16, y: px * 20 })
  }

  const handleLeave = () => {
    setActive(false)
    setRot(BASE)
  }

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="animate-float relative w-full max-w-sm"
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: active ? 'transform 0.1s ease-out' : 'transform 0.6s ease',
        }}
      >
               {/* Soft glow behind the photo (no hard line) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl bg-accent/40 blur-2xl"
          style={{ transform: 'translateZ(-60px) scale(0.95)' }}
        />
        {/* Main photo */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          fetchPriority="high"
          className="relative w-full rounded-3xl object-cover shadow-2xl"
          style={{ transform: 'translateZ(0)' }}
        />

        {/* Floating badge (sits in front of the photo) */}
        <div
          className="absolute -bottom-4 -left-4 rounded-xl bg-bg px-5 py-3 shadow-xl"
          style={{ transform: 'translateZ(70px)' }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-secondary">HomeCraft</p>
          <p className="font-heading text-lg font-bold text-primary">Design Ideas</p>
        </div>
      </div>
    </div>
  )
}