import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Article.module.css';

export default function Article({ frontmatter, content }) {
  useEffect(() => {
    if (window) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5949148767814705" crossorigin="anonymous"></script>
      </Head>

      <Header />
      <main
        style={{
          display: 'grid',
          gridTemplateColumns: '160px 1fr 160px',
          gap: '20px',
          padding: '1rem',
          maxWidth: '1000px',
          margin: 'auto',
        }}
      >
        {/* Anuncio lateral izquierdo */}
        <div style={{ position: 'sticky', top: '80px', alignSelf: 'start' }}>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '160px', height: '600px' }}
            data-ad-client="ca-pub-TU_ID_DE_CLIENTE"
            data-ad-slot="TU_ID_DE_SLOT_LATERAL_IZQUIERDO"
            data-ad-format="auto"
            data-full-width-responsive="false"
          ></ins>
        </div>

        {/* Contenido del artículo */}
        <article style={{ maxWidth: '700px' }}>
          <h1>{frontmatter.title}</h1>
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
          />
          <ReactMarkdown>{content}</ReactMarkdown>

          <div className={styles.backButtonContainer}>
            <Link href="/">
              <button className={styles.backButton}>Volver a la página principal</button>
            </Link>
          </div>
        </article>

        {/* Anuncio lateral derecho */}
        <div style={{ position: 'sticky', top: '80px', alignSelf: 'start' }}>
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '160px', height: '600px' }}
            data-ad-client="ca-pub-TU_ID_DE_CLIENTE"
            data-ad-slot="TU_ID_DE_SLOT_LATERAL_DERECHO"
            data-ad-format="auto"
            data-full-width-responsive="false"
          ></ins>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const articlesDirectory = path.join(process.cwd(), 'articles', 'activos');
  const filenames = fs.readdirSync(articlesDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesDirectory = path.join(process.cwd(), 'articles', 'activos');
  const fullPath = path.join(articlesDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    props: {
      frontmatter: data,
      content,
    },
  };
}
