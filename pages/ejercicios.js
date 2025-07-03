import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Ejercicios() {
  return (
    <>
      <Head>
        <title>Entrena en Casa - Ejercicios</title>
        <meta
          name="description"
          content="Listado de ejercicios para fortalecer piernas, glúteos, core y más en casa sin material."
        />
        <meta
          name="keywords"
          content="ejercicios en casa, piernas, glúteos, core, entrenamiento sin material"
        />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <article>
          <header>
            <h2>Ejercicios para Entrenar en Casa</h2>
            <p>
              Ejercicios simples y efectivos para fortalecer distintas zonas del cuerpo sin necesidad
              de equipamiento.
            </p>
          </header>

          <section>
            <article>
              <h3>Empujes</h3>
              <p>
                Ejercicios que trabajan el pecho, hombros y tríceps, esenciales para desarrollar fuerza
                y resistencia en la parte superior del cuerpo.
              </p>
              <Link href="/ejercicios/empujes" aria-label="Ver ejercicios de empujes" className={styles.btnSmall}>
                  Ver ejercicios de empujes
              </Link>
            </article>

            <article>
              <h3>Tracción</h3>
              <p>
                Ejercicios que fortalecen la espalda, bíceps y antebrazos, fundamentales para mejorar la
                postura y la capacidad de tirar cargas.
              </p>
              <Link href="/ejercicios/traccion" aria-label="Ver ejercicios de tracción" className={styles.btnSmall}>
                  Ver ejercicios de tracción
              </Link>
            </article>

            <article>
              <h3>Piernas</h3>
              <p>
                Ejercicios dedicados a tonificar y fortalecer piernas, glúteos y core, clave para la estabilidad
                y el equilibrio general.
              </p>
              <Link href="/ejercicios/piernas" aria-label="Ver ejercicios de piernas" className={styles.btnSmall}>
                  Ver ejercicios de piernas
              </Link>
            </article>
          </section>

          <footer>
            <Link href="/" role="button" aria-label="Volver a la página principal" className={styles.btnSmall}>
                ← Volver a Inicio
            </Link>
          </footer>
        </article>
      </Layout>
    </>
  );
}
