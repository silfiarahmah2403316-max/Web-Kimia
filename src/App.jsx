import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TopicCards from './components/TopicCards';
import './App.css';

/**
 * Komponen Utama App.jsx
 * Mengintegrasikan Navbar, HeroSection, TopicCards, dan bagian edukasi lainnya.
 * Sesuai panduan AGENTS.md dan PRD.md:
 * - Bahasa baku dan komunikatif untuk siswa SMA kelas XI
 * - Kontekstual kehidupan sehari-hari (asam lambung, cuka dapur, sabun mandi, antasida, dll.)
 * - Notasi kimia akurat (H⁺, OH⁻, H₃O⁺, Ka, Kb, pH, pOH, ΔH, mol, Mr, N_A)
 * - Tampilan responsif (layar HP, tablet, maupun laptop)
 * - Penanganan interaksi tombol dan navigasi yang jelas tanpa dead-links
 */
export default function App() {
  const [activeTab, setActiveTab] = useState('beranda');
  const [appAlert, setAppAlert] = useState(null);

  const handleStartLearning = () => {
    setActiveTab('modul');
    const topicSection = document.getElementById('topik-materi');
    if (topicSection) {
      topicSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTopic = (topicId) => {
    setActiveTab('modul');
    console.log('Topik kimia aktif:', topicId);
  };

  const showFeatureNotice = (featureName, message) => {
    setAppAlert({
      title: featureName,
      message: message,
    });
  };

  return (
    <div className="app-layout">
      {/* 1. Navbar dengan Identitas Media & Navigasi Responsif */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      <main className="main-content">
        {/* 2. Hero Section: Judul, Deskripsi Kontekstual & Tombol "Mulai Belajar" */}
        <HeroSection onStartLearning={handleStartLearning} />

        {/* 3. Tiga Kartu Materi: Stoikiometri, Termokimia, dan Larutan Asam–Basa */}
        <TopicCards onSelectTopic={handleSelectTopic} />

        {/* 4. Bagian Tentang Media & Tujuan Belajar (Sesuai PRD.md) */}
        <section id="tentang-media" className="about-section">
          <div className="about-container">
            <div className="about-badge">
              <span>💡 Tentang Media Pembelajaran Sains</span>
            </div>
            <h2 className="about-title">
              Mengapa Belajar Kimia Secara Kontekstual & Interaktif?
            </h2>
            <p className="about-subtitle">
              Siswa SMA kelas XI sering mengalami kesulitan memahami konsep kimia
              karena sifatnya yang abstrak jika hanya dijelaskan melalui teks.
              Website ini hadir untuk memvisualisasikan teori, menghubungkannya dengan
              kehidupan sehari-hari, dan memberikan umpan balik evaluasi yang membangun.
            </p>

            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon" aria-hidden="true">🔬</div>
                <h3>Kontekstual Nyata</h3>
                <p>
                  Menghubungkan konsep kimia dengan fenomena sekitar, seperti asam lambung (HCl),
                  cuka makan (CH₃COOH), sabun mandi, reaksi endoterm kompres dingin (NH₄NO₃),
                  hingga perhitungan stoikiometri pupuk urea.
                </p>
              </div>

              <div className="about-card">
                <div className="about-icon" aria-hidden="true">⚗️</div>
                <h3>Eksplorasi Simulasi</h3>
                <p>
                  Mengubah konsentrasi, mengamati pergeseran warna indikator lakmus/sintesis,
                  dan menghitung nilai pH secara virtual tanpa risiko bahaya bahan kimia riil.
                </p>
              </div>

              <div className="about-card">
                <div className="about-icon" aria-hidden="true">📝</div>
                <h3>Kuis & Umpan Balik</h3>
                <p>
                  Latihan soal terstruktur disertai penjelasan alasan jawaban benar atau salah,
                  sehingga siswa mengetahui konsep mana yang sudah dikuasai dan mana yang perlu diulang.
                </p>
              </div>

              <div className="about-card">
                <div className="about-icon" aria-hidden="true">🔒</div>
                <h3>Penyimpanan Anonim</h3>
                <p>
                  Progres materi dan skor latihan disimpan secara lokal di peramban siswa (localStorage)
                  tanpa memerlukan nama lengkap, email, atau kata sandi pribadi.
                </p>
              </div>
            </div>

            {/* Formula Quick Reference Footer */}
            <div className="formula-summary-strip">
              <span className="strip-title">Prinsip & Notasi Kimia Esensial:</span>
              <div className="strip-formulas">
                <span className="strip-tag">pH = −log[H⁺]</span>
                <span className="strip-tag">pOH = −log[OH⁻]</span>
                <span className="strip-tag">pH + pOH = 14 (25 °C)</span>
                <span className="strip-tag">H⁺ + OH⁻ → H₂O</span>
                <span className="strip-tag">mol = massa / Mr</span>
                <span className="strip-tag">ΔH = H_produk − H_reaktan</span>
                <span className="strip-tag">q = m · c · ΔT</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Dialog untuk Fitur Terintegrasi PRD */}
      {appAlert && (
        <div
          className="modal-backdrop animate-fade-in"
          onClick={() => setAppAlert(null)}
          role="presentation"
        >
          <div
            className="notice-modal-card animate-scale-up"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="alert-title"
          >
            <div className="notice-icon">📋</div>
            <h3 id="alert-title" className="notice-title">{appAlert.title}</h3>
            <p className="notice-desc">{appAlert.message}</p>
            <button
              type="button"
              className="btn-notice-close"
              onClick={() => setAppAlert(null)}
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}

      {/* Footer Edukatif Terstruktur */}
      <footer className="footer-container" id="site-footer">
        <div className="footer-content">
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <span className="footer-icon" aria-hidden="true">🧪</span>
              <span className="footer-brand-name">
                Pembelajaran Kimia Interaktif Asam Basa
              </span>
            </div>
            <p className="footer-desc">
              Media pembelajaran mandiri materi kimia untuk siswa SMA kelas XI.
              Dirancang dengan pendekatan sains kontekstual, simulasi interaktif,
              dan evaluasi penguasaan materi berkelanjutan.
            </p>
            <span className="footer-curriculum-badge">
              Kurikulum SMA Kelas XI • Kimia Stoikiometri, Termokimia, & Asam Basa
            </span>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Navigasi Modul</h4>
            <ul className="footer-links">
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => {
                    handleStartLearning();
                    const el = document.getElementById('card-topic-stoikiometri');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Stoikiometri & Konsep Mol
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => {
                    handleStartLearning();
                    const el = document.getElementById('card-topic-termokimia');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Termokimia & Entalpi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => {
                    handleStartLearning();
                    const el = document.getElementById('card-topic-larutan-asam-basa');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Larutan Asam–Basa (Aktif)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => {
                    const aboutSection = document.getElementById('tentang-media');
                    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Tentang & Tujuan Belajar
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-info-col">
            <h4 className="footer-heading">Standar Konsep Kimia IUPAC</h4>
            <p className="footer-standard-text">
              Notasi subskrip dan superskrip diverifikasi sesuai tata nama IUPAC:{' '}
              <code>H⁺, OH⁻, H₃O⁺, HCl, CH₃COOH, NaOH, NH₃, ΔH, mol</code>.
            </p>
            <div className="storage-status-pill">
              <span className="storage-indicator"></span>
              <span>Penyimpanan Lokal Aktif (Anonim)</span>
            </div>
            <button
              type="button"
              className="footer-eval-btn"
              onClick={() =>
                showFeatureNotice(
                  'Tahapan Evaluasi Akhir',
                  'Sesuai alur PRD.md (Prioritas 2), evaluasi akhir dibuka setelah siswa menuntaskan materi dan kuis penguasaan modul. Silakan mulai belajar dari modul Larutan Asam–Basa terlebih dahulu.'
                )
              }
            >
              Informasi Evaluasi Akhir
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Pembelajaran Kimia Interaktif Asam Basa • Media Edukasi Sains Siswa SMA</p>
        </div>
      </footer>
    </div>
  );
}
