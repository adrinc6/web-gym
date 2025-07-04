import fs from 'fs';
import path from 'path';

export function getActiveArticles() {
  const articlesDir = path.join(process.cwd(), 'articles', 'activos');
  const filenames = fs.readdirSync(articlesDir);
  const articles = filenames.map((name) => {
    const filePath = path.join(articlesDir, name);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  });
  return articles;
}
