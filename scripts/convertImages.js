const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const inputDir = path.join(__dirname, "../src/source"); // 원본 이미지 폴더
const outputDir = path.join(__dirname, "../src/source/webp"); // 변환된 이미지 저장 폴더

fs.ensureDirSync(outputDir); 

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".jpg" || ext === ".png") {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file.replace(ext, ".webp"));

    sharp(inputFilePath)
      .webp({ quality: 80 }) // WebP 변환, 품질 80%
      .toFile(outputFilePath)
      .then(() => console.log(`✅ Converted: ${file} → ${path.basename(outputFilePath)}`))
      .catch((err) => console.error(`❌ Error converting ${file}:`, err));
  }
});