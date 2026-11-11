(() => {
  const root = document.getElementById("detailMain");
  if (!root) return;

  const studies = {
    "natural-soap": {
      en: [
        ["Problem it solves", "The students needed a clear online place to introduce their natural-soap venture, show their products and explain the catalogue to potential customers."],
        ["Process", "I gathered the content they wanted to communicate, organized the information for easy browsing, then built and checked a responsive, bilingual multi-page website."],
        ["Solution", "A lightweight website in Spanish and English that presents the venture, product catalogue and educational information. It is a presentation site, not an e-commerce platform."],
        ["Result", "The venture gained a shareable online presentation that makes its products and information easier to explore. The published site is available as a live demo."]
      ],
      es: [
        ["Problema que resuelve", "Las estudiantes necesitaban un espacio en línea claro para presentar su emprendimiento de jabones naturales, mostrar sus productos y explicar el catálogo a posibles clientes."],
        ["Proceso", "Recopilé el contenido que querían comunicar, organicé la información para facilitar la navegación y construí y revisé un sitio adaptable de varias páginas en dos idiomas."],
        ["Solución", "Un sitio web ligero en español e inglés que presenta el emprendimiento, el catálogo de productos y contenido educativo. Es un sitio informativo, no una plataforma de comercio electrónico."],
        ["Resultado", "El emprendimiento obtuvo una presentación digital que puede compartir y que facilita explorar sus productos e información. El sitio publicado está disponible como demostración."]
      ]
    },
    "parking-sv": {
      en: [
        ["Problem it solves", "Drivers need a simpler way to discover parking options, while parking-space owners need a way to present their spaces. The project explores bringing both sides into one product."],
        ["Process", "I collaborated with the team on product design and the JavaScript/TypeScript workstream: shaping user flows, implementing Next.js interfaces, integrating Supabase-backed functionality and checking the deployed experience. The wider team also developed a separate Python workstream."],
        ["Solution", "A collaborative full-stack academic prototype with driver- and owner-facing experiences, account flows and relational data integration. The Python codebase is a separate team workstream, not my individual implementation."],
        ["Result", "The team presented ParkingSV in English at the 2025 ¡Supérate! ADOC Expo and later qualified for Expo Tech 2026. The current public demo uses demonstration data; it does not provide real-time availability or confirmed reservations."]
      ],
      es: [
        ["Problema que resuelve", "Los conductores necesitan una forma más sencilla de descubrir opciones de parqueo, mientras que los propietarios necesitan presentar sus espacios. El proyecto explora cómo reunir ambas necesidades en un solo producto."],
        ["Proceso", "Colaboré con el equipo en el diseño del producto y en la línea JavaScript/TypeScript: definición de flujos de usuario, implementación de interfaces con Next.js, integración de funciones conectadas a Supabase y revisión de la experiencia desplegada. El equipo también desarrolló una línea Python separada."],
        ["Solución", "Un prototipo académico full-stack colaborativo con experiencias para conductores y propietarios, flujos de cuenta e integración de datos relacionales. El código Python corresponde a otra línea de trabajo del equipo, no a una implementación individual mía."],
        ["Resultado", "El equipo presentó ParkingSV en inglés en la Expo de Logros ¡Supérate! ADOC 2025 y posteriormente clasificó para Expo Tech 2026. La demo pública actual utiliza datos de demostración; no ofrece disponibilidad en tiempo real ni reservas confirmadas."]
      ]
    },
    "radio-transmission": {
      en: [
        ["Problem it solves", "A church needed a more accessible way for listeners to reach its online radio stream after professional retransmission costs became difficult to sustain and previous web players were not listener-friendly."],
        ["Process", "I worked on a simpler browser-based listening experience and explored the surrounding streaming environment, including Linux server administration, remote access and reverse-proxy concepts."],
        ["Solution", "A public web player for the radio stream, accompanied in this portfolio by a separate, sanitized monitoring-dashboard demonstration. The dashboard uses simulated metrics and does not expose production infrastructure."],
        ["Result", "Listeners have a simpler web entry point to the stream, while the portfolio demonstrates the monitoring interface without publishing private endpoints, infrastructure details or telemetry."]
      ],
      es: [
        ["Problema que resuelve", "Una iglesia necesitaba facilitar el acceso de sus oyentes a la radio por internet, porque los costos de retransmisión profesional eran difíciles de sostener y los reproductores anteriores no eran amigables."],
        ["Proceso", "Trabajé en una experiencia de escucha más sencilla desde el navegador y exploré el entorno de streaming, incluyendo administración de servidores Linux, acceso remoto y conceptos de proxy inverso."],
        ["Solución", "Un reproductor web público para la transmisión de radio, acompañado en este portafolio por una demostración separada y saneada de un panel de monitoreo. El panel utiliza métricas simuladas y no expone la infraestructura de producción."],
        ["Resultado", "Los oyentes cuentan con un punto de acceso web más sencillo a la transmisión, mientras que el portafolio demuestra la interfaz de monitoreo sin publicar endpoints privados, detalles de infraestructura ni telemetría."]
      ]
    },
    "discomovil": {
      en: [
        ["Problem it solves", "The family business needed a more straightforward way to present its DJ and event services online and give potential customers clear information and contact options."],
        ["Process", "I identified the main services and information to feature, organized them into a promotional website, then implemented responsive layouts and visual interactions for different screen sizes."],
        ["Solution", "A responsive promotional website for Discomóvil Extreme Galaxy, with service and event information and clear paths for prospective customers to get in touch."],
        ["Result", "The business gained a public link it can share to introduce its services. The site is promotional; it is not an event-booking or payment system."]
      ],
      es: [
        ["Problema que resuelve", "El negocio familiar necesitaba una forma más directa de presentar en línea sus servicios de DJ y eventos, con información clara y opciones de contacto para posibles clientes."],
        ["Proceso", "Identifiqué los servicios y la información principales, los organicé en un sitio promocional e implementé diseños adaptables e interacciones visuales para distintos tamaños de pantalla."],
        ["Solución", "Un sitio promocional adaptable para Discomóvil Extreme Galaxy, con información de servicios y eventos y vías claras para que los clientes potenciales se comuniquen."],
        ["Resultado", "El negocio obtuvo un enlace público que puede compartir para presentar sus servicios. El sitio es promocional; no funciona como sistema de reservas ni de pagos para eventos."]
      ]
    },
    "identify": {
      en: [
        ["Problem it solves", "The project explores how a browser can classify camera images into categories learned by a model, making a computer-vision concept easier to demonstrate."],
        ["Process", "I collaborated on the frontend and model integration, connecting a trained Teachable Machine model to a browser interface using JavaScript and TensorFlow.js, then testing the camera-based demonstration."],
        ["Solution", "An educational browser prototype that captures camera input and displays the model's image-classification output."],
        ["Result", "The prototype demonstrates a basic machine-learning workflow in the browser. Classification is not identity verification and must not be used for access-control or other high-stakes decisions."]
      ],
      es: [
        ["Problema que resuelve", "El proyecto explora cómo un navegador puede clasificar imágenes de cámara en categorías aprendidas por un modelo, haciendo más fácil demostrar un concepto de visión por computadora."],
        ["Proceso", "Colaboré en el frontend y la integración del modelo, conectando un modelo entrenado con Teachable Machine a una interfaz de navegador mediante JavaScript y TensorFlow.js, y probando la demostración con cámara."],
        ["Solución", "Un prototipo educativo en el navegador que captura imágenes de la cámara y muestra el resultado de clasificación del modelo."],
        ["Resultado", "El prototipo demuestra un flujo básico de aprendizaje automático en el navegador. La clasificación no verifica identidades y no debe utilizarse para control de acceso ni decisiones de alto impacto."]
      ]
    },
    "arch-keyboard-virtual-mouse": {
      en: [
        ["Problem it solves", "Using a physical mouse is not always convenient. I wanted pointer actions to remain accessible through keyboard shortcuts in my Arch Linux desktop workflow."],
        ["Process", "I explored Linux input-device handling, adapted the utility to my laptop and preferred shortcuts, integrated the required system components and documented setup and use."],
        ["Solution", "A Python-based Arch Linux utility that triggers selected pointer actions from the keyboard, using Linux input tooling."],
        ["Result", "My desktop workflow gained an alternative way to control the pointer, and the repository documents an approach other Arch users can inspect and adapt. Compatibility depends on the user's environment and configuration."]
      ],
      es: [
        ["Problema que resuelve", "Usar un mouse físico no siempre resulta práctico. Quería mantener disponibles ciertas acciones del puntero mediante atajos de teclado en mi entorno Arch Linux."],
        ["Proceso", "Exploré el manejo de dispositivos de entrada de Linux, adapté la utilidad a mi laptop y a mis atajos preferidos, integré los componentes del sistema necesarios y documenté su instalación y uso."],
        ["Solución", "Una utilidad para Arch Linux basada en Python que ejecuta determinadas acciones del puntero desde el teclado mediante herramientas de entrada de Linux."],
        ["Resultado", "Mi flujo de escritorio obtuvo una forma alternativa de controlar el puntero y el repositorio documenta un enfoque que otros usuarios de Arch pueden revisar y adaptar. La compatibilidad depende del entorno y la configuración."]
      ]
    },
    "warp-toggle-masque": {
      en: [
        ["Problem it solves", "Managing the official WARP client from a Linux desktop can involve repeated terminal commands and careful handling of connection state and network settings."],
        ["Process", "I mapped the connect and disconnect steps for my Arch Linux/KDE setup, automated the shell commands, and focused on predictable state changes and restoring the previous network configuration."],
        ["Solution", "A local Bash/KDE control utility that makes it easier to connect, disconnect and inspect the official WARP client using the MASQUE protocol."],
        ["Result", "The tool streamlines my own desktop workflow and provides a documented, reusable starting point. It is not a VPN service or a replacement for Cloudflare's official client; behavior depends on the local setup."]
      ],
      es: [
        ["Problema que resuelve", "Administrar el cliente oficial de WARP desde un escritorio Linux puede implicar repetir comandos de terminal y cuidar el estado de conexión y la configuración de red."],
        ["Proceso", "Definí los pasos de conexión y desconexión para mi entorno Arch Linux/KDE, automaticé los comandos de shell y prioricé cambios de estado predecibles y la restauración de la configuración de red previa."],
        ["Solución", "Una utilidad local de control con Bash/KDE que facilita conectar, desconectar y consultar el cliente oficial de WARP mediante el protocolo MASQUE."],
        ["Resultado", "La herramienta simplifica mi propio flujo de escritorio y ofrece una base documentada que puede reutilizarse. No es un servicio VPN ni reemplaza el cliente oficial de Cloudflare; su comportamiento depende de la configuración local."]
      ]
    },
    "car-dashboard": {
      en: [
        ["Problem it solves", "A driver-facing interface needs to group vehicle information so that it can be scanned quickly and understood at a glance."],
        ["Process", "As a collaborative classroom exercise, we translated a familiar vehicle-dashboard layout into a browser interface and practiced structuring its visual elements with HTML, CSS and JavaScript."],
        ["Solution", "A frontend dashboard mock-up that organizes sample vehicle information into a single visual interface."],
        ["Result", "The exercise provided practice in interface structure and frontend collaboration. It is a simulation and is not connected to a real vehicle or live telemetry."]
      ],
      es: [
        ["Problema que resuelve", "Una interfaz para conductores debe agrupar la información del vehículo para que pueda consultarse rápidamente y comprenderse de un vistazo."],
        ["Proceso", "Como ejercicio colaborativo de clase, trasladamos una distribución conocida de tablero de vehículo a una interfaz de navegador y practicamos la organización de sus elementos visuales con HTML, CSS y JavaScript."],
        ["Solución", "Una maqueta frontend de tablero que organiza información de muestra del vehículo en una sola interfaz visual."],
        ["Resultado", "El ejercicio permitió practicar estructura de interfaces y colaboración frontend. Es una simulación y no está conectada a un vehículo real ni a telemetría en vivo."]
      ]
    },
    "f1-team-profiles": {
      en: [
        ["Problem it solves", "Information about Formula 1 teams is easier to compare when names and key details are presented consistently instead of scattered across a page."],
        ["Process", "As a collaborative frontend exercise, we organized team information into reusable card layouts and applied HTML, CSS and JavaScript to make the content easier to scan."],
        ["Solution", "A browser-based collection of Formula 1 team profile cards using sample information and illustrative statistics."],
        ["Result", "The project provided practice in content organization, reusable layouts and responsive presentation. Its figures are illustrative, not live or authoritative sports data."]
      ],
      es: [
        ["Problema que resuelve", "La información de los equipos de Fórmula 1 es más fácil de comparar cuando los nombres y datos principales se presentan de forma consistente, en lugar de estar dispersos."],
        ["Proceso", "Como ejercicio frontend colaborativo, organizamos la información de los equipos en tarjetas reutilizables y utilizamos HTML, CSS y JavaScript para facilitar su consulta."],
        ["Solución", "Una colección de tarjetas de perfiles de equipos de Fórmula 1 en el navegador, con información de muestra y estadísticas ilustrativas."],
        ["Resultado", "El proyecto permitió practicar organización de contenido, diseños reutilizables y presentación adaptable. Sus cifras son ilustrativas, no datos deportivos en vivo ni oficiales."]
      ]
    }
  };

  const render = () => {
    if (root.querySelector(".case-study-breakdown")) return;
    const id = new URLSearchParams(window.location.search).get("project");
    const language = document.documentElement.lang === "es" ? "es" : "en";
    const entries = studies[id]?.[language];
    if (!entries || !root.querySelector(".detail-hero")) return;

    const section = document.createElement("section");
    section.className = "detail-section case-study-breakdown";
    section.innerHTML =
      '<p class="section-index">' + (language === "es" ? "04 / DESARROLLO DEL PROYECTO" : "04 / PROJECT BREAKDOWN") + '</p>' +
      '<div class="case-study-grid">' +
      entries.map((entry, index) =>
        '<article class="case-study-card"><span class="case-study-number">' + String(index + 1).padStart(2, "0") +
        '</span><h2>' + entry[0] + '</h2><p>' + entry[1] + '</p></article>'
      ).join("") + '</div>';

    const timeline = root.querySelector(".detail-timeline")?.closest(".detail-section");
    if (timeline) timeline.insertAdjacentElement("afterend", section);
    else root.querySelector(".detail-hero")?.insertAdjacentElement("afterend", section);
  };

  const style = document.createElement("style");
  style.textContent = `
    .case-study-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
    .case-study-card{position:relative;min-height:210px;padding:clamp(20px,3vw,30px);border:1px solid rgba(255,255,255,.12);border-radius:18px;background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018))}
    .case-study-number{display:inline-block;margin-bottom:24px;color:#e1b85b;font:500 11px/1 'DM Mono',monospace;letter-spacing:.12em}
    .case-study-card h2{margin:0 0 12px;font-size:clamp(18px,2vw,23px);line-height:1.2}
    .case-study-card p{margin:0;color:var(--muted,#aaa);line-height:1.75}
    @media(max-width:700px){.case-study-grid{grid-template-columns:1fr}.case-study-card{min-height:0}}
  `;
  document.head.appendChild(style);

  render();
  new MutationObserver(() => render()).observe(root, { childList: true });
})();
