import { useState } from 'react';

/**
 * Komponen Navbar
 * Memuat:
 * - Identitas Media: "Pembelajaran Kimia Interaktif Asam Basa"
 * - Menu Navigasi: Beranda, Modul Materi, Tentang Media
 * - Tombol Aksi: "Mulai Belajar"
 * - Responsif untuk layar komputer, tablet, maupun ponsel pintar (HP)
 * - Penanganan tautan dan tombol yang jelas tanpa dead-links
 */
export default function Navbar({ activeTab = 'beranda', onSelectTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    if (onSelectTab) {
      onSelectTab(tab);
    }
    setMobileMenuOpen(false);

    // Navigasi dengan smooth scroll yang aman
    if (tab === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'modul') {
      const topicSection = document.getElementById('topik-materi');
      if (topicSection) {
        topicSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'tentang') {
      const aboutSection = document.getElementById('tentang-media');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="navbar-container" id="site-header">
      <div className="navbar-content">
        {/* Identitas Media Pembelajaran */}
        <div
          className="navbar-brand"
          onClick={() => handleNavClick('beranda')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNavClick('beranda');
            }
          }}
          aria-label="Kembali ke Beranda Pembelajaran Kimia"
        >
          <div className="brand-icon-wrapper" aria-hidden="true">
            <svg
              className="brand-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 2v7.31a3 3 0 0 1-.88 2.12l-4.24 4.24A4 4 0 0 0 8 22h8a4 4 0 0 0 3.12-6.33l-4.24-4.24A3 3 0 0 1 14 9.31V2" />
              <path d="M9 2h6" />
              <path d="M7.5 15h9" />
              <circle cx="10" cy="18" r="1" fill="currentColor" />
              <circle cx="14" cy="17" r="1.2" fill="currentColor" />
            </svg>
            <span className="brand-glow"></span>
          </div>

          <div className="brand-text-group">
            <span className="brand-title">
              Pembelajaran Kimia Interaktif Asam Basa
            </span>
            <span className="brand-subtitle">
              Sains Kontekstual SMA Kelas XI • Kurikulum Terpadu
            </span>
          </div>
        </div>

        {/* Menu Navigasi Layar Desktop */}
        <nav className="navbar-nav" aria-label="Navigasi Utama">
          <button
            type="button"
            id="nav-beranda-btn"
            className={`nav-link ${activeTab === 'beranda' ? 'active' : ''}`}
            onClick={() => handleNavClick('beranda')}
          >
            Beranda
          </button>
          <button
            type="button"
            id="nav-modul-btn"
            className={`nav-link ${activeTab === 'modul' ? 'active' : ''}`}
            onClick={() => handleNavClick('modul')}
          >
            Modul Materi
          </button>
          <button
            type="button"
            id="nav-tentang-btn"
            className={`nav-link ${activeTab === 'tentang' ? 'active' : ''}`}
            onClick={() => handleNavClick('tentang')}
          >
            Tentang Media
          </button>
        </nav>

        {/* Tombol Aksi Utama & Hamburger Toggle */}
        <div className="navbar-actions">
          <button
            type="button"
            id="navbar-cta-learn-btn"
            className="navbar-cta-btn"
            onClick={() => handleNavClick('modul')}
            aria-label="Mulai mempelajari materi kimia"
          >
            <span>Mulai Belajar</span>
            <svg
              className="cta-arrow"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="16"
              height="16"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Tombol Hamburger HP */}
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup navigasi mobile' : 'Buka navigasi mobile'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Navigasi Khusus Perangkat Seluler (HP) */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown animate-fade-down" id="mobile-menu-content">
          <button
            type="button"
            id="m-nav-beranda-btn"
            className={`mobile-nav-link ${activeTab === 'beranda' ? 'active' : ''}`}
            onClick={() => handleNavClick('beranda')}
          >
            <span className="m-icon">🏠</span>
            <span>Beranda</span>
          </button>
          <button
            type="button"
            id="m-nav-modul-btn"
            className={`mobile-nav-link ${activeTab === 'modul' ? 'active' : ''}`}
            onClick={() => handleNavClick('modul')}
          >
            <span className="m-icon">📚</span>
            <span>Modul Materi (Stoikiometri, Termokimia, Asam–Basa)</span>
          </button>
          <button
            type="button"
            id="m-nav-tentang-btn"
            className={`mobile-nav-link ${activeTab === 'tentang' ? 'active' : ''}`}
            onClick={() => handleNavClick('tentang')}
          >
            <span className="m-icon">💡</span>
            <span>Tentang Media Pembelajaran</span>
          </button>
          <button
            type="button"
            id="m-nav-cta-btn"
            className="mobile-cta-btn"
            onClick={() => handleNavClick('modul')}
          >
            <span className="m-icon">🧪</span>
            <span>Mulai Belajar Sekarang</span>
          </button>
        </div>
      )}
    </header>
  );
}
