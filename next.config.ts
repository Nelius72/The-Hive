/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',      // opcional, deja vacío si no hay puerto
        pathname: '/t/p/**'  // permite todos los paths bajo /t/p/
      }
    ]
  }
}

export default nextConfig
