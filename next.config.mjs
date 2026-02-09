/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/elagueur-toulouse', destination: '/elagage-toulouse', permanent: true },
      { source: '/elagueur-colomiers', destination: '/elagage-colomiers', permanent: true },
      { source: '/elagueur-tournefeuille', destination: '/elagage-tournefeuille', permanent: true },
      { source: '/elagueur-blagnac', destination: '/elagage-blagnac', permanent: true },
      { source: '/elagueur-balma', destination: '/elagage-balma', permanent: true },
      { source: '/elagueur-muret', destination: '/elagage-muret', permanent: true },
      { source: '/elagueur-cugnaux', destination: '/elagage-cugnaux', permanent: true },
    ];
  },
};

export default nextConfig;
