---
title: Konsep Dasar Komputer
description: Memahami komponen komputer, cara kerja sistem, serta alur input, proses, output, dan penyimpanan data.
---

# Konsep Dasar Komputer

Komputer adalah sistem elektronik yang menerima data, mengolahnya berdasarkan instruksi, menghasilkan informasi, dan dapat menyimpan hasil pengolahan tersebut. Komputer bukan hanya PC atau laptop: server, smartphone, ATM, dan banyak perangkat lain juga menggunakan prinsip komputasi.

## Tujuan pembelajaran

Setelah mempelajari halaman ini, kamu diharapkan mampu:

- Menjelaskan perbedaan data dan informasi.
- Mengidentifikasi perangkat input, pemrosesan, output, dan penyimpanan.
- Menjelaskan alur kerja dasar komputer.
- Membedakan perangkat keras (_hardware_), perangkat lunak (_software_), dan pengguna (_brainware_).

## 1. Model dasar kerja komputer

Model yang umum digunakan untuk menjelaskan cara kerja komputer adalah **Input → Process → Output**, dengan penyimpanan sebagai bagian pendukung. Data masuk melalui perangkat input, diproses oleh CPU dengan bantuan memori, lalu hasilnya ditampilkan atau disimpan.

<div role="img" aria-label="Bagan alur kerja komputer dari input menuju proses, output, dan penyimpanan" style="max-width: 760px; margin: 1.5rem auto;">
  <svg viewBox="0 0 760 250" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ipo-title ipo-desc">
    <title id="ipo-title">Model Input, Process, Output, dan Storage</title>
    <desc id="ipo-desc">Data masuk melalui perangkat input, diproses oleh CPU dan memori, menghasilkan output, dan dapat disimpan ke media penyimpanan.</desc>
    <defs>
      <marker id="ipo-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/>
      </marker>
    </defs>
    <g fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#ipo-arrow)">
      <path d="M170 91 H215"/>
      <path d="M375 91 H420"/>
      <path d="M500 125 V164"/>
      <path d="M420 199 H375"/>
    </g>
    <g stroke="currentColor" stroke-width="1.5">
      <rect x="10" y="55" width="160" height="72" rx="12" fill="#dbeafe"/>
      <rect x="215" y="55" width="160" height="72" rx="12" fill="#dcfce7"/>
      <rect x="420" y="55" width="160" height="72" rx="12" fill="#fef3c7"/>
      <rect x="215" y="164" width="160" height="70" rx="12" fill="#f3e8ff"/>
    </g>
    <g fill="#172033" text-anchor="middle" font-family="system-ui, sans-serif">
      <text x="90" y="84" font-size="17" font-weight="700">INPUT</text>
      <text x="90" y="106" font-size="12">Keyboard, mouse</text>
      <text x="295" y="84" font-size="17" font-weight="700">PROCESS</text>
      <text x="295" y="106" font-size="12">CPU dan memori</text>
      <text x="500" y="84" font-size="17" font-weight="700">OUTPUT</text>
      <text x="500" y="106" font-size="12">Monitor, printer</text>
      <text x="295" y="193" font-size="17" font-weight="700">STORAGE</text>
      <text x="295" y="214" font-size="12">SSD, HDD, flash drive</text>
    </g>
    <g fill="currentColor" font-family="system-ui, sans-serif" font-size="11">
      <text x="191" y="80" text-anchor="middle">Data</text>
      <text x="398" y="80" text-anchor="middle">Hasil</text>
      <text x="515" y="148">Simpan hasil</text>
      <text x="398" y="188" text-anchor="middle">Ambil / simpan</text>
    </g>
  </svg>
</div>

<small>Bagan 1. Model sederhana alur data pada komputer. Penyimpanan dapat digunakan sebelum, selama, atau setelah proses, tergantung aplikasi.</small>

### A. Input

Input adalah data atau instruksi yang dimasukkan ke komputer.

Contoh perangkat input:

- Keyboard untuk memasukkan teks atau perintah.
- Mouse atau touchpad untuk memilih objek.
- Scanner untuk mengubah dokumen fisik menjadi data digital.
- Mikrofon untuk memasukkan suara.
- Sensor untuk membaca kondisi lingkungan.

### B. Process

Pemrosesan dilakukan terutama oleh **Central Processing Unit (CPU)** dengan dukungan RAM dan komponen lainnya.

- **CPU:** menjalankan instruksi dan melakukan operasi aritmetika maupun logika.
- **RAM:** menyimpan sementara data dan instruksi yang sedang digunakan. Isinya umumnya hilang ketika daya mati.
- **GPU:** mempercepat pemrosesan grafis dan jenis komputasi tertentu.
- **Motherboard:** menghubungkan komponen agar dapat berkomunikasi.

### C. Output

Output adalah hasil pemrosesan yang disampaikan kepada pengguna atau sistem lain.

Contohnya:

- Monitor menampilkan teks, gambar, dan antarmuka.
- Printer menghasilkan dokumen fisik.
- Speaker menghasilkan suara.
- Port jaringan mengirimkan data ke perangkat lain.

Sebuah perangkat bisa memiliki lebih dari satu fungsi. Layar sentuh, misalnya, berfungsi sebagai output sekaligus input.

### D. Storage

Storage menyimpan data dalam jangka lebih panjang dibandingkan RAM.

| Media                | Fungsi umum                          | Catatan                                  |
| -------------------- | ------------------------------------ | ---------------------------------------- |
| SSD                  | Menyimpan OS, aplikasi, dan file     | Cepat, tidak memiliki bagian bergerak    |
| HDD                  | Menyimpan OS, aplikasi, dan file     | Umumnya ekonomis untuk kapasitas besar   |
| Flash drive          | Memindahkan atau menyimpan file      | Mudah dibawa                             |
| NAS / server storage | Penyimpanan bersama melalui jaringan | Membutuhkan konfigurasi akses dan backup |

**Jangan samakan RAM dengan storage.** RAM adalah ruang kerja sementara; SSD atau HDD menyimpan data meskipun komputer dimatikan.

## 2. Contoh alur input dan output

Contoh: pengguna mengetik `2 + 3` pada aplikasi kalkulator.

<div role="img" aria-label="Urutan proses ketika pengguna menghitung dua tambah tiga menggunakan kalkulator" style="max-width: 720px; margin: 1.5rem auto;">
  <svg viewBox="0 0 720 350" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="calc-title calc-desc">
    <title id="calc-title">Contoh proses kalkulator</title>
    <desc id="calc-desc">Pengguna memasukkan angka dan operator, aplikasi menerima input, CPU melakukan operasi, hasil lima ditampilkan, dan hasil dapat disimpan jika aplikasi mendukungnya.</desc>
    <defs>
      <marker id="calc-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/>
      </marker>
    </defs>
    <g stroke="currentColor" stroke-width="1.5" fill="none" marker-end="url(#calc-arrow)">
      <path d="M360 58 V83"/>
      <path d="M360 127 V152"/>
      <path d="M360 196 V221"/>
      <path d="M360 265 V290"/>
    </g>
    <g stroke="currentColor" stroke-width="1.5">
      <rect x="150" y="12" width="420" height="46" rx="10" fill="#dbeafe"/>
      <rect x="150" y="83" width="420" height="44" rx="10" fill="#dcfce7"/>
      <rect x="150" y="152" width="420" height="44" rx="10" fill="#fef3c7"/>
      <rect x="150" y="221" width="420" height="44" rx="10" fill="#ffedd5"/>
      <rect x="150" y="290" width="420" height="44" rx="10" fill="#f3e8ff"/>
    </g>
    <g fill="#172033" text-anchor="middle" font-family="system-ui, sans-serif">
      <text x="360" y="40" font-size="15" font-weight="700">1. INPUT</text>
      <text x="360" y="110" font-size="14">Pengguna mengetik 2 + 3</text>
      <text x="360" y="179" font-size="14">2. PROCESS: aplikasi menjalankan operasi</text>
      <text x="360" y="248" font-size="14">3. OUTPUT: layar menampilkan 5</text>
      <text x="360" y="317" font-size="14">4. STORAGE: opsional, jika hasil disimpan</text>
    </g>
  </svg>
</div>

<small>Bagan 2. Contoh proses pengolahan data. Hasil kalkulator tidak otomatis tersimpan ke file; penyimpanan bergantung pada fitur aplikasi.</small>

Urutannya:

1. Pengguna memasukkan angka dan operator melalui keyboard atau tombol aplikasi.
2. Aplikasi menerima input dan meminta sistem menjalankan operasi.
3. CPU melakukan operasi aritmetika sesuai instruksi.
4. Aplikasi menampilkan hasil `5` pada layar.
5. Jika pengguna menyimpan hasil ke file atau riwayat, data tersebut ditulis ke storage.

## 3. Komponen utama sistem komputer

Sistem komputer dapat dipahami melalui tiga unsur yang saling bergantung.

| Unsur     | Penjelasan                                   | Contoh                            |
| --------- | -------------------------------------------- | --------------------------------- |
| Hardware  | Komponen fisik                               | CPU, RAM, SSD, monitor            |
| Software  | Instruksi dan program                        | Windows, Linux, browser, aplikasi |
| Brainware | Orang yang menggunakan atau mengelola sistem | Pengguna, operator, administrator |

Hardware tanpa software tidak menjalankan fungsi komputer modern secara berguna. Software juga membutuhkan hardware untuk dieksekusi, sementara manusia menentukan tujuan penggunaan dan mengelola sistem.

## 4. Apa yang terjadi ketika komputer dinyalakan?

Secara sederhana, urutan proses booting adalah:

```text
Tombol power ditekan
        ↓
Firmware UEFI/BIOS melakukan inisialisasi
        ↓
Perangkat boot ditemukan
        ↓
Bootloader dijalankan
        ↓
Kernel sistem operasi dimuat
        ↓
Driver dan layanan dimulai
        ↓
Layar login atau desktop muncul
```

Detailnya berbeda menurut perangkat, firmware, sistem operasi, dan konfigurasi keamanan. Namun, urutan ini cukup untuk memahami bahwa komputer tidak langsung menjalankan desktop begitu tombol power ditekan.

## 5. Istilah yang perlu dibedakan

- **Data:** fakta mentah, misalnya angka `2` dan `3`.
- **Informasi:** hasil yang memiliki makna, misalnya hasil penjumlahan `5`.
- **Instruksi:** perintah yang memberi tahu komputer apa yang harus dilakukan.
- **Program:** kumpulan instruksi yang menjalankan tugas.
- **Proses:** program yang sedang dieksekusi oleh sistem operasi.

## 6. Praktik sederhana

Coba identifikasi alur input, proses, output, dan storage pada kegiatan berikut:

1. Mengetik dokumen di aplikasi pengolah kata.
2. Mencetak dokumen ke printer.
3. Mengunduh file dari internet.
4. Menyalin file ke flash drive.
5. Membuka situs web melalui browser.

Untuk setiap kegiatan, tuliskan data masuknya, komponen yang memproses, hasil yang keluar, dan apakah data disimpan secara permanen.

## Ringkasan

- Komputer menerima input, memproses instruksi, dan menghasilkan output.
- CPU menjalankan instruksi, sedangkan RAM menjadi ruang kerja sementara.
- SSD, HDD, dan media sejenis menyimpan data dalam jangka lebih panjang.
- Hardware, software, dan brainware saling mendukung.
- Proses booting melibatkan firmware, bootloader, kernel, driver, dan layanan sistem operasi.

## Uji pemahaman

1. Apa perbedaan RAM dan SSD?
2. Mengapa layar sentuh dapat disebut perangkat input sekaligus output?
3. Saat menyimpan dokumen, bagian mana yang bertindak sebagai media penyimpanan?

## Materi berikutnya

Lanjutkan ke **Perangkat Keras Komputer**, lalu **Sistem Operasi**, sebelum masuk ke dasar jaringan komputer.
