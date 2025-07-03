import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'; // Creamos este CSS para los botones

export default function Home() {
  return (
    <>
      <Head>
        <title>Entrena en Casa - Inicio</title>
        <meta
          name="description"
          content="Entrenamientos para fortalecer cuerpo y mente desde casa, sin material."
        />
        <meta
          name="keywords"
          content="entrenamiento en casa, ejercicios, rutinas, piernas, core, fuerza"
        />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <section id="seccion1">
          <h2>Bienvenido a Entrena en Casa</h2>
          <p>
            Rutinas y ejercicios para fortalecer piernas, glúteos, core y más,
            sin necesidad de gimnasio ni material.
          </p>
          <div className={styles.btnGroup}>
            <Link href="/rutinas" className={styles.btnPrimary}>Ver Rutinas
            </Link>
            <Link href="/ejercicios"
              className={styles.btnPrimary}>Ver Ejercicios
            </Link>
          </div>
        </section>

        <section id="seccion2">
          <h3>¿Por qué entrenar en casa?</h3>
          <p>
            Entrenar en casa es cómodo, flexible y efectivo. Aquí encontrarás
            guías prácticas para que puedas mejorar tu fuerza y forma física sin
            complicaciones.
          </p>
        </section>
      </Layout>
    </>
  );
}
