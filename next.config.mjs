/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações para Docker
  output: 'standalone',
  
  // Configurações de imagem
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true
  },

  // Configurações experimentais
  experimental: {
    // Reduzir o tamanho do bundle
    optimizeCss: true,
  },

  // Configurações de build
  compress: true,
  poweredByHeader: false,

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },

  // Configurações adicionais
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
