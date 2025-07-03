import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Fullbody() {
  return (
    <>
      <Head>
        <title>Rutina Fullbody | Entrenamiento en Casa</title>
        <meta
          name="description"
          content="Rutina fullbody completa para entrenar todo el cuerpo en casa con poco material. Ejercicios eficaces y sencillos."
        />
        <meta
          name="keywords"
          content="rutina fullbody, entrenamiento en casa, ejercicios para todo el cuerpo, poco material"
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
            <h2>Rutina Fullbody para Entrenar en Casa</h2>
            <p>Una rutina equilibrada que trabaja todos los grupos musculares con poco material.</p>
          </header>

          {/* ÍNDICE */}
          <nav aria-label="Índice de la rutina fullbody">
            <ul className={styles.indiceList}>
              <li>
                <a href="#que-es">¿Qué es la rutina fullbody?</a>
              </li>
              <li>
                <a href="#ejercicios">Ejercicios de la rutina</a>
              </li>
              <li>
                <a href="#material">Material necesario</a>
              </li>
              <li>
                <a href="#consejos">Consejos para la rutina fullbody</a>
              </li>
            </ul>
          </nav>

          <section id="que-es">
            <h3>¿Qué es la rutina fullbody?</h3>
            <p>
              La rutina fullbody implica entrenar todo el cuerpo en una sola sesión, ideal para maximizar resultados
              con pocas sesiones semanales.
            </p>
          </section>

          <section id="ejercicios">
            <h3>Ejercicios de la rutina</h3>
            <ol>
              <li>
                <strong>Sentadillas libres</strong>: 3 series de 15 repeticiones
              </li>
              <li>
                <strong>Flexiones clásicas</strong>: 3 series de 12-15 repeticiones
              </li>
              <li>
                <strong>Remo invertido con toalla</strong>: 3 series de 10-12 repeticiones
              </li>
              <li>
                <strong>Puente de glúteos</strong>: 3 series de 15-20 repeticiones
              </li>
              <li>
                <strong>Plancha frontal</strong>: 3 series de 30-45 segundos
              </li>
              <li>
                <strong>Elevaciones laterales con banda elástica</strong>: 3 series de 12-15 repeticiones
              </li>
            </ol>
          </section>

          <section id="material">
            <h3>Material necesario</h3>
            <p>
              Para aprovechar al máximo esta rutina, es recomendable contar con algunos accesorios sencillos que te ayudarán a
              añadir resistencia y variedad sin necesidad de mucho espacio ni equipo costoso.
            </p>

            <ul>
              <li>
                <strong>Banda elástica de resistencia</strong>: Ideal para ejercicios de brazos y hombros, fácil de transportar
                y usar.
                <br />
                <a
                  href="TU_ENLACE_AFILIADO_AMAZON_BANDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnSmall} ${styles.btnRed}`}
                  aria-label="Comprar banda elástica en Amazon"
                >
                  Comprar en Amazon
                </a>{' '}
                <a
                  href="TU_ENLACE_AFILIADO_DECATHLON_BANDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnSmall} ${styles.btnRed}`}
                  aria-label="Comprar banda elástica en Decathlon"
                >
                  Comprar en Decathlon
                </a>
              </li>
              <li>
                <strong>Toalla o TRX casero</strong>: Para hacer ejercicios de remo invertido y trabajar la espalda.
                <br />
                <a
                  href="TU_ENLACE_AFILIADO_AMAZON_TOALLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnSmall} ${styles.btnRed}`}
                  aria-label="Comprar toalla para remo invertido en Amazon"
                >
                  Comprar en Amazon
                </a>{' '}
                <a
                  href="TU_ENLACE_AFILIADO_DECATHLON_TOALLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnSmall} ${styles.btnRed}`}
                  aria-label="Comprar toalla para remo invertido en Decathlon"
                >
                  Comprar en Decathlon
                </a>
              </li>
              <li>
                <strong>Colchoneta o esterilla</strong>: Para realizar los ejercicios en el suelo con mayor comodidad.
                <br />
                <a
                  href="TU_ENLACE_AFILIADO_AMAZON_COLCHONETA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnSmall} ${styles.btnRed}`}
                  aria-label="Comprar colchoneta en Amazon"
                >
                  Comprar en Amazon
                </a>{' '}
                <a
                  href="TU_ENLACE_AFILIADO_DECATHLON_COLCHONETA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btnSmall} ${styles.btnRed}`}
                  aria-label="Comprar colchoneta en Decathlon"
                >
                  Comprar en Decathlon
                </a>
              </li>
            </ul>
          </section>

          <section id="consejos">
            <h3>Consejos para la rutina fullbody</h3>
            <ul>
              <li>Calienta siempre antes de comenzar.</li>
              <li>Mantén buena técnica para evitar lesiones.</li>
              <li>Incrementa las repeticiones o usa bandas más resistentes para progresar.</li>
              <li>Descansa 60-90 segundos entre series.</li>
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
