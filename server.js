const express = require('express');
const app = express();
const port = 3000;

// Importar datos desde archivo externo
const data = require('./data/articles');

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Archivos estáticos (CSS, JS)
app.use(express.static(__dirname + '/public'));

// Ruta principal: lista categorías
app.get('/', (req, res) => {
  res.render('index', { categorias: data.categorias });
});

// Ruta para categoría (lista artículos)
app.get('/categoria/:id', (req, res) => {
  const categoria = data.categorias.find(cat => cat.id === req.params.id);
  if (!categoria) return res.status(404).send('Categoría no encontrada');
  res.render('category', { categoria });
});

// Ruta para artículo
app.get('/categoria/:catId/articulo/:artId', (req, res) => {
  const categoria = data.categorias.find(cat => cat.id === req.params.catId);
  if (!categoria) return res.status(404).send('Categoría no encontrada');
  const articulo = categoria.articulos.find(a => a.id === req.params.artId);
  if (!articulo) return res.status(404).send('Artículo no encontrado');
  res.render('article', { categoria, articulo });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
