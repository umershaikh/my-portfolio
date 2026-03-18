import { useEffect, useState } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { tsParticles } from '@tsparticles/engine'

export function ParticleBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    loadSlim(tsParticles).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return (
    // This wrapper is critical: position:absolute means it takes ZERO space in normal layout flow
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <Particles
        id="tsparticles"
        style={{ width: '100%', height: '100%' }}
        options={{
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            number: {
              value: 55,
              density: { enable: true },
            },
            color: { value: ['#06b6d4', '#a855f7', '#ec4899'] },
            shape: { type: 'circle' },
            opacity: {
              value: { min: 0.08, max: 0.35 },
              animation: {
                enable: true,
                speed: 0.8,
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 2.5 },
              animation: {
                enable: true,
                speed: 2,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: '#06b6d4',
              opacity: 0.07,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}
