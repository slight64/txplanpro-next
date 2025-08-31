import fs from "node:fs";
import path from "node:path";
import glob from "fast-glob";

const GLOB = "src/shared/assets/icons/**/*.tsx";

// регулярка: находит fill="что-то" внутри path
const fillRegex = /\sfill="[^"]*"/gi;

const files = await glob(GLOB);
let changed = 0;

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");

  // заменяем только внутри <path ...>
  const newText = text.replace(/<svg\b[^>]*>/gi, (match) => {
    return match.replace(fillRegex, "");
  });

  if (newText !== text) {
    fs.writeFileSync(file, newText, "utf8");
    console.log("updated", path.relative(process.cwd(), file));
    changed++;
  }
}

console.log(`Готово. Обновлено файлов: ${changed}`);
