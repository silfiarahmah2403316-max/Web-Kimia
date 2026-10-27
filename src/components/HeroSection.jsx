import { useState } from 'react';

/**
 * Komponen HeroSection
 * Memuat:
 * - Judul utama yang menggugah minat belajar sains siswa SMA
 * - Deskripsi singkat kontekstual menghubungkan fenomena nyata sehari-hari dengan konsep kimia
 * - Tombol utama "Mulai Belajar" dengan penanganan navigasi mulus
 * - Widget interaktif "Laboratorium Saku: Uji Sifat Larutan & Derajat Keasaman (pH)"
 */
export default function HeroSection({ onStartLearning }) {
  // Sampel interaktif fenomena larutan dalam kehidupan sehari-hari
  const samples = [
    {
      id: 'lambung',
      name: 'Asam Lambung',
      formula: 'HCl (aq)',
      ph: 1.5,
      type: 'Asam Kuat',
      color: '#ef4444',
      bgGlow: 'rgba(239, 68, 68, 0.25)',
      litmusRed: 'Tetap Merah',
      litmusBlue: 'Berubah Merah',
      note: 'Mengandung asam klorida (HCl) berkonsentrasi tinggi untuk membunuh bakteri patogen dan mengaktivasi enzim pepsin lambung.',
    },
    {
      id: 'cuka',
      name: 'Cuka Dapur',
      formula: 'CH₃COOH (aq)',
      ph: 2.8,
      type: 'Asam Lemah',
      color: '#f97316',
      bgGlow: 'rgba(249, 115, 22, 0.25)',
      litmusRed: 'Tetap Merah',
      litmusBlue: 'Berubah Merah',
      note: 'Asam asetat terionisasi sebagian di dalam air dan memiliki tetapan kesetimbangan ionisasi asam (Ka).',
    },
    {
      id: 'air',
      name: 'Air Murni',
      formula: 'H₂O (l)',
      ph: 7.0,
      type: 'Netral (25 °C)',
      color: '#06b6d4',
      bgGlow: 'rgba(6, 182, 212, 0.25)',
      litmusRed: 'Tetap Merah',
      litmusBlue: 'Tetap Biru',
      note: 'Konsentrasi ion hidrogen sama dengan hidroksida: [H⁺] = [OH⁻] = 10⁻⁷ M pada suhu ruang 25 °C.',
    },
    {
      id: 'sabun',
      name: 'Air Sabun',
      formula: 'Garam Karboksilat',
      ph: 9.5,
      type: 'Basa Lemah',
      color: '#3b82f6',
      bgGlow: 'rgba(59, 130, 246, 0.25)',
      litmusRed: 'Berubah Biru',
      litmusBlue: 'Tetap Biru',
      note: 'Terasa licin di kulit dan mampu mengemulsi lemak karena hidrolisis parsial ion karboksilat menghasilkan ion OH⁻.',
    },
    {
      id: 'pembersih',
      name: 'Soda Api (NaOH)',
      formula: 'NaOH (aq)',
      ph: 13.0,
      type: 'Basa Kuat',
      color: '#8b5cf6',
      bgGlow: 'rgba(139, 92, 246, 0.25)',
      litmusRed: 'Berubah Biru',
      litmusBlue: 'Tetap Biru',
      note: 'Natrium hidroksida terdisosiasi sempurna di dalam air menghasilkan konsentrasi ion hidroksida (OH⁻) yang sangat tinggi.',
    },
  ];

  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const currentSample = samples[activeSampleIndex];

  const handleScrollToTopics = () => {
    if (onStartLearning) {
      onStartLearning();
    } else {
      const topicSection = document.getElementById('topik-materi');
      if (topicSection) {
        topicSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="hero-section" id="beranda-hero">
      <div className="hero-grid">
        {/* Kolom Narasi: Judul, Deskripsi Kontekstual & Tombol Aksi */}
        <div className="hero-text-col">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">
              🔬 Media Edukasi Kimia SMA Kelas XI • Kontekstual & Mandiri
            </span>
          </div>

          <h1 className="hero-title">
            Kuasai Konsep <span className="text-gradient-cyan">Kimia SMA</span>{' '}
            Lewat Eksplorasi Interaktif
          </h1>

          <p className="hero-narrative">
            Pernahkah kamu penasaran mengapa <strong>asam lambung (HCl)</strong>{' '}
            mampu mencerna makanan tanpa melukai dinding lambung, bagaimana{' '}
            <strong>kompres dingin instan (NH₄NO₃)</strong> menyerap kalor seketika,
            atau bagaimana prinsip perhitungan <strong>stoikiometri mol</strong>{' '}
            digunakan dalam industri obat dan pupuk?
          </p>

          <p className="hero-subnarrative">
            Kimia bukan sekadar deretan rumus abstrak. Di sini, kamu diajak
            memahami konsep secara visual melalui 3 modul inti: <strong>Stoikiometri</strong>,{' '}
            <strong>Termokimia</strong>, dan <strong>Larutan Asam–Basa</strong>.
            Lakukan simulasi pengamatan warna indikator, hitung derajat keasaman{' '}
            (<em>pH = −log[H⁺]</em>), serta evaluasi pemahamanmu melalui kuis berumpan balik.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              id="hero-start-learning-btn"
              className="btn-primary-hero"
              onClick={handleScrollToTopics}
            >
              <span className="btn-icon">🚀</span>
              <span>Mulai Belajar</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <a
              href="#topik-materi"
              id="hero-view-topics-btn"
              className="btn-secondary-hero"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToTopics();
              }}
            >
              <span className="btn-icon">📖</span>
              <span>Lihat 3 Kartu Topik</span>
            </a>
          </div>

          {/* Keunggulan Fitur Sesuai PRD.md */}
          <div className="hero-perks">
            <div className="perk-item">
              <div className="perk-icon">⚡</div>
              <div className="perk-info">
                <strong>Simulasi Interaktif</strong>
                <span>Eksperimen virtual yang aman</span>
              </div>
            </div>
            <div className="perk-item">
              <div className="perk-icon">🎯</div>
              <div className="perk-info">
                <strong>Kuis & Pembahasan</strong>
                <span>Umpan balik alasan jawaban</span>
              </div>
            </div>
            <div className="perk-item">
              <div className="perk-icon">🔒</div>
              <div className="perk-info">
                <strong>Penyimpanan Anonim</strong>
                <span>Progres disimpan di peramban</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Visual: Widget Laboratorium Saku Interaktif */}
        <div className="hero-interactive-col">
          <div
            className="chemistry-card-interactive"
            style={{
              boxShadow: `0 20px 45px -15px ${currentSample.bgGlow}`,
              borderColor: `${currentSample.color}45`,
            }}
          >
            <div className="card-top-bar">
              <div className="card-chip">
                <span
                  className="chip-dot"
                  style={{ backgroundColor: currentSample.color }}
                ></span>
                <span>Laboratorium Saku: Uji Sifat Larutan</span>
              </div>
              <span
                className="sample-type-pill"
                style={{
                  color: currentSample.color,
                  backgroundColor: `${currentSample.color}18`,
                  borderColor: `${currentSample.color}40`,
                }}
              >
                {currentSample.type}
              </span>
            </div>

            {/* Visualisasi Beaker Lab & Nilai pH */}
            <div className="beaker-preview-area">
              <div className="beaker-graphic" aria-label={`Gelas beker berisi larutan ${currentSample.name}`}>
                <div
                  className="beaker-liquid"
                  style={{
                    backgroundColor: currentSample.color,
                    boxShadow: `0 0 25px ${currentSample.color}50`,
                  }}
                >
                  <div className="liquid-bubble b1"></div>
                  <div className="liquid-bubble b2"></div>
                  <div className="liquid-bubble b3"></div>
                </div>
                <div className="beaker-graduation">
                  <span>- 100 mL</span>
                  <span>- 75 mL</span>
                  <span>- 50 mL</span>
                  <span>- 25 mL</span>
                </div>
              </div>

              <div className="ph-meter-display">
                <div className="ph-label">Derajat Keasaman</div>
                <div className="ph-value" style={{ color: currentSample.color }}>
                  pH {currentSample.ph.toFixed(1)}
                </div>
                <div className="ph-formula-badge">{currentSample.formula}</div>
              </div>
            </div>

            {/* Detail Zat & Uji Indikator Lakmus */}
            <div className="sample-details-box">
              <div className="sample-name-row">
                <h3 className="sample-name">{currentSample.name}</h3>
                <span
                  className="ph-spectrum-indicator"
                  style={{ backgroundColor: currentSample.color }}
                ></span>
              </div>
              <p className="sample-note">{currentSample.note}</p>

              <div className="litmus-test-row">
                <div className="litmus-pill red">
                  <span className="litmus-label">Lakmus Merah:</span>
                  <span className="litmus-val">{currentSample.litmusRed}</span>
                </div>
                <div className="litmus-pill blue">
                  <span className="litmus-label">Lakmus Biru:</span>
                  <span className="litmus-val">{currentSample.litmusBlue}</span>
                </div>
              </div>
            </div>

            {/* Pemilih Zat Berbeda */}
            <div className="sample-selector-row">
              <span className="selector-title">Pilih Sampel Zat:</span>
              <div className="sample-chips" role="radiogroup" aria-label="Pilih sampel zat kimia">
                {samples.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    id={`sample-btn-${item.id}`}
                    className={`sample-select-btn ${activeSampleIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveSampleIndex(idx)}
                    style={{
                      borderColor: activeSampleIndex === idx ? item.color : undefined,
                    }}
                    role="radio"
                    aria-checked={activeSampleIndex === idx}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="card-footer-tip">
              💡 <em>Petunjuk:</em> Klik salah satu sampel di atas untuk melihat respon pH, warna cairan, serta hasil uji kertas lakmus secara seketika!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
