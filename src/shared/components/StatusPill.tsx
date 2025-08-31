import * as React from "react";

export type StatusPillVariant = "approved" | "ready" | "todo" | "rejected";

type Props = {
  variant: StatusPillVariant;
  children?: React.ReactNode;
  className?: string;
};

const themeByVariant: Record<
  StatusPillVariant,
  { bg: string; border: string }
> = {
  approved: {
    bg: "var(--color-chart-2)",
    border: "var(--color-chart-2-border)",
  },
  ready: { bg: "var(--color-chart-4)", border: "var(--color-chart-4-border)" },
  todo: { bg: "var(--color-chart-5)", border: "var(--color-chart-5-border)" },
  rejected: {
    bg: "var(--color-chart-1)",
    border: "var(--color-chart-1-border)",
  },
};

export function StatusPill({ variant, children, className }: Props) {
  const c = themeByVariant[variant];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-base font-medium ${
        className ?? ""
      }`}
      style={{ backgroundColor: c.bg, borderColor: c.border, color: c.border }}
    >
      {children}
    </span>
  );
}
