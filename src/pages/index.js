import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Entrena en Casa - Inicio</title>
        <meta name="description" content="Entrenamientos para fortalecer cuerpo y mente desde casa, sin material." />
        <meta name="keywords" content="entrenamiento en casa, ejercicios, rutinas, piernas, core, fuerza" />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <nav className={styles.navbar}>
          <h1>
            <Link href="/">
              <a title="Volver a inicio">Entrena en Casa</a>
            </Link>
          </h1>
          <ul className={styles.navLinks}>
            <li><Link href="/rutinas"><a>Rutinas</a></Link></li>
            <li><Link href="/ejercicios"><a>Ejercicios</a></Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <h2>Bienvenido a Entrena en Casa</h2>
          <p>Rutinas y ejercicios para fortalecer piernas, glúteos, core y más, sin necesidad de gimnasio ni material.</p>
          <Link href="/rutinas">
            <a className={styles.btnPrimary}>Ver Rutinas</a>
          </Link>
          <Link href="/ejercicios">
            <a className={styles.btnPrimary}>Ver Ejercicios</a>
          </Link>
        </section>

        <section className={styles.intro}>
          <h3>¿Por qué entrenar en casa?</h3>
          <p>Entrenar en casa es cómodo, flexible y efectivo. Aquí encontrarás guías prácticas para que puedas mejorar tu fuerza y forma física sin complicaciones.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Entrena en Casa - Creado por Adrián</p>
      </footer>
    </>
  );
}
