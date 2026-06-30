"use client";
import { useReveal } from "../useReveal.js";
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, shown] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }} {...rest}>
      {children}
    </Tag>
  );
}