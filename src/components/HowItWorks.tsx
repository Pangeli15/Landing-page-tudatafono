import { Download, Store, Zap, Wallet } from "lucide-react";

const steps = [
  { icon: Download, title: "Descarga la app", desc: "Disponible para Android e iOS." },
  { icon: Store, title: "Registra tu negocio", desc: "Solo tu cédula y datos básicos. Todo en la app, sin papeleos." },
  { icon: Zap, title: "Activa tu datáfono", desc: "Aprobación en menos de 2 minutos. Listo para cobrar." },
  { icon: Wallet, title: "Cobra y recibe", desc: "El dinero entra el mismo día. Retira cuando quieras." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm text-muted-foreground mb-2">Cómo funciona</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">
          Empieza a cobrar en 4 pasos simples
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full border-2 border-teal/30 flex items-center justify-center mb-5 bg-teal-soft/30">
                <s.icon className="w-9 h-9 text-teal" />
              </div>
              <div className="text-xs text-teal font-semibold mb-2">PASO {i + 1}</div>
              <h3 className="font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
