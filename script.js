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

  /* ---------- Build category filters ---------- */
  const filtersEl = document.getElementById("filters");
  let activeCategory = "todos";

  CATEGORIAS.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat.id === "todos" ? " active" : "");
    btn.textContent = cat.label;
    btn.dataset.cat = cat.id;
    btn.addEventListener("click", () => {
      activeCategory = cat.id;
      filtersEl.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts();
    });
    filtersEl.appendChild(btn);
  });

  /* ---------- Render product cards ---------- */
  const gridEl = document.getElementById("productGrid");

  function priceLabel(p) {
    if (p.precio != null) return `S/ ${p.precio.toFixed(2)}`;
    if (p.precioDesde != null) return `Desde S/ ${p.precioDesde.toFixed(2)}`;
    return "Consultar";
  }

  function renderProducts() {
    gridEl.innerHTML = "";
    const items =
      activeCategory === "todos"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.categoria === activeCategory);

    if (items.length === 0) {
      gridEl.innerHTML = "<p>Pronto agregaremos productos a esta categoría.</p>";
      return;
    }

    items.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";

      const msg = `¡Hola Frescura! 🌸 Me interesa el producto "${p.nombre}" (${priceLabel(p)}). ¿Podrían darme más información?`;

      card.innerHTML = `
        <div class="card-media">
          <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
          <span class="card-price">${priceLabel(p)}</span>
        </div>
        <div class="card-body">
          <h3>${p.nombre}</h3>
          <p>${p.incluye}</p>
          <a class="btn btn-primary btn-sm card-cta" href="${waLink(msg)}" target="_blank" rel="noopener">Pedir por WhatsApp</a>
        </div>
      `;
      gridEl.appendChild(card);
    });
  }

  renderProducts();

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
