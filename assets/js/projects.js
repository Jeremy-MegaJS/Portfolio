window.PROJECTS = {
  featured: [
    {
      id:"natural-soap", category:"WEB / INDIVIDUAL", visual:"soap",
      title:"Natural Soap",
      en:"Created to help a small natural-soap brand explain its products and make its catalogue and educational information easier to browse. I worked on it to practice delivering a complete, bilingual web presence for a real-world product context.",
      es:"Pensado para ayudar a una marca de jabones naturales a explicar sus productos y facilitar la consulta de su catálogo e información educativa. Lo trabajé para practicar la entrega de una presencia web bilingüe en un contexto real de productos.",
      stack:["HTML5","CSS3","JavaScript","GitHub Pages"],
      demo:"https://jeremy-megajs.github.io/natural-soap/",
      repo:"https://github.com/Jeremy-MegaJS/natural-soap",
      kind:"individual"
    },
    {
      id:"parking-sv", category:"WEB / TEAM", visual:"parking",
      title:"ParkingSV",
      en:"Explores how drivers could find parking options and how owners could present their spaces in one experience. I joined the project to work on a practical full-stack product challenge with a team, and to learn how frontend flows connect to authentication and relational data. It remains an academic prototype with demonstration data, not a live booking marketplace.",
      es:"Explora cómo los conductores podrían encontrar opciones de estacionamiento y cómo los propietarios podrían presentar sus espacios en una misma experiencia. Participé para resolver un reto práctico full-stack en equipo y aprender cómo se conectan los flujos frontend con autenticación y datos relacionales. Sigue siendo un prototipo académico con datos de demostración, no un marketplace de reservas activo.",
      stack:["Next.js","React","TypeScript","Supabase","PostgreSQL","Vercel"],
      demo:"https://parkingsv-web-git-main-parkingsv.vercel.app/",
      repo:"https://github.com/parkingSV26/parkingsv-web",
      kind:"academic"
    },
    {
      id:"radio-transmission", category:"SYSTEMS / WEB", visual:"radio",
      title:"Radio FE · Streaming & Monitor",
      en:"Helps listeners reach a public radio stream through a simple web player, while the separate dashboard demo explores how operators might read service health at a glance. I worked on it to understand the connection between user-facing web interfaces and the infrastructure that keeps a stream available. Dashboard metrics are simulated, not production telemetry.",
      es:"Facilita que los oyentes accedan a una señal pública de radio mediante un reproductor web sencillo; el panel separado explora cómo un operador podría consultar el estado de un servicio rápidamente. Lo trabajé para comprender la relación entre las interfaces visibles y la infraestructura que mantiene disponible una transmisión. Las métricas del panel son simuladas, no telemetría de producción.",
      stack:["HTML5","CSS3","JavaScript","Ubuntu","Nginx","Omnia"],
      demo:"https://jeremy-megajs.github.io/monitoreo-transmission_demo/",
      extra:"https://giovannicastellon.github.io/radiofe990am/",
      repo:"https://github.com/Jeremy-MegaJS/monitoreo-transmission_demo",
      kind:"individual",
      note:"simulated"
    },
    {
      id:"discomovil", category:"WEB / INDIVIDUAL", visual:"galaxy",
      title:"Discomóvil Extreme Galaxy",
      en:"Gives a family-run DJ and event-services business a clearer place to present its services and visual identity online. I worked on it because a real small-business context makes the design decisions concrete: visitors need to understand the offer quickly and know how to make contact.",
      es:"Ofrece a un negocio familiar de DJ y servicios para eventos un espacio más claro para presentar sus servicios e identidad visual. Lo trabajé porque un contexto real de pequeña empresa vuelve concretas las decisiones de diseño: los visitantes necesitan entender la oferta rápidamente y saber cómo contactar.",
      stack:["HTML5","CSS3","JavaScript","Intersection Observer"],
      demo:"https://discomovilextremegalaxy.github.io/discomovilextremegalaxy.com/",
      repo:"https://github.com/discomovilextremegalaxy/discomovilextremegalaxy.com",
      kind:"individual"
    },
    {
      id:"identify", category:"AI / TEAM PROTOTYPE", visual:"vision",
      title:"IDentify",
      en:"Explores whether a browser can classify camera images into trained categories, as a learning exercise around computer vision. I joined to understand practical model integration and its limits. The prototype can demonstrate classification, but it cannot verify a person's identity or safely control access.",
      es:"Explora si un navegador puede clasificar imágenes de cámara en categorías entrenadas como ejercicio de aprendizaje sobre visión por computadora. Participé para comprender la integración práctica de modelos y sus límites. El prototipo demuestra clasificación, pero no verifica la identidad de una persona ni permite controlar accesos de forma segura.",
      stack:["JavaScript","TensorFlow.js","Teachable Machine","Camera API"],
      demo:"https://jeremy-torres2026-web.github.io/IDentify/my-model/",
      repo:"https://github.com/Jeremy-torres2026-web/IDentify",
      kind:"academic",
      note:"camera"
    }
  ],
  lab: [
    {
      id:"arch-keyboard-virtual-mouse", title:"Arch Keyboard Virtual Mouse",
      en:"Addresses a practical accessibility and input-control need: using keyboard shortcuts to operate pointer actions when a mouse is inconvenient. I built it to explore Linux input devices and create a utility that fits my own desktop workflow.",
      es:"Resuelve una necesidad práctica de accesibilidad y control de entrada: operar el puntero mediante atajos de teclado cuando usar un ratón resulta incómodo. La desarrollé para explorar dispositivos de entrada de Linux y crear una utilidad que encaje con mi propio flujo de escritorio.",
      stack:["Python","Linux","systemd"],
      repo:"https://github.com/Jeremy-MegaJS/arch-keyboard-virtual-mouse"
    },
    {
      id:"warp-toggle-masque", title:"WARP Toggle — MASQUE",
      en:"Reduces friction in controlling the official WARP client from a KDE desktop by making connect, disconnect and status checks more deliberate. I built it to solve a recurring desktop workflow problem and to practice safer shell automation.",
      es:"Reduce la fricción al controlar el cliente oficial de WARP desde KDE, haciendo más explícitas las acciones de conexión, desconexión y verificación de estado. La desarrollé para resolver un problema recurrente de mi flujo de escritorio y practicar automatización shell más segura.",
      stack:["Bash","KDE","WARP CLI","MASQUE"],
      repo:"https://github.com/Jeremy-MegaJS/warp-toggle-masque"
    },
    {
      id:"car-dashboard", title:"Car Dashboard",
      en:"A small interface exercise for practicing how a driver-facing dashboard groups key vehicle information. I worked on it as a collaborative learning task, not as a connected automotive system.",
      es:"Ejercicio de interfaz para practicar cómo un tablero orientado al conductor agrupa información importante del vehículo. Lo desarrollé como actividad colaborativa de aprendizaje, no como sistema automotriz conectado.",
      stack:["HTML","CSS","JavaScript"],
      repo:"https://github.com/Jeremy-torres2026-web/proyecto1-tablero"
    },
    {
      id:"f1-team-profiles", title:"F1 Team Profiles",
      en:"Makes Formula 1 team information easier to scan through a card-based layout. I worked on it as a collaborative frontend exercise to practice structuring content and responsive presentation; its statistics are illustrative, not live sports data.",
      es:"Facilita la consulta de información de equipos de Fórmula 1 mediante tarjetas visuales. Lo trabajé como ejercicio frontend colaborativo para practicar la estructura de contenido y su presentación adaptable; sus estadísticas son ilustrativas, no datos deportivos en vivo.",
      stack:["HTML","CSS","JavaScript"],
      repo:"https://github.com/Jeremy-torres2026-web/proyecto3-perfil"
    }
  ]
};