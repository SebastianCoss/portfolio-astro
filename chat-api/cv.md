# CV de Cristóbal Sebastián García Coss

Senior Software Engineer · Backend .NET · Líder Técnico. Temixco, Morelos, México (Home Office / Híbrido).
Contacto público: sebastian.coss.96@gmail.com · linkedin.com/in/crisegarcoss · github.com/SebastianCoss · sysfactory.net

## Perfil
Ingeniero en TIC con más de 5 años de experiencia en desarrollo backend y arquitectura de software. Especialista en modernizar sistemas legacy hacia APIs y microservicios con .NET 10/9/8 y Java (Spring Boot), bajo Clean Architecture y con despliegue en Azure. Ha sido líder técnico de proyectos en producción para el sector financiero y empresarial. Integra agentes de IA en todo el ciclo de desarrollo y fue líder de la comunidad AWS User Group Morelos.

## Experiencia
### Ryndem — Desarrollador Backend .NET Sr. (octubre 2024 – presente)
- Líder técnico del proyecto R18: define la arquitectura, la planeación técnica y la estructura de los componentes backend.
- Arquitectura multirregión en .NET 10/9 y Azure SQL, con configuraciones regionales parametrizadas para datos de varios países.
- Servicio de Tipo de Cambio: planeado y ejecutado de punta a punta con .NET 10, Clean Architecture, SQL Server (scaffolding) y LINQ; en producción desde enero de 2026.
- Modernización: migró un ejecutable legacy (.NET Framework) a una API moderna conectada a servicios financieros internacionales (Banxico y BCRP de Perú).
- Resiliencia y datos: fallback con backoff exponencial, schedulers automáticos y procesos ETL en SQL Server para mantener los datos críticos disponibles 24/7.
- Rendimiento: refactorizó el generador de folios con threading y búsqueda binaria, eliminando duplicados y saltos en la secuencia.
- Mantiene 100% de entregas a tiempo o anticipadas en requerimientos técnicos y documentación.

### Thor Solutions — Desarrollador Fullstack, proyecto SEUZ (agosto – septiembre 2026)
- App móvil SEUZ en .NET MAUI (.NET 10, Android) para operadores en campo, conectada a una central de monitoreo: chat en tiempo real, botón de pánico SOS, telemetría (GPS, batería y señal), alertas sísmicas y comandos remotos de foto, video y audio.
- SignalR con hub en Azure, cliente REST con Polly (reintentos y circuit breaker) y cola offline (outbox) para no perder mensajes sin conexión.
- Definió con el equipo el contrato de mensajes entre el panel web y la app; base de datos local cifrada con SQLCipher y llave en Android Keystore.
- Clean Architecture con MVVM, 469 pruebas automatizadas con xUnit y CI en Azure DevOps (formato, warnings-as-errors y empaquetado de APK); el artefacto bajó de 118 a 39 MB.
- IA aplicada: configuró 3 skills y 6 agentes de Claude Code propios del proyecto, en un equipo de 3 personas con revisión obligatoria de PR.

### Thor Solutions — Desarrollador .NET, freelance (junio 2021 – septiembre 2024)
- Diseñó y construyó desde cero el módulo de gestión de proveedores y un sistema de geocercas con Google Maps API (+30% de satisfacción del usuario).
- Redujo 20% los tiempos de respuesta de consultas complejas rediseñando stored procedures y optimizando la base de datos.
- Apps móviles en .NET MAUI conectadas a servicios backend.
- Lideró la implementación de pipelines de CI/CD en Azure DevOps con Scrum.

### Banregio — Analista Programador Jr. (enero 2022 – mayo 2024)
- Participó en la descomposición de un monolito legacy hacia microservicios para el área de créditos.
- Soluciones escalables en Java y Spring Boot que cuidan la integridad de las transacciones financieras.
- APIs RESTful documentadas con Swagger para comunicar los nuevos servicios distribuidos.

## Proyectos (desde mayo 2024, como desarrollador fullstack)
- ERP para taller automotriz (en producción): .NET 9, Clean Architecture y CQRS (MediatR), EF Core y Dapper sobre SQL Server. API versionada con JWT, SignalR, health checks, Serilog y Application Insights. CI/CD a Azure (desarrollo y producción) con SonarCloud, Snyk y Trivy; pruebas unitarias, de integración y E2E (xUnit, Playwright). Desarrollado con apoyo de agentes de IA.
- Eckonatura POS: punto de venta para cafetería en .NET 8, Dapper y SQL Server con sesiones transaccionales, mesas, pantalla de cocina (KDS), kiosco de autoservicio, corte de caja, inventario y compras. App móvil en .NET 10 MAUI; Docker y CI/CD con despliegue automático.
- Evidencia remota para flotas (prueba de concepto), para una empresa de seguridad privada: app Android en .NET 9 MAUI como Device Owner (modo kiosco, bloqueo de desinstalación y de restablecimiento) y backend ASP.NET Core con SignalR que solicita y recibe fotos en tiempo real; validada en hardware real.
- KodaMemo (código abierto, en desarrollo): grabadora de reuniones para Android en .NET MAUI con transcripción de voz a texto en el propio dispositivo (Whisper.net) y un espacio web en Blazor para transcripciones, acuerdos, tareas y mapas mentales.
- FollowBaby (en desarrollo): app móvil de seguimiento infantil que funciona sin conexión. .NET 10 con Clean Architecture y pruebas de arquitectura, API con PostgreSQL y JWT, y app MAUI con SQLite cifrado y protocolo de sincronización propio.
- Gestión de Avalúos: aplicación en .NET 8 con Dapper y SQL Server, en capas con arquitectura limpia; despliegue planeado en Azure.
- Sitios web: CMS a la medida con Astro, panel en React y API en .NET 10 con EF Core y PostgreSQL (Docker y CI/CD); este portafolio en Astro.

## Habilidades
- Backend: C#, .NET 10/9/8, ASP.NET Core (Web API y MVC), Java (Spring Boot), Entity Framework Core, Dapper, LINQ, SignalR, Polly, .NET MAUI.
- Bases de datos y cloud: SQL Server (ETL, stored procedures, scaffolding), Azure SQL, PostgreSQL, SQLite, Azure (App Service, VM, DevOps, Application Insights), AWS.
- DevOps y calidad: Docker, GitHub Actions, Azure DevOps, xUnit, Playwright, SonarCloud, SonarLint, Snyk, Trivy.
- Frontend: Astro, Angular, Blazor, React, HTML5, CSS3, JavaScript, jQuery, Bootstrap.
- Arquitectura y herramientas: Clean Architecture, microservicios, CQRS (MediatR), APIs REST con Swagger/OpenAPI, agentes de IA (Claude Code), Google Maps API, Scrum, Jira.

## Educación y certificaciones
- Ingeniería en TIC, Universidad Tecnológica Emiliano Zapata (UTEZ), 2017 – 2021.
- Google AI Essentials (Google, agosto 2026).
- McKinsey.org Forward Program (McKinsey & Company, julio 2026).
- En curso: Microsoft Azure Fundamentals (AZ-900) y Azure AI Fundamentals (AI-901), exámenes previstos para noviembre de 2026.
- Liderazgo: fue líder de AWS User Group Morelos y ponente en "EC2 vs. Lambda para Backend Devs".
- Idiomas: español (nativo) · inglés B1 (en preparación para B2).
