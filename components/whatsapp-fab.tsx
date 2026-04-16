"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type WhatsAppFabProps = {
  phoneNumber?: string;
  message?: string;
  className?: string;
};

export default function WhatsAppFab({
  phoneNumber = "5492920707402",
  message = "¡Hola! Me interesa conocer más sobre los servicios de Krauser. Me gustaría recibir información sobre desarrollo web y soluciones tecnológicas.",
  className,
}: WhatsAppFabProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "fixed bottom-5 right-5 z-50",
        "h-14 w-14 rounded-full",
        "bg-[#25D366] text-white",
        "shadow-[0_18px_45px_rgba(37,211,102,0.35)]",
        "ring-1 ring-black/5",
        "flex items-center justify-center",
        "transition-shadow hover:shadow-[0_22px_55px_rgba(37,211,102,0.45)]",
        className
      )}
    >
      {/* subtle pulse */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping [animation-duration:2.2s]" />
      <span className="absolute inset-0 rounded-full bg-white/10" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}

