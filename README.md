# Jeremy Torres — Software Development Portfolio

[English](#english) | [Español](#español)

<a id="english"></a>

## English

A bilingual portfolio of software projects by **Jeremy Torres**, focused on web development, Linux desktop automation, interface engineering and applied programming. The site gives recruiters, developers and collaborators a direct way to explore project demonstrations, source code, technical decisions and the scope of each project.

**Live portfolio:** https://jeremy-megajs.github.io/Portfolio/  
**Source code:** https://github.com/Jeremy-MegaJS/Portfolio

### What the portfolio demonstrates

- **Frontend engineering:** responsive layouts, semantic HTML, CSS architecture, JavaScript interactions and data-driven project views.
- **Product communication:** project pages explain the problem, intended audience, implementation and current limitations.
- **Systems work:** Linux utilities, shell automation and practical interaction with desktop services.
- **Technical breadth:** collaborative full-stack work, browser-based machine-learning experiments and hardware-oriented learning.
- **Professional documentation:** entries distinguish individual work, team contributions, academic prototypes and demonstrations.

### Selected projects

| Project | What it demonstrates |
| --- | --- |
| [Natural Soap](https://jeremy-megajs.github.io/natural-soap/) | A bilingual, multi-page product website with a catalogue and educational content. |
| [ParkingSV](https://parkingsv.vercel.app/) | A collaborative parking-discovery and management web application. The portfolio describes my contribution and the prototype's current scope. |
| [Radio Transmission Monitor](https://jeremy-megajs.github.io/monitoreo-transmission_demo/) | A static dashboard demonstration with simulated monitoring metrics and a separate public radio stream. |
| [Discomóvil Extreme Galaxy](https://discomovilextremegalaxy.github.io/discomovilextremegalaxy.com/) | A responsive promotional website for a DJ and event-services business. |
| [IDentify](https://jeremy-torres2026-web.github.io/IDentify/my-model/) | A collaborative browser-based image-classification prototype using TensorFlow.js and Teachable Machine. |

The technical lab also includes Linux input-control automation, a Cloudflare WARP desktop utility and small frontend interface exercises.

### Technical implementation

The portfolio is a static website built with **HTML5, CSS3 and vanilla JavaScript**. It has no frontend framework, application server, database, build step or analytics dependency. The contact form uses FormSubmit as an external form processor and email-forwarding service.

Project information is separated from the rendering logic:

- **assets/js/projects.js** contains descriptions, links, technologies and project classifications.
- **assets/js/translations.js** contains the interface translations.
- **assets/js/main.js** renders project cards, technology evidence and language selection.
- **assets/js/project-details.js** builds each individual project detail view.
- **assets/js/particle-field.js** renders the ambient particle background.
- **assets/js/contact-menu.js** manages the floating contact menu and its accessible interaction states.

The main pages are **index.html**, **about-me.html**, **cv.html**, **volunteering.html**, **project.html**, **credits.html** and **privacy.html**. Project image galleries are organized under **assets/images/project-galleries/**, with one folder and a `gallery.json` manifest per project. The CV PDF upload location is **assets/documents/jeremy-torres-cv.pdf**. Styles and project artwork are organized under **assets/css/** and **assets/images/**.

### Interface and accessibility

- Responsive presentation for desktop, tablet and mobile.
- English and Spanish content, with the selected language remembered in the browser.
- Project-specific detail pages and direct links to live demonstrations and source repositories.
- Lazy-loaded project artwork and a mostly static visual presentation.
- Static ambient backgrounds and accessible navigation.
- Keyboard-operable navigation and an accessible contact form with email notifications.

### Run locally

The site is static and can be served with any local HTTP server. With Python installed:

~~~bash
python -m http.server 8000
~~~

Open http://localhost:8000 in a browser.

### Deployment

The public portfolio is hosted on GitHub Pages. A GitHub Actions workflow validates the JavaScript source and deploys the site when changes are pushed to the publishing branch.

### Project attribution

The portfolio labels individual projects separately from collaborative work. ParkingSV and IDentify are team projects; academic prototypes and simulated demonstrations are identified as such. The descriptions do not present unfinished work or demo data as production functionality.

### Contact

**Jeremy Torres**  
Email: jeremy.torres.1.2026@gmail.com  
GitHub: https://github.com/Jeremy-MegaJS

---

<a id="español"></a>

## Español

Portafolio bilingüe de proyectos de software de **Jeremy Torres**, enfocado en desarrollo web, automatización de escritorio en Linux, ingeniería de interfaces y programación aplicada. El sitio permite que reclutadores, desarrolladores y colaboradores exploren demostraciones, código fuente, decisiones técnicas y el alcance real de cada proyecto.

**Portafolio:** https://jeremy-megajs.github.io/Portfolio/  
**Código fuente:** https://github.com/Jeremy-MegaJS/Portfolio

### Qué demuestra el portafolio

- **Desarrollo frontend:** interfaces adaptables, HTML semántico, arquitectura CSS, interacciones JavaScript y vistas de proyectos basadas en datos.
- **Comunicación de producto:** cada proyecto explica el problema que aborda, su público, su implementación y sus limitaciones actuales.
- **Trabajo con sistemas:** utilidades para Linux, automatización con shell e integración práctica con servicios del escritorio.
- **Amplitud técnica:** desarrollo full-stack colaborativo, experimentos de aprendizaje automático en navegador y aprendizaje orientado a hardware.
- **Documentación profesional:** se distingue el trabajo individual de los proyectos en equipo, los prototipos académicos y las demostraciones.

### Proyectos destacados

| Proyecto | Qué demuestra |
| --- | --- |
| [Natural Soap](https://jeremy-megajs.github.io/natural-soap/) | Sitio web bilingüe de varias páginas, con catálogo de productos y contenido educativo. |
| [ParkingSV](https://parkingsv.vercel.app/) | Aplicación web colaborativa para descubrir y gestionar opciones de estacionamiento. El portafolio especifica mi aporte y el alcance actual del prototipo. |
| [Radio Transmission Monitor](https://jeremy-megajs.github.io/monitoreo-transmission_demo/) | Demostración de un panel estático con métricas simuladas y una señal pública de radio independiente. |
| [Discomóvil Extreme Galaxy](https://discomovilextremegalaxy.github.io/discomovilextremegalaxy.com/) | Sitio promocional adaptable para un negocio de DJ y servicios para eventos. |
| [IDentify](https://jeremy-torres2026-web.github.io/IDentify/my-model/) | Prototipo colaborativo de clasificación de imágenes en navegador con TensorFlow.js y Teachable Machine. |

El laboratorio técnico también incluye automatización de dispositivos de entrada en Linux, una utilidad de escritorio para Cloudflare WARP y pequeños ejercicios de interfaces frontend.

### Implementación técnica

El portafolio es un sitio estático desarrollado con **HTML5, CSS3 y JavaScript puro**. No utiliza framework frontend, servidor de aplicación, base de datos, proceso de compilación ni dependencia de analítica. El formulario utiliza FormSubmit como procesador externo y servicio de reenvío de correos.

La información de los proyectos está separada de la lógica que la presenta:

- **assets/js/projects.js** contiene descripciones, enlaces, tecnologías y clasificaciones.
- **assets/js/translations.js** contiene las traducciones de la interfaz.
- **assets/js/main.js** genera las tarjetas, la evidencia de tecnologías y el selector de idioma.
- **assets/js/project-details.js** construye la vista individual de cada proyecto.
- **assets/js/particle-field.js** dibuja el fondo ambiental de partículas.
- **assets/js/contact-menu.js** controla el menú flotante de contacto y sus estados accesibles.

Las páginas principales son **index.html**, **project.html** y **privacy.html**. Los estilos y recursos visuales están organizados en **assets/css/** y **assets/images/**.

### Interfaz y accesibilidad

- Diseño adaptable a computadoras, tabletas y teléfonos.
- Contenido en inglés y español con preferencia de idioma guardada en el navegador.
- Páginas de detalle y enlaces directos a demostraciones y repositorios.
- Carga diferida de imágenes y efectos visuales ligeros.
- Compatibilidad con la preferencia de movimiento reducido.
- Navegación operable con teclado y menú flotante de contacto accesible.

### Ejecución local

El sitio es estático y puede servirse con cualquier servidor HTTP local. Con Python instalado:

~~~bash
python -m http.server 8000
~~~

Abre http://localhost:8000 en el navegador.

### Publicación

El portafolio público está alojado en GitHub Pages. Un flujo de GitHub Actions valida el código JavaScript y publica el sitio cuando se envían cambios a la rama de publicación.

### Atribución de proyectos

El portafolio distingue los proyectos individuales del trabajo colaborativo. ParkingSV e IDentify son proyectos en equipo; los prototipos académicos y las demostraciones con datos simulados se identifican como tales. Las descripciones no presentan proyectos inconclusos ni datos de demostración como funcionalidades de producción.

### Contacto

**Jeremy Torres**  
Correo: jeremy.torres.1.2026@gmail.com  
GitHub: https://github.com/Jeremy-MegaJS
