"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

interface ScrollColorTextProps {
  children: React.ReactNode
  className?: string
}

export function ScrollColorText({ children, className }: ScrollColorTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Interpola entre dos colores basado en scroll
  // Comienza en gris (rgb(113, 113, 122)) y termina en negro (rgb(26, 26, 26))
  const color = useTransform(scrollYProgress, [0, 1], ["rgb(113, 113, 122)", "rgb(26, 26, 26)"])

  return (
    <motion.div ref={ref} style={{ color }} className={className}>
      {children}
    </motion.div>
  )
}
