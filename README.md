# Frescura Florería — Sitio web

Sitio estático (HTML + CSS + JavaScript puro, sin frameworks ni build).
100% software libre: no depende de licencias pagadas ni de ningún servicio propietario para funcionar.

## Estructura del proyecto

```
frescura-web/
├── index.html        → estructura de la página
├── styles.css         → estilos (colores, tipografía, layout)
├── script.js           → filtros de catálogo y enlaces de WhatsApp
├── products.js         → LISTA DE PRODUCTOS (aquí se editan/agregan)
├── images/                 → fotos de los productos
└── assets/lotus.svg     → ícono del logo
```

## Cómo agregar o cambiar fotos y productos

1. Copia la foto del producto (recomendado: formato vertical o cuadrado,
   menos de 1 MB) dentro de la carpeta `images/`.
2. Abre `products.js` con cualquier editor de texto (incluso el Bloc de
   notas o el editor de archivos de GitHub).
3. Copia uno de los bloques `{ ... }` de la categoría correspondiente y
   pégalo debajo, cambiando: `nombre`, `precio` (o `precioDesde`),
   `imagen` (nombre del archivo que subiste) e `incluye` (descripción).
4. Guarda. No hace falta tocar HTML ni CSS.

Ejemplo:
```js
{ categoria: "ramos", nombre: "Nuevo Ramo", precio: 90, imagen: "images/nuevo-ramo.jpg",
  incluye: "Ramo de rosas + follaje + lazo satinado" },
```

## Cómo probarlo en tu computadora antes de publicar

No necesitas instalar nada especial. Con Python (viene instalado en la
mayoría de sistemas) basta con:

```bash
cd frescura-web
python3 -m http.server 8000
```

Y abrir `http://localhost:8000` en el navegador.

---

## Despliegue en la nube (gratis, con software libre)

Recomendado: **GitHub Pages**. Es gratuito, usa Git (software libre) y
no requiere servidor propio.

### Opción A — GitHub Pages (recomendada)

1. **Crear cuenta en GitHub** (gratis): https://github.com/signup
2. **Instalar Git** (software libre) si no lo tienes:
   - Windows/Mac: https://git-scm.com/downloads
   - Ubuntu/Debian: `sudo apt install git`
3. **Crear un repositorio nuevo** en GitHub, por ejemplo `frescura-web`
   (puede ser público; GitHub Pages gratuito requiere repos públicos en
   cuentas gratuitas).
4. Desde la carpeta del proyecto, en la terminal:
   ```bash
   cd frescura-web
   git init
   git add .
   git commit -m "Primer despliegue del sitio Frescura"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/frescura-web.git
   git push -u origin main
   ```
5. En GitHub, entra al repositorio → **Settings → Pages**.
6. En "Source" elige la rama `main` y la carpeta `/ (root)`. Guarda.
7. En unos minutos tu sitio estará disponible en:
   `https://TU-USUARIO.github.io/frescura-web/`
8. (Opcional) Puedes conectar tu propio dominio (por ejemplo
   `www.frescurafloreria.pe`) en la misma sección "Pages", agregando un
   registro CNAME en tu proveedor de dominio.

Cada vez que quieras actualizar el catálogo, edita `products.js`, agrega
las fotos nuevas a `images/`, y vuelve a correr:
```bash
git add .
git commit -m "Actualizo catálogo"
git push
```
El sitio se actualiza solo en 1-2 minutos.

### Opción B — Cloudflare Pages (alternativa gratuita)

También gratuita y basada en el mismo repositorio de Git:
1. Sube el proyecto a GitHub como en la Opción A (pasos 1-4).
2. Entra a https://pages.cloudflare.com → conecta tu cuenta de GitHub.
3. Selecciona el repositorio `frescura-web`.
4. Framework: "None" / Build command: (vacío) / Output directory: `/`.
5. Deploy. Cloudflare te da una URL gratuita y también permite conectar
   un dominio propio, con certificado HTTPS automático.

### Opción C — Servidor propio con Nginx (software libre, VPS)

Si prefieres tener control total, puedes alquilar un VPS económico
(DigitalOcean, Hetzner, etc.) e instalar Nginx (software libre):
```bash
sudo apt update && sudo apt install nginx -y
# copia los archivos del sitio a /var/www/frescura
sudo cp -r frescura-web/* /var/www/frescura/
# configura un server block en /etc/nginx/sites-available/frescura
sudo systemctl reload nginx
```
Luego puedes usar **Certbot** (software libre) para HTTPS gratis con
Let's Encrypt.

---

## Notas

- El número de WhatsApp está configurado en `products.js`
  (`WHATSAPP_NUMBER = "51913961744"`). Si cambia, edítalo ahí.
- Todo el código (HTML, CSS, JS) es de código abierto y puedes
  modificarlo libremente con cualquier editor de texto.
- Para una experiencia de "subir fotos" tipo panel de administración
  (sin editar archivos de código), se puede integrar más adelante un
  CMS basado en Git como **Decap CMS** (software libre, gratuito),
  que da un formulario web para subir fotos y textos y los guarda
  directamente en este mismo repositorio. Puedo ayudarte a configurarlo
  si te interesa en una siguiente etapa.
