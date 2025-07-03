import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';

export default function TrenSuperior() {
  return (
    <>
      <Head>
        <title>Entrena en Casa - Rutina Tren Superior</title>
        <meta
          name="description"
          content="Rutina enfocada en fortalecer pecho, espalda, hombros y brazos en casa."
        />
        <meta
          name="keywords"
          content="rutina tren superior, pecho, espalda, hombros, brazos, casa"
        />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <article>
          <header>
            <h2>Rutina para Tren Superior en Casa</h2>
            <p>
              Fortalece el torso con ejercicios específicos para pecho, espalda, hombros y brazos sin necesidad de equipamiento.
            </p>
          </header>

          <section>
            <h3>Ejercicios</h3>
            <ol>
              <li>
                <strong>Flexiones clásicas:</strong> 4 series de 10-15 repeticiones. Trabaja pecho, hombros y tríceps.
              </li>
              <li>
                <strong>Fondos en banco o silla:</strong> 3 series de 12-15 repeticiones. Enfocado en tríceps y pecho.
              </li>
              <li>
                <strong>Remo invertido bajo mesa:</strong> 4 series de 8-12 repeticiones. Para espalda y bíceps.
              </li>
              <li>
                <strong>Flexiones pike:</strong> 3 series de 10-12 repeticiones. Trabaja hombros y parte superior del torso.
              </li>
              <li>
                <strong>Plancha lateral:</strong> 3 series de 20-30 segundos por lado. Fortalece core y estabilizadores.
              </li>
            </ol>
          </section>

          <section>
            <h3>Consejos</h3>
            <ul>
              <li>Realiza un calentamiento específico para hombros y brazos.</li>
              <li>Mantén la espalda recta y el core activo durante todos los ejercicios.</li>
              <li>Controla el ritmo para maximizar la tensión muscular.</li>
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
