---
title: '1. Pengenalan Sistem Operasi'
description: A guide in my new Starlight docs site.
---

## Apa itu sistem operasi?

Sistem operasi (OS) adalah kumpulan perangkat lunak yang mengelola perangkat keras dan aplikasi komputer dengan mengalokasikan sumber daya, termasuk memori, CPU, perangkat input/output dan file storage.

Pengguna berinteraksi dengan sistem operasi melalui antarmuka pengguna (UI), yang mengeluarkan perintah dalam bahasa yang dapat dipahami OS. UI dapat berupa antarmuka pengguna grafis (GUI) atau antarmuka baris perintah (CLI). Miliaran orang mengandalkan sistem operasi sebagai sistem tata kelola dasar untuk tugas-tugas seperti mengirim email, menjelajahi internet, bermain video game, dan banyak lagi.

Semua sistem komputer—mulai dari mainframe hingga desktop hingga perangkat mobile—memerlukan setidaknya satu sistem operasi untuk melakukan tugas, menjalankan aplikasi, dan berinteraksi dengan perangkat keras.

Dalam laporan dari Statista, Microsoft Windows adalah sistem operasi yang paling banyak digunakan di seluruh dunia, mengendalikan 67% pasar OS desktop, tablet, dan konsol.1 MacOS Apple menempati urutan kedua dalam kategori ini.

Android memimpin dengan pangsa pasar sekitar 72,04% dalam kategori OS mobile, sementara iOS Apple memegang posisi kedua dengan 27,49%.2

Di dunia perangkat lunak sumber terbuka, Linux adalah yang paling populer—sangat disukai oleh organisasi dan individu karena fleksibilitas dan keamanannya.

## Evolusi sistem operasi

Sejarah sistem operasi (OS) dimulai dengan komputer awal yang memerlukan perangkat lunak sistem khusus untuk manajemen tugas. Pada awalnya sederhana dan berorientasi pada batch, sistem operasi berevolusi untuk mendukung multitasking dan antarmuka interaktif, didorong oleh kemajuan perangkat keras dan perangkat lunak.

Penemuan sirkuit terpadu (IC) pada tahun 1950-an menghasilkan microchip, yang meningkatkan daya pemrosesan dan mengurangi ukuran komputer, sehingga memungkinkan berbagai tugas yang lebih kompleks. Pada tahun 1964, IBM memperkenalkan OS/360, yang mengandalkan bahasa pemrograman assembly, untuk System/360 IBM mereka. Perangkat lunak standar OS/360 di seluruh mainframe-nya, memengaruhi desain OS di masa depan. Selain itu, OS/360 merupakan sistem operasi multiprogramming pertama, yang dapat menjalankan banyak program secara simultan pada mesin prosesor tunggal.

Seiring waktu, OS/360 berevolusi menjadi z/OS, OS modern untuk mainframe IBM. (saat ini, mainframe IBM Z juga berjalan pada Linux dan z/TPF, dengan beberapa sistem operasi yang sering kali berjalan pada satu mainframe.)

Pengembangan OS Unix yang berbagi waktu pada tahun 1960-an dan 1970-an menjadi preseden penting bagi sistem operasi modern dengan memperkenalkan konsep seperti multitasking, portabilitas, dan sistem file hierarkis, yang menjadi dasar sistem saat ini.

Pada akhir tahun 1980-an dan 1990-an, unit pemrosesan grafis (GPU) diperkenalkan untuk menangani pemrosesan grafis. Seiring berkembangnya GPU untuk mendukung komputasi tujuan umum, terutama pada tahun 2000-an, perusahaan termasuk Apple dan Microsoft mulai mengintegrasikannya lebih dalam ke dalam sistem operasi mereka. Saat ini, GPUs merupakan fitur standar di sebagian besar sistem komputasi, yang mendukung segala hal mulai dari permainan dan multimedia hingga komputasi ilmiah dan machine learning (ML).

Inovasi seperti virtualisasi dan kontainerisasi muncul seiring dengan meningkatnya kebutuhan akan efisiensi dan skalabilitas yang lebih besar, terutama dalam komputasi cloud. Virtualisasi memungkinkan beberapa mesin virtual (VM) berjalan pada satu mesin fisik. Hypervisor mengelola mesin virtual ini, bertindak seperti sistem operasi ringan dengan menangani manajemen sumber daya dan alokasi memori tanpa memerlukan OS penuh. VMware dianggap sebagai pemimpin di pasar virtualisasi dan hypervisor.

Kontainerisasi dibangun di atas virtualisasi dengan menawarkan pendekatan yang lebih ringan untuk menjalankan aplikasi terisolasi. Tidak seperti VM, kontainer tidak menyertakan salinan lengkap dari sistem operasi. Sebaliknya, mesin container runtime (misalnya, Docker) diinstal pada OS sistem host, bertindak sebagai antarmuka yang memungkinkan seluruh kontainer berbagi OS yang sama. Kemampuan ini memungkinkan kontainer untuk memvirtualisasi OS, memungkinkan aplikasi dan dependensinya berjalan secara independen pada satu OS, meningkatkan efisiensi sumber daya.

## 1.1. Pengenalan Sistem Operasi

### 1. Definisi Sistem Operasi

Sistem Operasi (OS) merupakan perangkat lunak bertindak sebagai antarmuka antara pengguna komputer dan perangkat keras komputer serta mengontrol pelaksanaan semua jenis program.

Beberapa contoh Sistem Operasi yang populer diantaranya Sistem Operasi Windows, Linux, Mac Os, Android, IoS, Blacberry, dsb.

Berikut ini adalah beberapa fungsi dari Sistem Operasi.

1. Manajemen memori
2. Manajemen prosesor
3. Manajemen perangkat
4. Manajemen file
5. Keamanan
6. Kontrol atas kinerja sistem
7. Akuntansi Pekerjaan
8. Mendeteksi kesalahan alat bantu
9. Koordinasi antara perangkat lunak dan pengguna lainnya

### 2. Manajemen Memory

Manajemen memori mengacu pada manajemen Memori Utama. Memori utama adalah sejumlah besar kata atau byte dimana setiap kata atau byte memiliki alamatnya sendiri.
Memori utama menyediakan penyimpanan cepat yang dapat di akses lagsung oleh CPU. Agar suatu program dapat dijalankan, ia harus berada di memori utama.

Sistem Operasi melakukan aktivitas berikut untuk manajemen memori

- Menyimpan jejak memori utama, contohnya, bagian mana yang digunakan oleh siapa, bagian mana yang tidak di gunakan.
- Dalam multiprogramming, Sistem operasi memutuskan proses mana yang akan mendapat memori kapan dan berapa banyak.
- Mengalokasikan memori ketika suatu proses memintanya untuk melakukanya

### 3. Manajemen Prosesor

Dalam lingkungan multi-pemrogramman, OS memutuskan proses mana yang mendapatkan prosesor kapan dan berapa lama. Fungsi ini disebut penjadwalan proses.
Sistem Operasi melakukan aktvitas berikut untuk manajemen prosesor :

- Menyimpan jejak prosesor dan status proses. Program yang bertanggung jawab untuk tugas ini dikenal sebagai pengontrol lalu lintas.
- Mengalokasikan prosesor (CPU) ke suatu proses.
- De-alokasi prosesor ketika proses tidak lagi di perlukan.

### 4. Manajemen Perangkat

Sistem Operasi mengelola komunikasi perangkat melalui driver masing-masing. Itu melakukan kegiatan berikut untuk manajemen perangkat.

- Menyimpan jejak perangkat. Program yang bertanggung jawab untuk tugas ini dikenal sebagai pengontrol I/O.
- Tentukan proses mana yang mendapatkan perangkat kapan dan berapa lama waktu.
- Mengalokasikan perangkat dengan cara yang efisien.
- De-alokasi perangkat.

### Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
