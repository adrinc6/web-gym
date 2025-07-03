import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Rutinas() {
  return (
    <>
      <Head>
        <title>Entrena en Casa - Rutinas</title>
        <meta
          name="description"
          content="Rutinas para entrenar en casa sin material. Fortalece piernas, glúteos, core y más."
        />
        <meta
          name="keywords"
          content="rutinas en casa, entrenamiento sin material, piernas, glúteos, core"
        />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <article>
          <header>
            <h2>Rutinas para Entrenar en Casa</h2>
            <p>
              Rutinas completas para fortalecer distintas zonas del cuerpo utilizando poco material, ideales para
              entrenamiento en casa.
            </p>
          </header>

          <section>
            <h3>Rutina Fullbody</h3>
            <p>
              Entrenamiento integral para trabajar todo el cuerpo, combinando fuerza y resistencia con ejercicios que
              requieren mínimo equipamiento.
            </p>
            <Link href="/rutinas/fullbody" className={styles.btnSmall} aria-label="Ver rutina Fullbody">
                Ver rutina Fullbody
            </Link>
          </section>

          <section>
            <h3>Rutina Tren Superior</h3>
            <p>
              Ejercicios diseñados para fortalecer pecho, espalda, hombros y brazos, perfectos para mejorar la fuerza y
              el tono muscular del torso superior.
            </p>
            <Link href="/rutinas/tren-superior" className={styles.btnSmall} aria-label="Ver rutina Tren Superior">
                Ver rutina Tren Superior
            </Link>
          </section>

          <section>
            <h3>Rutina Tren Inferior</h3>
            <p>
              Rutina enfocada en piernas, glúteos y core, con movimientos efectivos para tonificar y aumentar la fuerza
              en la parte inferior del cuerpo.
            </p>
            <Link href="/rutinas/tren-inferior" className={styles.btnSmall} aria-label="Ver rutina Tren Inferior">
                Ver rutina Tren Inferior
            </Link>
          </section>

          <footer>
            <Link href="/" className={styles.btnSmall} role="button" aria-label="Volver a la página principal">
                ← Volver a Inicio
            </Link>
          </footer>
        </article>
      </Layout>
    </>
  );
}
