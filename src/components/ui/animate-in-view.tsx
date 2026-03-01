"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimateInViewProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  variant?: "fadeUp" | "fadeScale" | "slideLeft" | "slideRight" | "blurIn";
};

const variantMap = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeScale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export function AnimateInView({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  variant = "fadeUp",
}: AnimateInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const variants = variantMap[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export function StaggerContainer({
  children,
  className = "",
  once = true,
  amount = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "scale" | "left" | "right";
}) {
  const itemVariants = {
    up: { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
    left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div
      variants={itemVariants[variant]}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
