/*
  ============================================================
  CATÁLOGO DE PRODUCTOS — FLORERÍA FRESCURA
  ============================================================
  Para AGREGAR un producto nuevo:
  1. Guarda la foto (recortada, cuadrada o vertical) dentro de la
     carpeta /images  →  ejemplo: images/ramo-nuevo.jpg
  2. Copia uno de los bloques { ... } de abajo y pégalo dentro
     del arreglo de su categoría.
  3. Cambia el texto entre comillas por los datos del producto nuevo.
  4. Guarda el archivo. ¡Listo! No se necesita programar nada más.

  Categorías válidas: "ramos", "box", "plantas", "joyas", "velas"
  ============================================================
*/

const PRODUCTS = [
  // ---------- RAMOS ----------
  { categoria: "ramos", nombre: "Tiempo Real", precio: 130, imagen: "images/tiempo_real.jpg",
    incluye: "Ramo de mini rosas + follaje + lazo satinado" },
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

  // ---------- BOX ----------
  { categoria: "box", nombre: "Dulce Amor Box", precio: 110, imagen: "images/dulce_amor_box.jpg",
    incluye: "12 rosas premium + topper + lazo satinado" },
  { categoria: "box", nombre: "Puro Amor Mini Box", precio: 55, imagen: "images/puro_amor_box.jpg",
    incluye: "4 rosas premium + topper + lazo satinado" },

  // ---------- PLANTAS ----------
  { categoria: "plantas", nombre: "Orquídea", precioDesde: 130, imagen: "images/orquidea_purpura.jpg",
    incluye: "Orquídea + maceta · consulta colores disponibles" },
  { categoria: "plantas", nombre: "Orquídea Amarilla", precioDesde: 130, imagen: "images/orquidea_amarilla.jpg",
    incluye: "Orquídea + maceta · consulta colores disponibles" },
  { categoria: "plantas", nombre: "Mini Anturios Corazón", precio: 50, imagen: "images/anturios.jpg",
    incluye: "Mini anturio + bolsa + lazo satinado" },
  { categoria: "plantas", nombre: "Suculentas", precio: 13, imagen: "images/suculentas.jpg",
    incluye: "Suculenta + caja de regalo" },

  // ---------- JOYAS ARTESANALES (técnica Miyuki) ----------
  { categoria: "joyas", nombre: "Pulseras Miyuki", imagen: "images/joyas_1.jpg",
    incluye: "Set de pulseras tejidas a mano · consulta modelos" },
  { categoria: "joyas", nombre: "Pulseras con dijes", imagen: "images/joyas_3.jpg",
    incluye: "Pulseras con dije de corazón · consulta modelos" },
  { categoria: "joyas", nombre: "Aretes geométricos", imagen: "images/joyas_4.jpg",
    incluye: "Aretes tejidos técnica Miyuki" },
  { categoria: "joyas", nombre: "Aretes florales", imagen: "images/joyas_5.jpg",
    incluye: "Aretes tejidos técnica Miyuki" },
  { categoria: "joyas", nombre: "Anillos artesanales", imagen: "images/joyas_6.jpg",
    incluye: "Anillo tejido técnica Miyuki" },

  // ---------- VELAS AROMÁTICAS ----------
  { categoria: "velas", nombre: "Velas Aromáticas", precioDesde: 18, imagen: "images/velas_1.jpg",
    incluye: "Vela artesanal + caja · cera de soya con aromas naturales" },
  { categoria: "velas", nombre: "Velas Aromáticas", precioDesde: 18, imagen: "images/velas_2.jpg",
    incluye: "Vela artesanal + caja · cera de soya con aromas naturales" },
];

const CATEGORIAS = [
  { id: "todos",   label: "Todos" },
  { id: "ramos",   label: "Ramos" },
  { id: "box",     label: "Box" },
  { id: "plantas", label: "Plantas" },
  { id: "joyas",   label: "Joyas" },
  { id: "velas",   label: "Velas Aromáticas" },
];

const WHATSAPP_NUMBER = "51913961744"; // Perú +51 913 961 744
