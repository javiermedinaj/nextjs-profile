"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const BOOT_LINES = [
  "initializing portfolio...",
  "loading assets...",
  "mounting react tree...",
  "ready.",
];

export function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [visibleLines, setVisibleLines] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLoading(false);
      return undefined;
    }

    try {
      if (sessionStorage.getItem("loaderShown")) {
        setLoading(false);
        return undefined;
      }
    } catch {
      // sessionStorage bloqueado: seguimos con el loader
    }

    const lineTimer = setInterval(() => {
      setVisibleLines((current) =>
        Math.min(current + 1, BOOT_LINES.length),
      );
    }, 250);

    const progressTimer = setInterval(() => {
      setProgress((current) => Math.min(100, current + 4));
    }, 38);

    const doneTimer = setTimeout(() => {
      setProgress(100);
      setLoading(false);
      try {
        sessionStorage.setItem("loaderShown", "true");
      } catch {
        // ignorar
      }
    }, 1500);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d1117] px-4"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            role="status"
            aria-live="polite"
            className="terminal-window w-full max-w-lg"
          >
            <div className="terminal-header">
              <span className="terminal-dot bg-[#f85149]" />
              <span className="terminal-dot bg-[#d29922]" />
              <span className="terminal-dot bg-[#3fb950]" />
              <span className="ml-3 text-xs text-muted">boot.sh</span>
            </div>

            <div className="terminal-content text-sm">
              <span className="sr-only">Cargando portfolio</span>
              <p className="text-terminal-green">$ ./boot.sh</p>
              {BOOT_LINES.slice(0, visibleLines).map((line) => (
                <p key={line} className="mt-1 text-muted">
                  <span className="text-terminal-green">[ok]</span> {line}
                </p>
              ))}

              <div className="mt-5">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-accent transition-[width] duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-muted">
                  <span>booting terminal</span>
                  <span>{progress}%</span>
                </div>
              </div>

              <span className="typing-effect mt-3 inline-block h-[1em] w-[7px]" />
            </div>
          </div>
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
}
