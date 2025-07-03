import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function TrenSuperior() {
  return (
    <>
      <Head>
        <title>Rutina Tren Superior | Entrenamiento en Casa</title>
        <meta
          name="description"
          content="Rutina enfocada en tren superior para fortalecer pecho, espalda, hombros y brazos en casa con poco material."
        />
        <meta
          name="keywords"
          content="rutina tren superior, pecho, espalda, hombros, brazos, entrenamiento en casa"
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
            <h2>Rutina Tren Superior para Entrenar en Casa</h2>
            <p>
              Rutina para fortalecer los músculos del pecho, espalda, hombros y brazos con poco material.
            </p>
          </header>

          <section>
            <h3>Ejercicios recomendados</h3>
            <ol>
              <li>
                <strong>Flexiones clásicas</strong>: 4 series de 12-15 repeticiones
              </li>
              <li>
                <strong>Remo invertido con toalla</strong>: 4 series de 10-12 repeticiones
              </li>
              <li>
                <strong>Fondos entre sillas</strong>: 3 series de 8-12 repeticiones
              </li>
              <li>
                <strong>Elevaciones laterales con banda elástica</strong>: 3 series de 12-15 repeticiones
              </li>
              <li>
                <strong>Plancha lateral</strong>: 3 series de 30 segundos por lado
              </li>
            </ol>
          </section>

          <section>
            <h3>Consejos para entrenar tren superior</h3>
            <ul>
              <li>Prioriza la técnica correcta para evitar lesiones.</li>
              <li>Controla el movimiento en las fases excéntrica y concéntrica.</li>
              <li>Usa bandas elásticas para añadir resistencia progresiva.</li>
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
