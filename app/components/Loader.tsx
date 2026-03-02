"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  children: React.ReactNode;
}

export function Loader({ children }: LoaderProps) {
  // Start with the loader visible on both server and client
  const [loading, setLoading] = useState(true);
  const [shouldShowLoader, setShouldShowLoader] = useState(true);

  useEffect(() => {
    // Guard against environments without sessionStorage
    let hasShownLoader = false;
    try {
      hasShownLoader = !!sessionStorage.getItem("loaderShown");
    } catch {
      hasShownLoader = false;
    }

    if (hasShownLoader) {
      setLoading(false);
      setShouldShowLoader(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem("loaderShown", "true");
      } catch {
        // ignore
      }
    }, 1500);

    return () => clearTimeout(timer);
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
