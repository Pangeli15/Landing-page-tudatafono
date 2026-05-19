import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  nombre: z.string().trim().min(2, "Mínimo 2 caracteres").max(80, "Máximo 80 caracteres"),
  email: z.string().trim().email("Correo inválido").max(150),
  telefono: z
    .string()
    .trim()
    .min(7, "Teléfono inválido")
    .max(20, "Máximo 20 caracteres")
    .regex(/^[0-9+\s-]+$/, "Solo números, espacios, + o -"),
  negocio: z.string().trim().min(2, "Mínimo 2 caracteres").max(100),
  mensaje: z.string().trim().max(500, "Máximo 500 caracteres").optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { nombre: "", email: "", telefono: "", negocio: "", mensaje: "" },
  });

  const onSubmit = (_values: FormValues) => {
    toast.success("¡Solicitud enviada!", {
      description: "Te contactaremos en menos de 24 horas.",
    });
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm text-teal font-semibold mb-2">Empieza hoy</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Activa tu datáfono digital
          </h2>
          <p className="text-muted-foreground mb-8">
            Déjanos tus datos y un asesor te ayudará a empezar a cobrar con tu celular en minutos.
          </p>
          <ul className="space-y-3">
            {["Activación 100% gratis", "Sin permanencia ni mensualidad", "Soporte humano cuando lo necesites"].map((b) => (
              <li key={b} className="flex gap-2 items-center text-primary">
                <CheckCircle2 className="w-5 h-5 text-teal" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-muted rounded-3xl p-8 border border-border">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-14 h-14 text-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">¡Gracias!</h3>
              <p className="text-muted-foreground mb-6">
                Hemos recibido tu solicitud. Te contactaremos muy pronto.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Enviar otra solicitud
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl><Input placeholder="María Pérez" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo</FormLabel>
                        <FormControl><Input type="email" placeholder="tu@correo.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl><Input placeholder="300 123 4567" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="negocio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del negocio</FormLabel>
                      <FormControl><Input placeholder="Mi tienda" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje (opcional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Cuéntanos sobre tu negocio..." rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 rounded-full font-semibold">
                  Activar Gratis
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
