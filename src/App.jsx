import { useState } from "react";
import "./index.css";

const EMPRESA = {
  nombre: "Calzado y Más",
  slogan: "Calidad y estilo en cada paso",
  whatsapp: "524771234567",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
};

const menuItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Colecciones", href: "#colecciones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const whatsappMensaje = encodeURIComponent(
    "Hola, quiero información sobre los modelos de Calzado y Más."
  );

  return (
    <main className="page">
      <header className="topbar">
        <div className="topbar__content">
          <a href="#inicio" className="brand" onClick={closeMenu}>
            <div className="brand__logo">
              <img src="/logo-calzado.jpeg" alt="Logo Calzado y Más" />
            </div>

            <div className="brand__text">
              <strong>{EMPRESA.nombre}</strong>
              <small>{EMPRESA.slogan}</small>
            </div>
          </a>

          <nav className="desktop-menu">
            {menuItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topbar__actions">
            <a
              className="whatsapp-btn desktop-whatsapp"
              href={`https://wa.me/${EMPRESA.whatsapp}?text=${whatsappMensaje}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <button
              className={`menu-btn ${menuOpen ? "menu-btn--open" : ""}`}
              type="button"
              aria-label="Abrir menú"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
          <nav>
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}

            <a
              href={`https://wa.me/${EMPRESA.whatsapp}?text=${whatsappMensaje}`}
              target="_blank"
              rel="noreferrer"
              className="mobile-menu__whatsapp"
              onClick={closeMenu}
            >
              WhatsApp Business
            </a>

            <div className="mobile-menu__socials">
              <a href={EMPRESA.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>

              <a href={EMPRESA.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section id="inicio" className="hero-bg">
        <div className="hero-bg__overlay" />

        <div className="scroll-arrows" aria-hidden="true">
          <span className="arrow arrow--1">↓</span>
          <span className="arrow arrow--2">↓</span>
          <span className="arrow arrow--3">↓</span>
          <span className="arrow arrow--4">↓</span>
          <span className="arrow arrow--5">↓</span>
          <span className="arrow arrow--6">↓</span>
          <span className="arrow arrow--7">↓</span>
          <span className="arrow arrow--8">↓</span>
        </div>

        <div className="hero-bg__content">
          <p className="hero-bg__eyebrow">Catálogo digital de calzado</p>

          <h1>
            Calidad y estilo,
            <br />
            aquí la tenemos.
          </h1>

          <p className="hero-bg__description">
            Descubre modelos para dama, caballero y familia. Consulta tallas,
            colores y disponibilidad directamente por WhatsApp.
          </p>

          <div className="hero-bg__actions">
            <a href="#catalogo" className="hero-btn hero-btn--primary">
              Ver catálogo
            </a>

            <a
              href={`https://wa.me/${EMPRESA.whatsapp}?text=${whatsappMensaje}`}
              target="_blank"
              rel="noreferrer"
              className="hero-btn hero-btn--secondary"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </div>

        <a href="#catalogo" className="scroll-hint">
          <span>Desliza para ver más</span>
          <b>↓</b>
        </a>
      </section>

      <section id="catalogo" className="section-placeholder">
        Catálogo
      </section>

      <section id="colecciones" className="section-placeholder">
        Colecciones
      </section>

      <section id="nosotros" className="section-placeholder">
        Nosotros
      </section>

      <section id="contacto" className="section-placeholder">
        Contacto
      </section>
    </main>
  );
}