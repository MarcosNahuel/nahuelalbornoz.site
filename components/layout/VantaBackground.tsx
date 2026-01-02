'use client'

import { useEffect, useRef, useState } from 'react'

// Vanta types
declare global {
  interface Window {
    VANTA: {
      NET: (config: VantaConfig) => VantaEffect
    }
    THREE: any
  }
}

interface VantaConfig {
  el: HTMLElement
  THREE: any
  mouseControls: boolean
  touchControls: boolean
  gyroControls: boolean
  minHeight: number
  minWidth: number
  scale: number
  scaleMobile: number
  color: number
  backgroundColor: number
  points: number
  maxDistance: number
  spacing: number
}

interface VantaEffect {
  destroy: () => void
  setOptions: (options: Partial<VantaConfig>) => void
}

export function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const vantaRef = useRef<VantaEffect | null>(null)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)

  // Load Three.js and Vanta scripts
  useEffect(() => {
    const loadScripts = async () => {
      // Check if already loaded
      if (window.VANTA && window.THREE) {
        setScriptsLoaded(true)
        return
      }

      // Load Three.js if not present
      if (!window.THREE) {
        const threeScript = document.createElement('script')
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
        threeScript.async = true
        document.head.appendChild(threeScript)

        await new Promise((resolve) => {
          threeScript.onload = resolve
        })
      }

      // Load Vanta if not present
      if (!window.VANTA) {
        const vantaScript = document.createElement('script')
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js'
        vantaScript.async = true
        document.head.appendChild(vantaScript)

        await new Promise((resolve) => {
          vantaScript.onload = resolve
        })
      }

      setScriptsLoaded(true)
    }

    loadScripts()
  }, [])

  // Initialize Vanta effect
  useEffect(() => {
    if (!scriptsLoaded || !containerRef.current) return

    // Don't create if already exists
    if (vantaRef.current) return

    const isMobile = window.innerWidth < 768

    try {
      const effect = window.VANTA.NET({
        el: containerRef.current,
        THREE: window.THREE,
        mouseControls: !isMobile,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x855ac8,
        backgroundColor: 0x101011,
        points: 8,
        maxDistance: 19,
        spacing: 18,
      })

      vantaRef.current = effect
    } catch (e) {
      console.error('Vanta initialization error:', e)
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy()
        vantaRef.current = null
      }
    }
  }, [scriptsLoaded])

  // Handle resize
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout

    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        if (vantaRef.current) {
          vantaRef.current.destroy()
          vantaRef.current = null
        }
        // Trigger re-init by toggling scriptsLoaded
        setScriptsLoaded(false)
        setTimeout(() => setScriptsLoaded(true), 100)
      }, 250)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  )
}
