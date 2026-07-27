/*
  ============================================================
  CATÁLOGO DE PRODUCTOS — FLORERÍA FRESCURA
  ============================================================
  Este sitio ya NO muestra el catálogo completo: solo la sección
  "Productos destacados" con los productos marcados como
  "destacado: true" (2 por categoría).

  Para CAMBIAR qué se muestra como destacado:
  1. Pon "destacado: true" en el producto que quieras mostrar.
  2. Quita "destacado: true" (o bórralo) del que quieras ocultar.
  3. Mantén máximo 2 productos marcados por categoría para que la
     sección se vea balanceada.

  Para AGREGAR un producto nuevo:
  1. Guarda la foto dentro de la carpeta /images → images/mi-foto.jpg
  2. Copia uno de los bloques { ... } de abajo y pégalo dentro
     del arreglo de su categoría, con "imagen" apuntando a tu foto.

  Categorías válidas: "ramos", "plantas", "joyas", "velas"
  (Los productos "box" se agrupan visualmente dentro de "ramos",
  ya que son arreglos de rosas en caja).
  ============================================================
*/

const PRODUCTS = [
  // ---------- RAMOS (incluye Box) ----------
  { categoria: "ramos", nombre: "Bouquet Pienso en Ti", imagen: "images/Bouquet_Novia_-_Perla.jpg",
    incluye: "Rosas premiun + follaje + lazo satinado", destacado: true },
  { categoria: "ramos", nombre: "Box Detalles de Amor", precio: 50, imagen: "images/caja box.jpg",
    incluye: "12 rosas premium + topper + lazo satinado", destacado: true },
  { categoria: "ramos", nombre: "Amor Eterno", precio: 130, imagen: "images/amor_eterno.jpg",
    incluye: "6 rosas rojas + 6 rosas rosadas + lirios + follaje + lazo satinado" },
  { categoria: "ramos", nombre: "Tulicorazón", precio: 170, imagen: "images/tulicorazon.jpg",
    incluye: "Ramo de 12 tulipanes" },
  { categoria: "ramos", nombre: "Eres Mi Bien", precio: 140, imagen: "images/eres_mi_bien.jpg",
    incluye: "Ramo de 24 rosas premium + follaje + topper + lazo satinado" },
  { categoria: "ramos", nombre: "Amor Verano", precio: 80, imagen: "images/amor_verano.jpg",
    incluye: "Ramo de 12 rosas premium + follaje + topper + lazo satinado" },
  { categoria: "ramos", nombre: "Dulce Encanto", precio: 65, imagen: "images/dulce_encanto.jpg",
    incluye: "6 rosas vintage + astromelias rosadas + follaje + lazo satinado" },
  { categoria: "ramos", nombre: "Amor Radiante", precio: 50, imagen: "images/amor_radiante.jpg",
    incluye: "6 girasoles + siempre viva + follaje + lazo satinado" },
  { categoria: "ramos", nombre: "Susurro de Amor", precio: 55, imagen: "images/susurro_amor.jpg",
    incluye: "6 rosas premium + follaje + lazo satinado" },
  { categoria: "ramos", nombre: "Contigo Aprendí", precio: 30, imagen: "images/contigo_aprendi.jpg",
    incluye: "3 rosas premium + follaje + lazo satinado" },
  { categoria: "ramos", nombre: "Puro Amor Mini Box", precio: 55, imagen: "images/puro_amor_box.jpg",
    incluye: "4 rosas premium + topper + lazo satinado" },

  // ---------- PLANTAS ----------
  { categoria: "plantas", nombre: "Fitonia + Soñadora", precioDesde: 40, imagen: "images/Fitonia.jpg",
    incluye: "Fitonia + maceta · consulta colores disponibles", destacado: true },
  { categoria: "plantas", nombre: "Mini Anturios Corazón", precio: 50, imagen: "images/Anturio.jpg",
    incluye: "Mini anturio + bolsa + lazo satinado", destacado: true },
  { categoria: "plantas", nombre: "Orquídea Amarilla", precioDesde: 130, imagen: "images/orquidea_amarilla.jpg",
    incluye: "Orquídea + maceta · consulta colores disponibles" },
  { categoria: "plantas", nombre: "Suculentas", precio: 13, imagen: "images/suculentas.jpg",
    incluye: "Suculenta + caja de regalo" },

  // ---------- JOYAS ARTESANALES (técnica Miyuki) ----------
  { categoria: "joyas", nombre: "Aretes Miyuki", imagen: "images/joyas 1.png",
    incluye: "Set de pulseras tejidas a mano · consulta modelos", destacado: true },
  { categoria: "joyas", nombre: "Aretes Florales", imagen: "images/joyas_4.jpg",
    incluye: "Aretes tejidos técnica Miyuki", destacado: true },
  { categoria: "joyas", nombre: "Pulseras con dijes", imagen: "images/joyas_3.jpg",
    incluye: "Pulseras con dije de corazón · consulta modelos" },
  { categoria: "joyas", nombre: "Aretes geométricos", imagen: "images/joyas_4.jpg",
    incluye: "Aretes tejidos técnica Miyuki" },
  { categoria: "joyas", nombre: "Anillos artesanales", imagen: "images/joyas_6.jpg",
    incluye: "Anillo tejido técnica Miyuki" },

  // ---------- VELAS AROMÁTICAS ----------
  { categoria: "velas", nombre: "Vela Corazón", precioDesde: 18, imagen: "images/velas 1.png",
    incluye: "Vela artesanal + caja · cera de soya con aromas naturales", destacado: true },
  { categoria: "velas", nombre: "Vela Girasol", precioDesde: 18, imagen: "images/velas 2.png",
    incluye: "Vela artesanal + caja · cera de soya con aromas naturales", destacado: true },
];

/*
  Íconos de línea (SVG) dibujados a medida — un solo trazo, sin relleno,
  para verse consistentes con el resto del sitio (mismo estilo que la
  hoja decorativa de "Nuestra historia"). No se usan emojis a propósito:
  varían de color y de forma según el dispositivo del visitante.
*/
const ICONS = {
  ramos: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 23c-6.5 0-11-4.3-11-9.6C13 10 15.3 7 19 7c3 0 4.3 2.2 5 4.3C24.7 9.2 26 7 29 7c3.7 0 6 3 6 6.4 0 5.3-4.5 9.6-11 9.6Z"/>
    <path d="M24 23c2.2 2 2.2 5 0 7"/>
    <path d="M24 30v11"/>
    <path d="M24 35c-2.6 0-4.6-1.7-5.5-3.6"/>
    <path d="M24 39c2.6 0 4.6-1.7 5.5-3.6"/>
  </svg>`,
  plantas: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 37C9.5 22 19 9 36 9c2.2 15.4-8.3 26-24 28Z"/>
    <path d="M12 37c6.4-6.4 12.8-12.8 24-24"/>
  </svg>`,
  joyas: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 18 17 8h14l9 10-15 22Z"/>
    <path d="M8 18h32"/>
    <path d="M17 8l2.5 10L24 41l4.5-23L31 8"/>
  </svg>`,
  velas: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17 21h14v18a2.4 2.4 0 0 1-2.4 2.4H19.4A2.4 2.4 0 0 1 17 39V21Z"/>
    <path d="M24 21v-7"/>
    <path d="M24 14c3.2-3 3.2-6.4 0-9-3.2 2.6-3.2 6 0 9Z"/>
  </svg>`,
};

const CATEGORIAS = [
  { id: "ramos",   label: "Ramos",   icono: ICONS.ramos,   descripcion: "Ramos frescos, arreglos florales y flores sueltas para cada ocasión especial." },
  { id: "plantas", label: "Plantas", icono: ICONS.plantas, descripcion: "Plantas, orquídeas y suculentas para llenar de vida y naturaleza tu hogar." },
  { id: "joyas",   label: "Joyas",   icono: ICONS.joyas,   descripcion: "Joyería artesanal técnica Miyuki, ideal para regalar o lucir." },
  { id: "velas",   label: "Velas",   icono: ICONS.velas,   descripcion: "Velas aromáticas artesanales con aromas naturales para crear ambientes únicos." },
];

const WHATSAPP_NUMBER = "51913961744"; // Perú +51 913 961 744
