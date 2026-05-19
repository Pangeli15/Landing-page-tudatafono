# Landing page tudatáfono by tpaga

Construir una landing page en español inspirada en el diseño de referencia, usando el logo provisto, con todas las secciones del mockup más FAQ y formulario de contacto.

## Identidad visual

- **Logo**: copiar `user-uploads://image.png` a `src/assets/logo-tudatafono.png` e importarlo.
- **Paleta** (extraída del logo y mockup):
  - Primary: azul marino profundo `oklch(0.25 0.06 250)` (#1a2b4a aprox)
  - Accent: teal `oklch(0.65 0.12 195)` (cyan/turquesa del logo)
  - Success/numbers: verde teal `oklch(0.70 0.15 180)`
  - Background: blanco con secciones suaves en celeste claro `oklch(0.96 0.02 220)`
  - Sección oscura: navy `oklch(0.20 0.04 250)`
- **Tipografía**: sans bold geométrica para titulares (Manrope o Plus Jakarta Sans), Inter para body. Importar vía Google Fonts en `__root.tsx`.
- Tokens definidos en `src/styles.css` (oklch), sin colores hardcoded en componentes.

## Estructura de rutas

Una sola página de marketing scrolleable (`src/routes/index.tsx`) con navegación por anchors, ya que el contenido funciona como un único landing. Header sticky con links a #como-funciona, #beneficios, #precios, #faq, #contacto.

## Secciones (en orden)

1. **Header / Nav** — logo + links + botón "Activar Gratis"
2. **Hero** — pill "Tu Datáfono digital · by tpaga", H1 "Cobra con tu celular.", subcopy, dos CTAs ("Activar Gratis", "Agenda un Demo"), stats `0%` costo mensual / `2 Min` activación, mockup de teléfono a la derecha (placeholder generado con imagegen).
3. **Barra teal** con 4 propuestas de valor: 0% mensualidad · Activa en 2 minutos · Crédito y Débito · Pagos QR · Sin hardware físico.
4. **Cómo funciona** — 4 pasos con íconos circulares (Descarga la app, Registra tu negocio, Activa tu datáfono, Cobra y recibe).
5. **Métodos de pago aceptados** — 3 tarjetas (Todas las tarjetas, QR y billeteras digitales, Contactless NFC) + screenshot dashboard a la derecha (placeholder).
6. **Sin costos escondidos** — lista con checks (Pago al día siguiente, Reporte en tiempo real, Retiro cuando quieras) + mock de notificaciones del teléfono.
7. **Sección oscura "Pasos simples"** — adaptada en español: "Pasos simples para automatizar tus cobros" con bullets + mano sosteniendo teléfono.
8. **FAQ** (nueva) — accordion con 6-8 preguntas en español: ¿Qué es tudatáfono?, ¿Necesito hardware?, ¿Qué métodos de pago acepta?, ¿Cuándo recibo mi dinero?, ¿Qué comisión cobran?, ¿Es seguro?, ¿Funciona sin internet?, ¿Cómo me registro?. Usa `components/ui/accordion`.
9. **Formulario de contacto** (nuevo) — Card con campos: Nombre, Email, Teléfono, Nombre del negocio, Mensaje. Validación con `zod` + `react-hook-form` + `components/ui/form`. Submit muestra toast (sonner) de éxito; sin backend (Lovable Cloud no se activa salvo que el usuario lo pida). Mensaje "Te contactaremos pronto".
10. **Footer** — logo, columnas (Producto, Recursos, Soporte, Legal), redes sociales, copyright.

## Imágenes a generar

Con `imagegen--generate_image` (fast, salvo el hero que usa standard):
- `src/assets/hero-phone.png` — iPhone mostrando la app tudatáfono con UI de cobro (transparente).
- `src/assets/dashboard-mock.png` — captura mock del panel de ventas.
- `src/assets/phone-notifications.png` — teléfono con notificaciones de pagos.
- `src/assets/hand-phone.png` — mano sosteniendo teléfono con la app.

## Componentes a crear

```
src/components/
  Header.tsx
  Hero.tsx
  FeatureBar.tsx
  HowItWorks.tsx
  PaymentMethods.tsx
  NoHiddenCosts.tsx
  AutomatedSection.tsx
  FAQ.tsx
  ContactForm.tsx
  Footer.tsx
```

`src/routes/index.tsx` los compone en orden y define `head()` con title/description/og en español.

## Detalles técnicos

- `head()` en index: title "tudatáfono — Cobra con tu celular | by tpaga", meta description en español <160 chars, og tags.
- Lang del `<html>` cambiar a `"es"` en `__root.tsx`.
- SEO: H1 único en hero, headings semánticos, alt en español en todas las imágenes.
- Formulario: solo cliente, schema zod con límites de longitud y validación de email/teléfono. Sin enviar a ningún backend (mostrar toast). Si más adelante se quiere persistir, se activa Lovable Cloud.
- Animaciones suaves con framer-motion en hero y al hacer scroll (fade-in stagger).
- Responsive: mobile-first, grid colapsable.

¿Procedo a construir?
