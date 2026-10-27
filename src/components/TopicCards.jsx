import { useState } from 'react';
import { TOPICS_DATA } from '../data/topicsData';

/**
 * Komponen TopicCards
 * Menampilkan 3 kartu materi utama kimia SMA kelas XI:
 * 1. Stoikiometri (Hukum Dasar Kimia, Konsep Mol, Pereaksi Pembatas)
 * 2. Termokimia (Sistem & Lingkungan, Reaksi Eksoterm/Endoterm, Kalorimetri, Hukum Hess)
 * 3. Larutan Asam–Basa (Arrhenius, Brønsted–Lowry, Lewis, Skala pH, Indikator, Titrasi)
 *
 * Mengikuti aturan AGENTS.md & PRD.md:
 * - Notasi kimia subskrip dan superskrip akurat (H⁺, OH⁻, H₃O⁺, ΔH, mol, Mr, Ka, Kb, dll.)
 * - Kontekstual fenomena kehidupan sehari-hari
 * - Responsif untuk desktop, tablet, dan ponsel pintar (HP)
 * - Semua tombol memiliki aksi dan umpan balik yang jelas (tidak ada broken links)
 */
export default function TopicCards({ onSelectTopic }) {
  const [selectedTopicModal, setSelectedTopicModal] = useState(null);
  const [notificationMsg, setNotificationMsg] = useState(null);

  const handleOpenDetail = (topic) => {
    setSelectedTopicModal(topic);
  };

  const handleCloseDetail = () => {
    setSelectedTopicModal(null);
  };

  const handleStartModule = (topic) => {
    if (topic.id === 'larutan-asam-basa') {
      // Modul utama yang aktif sesuai PRD.md
      if (onSelectTopic) {
        onSelectTopic(topic.id);
      }
      setSelectedTopicModal(topic);
    } else {
      // Modul pratinjau kurikulum (Stoikiometri atau Termokimia)
      setSelectedTopicModal(topic);
      setNotificationMsg(
        `Modul ${topic.title} siap dipelajari! Saat ini pratinjau materi & rumus telah aktif. Untuk simulasi interaktif penuh, kamu dapat mengakses modul Larutan Asam–Basa.`
      );
      setTimeout(() => setNotificationMsg(null), 6000);
    }
  };

  return (
    <section id="topik-materi" className="topics-section">
      <div className="section-header-group">
        <div className="section-pill">
          <span>📚 3 Modul Pembelajaran Utama</span>
        </div>
        <h2 className="section-title">Eksplorasi Modul Materi Kimia SMA</h2>
        <p className="section-description">
          Disusun terstruktur untuk siswa SMA kelas XI. Setiap kartu materi memuat konsep esensial,
          notasi kimia baku, dan keterkaitan dengan fenomena nyata sehari-hari.
        </p>
      </div>

      {/* Floating Notification Toast jika ada pesan */}
      {notificationMsg && (
        <div className="toast-notification animate-bounce-in" role="status" aria-live="polite">
          <div className="toast-icon">ℹ️</div>
          <div className="toast-text">{notificationMsg}</div>
          <button
            type="button"
            className="toast-close-btn"
            onClick={() => setNotificationMsg(null)}
            aria-label="Tutup pemberitahuan"
          >
            ✕
          </button>
        </div>
      )}

      {/* Grid 3 Kartu Materi */}
      <div className="topic-cards-grid">
        {TOPICS_DATA.map((topic) => (
          <article
            key={topic.id}
            id={`card-topic-${topic.id}`}
            className={`topic-card topic-card-${topic.theme} ${
              topic.isPrimaryActive ? 'topic-card-featured' : ''
            }`}
          >
            {/* Header Kartu */}
            <div className="card-header">
              <span className="module-code-badge">{topic.moduleCode}</span>
              <span
                className={`module-category-pill ${
                  topic.isPrimaryActive ? 'pill-active' : 'pill-preview'
                }`}
              >
                {topic.badge}
              </span>
            </div>

            {/* Judul & Subjudul */}
            <div className="card-main-title">
              <h3 className="topic-heading">{topic.title}</h3>
              <p className="topic-subheading">{topic.subtitle}</p>
            </div>

            {/* Ringkasan Materi */}
            <p className="topic-summary">{topic.summary}</p>

            {/* Rak Formula & Notasi Kimia */}
            <div className="chemical-formula-shelf">
              <span className="shelf-label">Notasi & Rumus Inti:</span>
              <div className="formula-tags">
                {topic.chemicalFormulas.map((formula, fIdx) => (
                  <span key={fIdx} className="formula-tag">
                    {formula}
                  </span>
                ))}
              </div>
            </div>

            {/* Fenomena Nyata Sehari-hari */}
            <div className="daily-context-card">
              <div className="context-title-row">
                <span className="context-icon">💡</span>
                <span className="context-title">Fenomena Nyata:</span>
              </div>
              <p className="context-desc">{topic.dailyContext}</p>
            </div>

            {/* Cuplikan Poin Utama */}
            <ul className="keypoint-preview-list">
              {topic.keyPoints.slice(0, 2).map((kp, kIdx) => (
                <li key={kIdx} className="keypoint-item">
                  <span className="keypoint-check">✓</span>
                  <span>
                    <strong>{kp.title}:</strong> {kp.desc}
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer Tombol Aksi */}
            <div className="card-footer-action">
              <div className="estimated-pill">
                <span className="clock-icon" aria-hidden="true">⏱️</span>
                <span>{topic.estimatedTime}</span>
              </div>

              <div className="card-btn-group">
                <button
                  type="button"
                  id={`btn-detail-${topic.id}`}
                  className="btn-card-detail"
                  onClick={() => handleOpenDetail(topic)}
                  aria-label={`Lihat rincian materi ${topic.title}`}
                >
                  Rincian
                </button>
                <button
                  type="button"
                  id={`btn-start-${topic.id}`}
                  className={`btn-card-primary ${
                    topic.isPrimaryActive ? 'btn-active-primary' : ''
                  }`}
                  onClick={() => handleStartModule(topic)}
                  aria-label={`Mulai modul ${topic.title}`}
                >
                  <span>{topic.isPrimaryActive ? 'Mulai Belajar' : 'Buka Modul'}</span>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Detail Materi & Silabus */}
      {selectedTopicModal && (
        <div
          className="modal-backdrop animate-fade-in"
          onClick={handleCloseDetail}
          role="presentation"
        >
          <div
            className="modal-container animate-scale-up"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Bagian Atas Modal */}
            <div className="modal-top">
              <div className="modal-header-info">
                <div className="modal-badge-row">
                  <span className="modal-badge">{selectedTopicModal.moduleCode}</span>
                  <span className="modal-badge-status">{selectedTopicModal.status}</span>
                </div>
                <h3 id="modal-title" className="modal-heading">
                  {selectedTopicModal.title}
                </h3>
                <p className="modal-subheading">{selectedTopicModal.subtitle}</p>
              </div>
              <button
                type="button"
                id="modal-close-icon-btn"
                className="modal-close-btn"
                onClick={handleCloseDetail}
                aria-label="Tutup jendela rincian materi"
              >
                ✕
              </button>
            </div>

            {/* Isi Konten Modal */}
            <div className="modal-scroll-body">
              <div className="modal-section-block">
                <h4>🎯 Capaian & Konsep Inti Pembelajaran</h4>
                <div className="modal-points-grid">
                  {selectedTopicModal.keyPoints.map((kp, idx) => (
                    <div key={idx} className="modal-point-card">
                      <h5>{kp.title}</h5>
                      <p>{kp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section-block">
                <h4>🧪 Notasi, Persamaan & Rumus Kimia</h4>
                <div className="formula-tags-large">
                  {selectedTopicModal.chemicalFormulas.map((f, idx) => (
                    <span key={idx} className="formula-tag large">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section-block context-highlight">
                <h4>🌍 Hubungan Kontekstual Sehari-Hari</h4>
                <p>{selectedTopicModal.dailyContext}</p>
              </div>

              {/* Tahapan Alur Belajar */}
              <div className="modal-learning-flow-banner">
                <div className="flow-step">
                  <span className="step-num">1</span>
                  <span>Teori & Konsep</span>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <span className="step-num">2</span>
                  <span>Simulasi Interaktif</span>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <span className="step-num">3</span>
                  <span>Kuis & Pembahasan</span>
                </div>
              </div>
            </div>

            {/* Bagian Bawah Modal */}
            <div className="modal-bottom-bar">
              <button
                type="button"
                id="modal-btn-cancel"
                className="btn-modal-close"
                onClick={handleCloseDetail}
              >
                Tutup
              </button>
              <button
                type="button"
                id="modal-btn-confirm"
                className="btn-modal-proceed"
                onClick={() => {
                  if (selectedTopicModal.id === 'larutan-asam-basa') {
                    alert(
                      `Selamat datang di Modul Larutan Asam–Basa! Kamu dapat langsung mempelajari konsep asam basa, skala pH, dan titrasi.`
                    );
                  } else {
                    alert(
                      `Pratinjau materi ${selectedTopicModal.title} berhasil dibuka! Catatan konsep dan rumus esensial telah siap dipelajari.`
                    );
                  }
                  handleCloseDetail();
                }}
              >
                🚀 Pelajari Materi {selectedTopicModal.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
