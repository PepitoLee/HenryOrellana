import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  url: string;
  publishedDate: string;
  modifiedDate?: string;
  authorName: string;
}

const SITE_URL = 'https://henry-orellana.vercel.app';

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  image,
  url,
  publishedDate,
  modifiedDate,
  authorName,
}) => {
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const fullUrl = `${SITE_URL}${url}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: fullImage,
    url: fullUrl,
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    author: {
      '@type': 'Person',
      name: authorName,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Henry Orellana D.',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
