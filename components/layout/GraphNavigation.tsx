'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    THREE: any
  }
}

interface NavNode {
  id: string
  label: string
  href: string
  angle: number
  elevation: number
  color: string
}

const NAV_NODES: NavNode[] = [
  { id: 'perfil', label: 'PERFIL', href: '/perfil', angle: -0.4, elevation: 0.7, color: '#3f51ff' },
  { id: 'experiencia', label: 'EXPERIENCIA', href: '/experiencia', angle: 0.4, elevation: 0.7, color: '#e63946' },
  { id: 'habilidades', label: 'HABILIDADES', href: '/habilidades', angle: -0.8, elevation: 0, color: '#f4a261' },
  { id: 'educacion', label: 'EDUCACIÓN', href: '/educacion', angle: 0.8, elevation: 0, color: '#9d4edd' },
  { id: 'ai-agents', label: 'AI AGENTS', href: '/ai-agents', angle: -0.4, elevation: -0.7, color: '#00c896' },
  { id: 'portfolio', label: 'PORTFOLIO', href: '/portfolio', angle: 0.4, elevation: -0.7, color: '#ff6b9d' },
]

export function GraphNavigation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const labelsRef = useRef<Map<string, HTMLAnchorElement>>(new Map())
  const [isMobile, setIsMobile] = useState(false)
  const [threeLoaded, setThreeLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Load Three.js
  useEffect(() => {
    if (window.THREE) {
      setThreeLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
    script.async = true
    script.onload = () => setThreeLoaded(true)
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    if (!containerRef.current || isMobile || !threeLoaded) return

    const THREE = window.THREE
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000)
    camera.position.z = 350

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // ============================================
    // PARTICLE SPHERE (like original demo1.js)
    // ============================================
    const SPHERE_RADIUS = 160
    const PARTICLE_COUNT = 2200
    const colors = [
      new THREE.Color(0xac1122),
      new THREE.Color(0x96789f),
      new THREE.Color(0x535353),
    ]

    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const particleColors = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = (1 - Math.sqrt(Math.random())) * Math.PI / 2 * (Math.random() > 0.5 ? 1 : -1)

      positions[i * 3] = Math.cos(theta) * Math.cos(phi) * SPHERE_RADIUS * (1 + (Math.random() - 0.5) * 0.05)
      positions[i * 3 + 1] = Math.sin(phi) * SPHERE_RADIUS * (1 + (Math.random() - 0.5) * 0.05)
      positions[i * 3 + 2] = Math.sin(theta) * Math.cos(phi) * SPHERE_RADIUS * (1 + (Math.random() - 0.5) * 0.05)

      const color = colors[Math.floor(Math.random() * colors.length)]
      particleColors[i * 3] = color.r
      particleColors[i * 3 + 1] = color.g
      particleColors[i * 3 + 2] = color.b
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    })

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particleSystem)

    // Connecting lines
    const linePositions: number[] = []
    const lineColors: number[] = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < Math.min(i + 50, PARTICLE_COUNT); j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < 12) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          )
          lineColors.push(
            particleColors[i * 3], particleColors[i * 3 + 1], particleColors[i * 3 + 2],
            particleColors[j * 3], particleColors[j * 3 + 1], particleColors[j * 3 + 2]
          )
        }
      }
    }

    const linesGeometry = new THREE.BufferGeometry()
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    linesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3))

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
    })

    const lines = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(lines)

    // ============================================
    // CREATE FLOATING MENU LABELS
    // ============================================
    NAV_NODES.forEach((node, index) => {
      const label = document.createElement('a')
      label.href = node.href
      label.className = 'nav-label'
      label.textContent = node.label
      label.dataset.index = String(index)
      const menuColor = '#ac1122' // Same red as sphere particles
      label.style.cssText = `
        position: absolute;
        color: ${menuColor};
        font-family: 'Barlow', sans-serif;
        font-size: 1.15rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        padding: 0.6rem 1.2rem;
        background: rgba(0,0,0,0.6);
        border: 1px solid ${menuColor}40;
        border-radius: 6px;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease;
        text-shadow: 0 0 10px ${menuColor}60;
      `
      label.onmouseenter = () => {
        label.style.background = `${menuColor}20`
        label.style.borderColor = menuColor
        label.style.textShadow = `0 0 20px ${menuColor}`
        label.style.transform = 'translate(-50%, -50%) scale(1.1)'
      }
      label.onmouseleave = () => {
        label.style.background = 'rgba(0,0,0,0.6)'
        label.style.borderColor = `${menuColor}40`
        label.style.textShadow = `0 0 10px ${menuColor}60`
        label.style.transform = 'translate(-50%, -50%) scale(1)'
      }
      container.appendChild(label)
      labelsRef.current.set(node.id, label)
    })

    // Animation
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      const time = Date.now() * 0.001

      // Rotate sphere
      particleSystem.rotation.y = time * 0.1
      particleSystem.rotation.x = Math.sin(time * 0.3) * 0.05
      lines.rotation.y = time * 0.1
      lines.rotation.x = Math.sin(time * 0.3) * 0.05

      // Update label positions with floating motion
      NAV_NODES.forEach((node, index) => {
        const label = labelsRef.current.get(node.id)
        if (label) {
          const baseX = node.angle * 340
          const baseY = node.elevation * 220

          // Add subtle floating motion
          const floatX = Math.sin(time * 0.5 + index * 0.8) * 8
          const floatY = Math.cos(time * 0.4 + index * 0.6) * 6

          const x = width / 2 + baseX + floatX
          const y = height / 2 - baseY + floatY

          label.style.left = `${x}px`
          label.style.top = `${y}px`
          label.style.transform = 'translate(-50%, -50%)'
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    const handleResizeScene = () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResizeScene)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResizeScene)
      labelsRef.current.forEach(label => label.remove())
      labelsRef.current.clear()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [isMobile, threeLoaded])

  if (isMobile) {
    return (
      <nav className="flex flex-wrap justify-center gap-3 p-4">
        {NAV_NODES.map((node) => (
          <a
            key={node.id}
            href={node.href}
            className="px-4 py-2 text-sm text-white/90 hover:text-primary transition-colors"
          >
            {node.label}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[70vh] overflow-hidden"
      style={{ touchAction: 'none' }}
    />
  )
}
