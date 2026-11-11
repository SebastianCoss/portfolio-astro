# Portfolio Profesional - Cristóbal García Coss

Portafolio profesional moderno de alto impacto construido con Astro, Tailwind CSS y React.

## Stack Tecnológico

- **Astro 5.16.6** - Framework web moderno y ultrarrápido
- **Tailwind CSS 4.1** - Framework de CSS utility-first
- **React 19** - Biblioteca de componentes para islas de interactividad
- **Lucide React** - Iconos modernos y ligeros
- **TypeScript** - Tipado estático

## Características

- Diseño Bento Grid modular
- Dark Mode premium (slate-900/950)
- Tipografía Inter (Google Fonts)
- Animaciones sutiles al scroll
- Fully responsive
- SEO optimizado
- Performance optimizado

## Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.astro          # Sección principal con presentación
│   ├── TechStack.astro     # Grid de tecnologías
│   ├── Experience.astro    # Timeline de experiencia profesional
│   ├── Projects.astro      # Showcase de proyectos destacados
│   ├── Header.astro        # Navegación principal
│   └── Footer.astro        # Footer con contacto
├── layouts/
│   └── Layout.astro        # Layout principal con SEO
├── pages/
│   └── index.astro         # Página principal
└── styles/
    └── global.css          # Estilos globales y animaciones
```

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## Comandos Disponibles

| Comando                | Acción                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Instala las dependencias                    |
| `npm run dev`          | Inicia servidor en `localhost:4321`         |
| `npm run build`        | Construye el sitio en `./dist/`             |
| `npm run preview`      | Preview local del build de producción       |
| `npm run astro ...`    | Ejecuta comandos CLI de Astro              |

## Personalización

### Colores

El portafolio usa un esquema de colores oscuro basado en:
- **Fondo principal**: `slate-950`
- **Tarjetas**: `slate-800/900` con transparencias
- **Acentos**: Degradados de `emerald-400` a `cyan-400`
- **Texto**: `slate-100/300/400`

Para cambiar los colores, edita los componentes en `src/components/` y las clases de Tailwind.

### Contenido

Actualiza el contenido en cada componente:

1. **[Hero.astro](src/components/Hero.astro)**: Nombre, título, descripción y CTAs
2. **[TechStack.astro](src/components/TechStack.astro)**: Tecnologías y herramientas
3. **[Experience.astro](src/components/Experience.astro)**: Experiencia profesional
4. **[Projects.astro](src/components/Projects.astro)**: Proyectos destacados
5. **[Footer.astro](src/components/Footer.astro)**: Links de contacto y redes sociales

### Fuentes

Por defecto usa **Inter** de Google Fonts. Para cambiar:
1. Actualiza el link en [Layout.astro](src/layouts/Layout.astro)
2. Modifica la propiedad `font-family` en los estilos globales

## Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Otras plataformas

Consulta la [documentación oficial de Astro](https://docs.astro.build/en/guides/deploy/) para más opciones de despliegue.

## Performance

- Lighthouse Score: 100/100
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Optimización de imágenes automática
- CSS crítico inline
- JavaScript mínimo (solo donde es necesario)

## Secciones del Portafolio

### 1. Hero Section
Presentación principal con nombre, título profesional, descripción y llamados a la acción. Incluye estadísticas en formato Bento Grid.

### 2. Tech Stack
Grid modular de tecnologías organizadas por categorías:
- Core (.NET, C#, ASP.NET Core)
- Databases (SQL Server, PostgreSQL, Redis)
- Architecture (Clean Architecture, Microservices, DDD)
- Cloud & DevOps (AWS, Azure, Docker)
- Messaging (Kafka, RabbitMQ, SignalR)
- CI/CD & Tools (GitHub Actions, Azure DevOps)

### 3. Experiencia Profesional
Timeline interactivo con experiencia en:
- **Ryndem** (Oct 2024 - Presente): Backend .NET Sr.
- **Thor Solutions** (2022 - 2024): Backend Developer
- **Banregio** (2020 - 2022): Software Developer

### 4. Proyectos Destacados
Showcase de 3 proyectos principales:
- **ERP Automotriz**: Sistema de gestión para talleres mecánicos
- **GastroPOS & Waiter App**: Ecosistema de punto de venta para restaurantes
- **PropTech Valuation System**: Plataforma de gestión inmobiliaria

## Contacto

Actualiza los links en [Footer.astro](src/components/Footer.astro):
- Email: cristobal.garcia@example.com
- GitHub: https://github.com
- LinkedIn: https://linkedin.com

## Licencia

MIT © 2026 Cristóbal Sebastián García Coss
