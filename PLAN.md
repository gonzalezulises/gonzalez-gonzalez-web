# Plan de Desarrollo - González & González Contadores & Auditores

## 1. Resumen del Proyecto

**Objetivo:** Crear un sitio web corporativo profesional para el despacho contable González & González Contadores & Auditores. El sitio servirá como carta de presentación digital, generador de confianza y canal de captación de clientes.

**Stack Tecnológico:**
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Estilos:** Tailwind CSS v4
- **Componentes UI:** shadcn/ui
- **Formulario de contacto:** React Hook Form + Zod (validación)
- **Email:** Resend (servicio de envío de emails transaccionales)
- **Deploy:** Vercel (subdominio temporal → dominio propio)
- **Analítica:** Vercel Analytics

---

## 2. Mapa del Sitio (Sitemap)

```
/                    → Página de Inicio (Home)
/servicios           → Servicios detallados
/nosotros            → Quiénes somos / Equipo
/contacto            → Formulario de contacto + info
```

### 2.1 Página de Inicio (`/`)
- **Hero Section:** Título impactante, subtítulo, CTA principal ("Solicitar Consulta")
- **Servicios Destacados:** Grid de 6 servicios con iconos (resumen)
- **¿Por qué elegirnos?:** 3-4 diferenciadores con iconos/números
- **Testimonios:** Carrusel de testimonios de clientes
- **CTA Final:** Banner de llamada a la acción antes del footer

### 2.2 Servicios (`/servicios`)
- Lista completa de servicios con descripción detallada:
  - Contabilidad General
  - Auditoría Financiera
  - Asesoría Fiscal y Tributaria
  - Planeación Financiera
  - Nóminas y Seguridad Social
  - Consultoría Empresarial
- Cada servicio con icono, título, descripción y CTA

### 2.3 Nosotros (`/nosotros`)
- Historia del despacho
- Misión, Visión y Valores
- Equipo / Socios fundadores (foto + bio)
- Cifras clave (años de experiencia, clientes atendidos, etc.)

### 2.4 Contacto (`/contacto`)
- Formulario: Nombre, Email, Teléfono, Servicio de interés, Mensaje
- Validación con Zod
- Envío de email con Resend (Server Action)
- Información de contacto: teléfono, email, dirección
- Mapa embebido (Google Maps / OpenStreetMap)
- Horarios de atención

---

## 3. Diseño y Branding

### 3.1 Paleta de Colores
| Rol         | Color       | Uso                              |
|-------------|-------------|----------------------------------|
| Primary     | `#1B365D`   | Azul marino - Confianza          |
| Secondary   | `#C8A951`   | Dorado - Profesionalismo/Premium |
| Accent      | `#2563EB`   | Azul brillante - CTAs/Links      |
| Background  | `#F8FAFC`   | Gris muy claro - Fondos          |
| Surface     | `#FFFFFF`   | Blanco - Cards                   |
| Text        | `#1E293B`   | Gris oscuro - Texto principal    |
| Muted       | `#64748B`   | Gris medio - Texto secundario    |

### 3.2 Tipografía
- **Headings:** Inter (bold/semibold)
- **Body:** Inter (regular/medium)
- **Alternativa premium:** Playfair Display para títulos principales

### 3.3 Iconografía
- Lucide React (consistente con shadcn/ui)
- Estilo: outlined, 24px base

---

## 4. Estructura del Proyecto

```
gonzalez-gonzalez-web/
├── public/
│   ├── images/           # Imágenes optimizadas
│   ├── favicon.ico
│   └── og-image.jpg      # Open Graph image
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout (Navbar + Footer)
│   │   ├── page.tsx      # Home
│   │   ├── servicios/
│   │   │   └── page.tsx
│   │   ├── nosotros/
│   │   │   └── page.tsx
│   │   ├── contacto/
│   │   │   ├── page.tsx
│   │   │   └── action.ts  # Server Action para email
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   ├── home/
│   │   │   ├── hero.tsx
│   │   │   ├── services-preview.tsx
│   │   │   ├── why-us.tsx
│   │   │   ├── testimonials.tsx
│   │   │   └── cta-banner.tsx
│   │   ├── servicios/
│   │   │   └── service-card.tsx
│   │   ├── nosotros/
│   │   │   ├── team-card.tsx
│   │   │   └── stats.tsx
│   │   ├── contacto/
│   │   │   └── contact-form.tsx
│   │   └── ui/           # shadcn/ui components
│   └── lib/
│       ├── constants.ts  # Datos del sitio (servicios, equipo, etc.)
│       └── utils.ts      # Utilidades (cn helper)
├── .env.local            # Variables de entorno
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── PLAN.md
```

---

## 5. SEO y Performance

- **Metadata:** Título, descripción, Open Graph para cada página
- **Sitemap automático:** `next-sitemap` o metadata API de Next.js
- **robots.txt:** Generado automáticamente
- **Imágenes:** next/image con optimización automática
- **Lighthouse target:** 90+ en todas las métricas
- **Schema.org:** JSON-LD para LocalBusiness

---

## 6. Fases de Implementación

### Fase 1: Setup y Estructura Base
- [x] Crear repositorio GitHub
- [x] Inicializar Next.js 15 + Tailwind v4
- [ ] Configurar shadcn/ui
- [ ] Crear layout global (Navbar + Footer)
- [ ] Definir constantes (servicios, equipo, etc.)

### Fase 2: Páginas Principales
- [ ] Home page completa
- [ ] Página de Servicios
- [ ] Página Nosotros
- [ ] Página de Contacto (formulario + validación)

### Fase 3: Funcionalidad
- [ ] Server Action para envío de email (Resend)
- [ ] Animaciones sutiles (scroll reveal)
- [ ] Responsive design completo

### Fase 4: SEO y Deploy
- [ ] Metadata y Open Graph para cada página
- [ ] Schema.org JSON-LD
- [ ] Sitemap y robots.txt
- [ ] Deploy a Vercel
- [ ] Configurar dominio (cuando esté listo)

---

## 7. Dependencias Principales

```json
{
  "next": "^15",
  "react": "^19",
  "tailwindcss": "^4",
  "typescript": "^5",
  "@radix-ui/react-*": "componentes de shadcn",
  "lucide-react": "iconos",
  "react-hook-form": "formularios",
  "zod": "validación",
  "@hookform/resolvers": "integración zod + rhf",
  "resend": "envío de emails",
  "class-variance-authority": "variantes de componentes",
  "clsx": "clases condicionales",
  "tailwind-merge": "merge de clases tailwind"
}
```
