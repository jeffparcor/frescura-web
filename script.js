(function () {
  "use strict";

  /* ---------- WhatsApp links ---------- */
  function waLink(message) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  const genericMsg = "¡Hola Frescura! 🌸 Quisiera hacer una consulta sobre sus productos.";
  ["navWaBtn", "heroWaBtn", "ctaWaBtn", "footerWaBtn", "floatWaBtn"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = waLink(genericMsg);
  });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    mainNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  function priceLabel(p) {
    if (p.precio != null) return `S/ ${p.precio.toFixed(2)}`;
    if (p.precioDesde != null) return `Desde S/ ${p.precioDesde.toFixed(2)}`;
    return "Consultar";
  }

  /* ---------- Category cards ("Nuestra colección") ---------- */
  const catGrid = document.getElementById("catGrid");
  CATEGORIAS.forEach((cat) => {
    const card = document.createElement("button");
    card.className = "cat-card";
    card.innerHTML = `
      <span class="cat-icon">${cat.icono}</span>
      <h3>${cat.label}</h3>
      <p>${cat.descripcion}</p>
      <span class="vermas">Ver destacados →</span>
    `;
    card.addEventListener("click", () => {
      document.getElementById("destacados").scrollIntoView({ behavior: "smooth" });
    });
    catGrid.appendChild(card);
  });

  /* ---------- Productos destacados (2 por categoría) ---------- */
  const featGrid = document.getElementById("featGrid");
  const featured = PRODUCTS.filter((p) => p.destacado);

  featured.forEach((p) => {
    const catMatch = CATEGORIAS.find((c) => c.id === p.categoria);
    const label = catMatch ? catMatch.label.toUpperCase() : p.categoria.toUpperCase();
    const msg = `¡Hola Frescura! 🌸 Vi "${p.nombre}" en destacados (${priceLabel(p)}) y quisiera consultar disponibilidad.`;
    const card = document.createElement("article");
    card.className = "feat-card";
    card.innerHTML = `
      <div class="feat-media"><img src="${p.imagen}" alt="${p.nombre}" loading="lazy"></div>
      <div class="feat-body">
        <span class="feat-label">${label}</span>
        <h3>${p.nombre}</h3>
        <p class="feat-price">${priceLabel(p)}</p>
        <a class="btn btn-outline" href="${waLink(msg)}" target="_blank" rel="noopener">Consultar disponibilidad</a>
      </div>
    `;
    featGrid.appendChild(card);
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
