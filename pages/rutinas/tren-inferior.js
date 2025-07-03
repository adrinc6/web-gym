import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';

export default function TrenInferior() {
  return (
    <>
      <Head>
        <title>Entrena en Casa - Rutina Tren Inferior</title>
        <meta
          name="description"
          content="Rutina para fortalecer piernas, glúteos y core en casa sin material."
        />
        <meta
          name="keywords"
          content="rutina tren inferior, piernas, glúteos, core, casa"
        />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <article>
          <header>
            <h2>Rutina para Tren Inferior en Casa</h2>
            <p>
              Enfocada en fortalecer piernas, glúteos y core con ejercicios efectivos y sin necesidad de equipamiento.
            </p>
          </header>

          <section>
            <h3>Ejercicios</h3>
            <ol>
              <li>
                <strong>Sentadillas:</strong> 4 series de 12-15 repeticiones. Trabaja principalmente piernas y glúteos.
              </li>
              <li>
                <strong>Zancadas alternas:</strong> 3 series de 10-12 repeticiones por pierna. Fortalece cuádriceps, glúteos e isquiotibiales.
              </li>
              <li>
                <strong>Puente de glúteos:</strong> 3 series de 15-20 repeticiones. Enfocado en glúteos e isquiotibiales.
              </li>
              <li>
                <strong>Elevación de talones:</strong> 3 series de 20-25 repeticiones. Trabaja gemelos.
              </li>
              <li>
                <strong>Plancha frontal:</strong> 3 series de 30-45 segundos. Fortalece core.
              </li>
            </ol>
          </section>

          <section>
            <h3>Consejos</h3>
            <ul>
              <li>Calienta siempre antes de la rutina con movilidad articular de cadera y tobillos.</li>
              <li>Mantén la técnica correcta, especialmente la postura durante las sentadillas y zancadas.</li>
              <li>Controla la respiración y mantén el core activo para mayor estabilidad.</li>
              <li>Descansa 60-90 segundos entre series.</li>
            </ul>
          </section>

          <footer>
            <Link href="/rutinas" className={styles.btnSmall} aria-label="Volver a Rutinas">
              ← Volver a Rutinas
            </Link>
          </footer>
        </article>
      </Layout>
    </>
  );
}
