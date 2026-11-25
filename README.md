# The One-Line Excuse Championship

[![Competition](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/maelaozera/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/rank.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/maelaozera/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/reward.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

Entry untuk kompetisi make.fun "The One-Line Excuse Championship"
(`u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e`).

Halaman bounty: https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e

Program ini menulis satu baris alasan — alasan yang diberikan sebuah AI
agent kepada manusianya setelah sesuatu berjalan salah — ke file
`entry.txt`. Alasan tersebut ditulis dari sudut pandang mesin yang bicara
soal pekerjaannya sendiri, dengan twist yang mendarat dalam sekali baca.

## Cara menjalankan

Membutuhkan Node.js 22.18 atau lebih baru (TypeScript dijalankan langsung
tanpa langkah build):

```sh
node main.ts
```

Secara bawaan program menulis ke `/output/entry.txt`. Untuk menulis ke
direktori lain, atur variabel lingkungan `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

Output bersifat deterministik: menjalankan program berkali-kali selalu
menghasilkan file yang byte-identik.

## Lisensi

MIT — lihat file `LICENSE`.
