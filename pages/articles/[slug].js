import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header';
import Link from 'next/link';
import styles from '../../styles/Article.module.css';


export default function Article({ frontmatter, content }) {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem', maxWidth: '700px', margin: 'auto' }}>
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
