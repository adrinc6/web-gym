import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';

export default function Fullbody() {
  return (
    <>
      <Head>
        <title>Entrena en Casa - Rutina Fullbody Completa</title>
        <meta
          name="description"
          content="Rutina Fullbody completa para entrenar todo el cuerpo en casa con o sin material. Incluye tabla, consejos y progresiones."
        />
        <meta
          name="keywords"
          content="rutina fullbody, entrenamiento completo, casa, sin material, calistenia"
        />
        <meta name="author" content="Adrián" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <article>
          <header>
            <h2>Rutina Fullbody Completa para Entrenamiento en Casa</h2>
            <p>
              Una rutina integral para trabajar todos los grupos musculares en casa. Equilibrio perfecto entre fuerza y resistencia, adaptada para hacerla sin material o con implementos básicos.
            </p>
          </header>

          <section>
            <h3>Objetivo de la Rutina</h3>
            <p>
              Esta rutina está diseñada para mejorar la fuerza general, tonificar el cuerpo y desarrollar resistencia muscular en un solo entrenamiento. Es ideal para principiantes o intermedios que quieren entrenar en casa sin complicaciones.
            </p>
          </section>

          <section>
            <h3>Material Opcional</h3>
            <ul>
              <li>Esterilla o colchoneta para comodidad en el suelo</li>
              <li>Bandas elásticas para añadir resistencia</li>
              <li>Silla estable o mesa baja para remo invertido</li>
              <li>Botellas de agua o mochilas cargadas como peso extra</li>
            </ul>
          </section>

          <section>
            <h3>Tabla de Ejercicios</h3>
            <table className={styles.exerciseTable}>
              <thead>
                <tr>
                  <th>Ejercicio</th>
                  <th>Series</th>
                  <th>Repeticiones / Tiempo</th>
                  <th>Músculos Trabajados</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sentadillas (Squats)</td>
                  <td>4</td>
                  <td>12-20 rep</td>
                  <td>Piernas, glúteos, core</td>
                </tr>
                <tr>
                  <td>Flexiones de pecho</td>
                  <td>4</td>
                  <td>10-15 rep</td>
                  <td>Pecho, hombros, tríceps</td>
                </tr>
                <tr>
                  <td>Remo invertido</td>
                  <td>4</td>
                  <td>8-12 rep</td>
                  <td>Espalda, bíceps</td>
                </tr>
                <tr>
                  <td>Plancha frontal</td>
                  <td>3</td>
                  <td>30-60 s</td>
                  <td>Abdominales, core</td>
                </tr>
                <tr>
                  <td>Puente de glúteos</td>
                  <td>3</td>
                  <td>15-20 rep</td>
                  <td>Glúteos, isquiotibiales, core</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Progresión y Adaptaciones</h3>
            <ul>
              <li>Para principiantes: Reducir las series a 2-3 o usar apoyo para las flexiones.</li>
              <li>Para avanzados: Añadir peso (mochila), usar bandas o reducir descanso.</li>
              <li>Controla el movimiento: lento en la fase de bajada, explosivo al subir.</li>
              <li>Anota tus repeticiones para medir el progreso semana a semana.</li>
            </ul>
          </section>

          <section>
            <h3>Consejos Generales</h3>
            <ul>
              <li>Calienta 5-10 minutos con movilidad articular y estiramientos dinámicos.</li>
              <li>Respira correctamente: inhala al bajar, exhala al subir o al hacer fuerza.</li>
              <li>Descansa entre 60 y 90 segundos entre series para mantener intensidad.</li>
              <li>Enfócate en la técnica para prevenir lesiones.</li>
              <li>Hidrátate bien antes, durante y después del entrenamiento.</li>
            </ul>
          </section>

          <section>
            <h3>Ejemplo de Calentamiento</h3>
            <ul>
              <li>30s rotación de brazos y hombros</li>
              <li>30s rotación de cadera y torso</li>
              <li>30s sentadillas lentas sin peso</li>
              <li>30s saltos suaves en el sitio o jumping jacks</li>
            </ul>
            <p>El calentamiento prepara músculos y articulaciones reduciendo el riesgo de lesiones.</p>
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
