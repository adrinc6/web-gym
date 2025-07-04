import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function Home({ articles }) {
  React.useEffect(() => {
    if (window) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error(e);
      }
    }
  }, [articles]);

  return (
    <>
      <Head>
        <title>Entrena en Casa - Tips y Consejos</title>
        <meta
          name="description"
          content="Descubre los mejores tips y consejos para entrenar en casa sin necesidad de gimnasio. Rutinas, ejercicios y más."
        />
        <meta
          name="keywords"
          content="entrenamiento en casa, ejercicios sin gimnasio, fitness en casa, tips de entrenamiento, rutinas en casa"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Entrena en Casa - Tips y Consejos" />
        <meta
          property="og:description"
          content="Descubre los mejores tips y consejos para entrenar en casa sin necesidad de gimnasio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tu-dominio.com" />
        <meta property="og:image" content="https://tu-dominio.com/imagen-og.jpg" />
      </Head>

      {/* CORRECTO para Adsense con next/script */}
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5949148767814705`}
        crossOrigin="anonymous"
      />

      <Header />
      <main style={{ padding: '1rem' }}>
        {/* Anuncio arriba del grid */}
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '90px' }}
            data-ad-client="ca-pub-TU_ID_DE_CLIENTE"
            data-ad-slot="TU_ID_DE_SLOT"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>

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
                style={{
                  maxWidth: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
              />
              <h3 style={{ margin: '10px 0 5px' }}>{title}</h3>
              <p style={{ fontSize: '0.9rem', flexGrow: 1 }}>{description}</p>
              <Link
                href={`/articles/${slug}`}
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
