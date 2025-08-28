"use client";

import { useState } from "react";
import { Image, ClipboardList, Puzzle, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

interface StepsBarProps {
  className?: string;
}

const steps: Step[] = [
  { label: "1 - Photos and X-ray", icon: Image },
  { label: "2 - Diagnosis chart", icon: ClipboardList },
  { label: "3 - Treatment chart", icon: Puzzle },
  { label: "Generate TxPlan", icon: Monitor },
];

export default function StepsBar({ className }: StepsBarProps) {
  const [active, setActive] = useState(0);

  return (
    <div
      className={cn(
        "flex flex-row items-center py-2 px-3 w-full bg-card-background-light rounded-2xl shadow-button-shadow",
        className
      )}
    >
      <div className="flex flex-row items-center py-1 px-3 w-full bg-card-background-light rounded-2xl shadow-button-shadow">
        <div className="flex items-center justify-center gap-10 overflow-x-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === active;

            return (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-3 rounded-xl px-4 py-2 transition-all
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground hover:bg-muted/60"
                  }`}
              >
                <span
                  className={`grid h-8 w-8 place-items-center rounded-lg border
                    ${
                      isActive
                        ? "border-white/40 bg-white/10"
                        : "border-foreground/20"
                    }
                  `}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? "text-primary-foreground" : "text-foreground"
                    }`}
                  />
                </span>

                <span className="whitespace-nowrap text-base">{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
