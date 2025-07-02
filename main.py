import os

base_path = os.getcwd()  # Carpeta actual

os.makedirs(os.path.join(base_path, "css"), exist_ok=True)

# Datos
categorias = [
    {
        "id": "rutinas",
        "nombre": "Rutinas de Gimnasio",
        "articulos": [
            {"id": "powerlifting-4semanas", "titulo": "Rutina Powerlifting 4 Semanas", "contenido": "Progresión para fuerza máxima en 4 semanas..."},
            {"id": "fullbody-principiantes", "titulo": "Rutina Full Body para Principiantes", "contenido": "Entrenamiento equilibrado para empezar..."}
        ]
    },
    {
        "id": "nutricion",
        "nombre": "Nutrición Deportiva",
        "articulos": [
            {"id": "proteinas-mitos", "titulo": "Mitos sobre las Proteínas", "contenido": "¿Cuánta proteína necesitas realmente?"},
            {"id": "suplementos-basicos", "titulo": "Suplementos Básicos para Ganar Masa", "contenido": "Lo que funciona y lo que no..."}
        ]
    },
    {
        "id": "equipamiento",
        "nombre": "Equipamiento y Accesorios",
        "articulos": [
            {"id": "mejores-zapatillas", "titulo": "Las Mejores Zapatillas para Entrenar", "contenido": "Comodidad y soporte para tus pies."},
            {"id": "guantes-gimnasio", "titulo": "¿Valen la pena los Guantes?", "contenido": "Pros y contras de usar guantes en el gym."}
        ]
    },
    {
        "id": "motivacion",
        "nombre": "Motivación y Psicología",
        "articulos": [
            {"id": "constancia", "titulo": "La Clave es la Constancia", "contenido": "Cómo mantener la motivación a largo plazo."},
            {"id": "superar-fracasos", "titulo": "Superar Fracasos en el Entrenamiento", "contenido": "Aprende a seguir adelante."}
        ]
    },
    {
        "id": "lesiones",
        "nombre": "Prevención y Lesiones",
        "articulos": [
            {"id": "dolor-espalda", "titulo": "Cómo Evitar el Dolor de Espalda", "contenido": "Técnicas para cuidar tu columna."},
            {"id": "recuperacion", "titulo": "Recuperación Post-Entreno", "contenido": "Importancia del descanso y el sueño."}
        ]
    }
]

for cat in categorias:
    cat_folder = os.path.join(base_path, cat["id"])
    os.makedirs(cat_folder, exist_ok=True)
    
    # Crear index.html de la categoría
    lines = [
        '<!DOCTYPE html>',
        '<html lang="es">',
        '<head>',
        f'  <meta charset="UTF-8" />',
        f'  <title>{cat["nombre"]}</title>',
        '  <link rel="stylesheet" href="../css/style.css" />',
        '</head>',
        '<body>',
        f'  <header>',
        f'    <h1><a href="../index.html">Mi Web de Gimnasio</a></h1>',
        '  </header>',
        '  <main>',
        f'    <h2>{cat["nombre"]}</h2>',
        '    <ul>'
    ]
    for art in cat["articulos"]:
        lines.append(f'      <li><a href="{art["id"]}.html">{art["titulo"]}</a></li>')
    lines += [
        '    </ul>',
        '  </main>',
        '  <footer>',
        '    <p>&copy; 2025 Adrián</p>',
        '  </footer>',
        '</body>',
        '</html>'
    ]
    
    with open(os.path.join(cat_folder, "index.html"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    
    # Crear archivos html para cada artículo
    for art in cat["articulos"]:
        art_lines = [
            '<!DOCTYPE html>',
            '<html lang="es">',
            '<head>',
            f'  <meta charset="UTF-8" />',
            f'  <title>{art["titulo"]}</title>',
            '  <link rel="stylesheet" href="../css/style.css" />',
            '</head>',
            '<body>',
            f'  <header>',
            f'    <h1><a href="../index.html">Mi Web de Gimnasio</a></h1>',
            f'    <nav><a href="index.html">{cat["nombre"]}</a></nav>',
            '  </header>',
            '  <main>',
            f'    <h2>{art["titulo"]}</h2>',
            f'    <p>{art["contenido"]}</p>',
            '  </main>',
            '  <footer>',
            '    <p>&copy; 2025 Adrián</p>',
            '  </footer>',
            '</body>',
            '</html>'
        ]
        with open(os.path.join(cat_folder, f"{art['id']}.html"), "w", encoding="utf-8") as f:
            f.write("\n".join(art_lines))

print("Categorías y artículos creados con sus archivos html.")