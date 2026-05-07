"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade" | "left" | "right";
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getInitialStyle = () => {
    switch (direction) {
      case "up": return { transform: "translateY(28px)", opacity: 0 };
      case "fade": return { opacity: 0 };
      case "left": return { transform: "translateX(-28px)", opacity: 0 };
      case "right": return { transform: "translateX(28px)", opacity: 0 };
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...(visible ? { opacity: 1, transform: "none" } : getInitialStyle()),
      }}
    >
      {children}
    </div>
  );
}
