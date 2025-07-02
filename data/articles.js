// data/articles.js
module.exports = {
  categorias: [
    {
      id: 'rutinas',
      nombre: 'Rutinas de Gimnasio',
      articulos: [
        {
          id: 'powerlifting-4semanas',
          titulo: 'Rutina Powerlifting 4 Semanas',
          contenido: `
            <h2>Rutina Powerlifting para 4 Semanas</h2>
            <p>La rutina powerlifting se centra en aumentar la fuerza máxima en los tres levantamientos principales: sentadilla, press de banca y peso muerto. Esta rutina está diseñada para progresar en 4 semanas, con un enfoque en cargas pesadas y volumen controlado.</p>
            
            <h3>Objetivos</h3>
            <ul>
              <li>Incrementar fuerza máxima en los levantamientos básicos.</li>
              <li>Mejorar técnica y estabilidad en movimientos compuestos.</li>
              <li>Evitar fatiga excesiva mediante una planificación semanal.</li>
            </ul>
            
            <h3>Estructura Semanal</h3>
            <p>Entrena 4 días a la semana, alternando entre dos días de fuerza y dos días de asistencia.</p>
            
            <table border="1" cellpadding="8" cellspacing="0">
              <thead>
                <tr><th>Día</th><th>Entrenamiento</th><th>Ejercicios</th></tr>
              </thead>
              <tbody>
                <tr><td>Lunes</td><td>Sentadilla + Accesorios</td><td>
                  <ul>
                    <li>Sentadilla: 4 series x 4-6 repeticiones (85%-90% 1RM)</li>
                    <li>Press Militar: 3x8</li>
                    <li>Buenos Días: 3x10</li>
                    <li>Abdominales: 3x15</li>
                  </ul>
                </td></tr>
                <tr><td>Martes</td><td>Press de banca + Accesorios</td><td>
                  <ul>
                    <li>Press banca: 4x4-6 (85%-90% 1RM)</li>
                    <li>Remo con barra: 3x8</li>
                    <li>Fondos en paralelas: 3x10</li>
                    <li>Face pulls: 3x15</li>
                  </ul>
                </td></tr>
                <tr><td>Jueves</td><td>Peso muerto + Accesorios</td><td>
                  <ul>
                    <li>Peso muerto: 3x3-5 (85%-90% 1RM)</li>
                    <li>Sentadilla frontal ligera: 3x8</li>
                    <li>Dominadas: 3x máximo</li>
                    <li>Plancha abdominal: 3x30 seg</li>
                  </ul>
                </td></tr>
                <tr><td>Viernes</td><td>Accesorios y movilidad</td><td>
                  <ul>
                    <li>Press militar ligero: 3x10</li>
                    <li>Hip thrust: 3x12</li>
                    <li>Curl femoral: 3x15</li>
                    <li>Estiramientos y movilidad: 15 minutos</li>
                  </ul>
                </td></tr>
              </tbody>
            </table>

            <h3>Consejos para progresar</h3>
            <ol>
              <li>Incrementa el peso progresivamente cada semana, pero prioriza la técnica.</li>
              <li>Descansa al menos 2 minutos entre series pesadas.</li>
              <li>Duerme mínimo 7-8 horas para facilitar la recuperación.</li>
              <li>Controla tu alimentación para sostener la energía y fuerza.</li>
            </ol>

            <h3>Advertencias</h3>
            <p>Si sientes dolor o molestias articulares, detente y revisa tu técnica. El powerlifting con cargas altas puede ser muy exigente para el sistema nervioso y muscular.</p>
          `
        },
        {
          id: 'fullbody-principiantes',
          titulo: 'Rutina Full Body para Principiantes',
          contenido: `
            <h2>Rutina Full Body para Principiantes</h2>
            <p>Esta rutina está diseñada para personas que comienzan en el gimnasio, buscando una base sólida de fuerza, resistencia y técnica. Se trabaja todo el cuerpo en cada sesión, ideal para 3 días por semana.</p>

            <h3>Objetivos</h3>
            <ul>
              <li>Mejorar la condición física general.</li>
              <li>Aprender la técnica correcta de ejercicios básicos.</li>
              <li>Desarrollar fuerza y resistencia muscular.</li>
            </ul>

            <h3>Plan semanal</h3>
            <p>Entrenamiento lunes, miércoles y viernes, dejando días intermedios para recuperación.</p>

            <h3>Ejercicios y series</h3>
            <ul>
              <li>Sentadillas con peso corporal o barra: 3 series de 12 repeticiones</li>
              <li>Press de banca con barra o mancuernas: 3x10</li>
              <li>Remo con mancuernas o barra: 3x10</li>
              <li>Press militar con mancuernas: 3x10</li>
              <li>Plancha abdominal: 3x20 segundos</li>
              <li>Elevaciones de talones para gemelos: 3x15</li>
            </ul>

            <h3>Consejos para principiantes</h3>
            <ol>
              <li>Prioriza la técnica correcta por encima del peso levantado.</li>
              <li>Calienta antes de cada sesión (5-10 minutos de cardio ligero).</li>
              <li>Estira al finalizar para mejorar la movilidad.</li>
              <li>Mantén una hidratación adecuada durante el entrenamiento.</li>
            </ol>

            <h3>Errores comunes</h3>
            <ul>
              <li>Intentar levantar demasiado peso al inicio.</li>
              <li>Negligencia en la técnica, especialmente en sentadillas y press de banca.</li>
              <li>Falta de descanso entre sesiones.</li>
              <li>Olvidar la importancia del calentamiento y estiramientos.</li>
            </ul>

            <h3>Adaptaciones</h3>
            <p>Si tienes problemas articulares o lesiones previas, consulta con un profesional para adaptar los ejercicios.</p>
          `
        }
      ]
    },
    // Las otras categorías siguen igual, puedes completar luego
    {
      id: 'nutricion',
      nombre: 'Nutrición Deportiva',
      articulos: [
        { id: 'proteinas-mitos', titulo: 'Mitos sobre las Proteínas', contenido: '¿Cuánta proteína necesitas realmente?' },
        { id: 'suplementos-basicos', titulo: 'Suplementos Básicos para Ganar Masa', contenido: 'Lo que funciona y lo que no...' }
      ]
    },
    {
      id: 'equipamiento',
      nombre: 'Equipamiento y Accesorios',
      articulos: [
        { id: 'mejores-zapatillas', titulo: 'Las Mejores Zapatillas para Entrenar', contenido: 'Comodidad y soporte para tus pies.' },
        { id: 'guantes-gimnasio', titulo: '¿Valen la pena los Guantes?', contenido: 'Pros y contras de usar guantes en el gym.' }
      ]
    },
    {
      id: 'motivacion',
      nombre: 'Motivación y Psicología',
      articulos: [
        { id: 'constancia', titulo: 'La Clave es la Constancia', contenido: 'Cómo mantener la motivación a largo plazo.' },
        { id: 'superar-fracasos', titulo: 'Superar Fracasos en el Entrenamiento', contenido: 'Aprende a seguir adelante.' }
      ]
    },
    {
      id: 'lesiones',
      nombre: 'Prevención y Lesiones',
      articulos: [
        { id: 'dolor-espalda', titulo: 'Cómo Evitar el Dolor de Espalda', contenido: 'Técnicas para cuidar tu columna.' },
        { id: 'recuperacion', titulo: 'Recuperación Post-Entreno', contenido: 'Importancia del descanso y el sueño.' }
      ]
    }
  ]
};
