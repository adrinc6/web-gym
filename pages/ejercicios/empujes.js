import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';

export default function Empujes() {
  return (
    <>
      <Head>
        <title>Entrena en Casa - Ejercicios de Empuje</title>
        <meta
          name="description"
          content="Ejercicios de empuje para fortalecer pecho, hombros y tríceps sin material."
        />
        <meta
          name="keywords"
          content="ejercicios empuje, flexiones, pecho, hombros, tríceps"
        />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <article>
          <header>
            <h2>Ejercicios de Empuje para Entrenar en Casa</h2>
            <p>
              Los ejercicios de empuje trabajan principalmente pecho, hombros y tríceps, esenciales para la fuerza funcional y estética del torso superior.
            </p>
          </header>

          <section>
            <h3>Principales Ejercicios</h3>

            <h4>1. Flexiones Clásicas</h4>
            <p>
              Ejercicio fundamental que trabaja pecho, hombros, tríceps y core.
            </p>
            <ul>
              <li><strong>Técnica:</strong> Colócate en posición de plancha con manos a la altura del pecho. Baja controladamente hasta que el pecho casi toque el suelo y sube manteniendo el cuerpo recto.</li>
              <li><strong>Variantes:</strong> Flexiones con rodillas apoyadas (menos exigente), flexiones con manos juntas (más enfoque en tríceps).</li>
              <li><strong>Consejos:</strong> Mantén el core contraído y evita que las caderas bajen o suban excesivamente.</li>
            </ul>

            <h4>2. Fondos en Banco o Silla</h4>
            <p>
              Excelente para trabajar los tríceps y también el pecho y hombros.
            </p>
            <ul>
              <li><strong>Técnica:</strong> Apoya las manos en un banco o silla detrás de ti, extiende las piernas y baja el cuerpo flexionando los codos hasta 90°, luego sube.</li>
              <li><strong>Consejos:</strong> Mantén el torso cerca del banco y controla el movimiento para evitar tensiones en hombros.</li>
            </ul>

            <h4>3. Flexiones Pike (flexiones en V invertida)</h4>
            <p>
              Orientadas a trabajar principalmente los hombros y parte superior del torso.
            </p>
            <ul>
              <li><strong>Técnica:</strong> Desde posición de plancha, eleva las caderas formando una V invertida, flexiona los codos bajando la cabeza hacia el suelo y vuelve a subir.</li>
              <li><strong>Consejos:</strong> Controla la respiración y mantén los abdominales activos.</li>
            </ul>
          </section>

          <section>
            <h3>Consejos Generales</h3>
            <ul>
              <li>Realiza calentamiento específico para hombros antes de comenzar.</li>
              <li>Evita movimientos bruscos y siempre controla la ejecución.</li>
              <li>Incrementa la dificultad progresivamente para evitar estancamiento.</li>
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
