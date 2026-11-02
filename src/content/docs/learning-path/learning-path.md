---
title: Peta Belajar IT
description: Jalur belajar dokumentasi IT dari fondasi komputer dan jaringan hingga infrastruktur, cloud, dan keamanan.
---

# Peta Belajar IT

Dokumentasi ini disusun sebagai jalur belajar bertahap. Jika kamu baru mulai, ikuti urutan dari atas ke bawah. Jika sudah bekerja di bidang IT, kamu bisa langsung membuka bagian yang sesuai dengan kebutuhanmu.

> **Saran:** kuasai konsep dan praktik dasarnya terlebih dahulu. Menghafal menu perangkat tanpa memahami IP, routing, DNS, dan cara troubleshooting biasanya hanya membuat masalah sederhana terasa seperti bencana nasional.

## Jalur belajar utama

```text
Fondasi IT                              [Pemula · 8–10 jam]
   ↓
Sistem Operasi & Command Line          [Pemula · 12–15 jam]
   ↓
Dasar Jaringan Komputer                [Pemula · 15–20 jam]
   ↓
IP Addressing & Subnetting             [Pemula–Menengah · 10–12 jam]
   ↓
Switching & VLAN                       [Menengah · 12–15 jam]
   ↓
Routing & Layanan Jaringan             [Menengah · 15–18 jam]
   ↓
Wi-Fi & Infrastruktur LAN              [Menengah · 10–12 jam]
   ↓
Administrasi Perangkat & Vendor        [Menengah · 15–20 jam]
   ↓
Server, Virtualisasi & Storage         [Menengah · 15–18 jam]
   ↓
Cloud Fundamentals                     [Menengah · 10–12 jam]
   ↓
Monitoring & Troubleshooting           [Menengah · 12–15 jam]
   ↓
Keamanan Infrastruktur                 [Menengah–Mahir · 18–22 jam]
   ↓
Otomasi & Scripting                    [Menengah–Mahir · 12–15 jam]
   ↓
Dokumentasi & Praktik Kerja            [Semua level · 8–10 jam]
```

## 1. Fondasi IT

Pelajari komponen komputer, cara sistem operasi bekerja, dan konsep dasar layanan IT sebelum masuk ke konfigurasi perangkat jaringan.

- [Konsep dasar komputer](/docs/fundamental-it/konsep-komputer/)
- [Perangkat keras dan periferal](/docs/fundamental-it/hardware/)
- [Dasar sistem operasi](/docs/fundamental-it/sistem-operasi/)
- [Konsep server dan client](/docs/fundamental-it/server-client/)
- [Virtualisasi: konsep dan penggunaan](/docs/fundamental-it/virtualisasi/)

**Target kompetensi:** memahami komponen komputer, peran OS, dan hubungan client-server.

## 2. Sistem Operasi dan Command Line

Pahami administrasi Windows dan Linux. Keduanya sering muncul di lingkungan kerja, meskipun tugas dan alatnya berbeda.

- [Dasar Windows untuk IT Support](/docs/operating-systems/windows/)
- [Dasar Linux](/docs/operating-systems/linux/)
- [Command line Windows: CMD dan PowerShell](/docs/operating-systems/windows-cli/)
- [Terminal Linux dan perintah dasar](/docs/operating-systems/linux-cli/)
- [Pengguna, grup, izin, dan layanan](/docs/operating-systems/users-permissions-services/)

**Target kompetensi:** memeriksa kondisi sistem, mengelola akun dan layanan, serta menjalankan pemeriksaan dasar melalui command line.

## 3. Dasar Jaringan Komputer

Ini adalah fondasi untuk network administrator. Jangan buru-buru masuk ke konfigurasi vendor sebelum memahami konsepnya.

- [Konsep LAN, WAN, dan WLAN](/docs/networking/network-fundamentals/)
- [Model OSI dan TCP/IP](/docs/networking/osi-tcp-ip/)
- [Ethernet, MAC address, dan ARP](/docs/networking/ethernet-mac-arp/)
- [IPv4 dan subnet mask](/docs/networking/ipv4/)
- [Subnetting dan CIDR](/docs/networking/subnetting/)
- [IPv6: pengantar](/docs/networking/ipv6/)
- [Perangkat jaringan: switch, router, access point](/docs/networking/network-devices/)
- [Kabel, konektor, dan media transmisi](/docs/networking/cabling/)

**Target kompetensi:** menjelaskan alur komunikasi perangkat dan menghitung kebutuhan alamat IP untuk jaringan sederhana.

## 4. Switching dan VLAN

Setelah memahami IP dan Ethernet, pelajari cara perangkat dalam satu jaringan lokal saling terhubung dan bagaimana jaringan dipisahkan.

- [Dasar switching](/docs/switching/switching-fundamentals/)
- [VLAN dan access port](/docs/switching/vlan/)
- [Trunk dan tagging 802.1Q](/docs/switching/trunk-8021q/)
- [Inter-VLAN routing](/docs/switching/inter-vlan-routing/)
- [Spanning Tree Protocol (STP)](/docs/switching/stp/)
- [Link aggregation: LACP](/docs/switching/lacp/)

**Praktik:** buat dua VLAN, tempatkan port access, konfigurasi trunk, lalu verifikasi konektivitas dan batas komunikasi antarsubnet.

## 5. Routing dan Layanan Jaringan

Bagian ini menjelaskan bagaimana jaringan yang berbeda berkomunikasi dan bagaimana layanan dasar membuat jaringan dapat digunakan.

- [Routing statis](/docs/routing/static-routing/)
- [Default gateway dan default route](/docs/routing/default-route/)
- [OSPF](/docs/routing/ospf/)
- [BGP: konsep dan penggunaan](/docs/routing/bgp/)
- [DHCP](/docs/network-services/dhcp/)
- [DNS](/docs/network-services/dns/)
- [NAT dan port forwarding](/docs/network-services/nat/)
- [NTP dan sinkronisasi waktu](/docs/network-services/ntp/)
- [Proxy dan captive portal](/docs/network-services/proxy-captive-portal/)

**Target kompetensi:** menelusuri jalur paket, memahami resolusi nama, dan mendiagnosis masalah alamat IP atau gateway.

## 6. Wi-Fi dan Infrastruktur LAN

- [Dasar Wi-Fi dan standar 802.11](/docs/wireless/wifi-fundamentals/)
- [SSID, keamanan, dan autentikasi](/docs/wireless/ssid-security/)
- [Perencanaan access point](/docs/wireless/ap-planning/)
- [Roaming dan interferensi](/docs/wireless/roaming-interference/)
- [Patching, rack, dan labeling kabel](/docs/infrastructure/rack-cabling/)
- [Dokumentasi port switch dan jalur kabel](/docs/infrastructure/port-cable-documentation/)

**Target kompetensi:** melakukan pemasangan dan pemeriksaan jaringan kabel maupun nirkabel secara terstruktur.

## 7. Administrasi Perangkat dan Platform Vendor

Pelajari konsep umum lebih dahulu, lalu praktikkan pada perangkat yang tersedia. Nama menu vendor bisa berubah; prinsip jaringan biasanya lebih tahan lama.

- [MikroTik RouterOS](/docs/vendors/mikrotik/)
- [Cisco: switching dan routing](/docs/vendors/cisco/)
- [UniFi: gateway, switch, dan access point](/docs/vendors/unifi/)
- [OPNsense: firewall dan gateway](/docs/vendors/opnsense/)
- [Linux server services](/docs/vendors/linux-server/)

Setiap tutorial konfigurasi idealnya berisi: **tujuan, topologi, prasyarat, skema IP/VLAN, langkah konfigurasi, verifikasi, troubleshooting, dan cara rollback**.

## 8. Server, Virtualisasi, dan Penyimpanan

- [Dasar server fisik dan layanan](/docs/servers/server-fundamentals/)
- [Virtual machine dan hypervisor](/docs/servers/virtualization/)
- [Docker dan container: pengantar](/docs/servers/containers/)
- [File server dan NAS](/docs/servers/file-server-nas/)
- [Backup, restore, dan uji pemulihan](/docs/servers/backup-restore/)
- [RAID dan redundansi penyimpanan](/docs/servers/raid-storage/)

**Target kompetensi:** memahami dependensi layanan, kapasitas, backup, dan pemulihan setelah kegagalan.

## 9. Monitoring dan Troubleshooting

Troubleshooting bukan menebak-nebak sampai lampu indikator terlihat lebih optimistis. Gunakan hipotesis, bukti, dan pengujian berurutan.

- [Metode troubleshooting berlapis](/docs/troubleshooting/method/)
- [Ping, traceroute, nslookup, dan dig](/docs/troubleshooting/network-tools/)
- [Membaca log sistem dan jaringan](/docs/troubleshooting/logs/)
- [SNMP dan monitoring perangkat](/docs/monitoring/snmp/)
- [Zabbix: monitoring jaringan](/docs/monitoring/zabbix/)
- [Packet capture dengan Wireshark](/docs/monitoring/wireshark/)
- [Dokumentasi insiden dan root cause analysis](/docs/troubleshooting/incident-rca/)

**Target kompetensi:** mengumpulkan bukti, mengisolasi titik gangguan, memperbaiki penyebab, dan mendokumentasikan hasil.

## 10. Keamanan Infrastruktur

Pelajari keamanan setelah memahami cara jaringan dan sistem bekerja. Dengan begitu, aturan firewall tidak berubah menjadi ritual menyalin konfigurasi dari internet.

- [Dasar keamanan jaringan](/docs/security/security-fundamentals/)
- [Firewall, ACL, dan segmentasi](/docs/security/firewall-acl/)
- [Hardening Windows dan Linux](/docs/security/system-hardening/)
- [VPN dan akses jarak jauh](/docs/security/vpn/)
- [IDS/IPS dan Suricata](/docs/security/ids-ips-suricata/)
- [SIEM dan Wazuh](/docs/security/siem-wazuh/)
- [Manajemen akun dan hak akses](/docs/security/access-management/)
- [Patch management dan vulnerability management](/docs/security/vulnerability-management/)
- [Respons insiden dan pengumpulan bukti](/docs/security/incident-response/)

**Target kompetensi:** menerapkan akses minimum, segmentasi, logging, patching, dan respons awal terhadap insiden.

## 11. Otomasi dan Scripting

- [Dasar scripting PowerShell](/docs/automation/powershell/)
- [Dasar Bash](/docs/automation/bash/)
- [Python untuk administrasi jaringan](/docs/automation/python-networking/)
- [REST API dan otomasi konfigurasi](/docs/automation/api-automation/)
- [Git untuk mengelola dokumentasi dan script](/docs/automation/git/)

**Target kompetensi:** mengurangi pekerjaan berulang tanpa mengorbankan kontrol perubahan dan keamanan.

## 12. Dokumentasi, Prosedur, dan Praktik Kerja

- [Membuat diagram topologi jaringan](/docs/operations/network-diagrams/)
- [IP address management dan inventaris](/docs/operations/ipam-inventory/)
- [SOP perubahan konfigurasi](/docs/operations/change-management/)
- [Checklist pemeliharaan berkala](/docs/operations/maintenance-checklist/)
- [Membuat laporan insiden](/docs/operations/incident-report/)
- [Manajemen aset dan siklus hidup perangkat](/docs/operations/asset-management/)

**Target kompetensi:** memastikan konfigurasi, aset, perubahan, dan penanganan insiden dapat dipahami serta diteruskan oleh teknisi lain.

## Jalur belajar berdasarkan tujuan

| Tujuan                                    | Urutan yang disarankan                                                                            |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------- |
| IT Support / Helpdesk                     | Fondasi IT → Windows → jaringan dasar → troubleshooting → inventaris dan dokumentasi              |
| Network Administrator                     | Jaringan dasar → subnetting → switching/VLAN → routing → DHCP/DNS → Wi-Fi → monitoring            |
| IT Infrastructure                         | Jaringan → Linux/Windows Server → virtualisasi → backup → monitoring → otomasi                    |
| Network Security                          | Jaringan → routing/switching → firewall/ACL → VPN → IDS/IPS → SIEM → respons insiden              |
| Persiapan Associate Network Administrator | IP addressing → perangkat jaringan → wireless → switching → routing → praktik dan troubleshooting |

## Cara menggunakan dokumentasi ini

1. Mulai dari jalur yang sesuai dengan tujuanmu.
2. Baca konsep sebelum mengikuti tutorial konfigurasi.
3. Kerjakan praktik di lab atau lingkungan uji, bukan langsung pada jaringan produksi.
4. Verifikasi hasil menggunakan perintah atau bukti yang dicantumkan dalam tutorial.
5. Catat kesalahan, penyebab, dan solusi agar materi berikutnya bisa menjadi referensi kerja.

## Catatan untuk kontributor

Tautan di halaman ini merupakan struktur yang disarankan. Buat halaman tujuan dengan slug yang sesuai, atau ubah tautannya mengikuti struktur folder dokumentasi yang benar-benar digunakan proyek Astro Starlight kamu.
