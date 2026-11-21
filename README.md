# Clean Beach — Web promocional

Sitio web estático y adaptable a móvil para promocionar **Clean Beach**, proyecto escolar del Equipo 5 de la FCFM, UANL, desarrollado en Unreal Engine 5.

**Tecnologías:** HTML, CSS y JavaScript puros. **Hosting recomendado:** GitHub Pages (gratuito para repositorios públicos). No necesita instalar dependencias, usar una base de datos ni pagar por un servidor.

## Estructura del proyecto

```text
clean-beach/
├── index.html        # Página web principal
├── styles.css        # Apariencia y diseño adaptable
├── script.js         # Menú móvil, galería y animaciones
├── .nojekyll         # Publicación estática directa en GitHub Pages
├── README.md         # Estas instrucciones
└── assets/
    ├── logo-clean-beach.png  # Logo oficial para encabezado y pie de página
    ├── favicon.ico          # Icono de pestaña del navegador
    ├── favicon-32x32.png    # Icono PNG para navegadores
    └── *.webp               # Capturas y modelos del proyecto
```

**Importante:** `index.html`, `styles.css`, `script.js` y la carpeta `assets/` deben estar juntos en la **raíz del repositorio**; no subas una carpeta adicional que los contenga dentro.

## Abrirlo en Visual Studio Code

1. Descarga y descomprime el ZIP de Clean Beach.
2. Instala Visual Studio Code y, si hace falta, Git.
3. En VS Code, ve a **Archivo > Abrir carpeta** y selecciona la carpeta con `index.html`.
4. Para probar la página, abre `index.html` en el navegador. Opcional: usa la extensión **Live Server** de VS Code o ejecuta `python -m http.server 8000` y visita `http://localhost:8000`.
5. Edita los textos en `index.html`, los estilos en `styles.css` y las interacciones en `script.js`.

## Publicar gratis con GitHub Pages desde VS Code

1. Inicia sesión en GitHub desde VS Code.
2. Abre la sección **Control de código fuente / Source Control**.
3. Selecciona **Initialize Repository / Inicializar repositorio** si todavía no está inicializado.
4. Escribe un mensaje de cambio (por ejemplo, `Sitio inicial de Clean Beach`) y haz clic en **Commit**. Si se te pide configurar nombre/correo de Git, complétalo.
5. Haz clic en **Publish Branch / Publicar rama** o **Publish to GitHub** y crea el repositorio **clean-beach** como **Public**.
6. Comprueba en github.com que la rama se llame `main` y que `index.html` aparezca en el primer nivel del repositorio.
7. En GitHub abre el repositorio > **Settings > Pages**.
8. En **Build and deployment**, elige **Source: Deploy from a branch**.
9. Selecciona **Branch: main**, carpeta **/(root)** y presiona **Save**.
10. Cuando GitHub termine de publicar, la URL normalmente tendrá este formato:

```text
https://TU-USUARIO.github.io/clean-beach/
```

Reemplaza `TU-USUARIO` por tu usuario real de GitHub. El enlace definitivo aparecerá en **Settings > Pages**. La publicación puede tardar unos minutos.

**Nota:** En GitHub Free el repositorio debe ser **público** para usar GitHub Pages. No subas contraseñas, información personal ni archivos privados.

### Actualizar la página posteriormente

1. Modifica los archivos en VS Code y guarda los cambios.
2. En **Source Control**, haz **Commit** con un mensaje claro.
3. Usa **Sync Changes** o **Push** para subirlos a GitHub.
4. GitHub Pages vuelve a publicar el sitio al recibir los cambios en `main`.

### Si ves un error 404 o faltan imágenes

- Verifica que `index.html` esté en la raíz del repositorio, no dentro de otra carpeta.
- Verifica que en **Settings > Pages** hayas seleccionado `main` y `/(root)`.
- Espera a que termine el despliegue y revisa la pestaña **Actions** si hay errores.
- Comprueba que `assets/` esté subida y que el uso de mayúsculas/minúsculas en las rutas coincida exactamente.
- En este proyecto las rutas de imágenes y archivos son **relativas** (`assets/...`, `styles.css`), por lo que funcionan también bajo `/clean-beach/`.

## Logo del sitio

El logo oficial que compartió el equipo se muestra mediante `assets/logo-clean-beach.png` tanto en el encabezado como en el pie de página. Se retiró el logo anterior dibujado en HTML/SVG y el texto duplicado. Para actualizarlo en el futuro basta con sustituir esa imagen conservando el nombre. Los favicons de la pestaña también usan el logo del proyecto.

## Sobre el contenido

La documentación original muestra un videojuego **en desarrollo**. Esta web promociona el universo visual y sus avances; no promete funciones todavía no verificadas ni ofrece una descarga inexistente. El contenido visual procede de la documentación del equipo, `Clean Beach Documentacion 1 Equipo 5.pdf`. No aparecen nombres completos ni matrículas de integrantes porque el sitio será público.

## Documentación oficial

- https://docs.github.com/en/pages/getting-started-with-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site


## Corrección del logo demasiado grande en GitHub Pages

Si el logo se ve bien en Live Server pero enorme en GitHub Pages, el sitio puede
estar usando un `styles.css` antiguo que no incluye el selector `.brand-logo`.
En esta versión el HTML fija el tamaño del logo incluso si el CSS está en caché
y usa `styles.css?v=2` para forzar la actualización del archivo de estilos.

1. Sustituye `index.html` y `styles.css` del repositorio por estos archivos.
2. Confirma (commit) y envía (push) los cambios a la rama de GitHub Pages.
3. Espera a que finalice el despliegue en GitHub Actions o Settings > Pages.
4. Abre `https://drycarmine.github.io/Clean-Beach/` y presiona Ctrl+Shift+R.

No necesitas cambiar la URL, instalar dependencias ni pagar alojamiento.
