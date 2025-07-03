import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';

export default function Traccion() {
  return (
    <>
      <Head>
        <title>Entrena en Casa - Ejercicios de Tracción</title>
        <meta
          name="description"
          content="Ejercicios de tracción para fortalecer espalda y bíceps sin material."
        />
        <meta
          name="keywords"
          content="ejercicios tracción, remo, espalda, bíceps, entrenamiento en casa"
        />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <article>
          <header>
            <h2>Ejercicios de Tracción para Entrenar en Casa</h2>
            <p>
              Los ejercicios de tracción se centran en fortalecer la espalda y los bíceps, fundamentales para una postura adecuada y fuerza funcional.
            </p>
          </header>

          <section>
            <h3>Principales Ejercicios</h3>

            <h4>1. Remo invertido con mesa o barra baja</h4>
            <p>
              Ejercicio ideal para trabajar dorsal, trapecio y bíceps utilizando el peso corporal.
            </p>
            <ul>
              <li><strong>Técnica:</strong> Acuéstate bajo una mesa resistente, agarra el borde con ambas manos y tira del pecho hacia la mesa manteniendo el cuerpo recto.</li>
              <li><strong>Consejos:</strong> Controla la subida y bajada, evita que las caderas bajen o suban.</li>
            </ul>

            <h4>2. Remo con toalla en puerta</h4>
            <p>
              Usa una toalla resistente pasada por la manilla de una puerta cerrada para simular un remo.
            </p>
            <ul>
              <li><strong>Técnica:</strong> Agarra la toalla con ambas manos, inclínate hacia atrás y tira hacia ti, contrayendo la espalda.</li>
              <li><strong>Precaución:</strong> Asegúrate que la puerta esté bien cerrada y fija para evitar accidentes.</li>
            </ul>

            <h4>3. Superman</h4>
            <p>
              Fortalece la zona lumbar y glúteos, parte esencial para una espalda fuerte.
            </p>
            <ul>
              <li><strong>Técnica:</strong> Acostado boca abajo, levanta simultáneamente brazos y piernas sin despegar la pelvis del suelo.</li>
              <li><strong>Consejos:</strong> Mantén la contracción 2-3 segundos antes de descender.</li>
            </ul>
          </section>

          <section>
            <h3>Consejos Generales</h3>
            <ul>
              <li>Prioriza la técnica para evitar lesiones en la zona lumbar.</li>
              <li>Incorpora estiramientos específicos para espalda y bíceps.</li>
              <li>Progresivamente añade repeticiones o series para mejorar la fuerza.</li>
            </ul>
          </section>

          <footer>
            <Link href="/ejercicios" className={styles.btnSmall} aria-label="Volver a Ejercicios">
              ← Volver a Ejercicios
            </Link>
          </footer>
        </article>
      </Layout>
    </>
  );
}
