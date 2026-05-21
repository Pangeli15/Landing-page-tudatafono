import logo from "@/assets/logo-tudatafono.png";
import { Instagram, Facebook, Twitter } from "lucide-react";

const cols = [
  {
    title: "Tpaga para Personas",
    links: ["Tarjeta virtual", "Soporte"],
  },
  {
    title: "Tpaga para Empresas",
    links: ["Desembolsos digitales", "Adquirir servicios apificados"],
  },
  {
    title: "APIs",
    links: ["APIs de Banking", "APIs de Pagos", "APIS de Valor Agregado"],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt="tudatáfono by tpaga" className="h-12 w-auto mb-6 brightness-0 invert" />
          <div className="flex flex-col gap-3">
            <a href="#" aria-label="Google Play">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Disponible en Google Play"
                className="h-10 w-auto"
              />
            </a>
            <a href="#" aria-label="App Store">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Consíguelo en el App Store"
                className="h-10 w-auto"
              />
            </a>
            <a href="#" aria-label="AppGallery">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Huawei_AppGallery.svg"
                alt="Explóralo en AppGallery"
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-semibold text-primary-foreground mb-6 text-lg">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-primary-foreground/80 hover:text-teal transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-semibold text-primary-foreground mb-6 text-lg">Contacto</h4>
          <ul className="space-y-3 mb-6">
            <li className="text-sm text-primary-foreground/80">+57 (1) 378-90 66</li>
            <li className="text-sm text-primary-foreground/80">billetera@tpaga.co</li>
            <li className="text-sm text-primary-foreground/80">
              Carrera 7ª Bis # 106-33
              <br />
              Bogotá | Colombia
            </li>
          </ul>
          <p className="font-semibold text-primary-foreground mb-3">Síguenos</p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-md border border-teal/50 flex items-center justify-center text-teal hover:bg-teal hover:text-primary transition-colors"
                aria-label="Red social"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-primary-foreground/70 flex flex-wrap justify-between gap-2">
          <span>
            <a href="#" className="hover:text-teal transition-colors">
              Política de privacidad
            </a>
            {" | "}
            <a href="#" className="hover:text-teal transition-colors">
              Términos y condiciones
            </a>
          </span>
          <span>Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}
