import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function EjerciciosTraccion() {
  return (
    <>
      <Head>
        <title>Ejercicios de Tracción | Entrenamiento en Casa</title>
        <meta
          name="description"
          content="Ejercicios de tracción para fortalecer espalda, bíceps y antebrazos en casa con poco material, usando peso corporal y bandas."
        />
        <meta
          name="keywords"
          content="ejercicios tracción, espalda, bíceps, antebrazos, entrenamiento en casa, sin material, bandas elásticas"
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
            <h2>Ejercicios de Tracción para Entrenar en Casa</h2>
            <p>
              Ejercicios para fortalecer la espalda, bíceps y antebrazos usando peso corporal y bandas elásticas.
            </p>
          </header>

          <section>
            <h3>¿Qué son los ejercicios de tracción?</h3>
            <p>
              Los ejercicios de tracción trabajan los músculos involucrados en tirar o jalar objetos, especialmente espalda y bíceps.
            </p>
          </section>

          <section>
            <h3>Ejercicios recomendados</h3>
            <ol>
              <li>
                <h4>Remo invertido con toalla</h4>
                <p>
                  Coloca una toalla o soga en una barra fija baja y jala tu cuerpo hacia arriba manteniendo la espalda recta.
                </p>
                <p><strong>Repeticiones:</strong> 3 series de 10-12</p>
              </li>
              <li>
                <h4>Dominadas asistidas con silla</h4>
                <p>
                  Usa una silla para ayudarte en las dominadas, disminuyendo la carga y mejorando la técnica.
                </p>
                <p><strong>Repeticiones:</strong> 3 series de 6-8</p>
              </li>
              <li>
                <h4>Curl de bíceps con banda elástica</h4>
                <p>
                  Pisa la banda y flexiona los codos para trabajar los bíceps.
                </p>
                <p><strong>Repeticiones:</strong> 3 series de 12-15</p>
              </li>
              <li>
                <h4>Remo con banda elástica</h4>
                <p>
                  Sujeta la banda frente a ti y tira hacia el pecho manteniendo los codos pegados al cuerpo.
                </p>
                <p><strong>Repeticiones:</strong> 3 series de 12-15</p>
              </li>
              <li>
                <h4>Ejercicios de agarre con toalla</h4>
                <p>
                  Envuelve una toalla y realiza contracciones isométricas para fortalecer antebrazos.
                </p>
                <p><strong>Duración:</strong> 3 series de 30 segundos</p>
              </li>
            </ol>
          </section>

          <section>
            <h3>Consejos para ejercicios de tracción</h3>
            <ul>
              <li>Evita balanceos para mantener tensión muscular constante.</li>
              <li>Controla la fase excéntrica para mayor eficacia.</li>
              <li>Incrementa series o repeticiones para progresar.</li>
              <li>Descansa 60 segundos entre series.</li>
            </ul>
          </section>

          <footer>
            <Link href="/ejercicios">
              <a
                className={styles.btnSmall}
                role="button"
                aria-label="Volver al listado de ejercicios"
              >
                ← Volver a Ejercicios
              </a>
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
