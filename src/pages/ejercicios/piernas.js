import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function EjerciciosPiernas() {
  return (
    <>
      <Head>
        <title>Ejercicios de Piernas | Entrenamiento en Casa</title>
        <meta
          name="description"
          content="Ejercicios para fortalecer piernas, glúteos y core con poco material en casa. Perfecto para entrenamiento sin gimnasio."
        />
        <meta
          name="keywords"
          content="ejercicios piernas, glúteos, core, entrenamiento en casa, sin material"
        />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <nav>
          <h1>
            <Link href="/">
              <a title="Volver a la página principal">Entrena en Casa</a>
            </Link>
          </h1>
        </nav>
      </header>

      <main>
        <article>
          <header>
            <h2>Ejercicios de Piernas para Entrenar en Casa</h2>
            <p>Rutina para fortalecer piernas, glúteos y core sin necesidad de material.</p>
          </header>

          <section>
            <h3>Ejercicios recomendados</h3>
            <ol>
              <li><strong>Sentadillas libres</strong>: 4 series de 15 repeticiones</li>
              <li><strong>Zancadas alternas</strong>: 3 series de 12 repeticiones por pierna</li>
              <li><strong>Puente de glúteos</strong>: 4 series de 20 repeticiones</li>
              <li><strong>Elevación de talones (gemelos)</strong>: 4 series de 20 repeticiones</li>
              <li><strong>Plancha frontal</strong>: 3 series de 30-45 segundos</li>
            </ol>
          </section>

          <section>
            <h3>Consejos para ejercicios de piernas</h3>
            <ul>
              <li>Prioriza la técnica para evitar lesiones de rodilla y espalda.</li>
              <li>Controla la respiración durante el movimiento.</li>
              <li>Aumenta repeticiones o series para mayor intensidad.</li>
              <li>Descansa 60 segundos entre series.</li>
            </ul>
          </section>

          <footer>
            <Link href="/ejercicios">
              <a className={styles.btnSmall} role="button" aria-label="Volver al listado de ejercicios">
                ← Volver a Ejercicios
              </a>
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
