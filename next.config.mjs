/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Bleu is the only lender on the platform, so the lender-partner page is
  // gone. Send old links to the business page instead of a 404.
  async redirects() {
    return [{ source: '/partners', destination: '/business', permanent: false }]
  },
}

export default nextConfig
