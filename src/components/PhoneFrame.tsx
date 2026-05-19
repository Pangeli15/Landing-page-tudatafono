import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export function PhoneFrame({ src, alt, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto bg-[#0a0a0a] rounded-[3rem] p-3 shadow-2xl",
        "w-[280px] sm:w-[320px] aspect-[9/19.5]",
        className,
      )}
    >
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0a0a0a] rounded-b-2xl z-20" />
      {/* Screen */}
      <div className="relative w-full h-full overflow-hidden rounded-[2.25rem] bg-white">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
