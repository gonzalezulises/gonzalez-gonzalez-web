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

### 3.1 Paleta de Colores (alineada al logo)
| Rol            | Color       | Uso                                        |
|----------------|-------------|--------------------------------------------|
| Primary        | `#4E2B15`   | Marrón oscuro - Arco del logo              |
| Primary Light  | `#6B3D20`   | Marrón medio - Hover states                |
| Secondary      | `#8B5A2C`   | Marrón cobrizo - Cuerpo de la G del logo   |
| Secondary Light| `#A67C52`   | Cobrizo claro - Acentos suaves             |
| Accent         | `#B8860B`   | Dorado oscuro - CTAs y enlaces destacados  |
| Background     | `#FBF9F7`   | Crema muy sutil - Fondo general            |
| Surface        | `#FFFFFF`   | Blanco - Cards y contenedores              |
| Text           | `#1E1E1E`   | Negro carbón - Texto principal (del logo)  |
| Muted          | `#6B7280`   | Gris medio - Texto secundario              |
| Border         | `#E8E0D8`   | Beige - Bordes y separadores               |

### 3.2 Tipografía
- **Headings:** Playfair Display (serif, como el logo) - bold/semibold
- **Body:** Inter (sans-serif) - regular/medium
- Combinación serif + sans que refleja la elegancia del logotipo

### 3.3 Iconografía
- Lucide React (consistente con shadcn/ui)
- Estilo: outlined, 24px base

---

## 3.5 Información del Negocio

**Razón Social:** González & González Contadores & Auditores
**RUC:** 1-30-642 DV 84
**Ubicación:** Bethania, Miraflores, Calle Ottawa, PH Pasarela, Ciudad de Panamá, Panamá

**Clientes actuales (referencia):**
1. South Cargo Corp, S.A.
2. Prozess Group, S.A.
3. Constructora Colpan, S.A.
4. Paz & Paz Consultores
5. Canora Proyects, S.A.
6. Play & Party, S.A.
7. Agro & Food Integrity (AFISA)
8. Bikain Net Corp, S.A.
9. Powertec Technologies, S.A.
10. Taller de Mecánica Rubén Darío
11. Talleres Rincón
12. Centro Estimularte

**Referencia de honorarios:** Basados en la Resolución No. 05-2025 de la Junta Técnica de Contabilidad (Tabla de Referencia de Honorarios Mínimos para CPA).

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
