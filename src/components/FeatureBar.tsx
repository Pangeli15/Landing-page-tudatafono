const features = [
  "0% mensualidad",
  "Activa en 2 minutos",
  "Crédito y Débito",
  "Pagos QR instantáneos",
  "Sin hardware físico",
];

export function FeatureBar() {
  return (
    <div className="bg-teal text-teal-foreground py-4">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm md:text-base font-medium">
        {features.map((f) => (
          <span key={f} className="whitespace-nowrap">{f}</span>
        ))}
      </div>
    </div>
  );
}
