import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import notifications from "@/assets/phone-notifications.png";

const items = [
  { title: "Pago al día siguiente", desc: "Las ventas llegan a tu cuenta mañana antes de las 10 a.m." },
  { title: "Reporte en tiempo real", desc: "Ve cada transacción al instante. Filtra por fecha o método." },
  { title: "Retiro cuando quieras", desc: "Transfiere a tu cuenta bancaria gratis, las veces que necesites." },
];

export function NoHiddenCosts() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Sin Costos Escondidos.
          </h2>
          <p className="text-muted-foreground mb-8">
            Solo una comisión cuando vendes. Sin mensualidad, sin activación, sin tarifas ocultas.
          </p>
          <ul className="space-y-5 mb-10">
            {items.map((i) => (
              <li key={i.title} className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-teal shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-primary">{i.title}</div>
                  <p className="text-sm text-muted-foreground">{i.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 h-12">
              <a href="#contacto">Activar Gratis</a>
            </Button>
            <a href="#contacto" className="text-teal font-semibold underline-offset-4 hover:underline">
              Agenda un Demo
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div
            className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, var(--mint) 0%, transparent 65%)" }}
          />
          <img
            src={notifications}
            alt="Notificaciones de pagos en el celular"
            width={800}
            height={900}
            loading="lazy"
            className="max-w-sm w-full"
          />
        </div>
      </div>
    </section>
  );
}
