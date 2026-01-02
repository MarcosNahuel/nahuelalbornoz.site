import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.powerbi.com',
      },
    ],
  },

  // Redirects for SEO (old paths to new)
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/porfolio.html',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/perfil.html',
        destination: '/perfil',
        permanent: true,
      },
      {
        source: '/habilidades.html',
        destination: '/habilidades',
        permanent: true,
      },
      {
        source: '/educacion.html',
        destination: '/educacion',
        permanent: true,
      },
      {
        source: '/experiencia.html',
        destination: '/experiencia',
        permanent: true,
      },
      {
        source: '/servicios.html',
        destination: '/servicios',
        permanent: true,
      },
      {
        source: '/ai-agents.html',
        destination: '/ai-agents',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
