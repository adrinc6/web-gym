import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function TrenInferior() {
  return (
    <>
      <Head>
        <title>Rutina Tren Inferior | Entrenamiento en Casa</title>
        <meta
          name="description"
          content="Rutina para fortalecer tren inferior: piernas, glúteos y core, con poco material en casa."
        />
        <meta
          name="keywords"
          content="rutina tren inferior, piernas, glúteos, core, entrenamiento en casa"
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
            <h2>Rutina Tren Inferior para Entrenar en Casa</h2>
            <p>Ejercicios para fortalecer piernas, glúteos y core con poco o ningún material.</p>
          </header>

          <section>
            <h3>Ejercicios recomendados</h3>
            <ol>
              <li>
                <strong>Sentadillas libres</strong>: 4 series de 15 repeticiones
              </li>
              <li>
                <strong>Puente de glúteos</strong>: 4 series de 20 repeticiones
              </li>
              <li>
                <strong>Zancadas alternas</strong>: 3 series de 12 repeticiones por pierna
              </li>
              <li>
                <strong>Elevación de talones (gemelos)</strong>: 4 series de 20 repeticiones
              </li>
              <li>
                <strong>Plancha frontal</strong>: 3 series de 30-45 segundos
              </li>
            </ol>
          </section>

          <section>
            <h3>Consejos para entrenar tren inferior</h3>
            <ul>
              <li>Concéntrate en la estabilidad y técnica para evitar lesiones.</li>
              <li>Controla la respiración y el movimiento.</li>
              <li>Incrementa la dificultad añadiendo peso o repeticiones.</li>
              <li>Descansa 60 segundos entre series.</li>
            </ul>
          </section>

          <footer>
            <Link href="/rutinas">
              <a className={styles.btnSmall} role="button" aria-label="Volver al listado de rutinas">
                ← Volver a Rutinas
              </a>
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
