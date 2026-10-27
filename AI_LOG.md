# Log Aktivitas Pengembangan AI (AI_LOG.md)
**Proyek:** Website Pembelajaran Kimia Interaktif Asam Basa (Siswa SMA Kelas XI)  
**Waktu Pelaksanaan:** 26 Oktober 2026  
**Peran:** Senior React Developer & UI/UX Designer Edukasi Sains  

---

## 1. Analisis Kebutuhan & Dokumen Acuan
- **PRD.md:**
  - Identitas media: *Pembelajaran Kimia Interaktif Asam Basa* untuk siswa SMA kelas XI.
  - Masalah belajar: Kimia terasa abstrak apabila hanya dijelaskan lewat teks, kesulitan menghubungkan dengan fenomena kehidupan sehari-hari, kebutuhan latihan soal berumpan balik, dan media belajar mandiri yang dapat diakses kapan saja.
  - Alur belajar: Tujuan Belajar → Materi Terstruktur → Simulasi Interaktif → Kuis & Umpan Balik → Evaluasi Akhir.
  - Penyimpanan data: Anonim di `localStorage` tanpa meminta identitas pribadi siswa.
- **AGENTS.md:**
  - Teknologi: React + Vite dengan komponen fungsional dan hooks.
  - Notasi Kimia Baku: Rumus, indeks (subskrip), muatan ion (superskrip), simbol, dan persamaan kimia (misal: H₂SO₄, Ca²⁺, OH⁻, H₃O⁺, Ka, Kb, pH = −log[H⁺], pH + pOH = 14 pada 25 °C, H⁺ + OH⁻ → H₂O).
  - Tampilan: Bersih, kontras warna tinggi, nyaman digunakan di layar HP maupun laptop.
  - Validasi: Tidak boleh menyatakan pengujian berhasil sebelum dijalankan (`npm run dev`, `npm run lint`, `npm run build`).

---

## 2. Rincian Pekerjaan & Komponen yang Dikembangkan

### A. `src/data/topicsData.js`
- Memperbarui struktur data materi kimia menjadi 3 modul sesuai instruksi:
  1. **Stoikiometri (Modul 01):** Hukum dasar kimia (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro), konsep mol ($N_A = 6,022 \times 10^{23}$ partikel/mol, volume molar STP $22,4\text{ L/mol}$), pereaksi pembatas, kemolaran ($M = n/V$), serta fenomena nyata takaran pupuk urea $\text{CO(NH}_2)_2$ dan gas elpiji $\text{C}_3\text{H}_8$.
  2. **Termokimia (Modul 02):** Sistem & lingkungan, reaksi eksoterm ($\Delta H < 0$) vs endoterm ($\Delta H > 0$), kalorimetri ($q = m \cdot c \cdot \Delta T$), Hukum Hess, serta fenomena nyata kompres dingin instan $\text{NH}_4\text{NO}_3$ dan api pembakaran gas alam.
  3. **Larutan Asam–Basa (Modul 03 - Modul Utama Sesuai PRD):** Tiga teori asam basa (Arrhenius, Brønsted–Lowry, Lewis), derajat keasaman ($\text{pH} = -\log[\text{H}^+]$, $\text{pOH} = -\log[\text{OH}^-]$, $\text{pH} + \text{pOH} = 14$), indikator lakmus/sintesis/alami, serta reaksi titrasi penetralan ($\text{H}^+ + \text{OH}^- \rightarrow \text{H}_2\text{O}$).
- Notasi IUPAC terjaga dengan subskrip dan superskrip presisi.

### B. `src/components/Navbar.jsx`
- Identitas media: *Pembelajaran Kimia Interaktif Asam Basa* dilengkapi ikon lab erlenmeyer SVG bercahaya.
- Tautan navigasi: Beranda, Modul Materi, dan Tentang Media.
- Tombol aksi: "Mulai Belajar" dengan smooth scroll ke modul materi.
- Menu navigasi mobile responsif (hamburger toggle) dengan touch targets ramah layar sentuh HP.
- Semua tombol dan link memiliki event handler yang jelas tanpa dead links (`#`).

### C. `src/components/HeroSection.jsx`
- Judul utama berdaya tarik visual: *"Kuasai Konsep Kimia SMA Lewat Eksplorasi Interaktif"*.
- Narasi kontekstual sains kehidupan sehari-hari: asam lambung ($\text{HCl}$), cuka dapur ($\text{CH}_3\text{COOH}$), sabun mandi, antasida $\text{Mg(OH)}_2$, dan kompres dingin $\text{NH}_4\text{NO}_3$.
- Tombol aksi utama "Mulai Belajar" dan tombol sekunder "Lihat 3 Kartu Topik".
- Widget interaktif **Laboratorium Saku**:
  - Gelas beker virtual dengan animasi cairan dan gelembung kimia.
  - Skala pH digital responsif dan indikator formula zat.
  - Hasil uji kertas lakmus nyata (Lakmus Merah & Lakmus Biru) untuk 5 sampel larutan: Asam Lambung ($\text{pH } 1.5$), Cuka Dapur ($\text{pH } 2.8$), Air Murni ($\text{pH } 7.0$), Air Sabun ($\text{pH } 9.5$), dan Soda Api $\text{NaOH}$ ($\text{pH } 13.0$).
  - Ringkasan fitur: Simulasi Interaktif, Kuis & Pembahasan, serta Penyimpanan Anonim.

### D. `src/components/TopicCards.jsx`
- Menampilkan 3 kartu materi terpisah: Stoikiometri, Termokimia, dan Larutan Asam–Basa.
- Masing-masing kartu menyajikan kode modul, badge tema kurikulum, ringkasan materi, rak formula/notasi kimia, blok fenomena nyata, dan estimasi waktu belajar.
- Fitur Interaktif:
  - Tombol **"Rincian"** membuka modal dialog komprehensif berisi capaian pembelajaran, notasi kimia lengkap, integrasi kontekstual, dan alur 3 tahap belajar (Teori $\rightarrow$ Simulasi $\rightarrow$ Kuis).
  - Tombol **"Mulai Belajar" / "Buka Modul"**: Menangani navigasi dengan umpan balik dialog informatif dan toast notifikasi, memandu siswa untuk mengeksplorasi materi tanpa tautan kosong.
- Membersihkan peringatan linter (`unused parameter`).

### E. `src/App.jsx`
- Menghubungkan Navbar, HeroSection, dan TopicCards secara harmonis.
- Menambahkan seksi edukatif **Tentang Media & Tujuan Belajar** (4 pilar: Kontekstual Nyata, Eksplorasi Simulasi, Kuis & Umpan Balik, dan Penyimpanan Anonim).
- Menampilkan pita formula esensial cepat (*Formula Quick Reference Strip*).
- Footer terstruktur dengan identitas kurikulum SMA Kelas XI, standar tata nama IUPAC, indikator penyimpanan lokal aktif, dan modal penjelasan alur evaluasi akhir.

### F. Penataan Gaya CSS (`src/index.css` & `src/App.css`)
- Menerapkan tema *modern dark slate laboratory* yang futuristik, bersih, dan nyaman bagi mata siswa.
- Menggunakan palet warna HSL/Tailored (Cyan, Emerald, Amber, Violet) dengan kontras teks tinggi (`#f8fafc` pada `#090d16`).
- Mengatur micro-animations (hover lift pada kartu, glow borders, efek gelembung beker virtual, pulse badge, transition effects).
- Responsif penuh: Desktop ($>1024\text{px}$), Tablet ($768\text{px} - 1024\text{px}$), dan Smartphone ($<768\text{px}$ & $<480\text{px}$).

---

## 3. Hasil Pengujian & Verifikasi

| Pengujian | Perintah | Hasil | Keterangan |
|---|---|---|---|
| **Linter** | `npm run lint` (`oxlint`) | **0 Errors, 0 Warnings** | Lolos tanpa peringatan kode. |
| **Type Check & Build** | `npm run build` (`tsc -b && vite build`) | **Selesai 100% (0 errors)** | Berkas produksi terbundle optimal. |
| **Server Dev Lokal** | `http://localhost:5173/` | **Status 200 OK** | Server Vite aktif dan melayani halaman dengan benar. |
| **Kompilasi Modul** | `main.tsx` & `App.jsx` | **Status 200 OK** | Seluruh import JSX dan CSS ter-resolve secara sempurna. |

---

## 4. Status Dokumen
- `PRD.md`: **Tidak diubah** (utuh sesuai instruksi).
- `AGENTS.md`: **Tidak diubah** (utuh sesuai instruksi).
