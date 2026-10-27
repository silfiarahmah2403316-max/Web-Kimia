/**
 * Data Materi Kimia untuk Siswa SMA Kelas XI
 * Sesuai panduan AGENTS.md dan PRD.md:
 * - Bahasa baku, edukatif, komunikatif, dan kontekstual kehidupan sehari-hari
 * - Tiga modul topik: Stoikiometri, Termokimia, dan Larutan Asam–Basa
 * - Notasi kimia akurat dengan subskrip/superskrip:
 *   H⁺, OH⁻, H₃O⁺, HCl, H₂SO₄, CH₃COOH, NaOH, NH₃, Ka, Kb, pH, pOH,
 *   ΔH, q = m·c·ΔT, mol, Ar, Mr, N_A = 6,022 × 10²³, V_m = 22,4 L/mol
 * - Persamaan kimia & rumus: pH = −log[H⁺]; pH + pOH = 14 (pada 25 °C); H⁺ + OH⁻ → H₂O
 */

export const TOPICS_DATA = [
  {
    id: 'stoikiometri',
    moduleCode: 'Modul 01',
    title: 'Stoikiometri',
    subtitle: 'Hukum Dasar Kimia & Konsep Mol',
    badge: 'Fondasi Kuantitatif',
    theme: 'stoichiometry',
    accentColor: '#0ea5e9',
    gradient: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
    bgGlow: 'rgba(14, 165, 233, 0.2)',
    icon: 'scale',
    status: 'Tersedia Pratinjau',
    isPrimaryActive: false,
    summary:
      'Pelajari dasar perhitungan kimia kuantitatif: hukum-hukum dasar kimia, konsep mol sebagai jembatan partikel (N_A = 6,022 × 10²³ partikel/mol), pereaksi pembatas, serta stoikiometri larutan.',
    keyPoints: [
      {
        title: 'Hukum-Hukum Dasar Kimia',
        desc: 'Hukum Kekekalan Massa (Lavoisier), Perbandingan Tetap (Proust), Perbandingan Berganda (Dalton), dan Perbandingan Volume (Gay-Lussac & Hipotesis Avogadro).',
      },
      {
        title: 'Konsep Mol & Massa Molar',
        desc: 'Mol sebagai satuan jumlah zat. Menghubungkan massa (gram), massa molar (Mr atau Ar), volume molar gas STP (22,4 L/mol), dan jumlah partikel.',
      },
      {
        title: 'Pereaksi Pembatas & Persen Hasil',
        desc: 'Menentukan pereaksi yang habis terlebih dahulu dalam reaksi kimia dan membatasi jumlah produk yang dapat terbentuk.',
      },
      {
        title: 'Stoikiometri Larutan',
        desc: 'Konsentrasi kemolaran (M = n/V) dan stoikiometri reaksi dalam larutan berpelarut air.',
      },
    ],
    chemicalFormulas: [
      'mol = massa / Mr',
      'N = n × 6,022 × 10²³',
      'V_m = 22,4 L (STP)',
      'PV = nRT',
      'M = n / V',
    ],
    dailyContext:
      'Penentuan takaran reagen pada produksi pupuk urea CO(NH₂)₂, stoikiometri pembakaran gas elpiji (C₃H₈) di dapur, dan penetapan dosis bahan aktif obat pada industri farmasi.',
    estimatedTime: '30 Menit',
    totalObjectives: '4 Subtopik Fundamental',
  },
  {
    id: 'termokimia',
    moduleCode: 'Modul 02',
    title: 'Termokimia',
    subtitle: 'Perubahan Entalpi & Energi Reaksi',
    badge: 'Energi & Kalor',
    theme: 'thermochemistry',
    accentColor: '#f97316',
    gradient: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
    bgGlow: 'rgba(249, 115, 22, 0.2)',
    icon: 'flame',
    status: 'Tersedia Pratinjau',
    isPrimaryActive: false,
    summary:
      'Pahami interaksi antara materi dan energi kalor melalui sistem dan lingkungan, reaksi eksoterm (ΔH < 0), reaksi endoterm (ΔH > 0), kalorimetri, serta penentuan perubahan entalpi via Hukum Hess.',
    keyPoints: [
      {
        title: 'Sistem & Lingkungan',
        desc: 'Perbedaan sistem terbuka, tertutup, dan terisolasi serta aliran kalor (q) dan kerja (w) berdasarkan Hukum Kekekalan Energi.',
      },
      {
        title: 'Reaksi Eksoterm & Endoterm',
        desc: 'Reaksi eksoterm melepaskan kalor ke lingkungan (ΔH negatif), sedangkan reaksi endoterm menyerap kalor dari lingkungan (ΔH positif).',
      },
      {
        title: 'Kalorimetri & Kapasitas Kalor',
        desc: 'Pengukuran kalor reaksi menggunakan kalorimeter berdasarkan asas Black: q = m · c · ΔT.',
      },
      {
        title: 'Hukum Hess & Energi Ikatan',
        desc: 'Perubahan entalpi reaksi hanya bergantung pada keadaan awal dan akhir: ΔH° = ΣΔH°f(produk) − ΣΔH°f(reaktan).',
      },
    ],
    chemicalFormulas: [
      'ΔH = H_produk − H_reaktan',
      'q = m · c · ΔT',
      'ΔH° = ΣΔH°f(p) − ΣΔH°f(r)',
      'ΔH < 0 (Eksoterm)',
      'ΔH > 0 (Endoterm)',
    ],
    dailyContext:
      'Sensasi dingin instan pada kantong kompres olahraga (pelarutan garam amonium nitrat NH₄NO₃ menyerap kalor) serta pelepasan energi panas dari api kompor gas alam.',
    estimatedTime: '35 Menit',
    totalObjectives: '4 Subtopik Termokimia',
  },
  {
    id: 'larutan-asam-basa',
    moduleCode: 'Modul 03',
    title: 'Larutan Asam–Basa',
    subtitle: 'Teori, Skala pH, Indikator, & Titrasi',
    badge: 'Modul Aktif Terintegrasi',
    theme: 'acid-base',
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
    bgGlow: 'rgba(16, 185, 129, 0.2)',
    icon: 'flask',
    status: 'Modul Utama (Aktif)',
    isPrimaryActive: true,
    summary:
      'Eksplorasi mendalam konsep asam-basa Arrhenius, Brønsted–Lowry, & Lewis, perhitungan derajat keasaman logaritmik (pH = −log[H⁺]), uji trayek indikator sintetis dan alami, serta reaksi penetralan titrasi.',
    keyPoints: [
      {
        title: 'Tiga Teori Asam Basa',
        desc: 'Arrhenius (penghasil ion H⁺/OH⁻ dalam air), Brønsted–Lowry (donor/akseptor proton H⁺ membentuk pasangan konjugasi), dan Lewis (akseptor/donor pasangan elektron).',
      },
      {
        title: 'Derajat Keasaman & Skala pH',
        desc: 'Perhitungan pH = −log[H⁺], pOH = −log[OH⁻], serta tetapan kesetimbangan autoionisasi air Kw = [H⁺][OH⁻] = 10⁻¹⁴ pada suhu 25 °C.',
      },
      {
        title: 'Indikator Asam Basa Alami & Sintetis',
        desc: 'Uji kertas lakmus merah/biru, fenolftalein (PP), bromtimol biru (BTB), dan ekstrak kubis ungu/kunyit berdasarkan trayek pH perubahan warna.',
      },
      {
        title: 'Titrasi & Reaksi Penetralan',
        desc: 'Reaksi stoikiometri ionik antara ion H⁺ asam dan OH⁻ basa membentuk molekul netral air: H⁺ + OH⁻ → H₂O, hingga mencapai titik ekivalen.',
      },
    ],
    chemicalFormulas: [
      'pH = −log[H⁺]',
      'pOH = −log[OH⁻]',
      'pH + pOH = 14 (25 °C)',
      'H⁺ + OH⁻ → H₂O',
      'Ka · Kb = Kw',
    ],
    dailyContext:
      'Asam klorida (HCl) getah lambung pencerna protein, asam asetat (CH₃COOH) cuka dapur, sabun pembersih lemak berbasis basa, antasida Mg(OH)₂ penetral maag, serta pencegahan fenomena hujan asam.',
    estimatedTime: '40 Menit',
    totalObjectives: 'Modul Inti Sesuai PRD',
  },
];

export const MEDIA_IDENTITY = {
  title: 'Pembelajaran Kimia Interaktif Asam Basa',
  shortTitle: 'Kimia Interaktif SMA',
  tagline: 'Media Edukasi Sains Kontekstual & Eksplorasi Digital Siswa SMA Kelas XI',
  target: 'Siswa SMA Kelas XI',
  curriculum: 'Kurikulum Merdeka / SMA',
  author: 'Pengembang Media Sains Interaktif',
};
