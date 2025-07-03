import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

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

      <header>
        <nav className={styles.navbar}>
          <h1>
            <Link href="/">
              <a title="Volver a inicio">Entrena en Casa</a>
            </Link>
          </h1>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/rutinas">
                <a>Rutinas</a>
              </Link>
            </li>
            <li>
              <Link href="/ejercicios" aria-current="page">
                <a>Ejercicios</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
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
              <Link href="/ejercicios/empujes">
                <a className={styles.btnSmall} aria-label="Ver ejercicios de empujes">
                  Ver ejercicios de empujes
                </a>
              </Link>
            </article>

            <article>
              <h3>Tracción</h3>
              <p>
                Ejercicios que fortalecen la espalda, bíceps y antebrazos, fundamentales para mejorar la
                postura y la capacidad de tirar cargas.
              </p>
              <Link href="/ejercicios/traccion">
                <a className={styles.btnSmall} aria-label="Ver ejercicios de tracción">
                  Ver ejercicios de tracción
                </a>
              </Link>
            </article>

            <article>
              <h3>Piernas</h3>
              <p>
                Ejercicios dedicados a tonificar y fortalecer piernas, glúteos y core, clave para la estabilidad
                y el equilibrio general.
              </p>
              <Link href="/ejercicios/piernas">
                <a className={styles.btnSmall} aria-label="Ver ejercicios de piernas">
                  Ver ejercicios de piernas
                </a>
              </Link>
            </article>
          </section>

          <footer>
            <Link href="/">
              <a className={styles.btnSmall} role="button" aria-label="Volver a la página principal">
                ← Volver a Inicio
              </a>
            </Link>
          </footer>
        </article>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Entrena en Casa - Creado por Adrián</p>
      </footer>
    </>
  );
}
