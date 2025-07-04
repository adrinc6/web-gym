// pages/index.js
import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';

export default function Home({ articles }) {
  React.useEffect(() => {
    console.log('Artículos recibidos:', articles);
  }, [articles]);

  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          {articles.length === 0 && <p>No hay artículos disponibles.</p>}
          {articles.map(({ slug, title, description, image }) => (
            <div
              key={slug}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                background: 'white',
              }}
            >
              <img
                src={image}
                alt={title}
                style={{ maxWidth: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <h3 style={{ margin: '10px 0 5px' }}>{title}</h3>
              <p style={{ fontSize: '0.9rem', flexGrow: 1 }}>{description}</p>
              <Link href={`/articles/${slug}`}
                  style={{
                    marginTop: 'auto',
                    padding: '8px 12px',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                >
                  Leer artículo
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { getAllArticles } = await import('../lib/articles');
  const articles = getAllArticles();

  return {
    props: {
      articles,
    },
  };
}
