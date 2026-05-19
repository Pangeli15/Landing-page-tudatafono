import { Check } from "lucide-react";
import hand from "@/assets/hand-phone.png";

const bullets = [
  "Recibe notificaciones instantáneas de cada venta en tu celular.",
  "Accede a reportes organizados y analítica de tu negocio cuando quieras.",
  "La IA de tudatáfono categoriza y registra automáticamente todas tus transacciones.",
];

export function AutomatedSection() {
  return (
    <section className="py-24 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Pasos simples para
            <br />
            automatizar tus
            <br />
            cobros
          </h2>
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <Check className="w-5 h-5 text-teal shrink-0 mt-1" />
                <span className="text-navy-foreground/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={hand}
            alt="Mano sosteniendo celular con la app de tudatáfono"
            width={800}
            height={900}
            loading="lazy"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
}
