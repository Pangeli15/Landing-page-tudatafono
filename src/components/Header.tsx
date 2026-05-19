import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-tudatafono.png";

const links = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="tudatáfono by tpaga" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5">
          <a href="#contacto">Activar Gratis</a>
        </Button>
      </div>
    </header>
  );
}
