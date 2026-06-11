import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-amber-300 text-zinc-950 hover:bg-amber-200"
      : "border border-white/20 bg-white/10 text-white hover:bg-white/15";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold shadow-lg shadow-black/20 transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
