import logo from "@/assets/logo-tudatafono.png";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const cols = [
  {
    title: "Producto",
    links: ["Cómo funciona", "Precios", "Métodos de pago", "App"],
  },
  {
    title: "Recursos",
    links: ["Blog", "Casos de éxito", "Centro de ayuda", "Tutoriales"],
  },
  {
    title: "Soporte",
    links: ["Contacto", "Estado del servicio", "Política de privacidad", "Términos"],
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="tudatáfono by tpaga" className="h-10 w-auto mb-4" />
          <p className="text-sm text-muted-foreground mb-6 max-w-xs">
            El datáfono digital que cabe en tu celular. Cobra sin límites.
          </p>
          <div className="flex gap-3">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-teal hover:bg-teal-soft transition-colors"
                aria-label="Red social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-semibold text-primary mb-4">{c.title}</h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} tudatáfono by tpaga. Todos los derechos reservados.</span>
          <span>Hecho con ❤️ en Colombia</span>
        </div>
      </div>
    </footer>
  );
}
