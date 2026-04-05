import fs from "node:fs";
import path from "node:path";

const distAssetsDir = path.resolve("dist", "assets");

if (!fs.existsSync(distAssetsDir)) {
  console.error("dist/assets not found. Run `npm run build` first.");
  process.exit(1);
}

const files = fs
  .readdirSync(distAssetsDir, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => {
    const fullPath = path.join(distAssetsDir, entry.name);
    const size = fs.statSync(fullPath).size;
    const ext = path.extname(entry.name).toLowerCase();
    let type = "other";

    if (ext === ".js") type = "js";
    else if (ext === ".css") type = "css";
    else if ([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"].includes(ext)) type = "image";

    return { name: entry.name, size, type };
  });

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const byType = ["js", "css", "image", "other"].map((type) => {
  const typeFiles = files.filter((file) => file.type === type);
  const total = typeFiles.reduce((sum, file) => sum + file.size, 0);
  return { type, total, count: typeFiles.length };
});

const topFiles = [...files].sort((a, b) => b.size - a.size).slice(0, 12);
const topJs = files.filter((file) => file.type === "js").sort((a, b) => b.size - a.size).slice(0, 10);
const topImages = files.filter((file) => file.type === "image").sort((a, b) => b.size - a.size).slice(0, 10);

console.log("Bundle summary");
for (const item of byType) {
  if (!item.count) continue;
  console.log(`- ${item.type}: ${formatBytes(item.total)} across ${item.count} files`);
}

console.log("\nTop files");
for (const file of topFiles) {
  console.log(`- ${file.name}: ${formatBytes(file.size)} (${file.type})`);
}

console.log("\nTop JS chunks");
for (const file of topJs) {
  console.log(`- ${file.name}: ${formatBytes(file.size)}`);
}

console.log("\nTop images");
for (const file of topImages) {
  console.log(`- ${file.name}: ${formatBytes(file.size)}`);
}
