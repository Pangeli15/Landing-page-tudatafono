import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué es tudatáfono?",
    a: "Es una aplicación que convierte tu celular en un datáfono. Acepta pagos con tarjeta, QR y billeteras digitales sin necesidad de comprar ningún equipo adicional.",
  },
  {
    q: "¿Necesito hardware adicional?",
    a: "No. Solo necesitas un smartphone con NFC (la mayoría lo tienen) y la app de tudatáfono. Olvídate de comprar o alquilar datáfonos físicos.",
  },
  {
    q: "¿Qué métodos de pago acepta?",
    a: "Tarjetas Visa y Mastercard (crédito y débito), pagos NFC sin contacto, códigos QR, Nequi, Daviplata y otras billeteras digitales del país.",
  },
  {
    q: "¿Cuándo recibo mi dinero?",
    a: "Las ventas se acreditan a tu cuenta el siguiente día hábil antes de las 10 a.m., sin costo de retiro.",
  },
  {
    q: "¿Qué comisión cobran?",
    a: "Solo pagas una pequeña comisión por cada venta. No hay mensualidad, ni costos de activación, ni cargos ocultos.",
  },
  {
    q: "¿Es seguro para mí y mis clientes?",
    a: "Sí. Cumplimos con los más altos estándares de seguridad PCI-DSS y respaldados por tpaga, una fintech con años de experiencia en pagos.",
  },
  {
    q: "¿Cómo me registro?",
    a: "Descarga la app, ingresa tus datos básicos y tu cédula. En menos de 2 minutos tu cuenta estará activa y lista para cobrar.",
  },
  {
    q: "¿Funciona sin internet?",
    a: "Necesitas conexión a internet (Wi-Fi o datos móviles) para procesar los pagos en tiempo real y garantizar la seguridad de cada transacción.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm text-teal font-semibold mb-2 text-center">Preguntas frecuentes</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Todo lo que necesitas saber
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-background border border-border rounded-xl px-5"
            >
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
