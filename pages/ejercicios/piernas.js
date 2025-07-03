import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';

export default function Piernas() {
  return (
    <>
      <Head>
        <title>Entrena en Casa - Ejercicios de Piernas</title>
        <meta
          name="description"
          content="Ejercicios para fortalecer piernas, glúteos y core sin material."
        />
        <meta
          name="keywords"
          content="ejercicios piernas, zancadas, sentadillas, glúteos, core"
        />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <article>
          <header>
            <h2>Ejercicios para Piernas y Glúteos sin Material</h2>
            <p>Rutina enfocada en fortalecer piernas, glúteos y core con ejercicios sencillos para hacer en casa.</p>
          </header>

          <section>
            <h3>Ejercicios</h3>
            <table>
              <thead>
                <tr>
                  <th>Ejercicio</th>
                  <th>Músculos trabajados</th>
                  <th>Series</th>
                  <th>Repeticiones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Zancadas alternas</td>
                  <td>Piernas, glúteos, core</td>
                  <td>3</td>
                  <td>10-12 por pierna</td>
                </tr>
                <tr>
                  <td>Puente de glúteos</td>
                  <td>Glúteos, isquiotibiales</td>
                  <td>3</td>
                  <td>15-20</td>
                </tr>
                <tr>
                  <td>Elevación de talones (gemelos)</td>
                  <td>Gemelos</td>
                  <td>3</td>
                  <td>20-25</td>
                </tr>
                <tr>
                  <td>Plancha frontal</td>
                  <td>Core, abdominales</td>
                  <td>3</td>
                  <td>20-40 segundos</td>
                </tr>
              </tbody>
            </table>
            <p><strong>Consejo:</strong> Mantén la espalda recta y controla el movimiento para evitar lesiones.</p>
          </section>

          <section>
            <h3>Enfriamiento y Estiramientos</h3>
            <p>Estira los músculos de las piernas y el core tras la rutina para evitar rigidez y mejorar la flexibilidad.</p>
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
