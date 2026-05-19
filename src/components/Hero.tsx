import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PhoneFrame } from "@/components/PhoneFrame";
import heroPhone from "@/assets/app-inicio.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-teal-soft text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Tu Datáfono digital · by tpaga
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.05] tracking-tight">
            Cobra con
            <br />
            tu celular.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Acepta pagos con tarjeta débito, crédito, QR y Nequi desde tu smartphone.
            Sin hardware, sin mensualidad, sin complicaciones.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 h-12"
            >
              <a href="#contacto">Activar Gratis</a>
            </Button>
            <a href="#contacto" className="text-teal font-semibold underline-offset-4 hover:underline">
              Agenda un Demo
            </a>
          </div>
          <div className="mt-12 flex gap-8 sm:gap-12">
            <div>
              <div className="text-4xl sm:text-5xl font-bold whitespace-nowrap" style={{ color: "var(--mint)" }}>0%</div>
              <div className="text-sm text-muted-foreground mt-1">costo mensual básico</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold whitespace-nowrap" style={{ color: "var(--mint)" }}>2 Min</div>
              <div className="text-sm text-muted-foreground mt-1">para activar</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div
            className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 65%)" }}
          />
          <PhoneFrame
            src={heroPhone}
            alt="Aplicación tudatáfono mostrando pantalla de cobro"
            className="drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
