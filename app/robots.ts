import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.arbovert-31.fr';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/image'],
        disallow: ['/api/', '/_next/static/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


