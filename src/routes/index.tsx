import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureBar } from "@/components/FeatureBar";
import { HowItWorks } from "@/components/HowItWorks";
import { PaymentMethods } from "@/components/PaymentMethods";
import { NoHiddenCosts } from "@/components/NoHiddenCosts";
import { AutomatedSection } from "@/components/AutomatedSection";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "tudatáfono — Cobra con tu celular | by tpaga" },
      {
        name: "description",
        content:
          "Convierte tu celular en un datáfono. Acepta tarjetas, QR y Nequi sin hardware, sin mensualidad. Activa en 2 minutos.",
      },
      { property: "og:title", content: "tudatáfono — Cobra con tu celular" },
      {
        property: "og:description",
        content: "El datáfono digital que cabe en tu celular. Sin hardware, sin mensualidad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "tudatáfono",
          description:
            "Datáfono digital que convierte tu celular en terminal de pagos. Acepta tarjetas, QR y billeteras digitales.",
          brand: { "@type": "Brand", name: "tpaga" },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeatureBar />
        <HowItWorks />
        <PaymentMethods />
        <NoHiddenCosts />
        <AutomatedSection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
