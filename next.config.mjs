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
      { source: '/elagueur-labege', destination: '/elagage-labege', permanent: true },
      { source: '/elagueur-ramonville', destination: '/elagage-ramonville', permanent: true },
      { source: '/elagueur-castanet-tolosan', destination: '/elagage-castanet-tolosan', permanent: true },
      { source: '/elagueur-portet-sur-garonne', destination: '/elagage-portet-sur-garonne', permanent: true },
      { source: '/elagueur-roques', destination: '/elagage-roques', permanent: true },
      { source: '/elagueur-seysses', destination: '/elagage-seysses', permanent: true },
    ];
  },
};

export default nextConfig;
