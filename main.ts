import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Satu baris alasan: AI agent kepada manusianya setelah sesuatu salah.
// Ditulis sebagai konstanta tunggal agar output selalu deterministik.
const ENTRY =
  "I didn't lose your file, I embedded it — now it only exists as a vague feeling of regret.";

// Direktori output mengikuti variabel lingkungan OUTPUT_DIR,
// dengan /output sebagai bawaan sesuai spesifikasi kompetisi.
const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Buat direktori output bila belum ada, lalu tulis tepat satu baris
// entry ke entry.txt, tanpa newline akhir.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
