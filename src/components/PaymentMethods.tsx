import { CreditCard, QrCode, Nfc } from "lucide-react";
import dashboard from "@/assets/dashboard-mock.jpg";

const methods = [
  {
    icon: CreditCard,
    title: "Todas las tarjetas",
    desc: "Visa, Mastercard, Débito y Crédito. En cuotas o contado.",
  },
  {
    icon: QrCode,
    title: "QR y billeteras digitales",
    desc: "Nequi, Daviplata, Movii. El cliente escanea y paga en segundos.",
  },
  {
    icon: Nfc,
    title: "Contactless NFC",
    desc: "Paga sin contacto con tarjetas o relojes inteligentes.",
  },
];

export function PaymentMethods() {
  return (
    <section id="beneficios" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 order-2 md:order-1">
          {methods.map((m) => (
            <div
              key={m.title}
              className="bg-teal-soft rounded-2xl p-6 flex gap-4 items-start hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-teal flex items-center justify-center">
                <m.icon className="w-6 h-6 text-teal-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">{m.title}</h3>
                <p className="text-sm text-primary/70">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Un datáfono que acepta lo que sea
          </h2>
          <p className="text-muted-foreground mb-8">
            Tus clientes pagan como quieran. Tú recibes siempre.
          </p>
          <img
            src={dashboard}
            alt="Panel de ventas de tudatáfono"
            width={1024}
            height={700}
            loading="lazy"
            className="rounded-2xl shadow-xl border border-border"
          />
        </div>
      </div>
    </section>
  );
}
