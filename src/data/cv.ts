// Fuente unica del contenido del sitio, en espanol e ingles. Sale del CV 2026.
// Los IDs de certificados se dejan fuera a proposito: es un sitio publico.

export type Lang = 'es' | 'en';

export const site = {
  email: 'sebastian.coss.96@gmail.com',
  linkedin: 'https://www.linkedin.com/in/crisegarcoss',
  github: 'https://github.com/SebastianCoss',
  company: 'https://sysfactory.net',
  whatsapp: 'https://wa.me/527773286002',
  cv: {
    es: '/Cristobal_Garcia_Coss_CV_2026.pdf',
    en: '/Cristobal_Garcia_Coss_CV_2026_EN.pdf',
  },
};

export interface Job {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  highlights: { title: string; text: string }[];
}
export interface Project {
  name: string;
  status: string;
  text: string;
  tags: string[];
  repo?: string;
}
export interface Content {
  ui: Record<string, string>;
  profile: { headline: string; paragraphs: string[] };
  stats: { value: string; label: string }[];
  jobs: Job[];
  projects: Project[];
  stackGroups: { title: string; items: string[] }[];
  education: { title: string; place: string; period: string }[];
  languages: { name: string; level: string }[];
  extras: string[];
  chatSuggestions: string[];
}

const KODAMEMO = 'https://github.com/SebastianCoss/kodamemo';

const es: Content = {
  ui: {
    title: 'Cristóbal García Coss · Desarrollador backend .NET',
    description: 'Soy Cristóbal, desarrollador backend .NET y líder técnico en Morelos, México. Modernizo sistemas legacy hacia APIs y microservicios.',
    role1: 'Senior Software Engineer',
    role2: 'Backend .NET · Líder técnico',
    location1: 'Temixco, Morelos · México',
    location2: 'Home office / híbrido',
    downloadCv: 'Descargar CV en PDF',
    askCv: 'Pregúntale a mi CV',
    navProfile: 'Perfil', navExperience: 'Experiencia', navProjects: 'Proyectos', navSkills: 'Habilidades', navContact: 'Contacto',
    secProfile: 'Perfil', secExperience: 'Experiencia', secProjects: 'Proyectos', secSkills: 'Habilidades',
    contact: 'Contacto', mail: 'Correo', companyLabel: 'Empresa', education: 'Formación', languages: 'Idiomas',
    writeMe: 'Escríbeme directo', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', emailBtn: 'Correo',
    now: 'ahora', more: 'Ver más', less: 'Ver menos', repo: 'Ver el código en GitHub →',
    beyond: 'Fuera del código',
    footerTitle: '¿Tienes un sistema que mejorar?',
    footerText: 'Escríbeme y lo platicamos. Respondo yo, no un formulario.',
    footerNote: 'Hecho en Morelos con Astro. Dale clic al gato.',
    themeToggle: 'Cambiar entre modo día y modo noche',
    langSwitch: 'Idioma',
    chatSub: 'Asistente con IA · solo usa lo que dice el CV',
    chatHello: '¡Hola! Soy el asistente del CV de Cristóbal. Pregúntame por su experiencia, proyectos o tecnologías.',
    chatPlaceholder: 'Escribe tu pregunta…', chatSend: 'Enviar', chatClose: 'Cerrar chat', chatTyping: 'Escribiendo…',
    chatError: 'No pude responder ahora. Intenta de nuevo en un momento.',
    chatOffline: 'No hay conexión con el asistente. Intenta de nuevo más tarde.',
    catToggle: 'Apagar o encender al gato',
  },
  profile: {
    headline: 'Hago el backend de sistemas que no se pueden caer.',
    paragraphs: [
      'Soy desarrollador .NET con más de cinco años de oficio. Lo que más disfruto es agarrar un sistema viejo, de esos que nadie quiere tocar, y convertirlo en una API que da gusto mantener. Trabajo con .NET 10, Clean Architecture y SQL Server, casi siempre con despliegue en Azure.',
      'Hoy soy líder técnico en Ryndem. Fuera de ahí construyo mis propios productos y fui líder de la comunidad AWS User Group Morelos.',
    ],
  },
  stats: [
    { value: '5+', label: 'años de experiencia' },
    { value: '100%', label: 'entregas a tiempo o anticipadas' },
    { value: '469', label: 'pruebas automatizadas en SEUZ' },
    { value: '24/7', label: 'datos críticos disponibles en Ryndem' },
  ],
  jobs: [
    {
      company: 'Ryndem', role: 'Desarrollador Backend .NET Sr.', period: 'Oct 2024 – Presente', current: true,
      highlights: [
        { title: 'Líder técnico (proyecto R18)', text: 'Defino la arquitectura, la planeación técnica y la estructura de los componentes backend.' },
        { title: 'Arquitectura multirregión', text: '.NET 10/9 y Azure SQL con configuraciones regionales parametrizadas para datos de varios países.' },
        { title: 'Servicio de Tipo de Cambio', text: 'De punta a punta con .NET 10, Clean Architecture, SQL Server y LINQ; en producción desde enero de 2026.' },
        { title: 'Modernización', text: 'Migré un ejecutable legacy (.NET Framework) a una API conectada a Banxico y al BCRP de Perú.' },
        { title: 'Resiliencia y datos', text: 'Fallback con backoff exponencial, schedulers y procesos ETL para mantener los datos disponibles 24/7.' },
        { title: 'Rendimiento', text: 'Refactoricé el generador de folios con threading y búsqueda binaria: sin duplicados ni saltos.' },
      ],
    },
    {
      company: 'Thor Solutions', role: 'Desarrollador Fullstack, proyecto SEUZ', period: 'Ago – Sep 2026',
      highlights: [
        { title: 'App móvil SEUZ', text: '.NET MAUI (.NET 10, Android) para operadores en campo: chat en tiempo real, botón SOS, telemetría y comandos remotos.' },
        { title: 'Tiempo real y resiliencia', text: 'SignalR con hub en Azure, REST con Polly (reintentos y circuit breaker) y cola offline para no perder mensajes.' },
        { title: 'Seguridad', text: 'Base de datos local cifrada con SQLCipher y llave en Android Keystore.' },
        { title: 'Calidad y DevOps', text: 'Clean Architecture con MVVM, 469 pruebas con xUnit y CI en Azure DevOps; el APK pasó de 118 a 39 MB.' },
        { title: 'IA aplicada', text: '3 skills y 6 agentes de Claude Code propios del proyecto, con revisión obligatoria de PR.' },
      ],
    },
    {
      company: 'Thor Solutions', role: 'Desarrollador .NET (Freelance)', period: 'Jun 2021 – Sep 2024',
      highlights: [
        { title: 'Módulos desde cero', text: 'Gestión de proveedores y geocercas con Google Maps API: +30% de satisfacción del usuario.' },
        { title: 'Optimización SQL', text: '20% menos tiempo de respuesta rediseñando stored procedures.' },
        { title: 'Movilidad y CI/CD', text: 'Apps .NET MAUI sobre servicios backend y pipelines en Azure DevOps con Scrum.' },
      ],
    },
    {
      company: 'Banregio', role: 'Analista Programador Jr.', period: 'Ene 2022 – May 2024',
      highlights: [
        { title: 'Migración a microservicios', text: 'Descomposición de un monolito legacy para el área de créditos.' },
        { title: 'Java y Spring Boot', text: 'Soluciones escalables que cuidan la integridad de las transacciones financieras.' },
        { title: 'Interoperabilidad', text: 'APIs RESTful documentadas con Swagger para los nuevos servicios distribuidos.' },
      ],
    },
  ],
  projects: [
    { name: 'ERP para taller automotriz', status: 'Producción', text: '.NET 9 con Clean Architecture y CQRS (MediatR), EF Core y Dapper sobre SQL Server. API versionada con JWT, SignalR y health checks; CI/CD a Azure con SonarCloud, Snyk y Trivy, y pruebas unitarias, de integración y E2E.', tags: ['.NET 9', 'CQRS', 'SQL Server', 'SignalR', 'Playwright'] },
    { name: 'Eckonatura POS', status: 'Producción', text: 'Punto de venta para cafetería: mesas, pantalla de cocina (KDS), kiosco de autoservicio, corte de caja, inventario y compras. App móvil MAUI en tiempo real, Docker y despliegue automático.', tags: ['.NET 8', 'Dapper', 'MAUI', 'Docker'] },
    { name: 'Evidencia remota para flotas', status: 'Prueba de concepto', text: 'Para una empresa de seguridad privada: app Android MAUI como Device Owner (modo kiosco, bloqueo de desinstalación) y backend con SignalR que pide y recibe fotos en tiempo real. Validada en hardware real.', tags: ['.NET 9 MAUI', 'ASP.NET Core', 'SignalR'] },
    { name: 'KodaMemo', status: 'Open source', repo: KODAMEMO, text: 'Grabadora de reuniones para Android con transcripción de voz a texto en el propio dispositivo (Whisper.net) y un espacio web en Blazor para transcripciones, acuerdos, tareas y mapas mentales.', tags: ['MAUI', 'Whisper.net', 'Blazor'] },
    { name: 'FollowBaby', status: 'En desarrollo', text: 'App de seguimiento infantil que funciona sin conexión. .NET 10 con Clean Architecture y pruebas de arquitectura, API con PostgreSQL y JWT, y app MAUI con SQLite cifrado y protocolo de sincronización propio.', tags: ['.NET 10', 'PostgreSQL', 'SQLite cifrado'] },
    { name: 'Gestión de Avalúos', status: 'En desarrollo', text: 'Aplicación en .NET 8 con Dapper y SQL Server, diseñada en capas con arquitectura limpia para administrar avalúos; despliegue planeado en Azure.', tags: ['.NET 8', 'Dapper', 'Azure'] },
  ],
  stackGroups: [
    { title: 'Backend', items: ['C# · .NET 10/9/8', 'ASP.NET Core', 'Java (Spring Boot)', 'EF Core', 'Dapper', 'LINQ', 'SignalR', 'Polly', '.NET MAUI'] },
    { title: 'Datos y cloud', items: ['SQL Server (ETL, SP)', 'Azure SQL', 'PostgreSQL', 'SQLite', 'Azure (App Service, VM)', 'AWS'] },
    { title: 'DevOps y calidad', items: ['Docker', 'GitHub Actions', 'Azure DevOps', 'xUnit', 'Playwright', 'SonarCloud', 'Snyk', 'Trivy'] },
    { title: 'Frontend', items: ['Astro', 'React', 'Angular', 'Blazor', 'HTML5 · CSS3 · JS', 'Bootstrap', 'jQuery'] },
    { title: 'Arquitectura', items: ['Clean Architecture', 'Microservicios', 'CQRS (MediatR)', 'REST · Swagger/OpenAPI'] },
    { title: 'Herramientas', items: ['Agentes de IA (Claude Code)', 'Google Maps API', 'Scrum', 'Jira'] },
  ],
  education: [
    { title: 'Ingeniería en TIC', place: 'Universidad Tecnológica Emiliano Zapata (UTEZ)', period: '2017 – 2021' },
    { title: 'Google AI Essentials', place: 'Google', period: 'Ago 2026' },
    { title: 'McKinsey.org Forward Program', place: 'McKinsey & Company', period: 'Jul 2026' },
    { title: 'AZ-900 y AI-901', place: 'Microsoft Azure Fundamentals y AI Fundamentals', period: 'En curso · exámenes en nov 2026' },
  ],
  languages: [{ name: 'Español', level: 'nativo' }, { name: 'Inglés', level: 'B1, preparando B2' }],
  extras: [
    'Fui líder de AWS User Group Morelos y ponente en "EC2 vs. Lambda para Backend Devs".',
    'Uso agentes de IA para escribir, revisar y probar código, siempre con revisión humana.',
  ],
  chatSuggestions: ['¿Qué experiencia tiene con .NET?', '¿Qué hizo en Ryndem?', '¿Qué proyectos destacan?', '¿Tiene experiencia liderando equipos?'],
};

const en: Content = {
  ui: {
    title: 'Cristóbal García Coss · .NET backend developer',
    description: "I'm Cristóbal, a .NET backend developer and tech lead based in Morelos, Mexico. I modernize legacy systems into APIs and microservices.",
    role1: 'Senior Software Engineer',
    role2: '.NET Backend · Tech Lead',
    location1: 'Temixco, Morelos · Mexico',
    location2: 'Remote / hybrid',
    downloadCv: 'Download résumé (PDF)',
    askCv: 'Ask my résumé',
    navProfile: 'Profile', navExperience: 'Experience', navProjects: 'Projects', navSkills: 'Skills', navContact: 'Contact',
    secProfile: 'Profile', secExperience: 'Experience', secProjects: 'Projects', secSkills: 'Skills',
    contact: 'Contact', mail: 'Email', companyLabel: 'Company', education: 'Education', languages: 'Languages',
    writeMe: 'Message me directly', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', emailBtn: 'Email',
    now: 'now', more: 'Show more', less: 'Show less', repo: 'View the code on GitHub →',
    beyond: 'Beyond the code',
    footerTitle: 'Got a system that needs work?',
    footerText: "Write to me and let's talk. You'll get me, not a form.",
    footerNote: 'Made in Morelos with Astro. Try clicking the cat.',
    themeToggle: 'Switch between day and night mode',
    langSwitch: 'Language',
    chatSub: 'AI assistant · only uses what the résumé says',
    chatHello: "Hi! I'm the assistant for Cristóbal's résumé. Ask me about his experience, projects or tech stack.",
    chatPlaceholder: 'Type your question…', chatSend: 'Send', chatClose: 'Close chat', chatTyping: 'Typing…',
    chatError: "I couldn't answer just now. Please try again in a moment.",
    chatOffline: "Can't reach the assistant. Please try again later.",
    catToggle: 'Turn the cat on or off',
  },
  profile: {
    headline: "I build the backend of systems that can't afford to go down.",
    paragraphs: [
      "I'm a .NET developer with over five years in the trade. What I enjoy most is taking an old system, the kind nobody wants to touch, and turning it into an API that is a pleasure to maintain. I work with .NET 10, Clean Architecture and SQL Server, usually deployed on Azure.",
      'Today I am the tech lead at Ryndem. Outside of that I build my own products, and I led the AWS User Group Morelos community.',
    ],
  },
  stats: [
    { value: '5+', label: 'years of experience' },
    { value: '100%', label: 'deliveries on time or early' },
    { value: '469', label: 'automated tests on SEUZ' },
    { value: '24/7', label: 'critical data availability at Ryndem' },
  ],
  jobs: [
    {
      company: 'Ryndem', role: 'Senior .NET Backend Developer', period: 'Oct 2024 – Present', current: true,
      highlights: [
        { title: 'Tech lead (project R18)', text: 'I define the architecture, the technical planning and the structure of the backend components.' },
        { title: 'Multi-region architecture', text: '.NET 10/9 and Azure SQL with parameterized regional settings for data from several countries.' },
        { title: 'Exchange Rate service', text: 'End to end with .NET 10, Clean Architecture, SQL Server and LINQ; in production since January 2026.' },
        { title: 'Modernization', text: 'Migrated a legacy executable (.NET Framework) to an API connected to Banxico and to BCRP (Peru).' },
        { title: 'Resilience and data', text: 'Fallback with exponential backoff, schedulers and ETL processes to keep data available 24/7.' },
        { title: 'Performance', text: 'Refactored the folio generator with threading and binary search: no duplicates, no gaps.' },
      ],
    },
    {
      company: 'Thor Solutions', role: 'Full-stack Developer, SEUZ project', period: 'Aug – Sep 2026',
      highlights: [
        { title: 'SEUZ mobile app', text: '.NET MAUI (.NET 10, Android) for field operators: real-time chat, SOS button, telemetry and remote commands.' },
        { title: 'Real time and resilience', text: 'SignalR with a hub on Azure, REST with Polly (retries and circuit breaker) and an offline queue so no message is lost.' },
        { title: 'Security', text: 'Local database encrypted with SQLCipher, key stored in Android Keystore.' },
        { title: 'Quality and DevOps', text: 'Clean Architecture with MVVM, 469 xUnit tests and CI on Azure DevOps; the APK went from 118 to 39 MB.' },
        { title: 'Applied AI', text: '3 skills and 6 Claude Code agents built for the project, with mandatory PR review.' },
      ],
    },
    {
      company: 'Thor Solutions', role: '.NET Developer (Freelance)', period: 'Jun 2021 – Sep 2024',
      highlights: [
        { title: 'Modules from scratch', text: 'Supplier management and geofencing with the Google Maps API: +30% user satisfaction.' },
        { title: 'SQL optimization', text: '20% faster response times after redesigning stored procedures.' },
        { title: 'Mobile and CI/CD', text: '.NET MAUI apps on top of backend services, and pipelines on Azure DevOps with Scrum.' },
      ],
    },
    {
      company: 'Banregio', role: 'Junior Programmer Analyst', period: 'Jan 2022 – May 2024',
      highlights: [
        { title: 'Migration to microservices', text: 'Breaking down a legacy monolith for the loans area.' },
        { title: 'Java and Spring Boot', text: 'Scalable solutions that protect the integrity of financial transactions.' },
        { title: 'Interoperability', text: 'RESTful APIs documented with Swagger for the new distributed services.' },
      ],
    },
  ],
  projects: [
    { name: 'ERP for an auto repair shop', status: 'In production', text: '.NET 9 with Clean Architecture and CQRS (MediatR), EF Core and Dapper on SQL Server. Versioned API with JWT, SignalR and health checks; CI/CD to Azure with SonarCloud, Snyk and Trivy, plus unit, integration and E2E tests.', tags: ['.NET 9', 'CQRS', 'SQL Server', 'SignalR', 'Playwright'] },
    { name: 'Eckonatura POS', status: 'In production', text: 'Point of sale for a café: tables, kitchen display (KDS), self-service kiosk, cash closing, inventory and purchasing. Real-time MAUI mobile app, Docker and automated deployment.', tags: ['.NET 8', 'Dapper', 'MAUI', 'Docker'] },
    { name: 'Remote evidence for fleets', status: 'Proof of concept', text: 'For a private security company: a MAUI Android app running as Device Owner (kiosk mode, uninstall lock) and a SignalR backend that requests and receives photos in real time. Validated on real hardware.', tags: ['.NET 9 MAUI', 'ASP.NET Core', 'SignalR'] },
    { name: 'KodaMemo', status: 'Open source', repo: KODAMEMO, text: 'Meeting recorder for Android with on-device speech-to-text (Whisper.net) and a Blazor web workspace for transcripts, agreements, tasks and mind maps.', tags: ['MAUI', 'Whisper.net', 'Blazor'] },
    { name: 'FollowBaby', status: 'In development', text: 'Offline-first child tracking app. .NET 10 with Clean Architecture and architecture tests, an API with PostgreSQL and JWT, and a MAUI app with encrypted SQLite and its own sync protocol.', tags: ['.NET 10', 'PostgreSQL', 'Encrypted SQLite'] },
    { name: 'Appraisal Management', status: 'In development', text: 'A .NET 8 application with Dapper and SQL Server, layered with clean architecture to manage property appraisals; Azure deployment planned.', tags: ['.NET 8', 'Dapper', 'Azure'] },
  ],
  stackGroups: [
    { title: 'Backend', items: ['C# · .NET 10/9/8', 'ASP.NET Core', 'Java (Spring Boot)', 'EF Core', 'Dapper', 'LINQ', 'SignalR', 'Polly', '.NET MAUI'] },
    { title: 'Data and cloud', items: ['SQL Server (ETL, SP)', 'Azure SQL', 'PostgreSQL', 'SQLite', 'Azure (App Service, VM)', 'AWS'] },
    { title: 'DevOps and quality', items: ['Docker', 'GitHub Actions', 'Azure DevOps', 'xUnit', 'Playwright', 'SonarCloud', 'Snyk', 'Trivy'] },
    { title: 'Frontend', items: ['Astro', 'React', 'Angular', 'Blazor', 'HTML5 · CSS3 · JS', 'Bootstrap', 'jQuery'] },
    { title: 'Architecture', items: ['Clean Architecture', 'Microservices', 'CQRS (MediatR)', 'REST · Swagger/OpenAPI'] },
    { title: 'Tools', items: ['AI agents (Claude Code)', 'Google Maps API', 'Scrum', 'Jira'] },
  ],
  education: [
    { title: 'B.Eng. in Information and Communication Technologies', place: 'Universidad Tecnológica Emiliano Zapata (UTEZ)', period: '2017 – 2021' },
    { title: 'Google AI Essentials', place: 'Google', period: 'Aug 2026' },
    { title: 'McKinsey.org Forward Program', place: 'McKinsey & Company', period: 'Jul 2026' },
    { title: 'AZ-900 and AI-901', place: 'Microsoft Azure Fundamentals and AI Fundamentals', period: 'In progress · exams in Nov 2026' },
  ],
  languages: [{ name: 'Spanish', level: 'native' }, { name: 'English', level: 'B1, working toward B2' }],
  extras: [
    'I led AWS User Group Morelos and spoke on "EC2 vs. Lambda for Backend Devs".',
    'I use AI agents to write, review and test code, always with human review.',
  ],
  chatSuggestions: ['What is his .NET experience?', 'What did he do at Ryndem?', 'Which projects stand out?', 'Has he led teams?'],
};

export const content: Record<Lang, Content> = { es, en };
