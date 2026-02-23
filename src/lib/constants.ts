// González & González Contadores & Auditores - Site Constants

// ============================================================
// BUSINESS INFO
// ============================================================
export const BUSINESS = {
  name: "González & González",
  tagline: "Contadores & Auditores",
  fullName: "González & González Contadores & Auditores",
  ruc: "1-30-642",
  dv: "84",
  address: {
    street: "Calle Ottawa, PH Pasarela",
    neighborhood: "Miraflores",
    district: "Bethania",
    city: "Ciudad de Panamá",
    country: "Panamá",
    full: "Calle Ottawa, PH Pasarela, Miraflores, Bethania, Ciudad de Panamá",
  },
  phone: "+507 6288-8162",
  whatsapp: "5076288162",
  email: "info@gonzalezygonzalez.com", // TODO: confirmar email
  schedule: {
    weekdays: "Lunes a Viernes: 8:00 AM - 5:00 PM",
    saturday: "Sábado: 9:00 AM - 1:00 PM",
    sunday: "Domingo: Cerrado",
  },
} as const;

// ============================================================
// SERVICES
// ============================================================
export const SERVICES = [
  {
    id: "contabilidad",
    title: "Contabilidad General",
    shortDescription:
      "Registro y control de sus operaciones financieras con precisión y transparencia.",
    description:
      "Llevamos el registro ordenado y sistemático de todas las transacciones financieras de su empresa. Incluye libro diario, mayor, estados financieros mensuales y anuales, conciliaciones bancarias y reportes gerenciales.",
    icon: "BookOpen",
  },
  {
    id: "auditoria",
    title: "Auditoría Financiera",
    shortDescription:
      "Evaluación independiente de sus estados financieros para garantizar confiabilidad.",
    description:
      "Realizamos auditorías externas e internas conforme a las Normas Internacionales de Auditoría (NIA). Emitimos opinión profesional sobre la razonabilidad de sus estados financieros, identificamos riesgos y recomendamos mejoras en sus controles internos.",
    icon: "ShieldCheck",
  },
  {
    id: "asesoria-fiscal",
    title: "Asesoría Fiscal y Tributaria",
    shortDescription:
      "Planificación tributaria estratégica para optimizar su carga fiscal.",
    description:
      "Asesoramos en el cumplimiento de obligaciones tributarias ante la DGI, planificación fiscal, declaraciones de renta, ITBMS, retenciones, y representación ante la autoridad fiscal. Maximizamos los beneficios fiscales dentro del marco legal.",
    icon: "Calculator",
  },
  {
    id: "tramites-dgi",
    title: "Trámites ante la DGI",
    shortDescription:
      "Gestión completa de trámites fiscales y registros ante la DGI (E-TAX).",
    description:
      "Inscripción de contribuyentes (personas naturales y jurídicas), actualización de información en el RUC, solicitud de Número Tributario (NT), registro de terceros vinculados. Todos los trámites en la plataforma digital E-TAX.",
    icon: "FileText",
  },
  {
    id: "nominas",
    title: "Nóminas y Seguridad Social",
    shortDescription:
      "Administración integral de planillas, CSS y obligaciones laborales.",
    description:
      "Procesamiento de planillas, cálculo de prestaciones laborales, vacaciones, décimo tercer mes, liquidaciones. Gestión de trámites ante la Caja de Seguro Social (CSS) y cumplimiento de normativa laboral panameña.",
    icon: "Users",
  },
  {
    id: "consultoria",
    title: "Consultoría Empresarial",
    shortDescription:
      "Acompañamiento estratégico para la toma de decisiones financieras.",
    description:
      "Brindamos asesoría financiera y contable personalizada para la toma de decisiones. Incluye análisis de viabilidad, presupuestos, proyecciones financieras, reestructuración empresarial y acompañamiento en procesos de crecimiento.",
    icon: "TrendingUp",
  },
] as const;

// ============================================================
// WHY US - DIFERENCIADORES
// ============================================================
export const WHY_US = [
  {
    title: "Experiencia Comprobada",
    description:
      "Años de experiencia atendiendo empresas de diversos sectores en Panamá.",
    icon: "Award",
  },
  {
    title: "Atención Personalizada",
    description:
      "Cada cliente recibe un servicio adaptado a sus necesidades específicas.",
    icon: "UserCheck",
  },
  {
    title: "Cumplimiento Normativo",
    description:
      "Nos apegamos a las normas internacionales de contabilidad y auditoría (NIIF, NIA).",
    icon: "Scale",
  },
  {
    title: "Tecnología y Eficiencia",
    description:
      "Utilizamos herramientas digitales para ofrecer reportes oportunos y precisos.",
    icon: "Zap",
  },
] as const;

// ============================================================
// STATS
// ============================================================
export const STATS = [
  { value: "12+", label: "Clientes Activos" },
  { value: "100%", label: "Compromiso" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "CPA", label: "Contadores Autorizados" },
] as const;

// ============================================================
// NAV LINKS
// ============================================================
export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

// ============================================================
// COLORS (aligned to logo)
// ============================================================
export const COLORS = {
  primary: "#4E2B15",       // Marrón oscuro - arco del logo
  primaryLight: "#6B3D20",  // Marrón medio - hover states
  secondary: "#8B5A2C",     // Marrón cobrizo - cuerpo de la G
  secondaryLight: "#A67C52", // Cobrizo claro - acentos suaves
  accent: "#B8860B",        // Dorado oscuro - CTAs
  background: "#FBF9F7",    // Crema sutil - fondo general
  surface: "#FFFFFF",       // Blanco - cards
  text: "#1E1E1E",          // Negro carbón - texto principal
  muted: "#6B7280",         // Gris medio - texto secundario
  border: "#E8E0D8",        // Beige - bordes
} as const;
