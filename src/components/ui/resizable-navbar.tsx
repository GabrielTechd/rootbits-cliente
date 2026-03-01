"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export const NavbarContext = createContext<{
  visible: boolean;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}>({
  visible: true,
  mobileOpen: false,
  setMobileOpen: () => {},
});

export function Navbar({
  children,
  className = "",
  mobileOpen: controlledMobileOpen,
  onMobileOpenChange,
}: {
  children: React.ReactNode;
  className?: string;
  mobileOpen?: boolean;
  onMobileOpenChange?: (open: boolean) => void;
}) {
  const [visible, setVisible] = useState(true);
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);

  const mobileOpen = controlledMobileOpen ?? internalMobileOpen;
  const setMobileOpen = onMobileOpenChange ?? setInternalMobileOpen;

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY < 50);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <NavbarContext.Provider
      value={{ visible, mobileOpen, setMobileOpen }}
    >
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`fixed left-0 right-0 top-0 z-50 flex w-full justify-center px-3 py-3 transition-[padding] duration-300 sm:px-4 md:px-6 md:py-4 ${className}`}
      >
        {children}
      </motion.header>
    </NavbarContext.Provider>
  );
}

export function NavBody({
  children,
  className = "",
  visible: visibleProp,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) {
  const { visible: ctxVisible } = useContext(NavbarContext);
  const visible = visibleProp ?? ctxVisible;

  return (
    <motion.div
      initial={false}
      animate={{
        maxWidth: visible ? "1280px" : "1024px",
        paddingLeft: visible ? "1.5rem" : "1rem",
        paddingRight: visible ? "1.5rem" : "1rem",
        paddingTop: visible ? "1rem" : "0.75rem",
        paddingBottom: visible ? "1rem" : "0.75rem",
        borderRadius: visible ? "1rem" : "9999px",
        backgroundColor: "rgba(10, 10, 10, 0.8)",
        backdropFilter: "blur(12px)",
        borderWidth: visible ? 0 : 1,
        borderColor: visible ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.08)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`mx-auto flex w-full max-w-[calc(100vw-1.5rem)] items-center justify-between gap-2 sm:max-w-none ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function NavItems({
  items,
  className = "",
  onItemClick,
}: {
  items: Array<{ name: string; link: string }>;
  className?: string;
  onItemClick?: () => void;
}) {
  return (
    <nav
      className={`hidden items-center gap-8 md:flex ${className}`}
      aria-label="Main"
    >
      {items.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          onClick={onItemClick}
          className="cursor-pointer text-sm font-medium text-neutral-300 transition-colors hover:text-white"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export function MobileNav({
  children,
  className = "",
  visible: visibleProp,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) {
  const { mobileOpen } = useContext(NavbarContext);
  const visible = visibleProp ?? mobileOpen;

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] md:hidden ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function MobileNavHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between border-b border-white/10 bg-[#0a0a0a]/95 px-4 py-3 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function MobileNavMenu({
  children,
  className = "",
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] cursor-pointer bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed left-0 right-0 top-0 z-[100] flex flex-col bg-[#0a0a0a] ${className}`}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function MobileNavToggle({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className="relative z-[80] inline-flex h-10 w-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
    >
      <span
        className={`h-0.5 w-5 bg-current transition-all ${isOpen ? "translate-y-2 rotate-45" : ""}`}
      />
      <span
        className={`h-0.5 w-5 bg-current transition-all ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`h-0.5 w-5 bg-current transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
      />
    </button>
  );
}

const buttonVariants = {
  primary:
    "bg-white text-black hover:bg-neutral-200 font-semibold",
  secondary:
    "border border-white/20 text-white hover:bg-white/10",
  dark: "bg-neutral-900 text-white hover:bg-neutral-800",
  gradient:
    "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90",
};

export function NavbarButton({
  href,
  as = "a",
  children,
  className = "",
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & ComponentPropsWithoutRef<"a"> &
  ComponentPropsWithoutRef<"button">) {
  const Comp = href ? (as === "a" ? Link : "a") : "button";
  const base =
    "inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-sm transition-colors " +
    buttonVariants[variant];

  if (href && (Comp === Link || as === "a")) {
    const { href: _h, ...linkProps } = props as ComponentPropsWithoutRef<typeof Link> & { href?: string };
    return (
      <Link
        href={href}
        className={`${base} ${className}`}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    const { href: _h, ...anchorProps } = props as ComponentPropsWithoutRef<"a"> & { href?: string };
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${base} ${className}`}
      {...(props as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
