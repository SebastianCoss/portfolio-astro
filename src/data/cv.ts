// Fuente unica del contenido del sitio. Sale del CV 2026 (Cristobal_Garcia_Coss_CV_2026.pdf).
// El telefono y los IDs de certificados se dejan fuera a proposito: es un sitio publico.

export const profile = {
  name: 'Cristóbal Sebastián García Coss',
  role: 'Senior Software Engineer',
  tagline: 'Backend .NET · Líder Técnico',
  location: 'Temixco, Morelos, México · Home Office / Híbrido',
  email: 'sebastian.coss.96@gmail.com',
  linkedin: 'https://www.linkedin.com/in/crisegarcoss',
  github: 'https://github.com/SebastianCoss',
  company: 'https://sysfactory.net',
  cvFile: '/Cristobal_Garcia_Coss_CV_2026.pdf',
  summary:
    'Ingeniero en TIC con más de 5 años en desarrollo backend y arquitectura de software. Modernizo sistemas legacy hacia APIs y microservicios con .NET 10/9/8 y Java (Spring Boot), bajo Clean Architecture y con despliegue en Azure. He sido líder técnico de proyectos en producción para el sector financiero y empresarial, integro agentes de IA en todo el ciclo de desarrollo y fui líder de la comunidad AWS User Group Morelos.',
};

export const stats = [
  { value: '5+', label: 'años de experiencia' },
  { value: '100%', label: 'entregas a tiempo o anticipadas' },
  { value: '469', label: 'pruebas automatizadas en SEUZ' },
  { value: '24/7', label: 'datos críticos disponibles en Ryndem' },
];

export interface Job {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  highlights: { title: string; text: string }[];
}

export const jobs: Job[] = [
  {
    company: 'Ryndem',
    role: 'Desarrollador Backend .NET Sr.',
    period: 'Oct 2024 – Presente',
    current: true,
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
    company: 'Thor Solutions',
    role: 'Desarrollador Fullstack, proyecto SEUZ',
    period: 'Ago – Sep 2026',
    highlights: [
      { title: 'App móvil SEUZ', text: '.NET MAUI (.NET 10, Android) para operadores en campo: chat en tiempo real, botón SOS, telemetría y comandos remotos.' },
      { title: 'Tiempo real y resiliencia', text: 'SignalR con hub en Azure, REST con Polly (reintentos y circuit breaker) y cola offline para no perder mensajes.' },
      { title: 'Seguridad', text: 'Base de datos local cifrada con SQLCipher y llave en Android Keystore.' },
      { title: 'Calidad y DevOps', text: 'Clean Architecture con MVVM, 469 pruebas con xUnit y CI en Azure DevOps; el APK pasó de 118 a 39 MB.' },
      { title: 'IA aplicada', text: '3 skills y 6 agentes de Claude Code propios del proyecto, con revisión obligatoria de PR.' },
    ],
  },
  {
    company: 'Thor Solutions',
    role: 'Desarrollador .NET (Freelance)',
    period: 'Jun 2021 – Sep 2024',
    highlights: [
      { title: 'Módulos desde cero', text: 'Gestión de proveedores y geocercas con Google Maps API: +30% de satisfacción del usuario.' },
      { title: 'Optimización SQL', text: '20% menos tiempo de respuesta rediseñando stored procedures.' },
      { title: 'Movilidad y CI/CD', text: 'Apps .NET MAUI sobre servicios backend y pipelines en Azure DevOps con Scrum.' },
    ],
  },
  {
    company: 'Banregio',
    role: 'Analista Programador Jr.',
    period: 'Ene 2022 – May 2024',
    highlights: [
      { title: 'Migración a microservicios', text: 'Descomposición de un monolito legacy para el área de créditos.' },
      { title: 'Java y Spring Boot', text: 'Soluciones escalables que cuidan la integridad de las transacciones financieras.' },
      { title: 'Interoperabilidad', text: 'APIs RESTful documentadas con Swagger para los nuevos servicios distribuidos.' },
    ],
  },
];

export interface Project {
  name: string;
  status: 'Producción' | 'En desarrollo' | 'Prueba de concepto' | 'Open source';
  text: string;
  tags: string[];
  featured?: boolean;
  repo?: string;
}

export const projects: Project[] = [
  {
    name: 'ERP para taller automotriz',
    status: 'Producción',
    featured: true,
    text: '.NET 9 con Clean Architecture y CQRS (MediatR), EF Core y Dapper sobre SQL Server. API versionada con JWT, SignalR y health checks; CI/CD a Azure con SonarCloud, Snyk y Trivy, y pruebas unitarias, de integración y E2E.',
    tags: ['.NET 9', 'CQRS', 'SQL Server', 'SignalR', 'Playwright'],
  },
  {
    name: 'Eckonatura POS',
    status: 'Producción',
    text: 'Punto de venta para cafetería: mesas, pantalla de cocina (KDS), kiosco de autoservicio, corte de caja, inventario y compras. App móvil MAUI en tiempo real, Docker y despliegue automático.',
    tags: ['.NET 8', 'Dapper', 'MAUI', 'Docker'],
  },
  {
    name: 'Evidencia remota para flotas',
    status: 'Prueba de concepto',
    text: 'Para una empresa de seguridad privada: app Android MAUI como Device Owner (modo kiosco, bloqueo de desinstalación) y backend con SignalR que pide y recibe fotos en tiempo real. Validada en hardware real.',
    tags: ['.NET 9 MAUI', 'ASP.NET Core', 'SignalR'],
  },
  {
    name: 'KodaMemo',
    status: 'Open source',
    repo: 'https://github.com/SebastianCoss/kodamemo',
    text: 'Grabadora de reuniones para Android con transcripción de voz a texto en el propio dispositivo (Whisper.net) y un espacio web en Blazor para transcripciones, acuerdos, tareas y mapas mentales.',
    tags: ['MAUI', 'Whisper.net', 'Blazor'],
  },
  {
    name: 'FollowBaby',
    status: 'En desarrollo',
    text: 'App de seguimiento infantil que funciona sin conexión. .NET 10 con Clean Architecture y pruebas de arquitectura, API con PostgreSQL y JWT, y app MAUI con SQLite cifrado y protocolo de sincronización propio.',
    tags: ['.NET 10', 'PostgreSQL', 'SQLite cifrado'],
  },
  {
    name: 'Gestión de Avalúos',
    status: 'En desarrollo',
    text: 'Aplicación en .NET 8 con Dapper y SQL Server, diseñada en capas con arquitectura limpia para administrar avalúos; despliegue planeado en Azure.',
    tags: ['.NET 8', 'Dapper', 'Azure'],
  },
];

export const stackGroups = [
  { title: 'Backend', accent: 'emerald', items: ['C# · .NET 10/9/8', 'ASP.NET Core', 'Java (Spring Boot)', 'EF Core · Dapper · LINQ', 'SignalR · Polly', '.NET MAUI'] },
  { title: 'Datos y cloud', accent: 'emerald', items: ['SQL Server (ETL, SP)', 'Azure SQL', 'PostgreSQL · SQLite', 'Azure (App Service, VM)', 'AWS'] },
  { title: 'DevOps y calidad', accent: 'indigo', items: ['Docker', 'GitHub Actions', 'Azure DevOps', 'xUnit · Playwright', 'SonarCloud · Snyk · Trivy'] },
  { title: 'Frontend', accent: 'indigo', items: ['Astro · React', 'Angular · Blazor', 'HTML5 · CSS3 · JS', 'Bootstrap · jQuery'] },
  { title: 'Arquitectura', accent: 'emerald', items: ['Clean Architecture', 'Microservicios', 'CQRS (MediatR)', 'REST · Swagger/OpenAPI'] },
  { title: 'Herramientas', accent: 'indigo', items: ['Agentes de IA (Claude Code)', 'Google Maps API', 'Scrum · Jira'] },
];

export const education = [
  { title: 'Ingeniería en TIC', place: 'Universidad Tecnológica Emiliano Zapata (UTEZ)', period: '2017 – 2021' },
  { title: 'Google AI Essentials', place: 'Google', period: 'Ago 2026' },
  { title: 'McKinsey.org Forward Program', place: 'McKinsey & Company', period: 'Jul 2026' },
  { title: 'AZ-900 y AI-901', place: 'Microsoft Azure Fundamentals y AI Fundamentals', period: 'En curso · exámenes en nov 2026' },
];

export const extras = [
  'Líder de AWS User Group Morelos y ponente en "EC2 vs. Lambda para Backend Devs".',
  'Idiomas: español (nativo) · inglés B1 (preparando B2).',
];
