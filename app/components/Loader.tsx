"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  children: React.ReactNode;
}

export function Loader({ children }: LoaderProps) {
  const [loading, setLoading] = useState(true);
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  useEffect(() => {
    // Verificar si ya se mostró el loader en esta sesión
    const hasShownLoader = sessionStorage.getItem("loaderShown");
    
    if (hasShownLoader) {
      // Ya se mostró, no mostrar de nuevo
      setLoading(false);
      setShouldShowLoader(false);
    } else {
      // Primera vez en esta sesión, mostrar loader
      setShouldShowLoader(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("loaderShown", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Si no debe mostrar loader, renderizar children directamente
  if (!shouldShowLoader && !loading) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence>
      {loading && shouldShowLoader ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-serif oswald text-accent-lime text-center"
          >
           Javier Medina
          </motion.h1>
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
}
