"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import PhotosIcon from "@/shared/assets/icons/PhotosIcon";
import { DiagnosisChart } from "./DiagnosisChart";
import TreatmentIcon from "@/shared/assets/icons/TreatmentIcon";
import GenerateIcon from "@/shared/assets/icons/GenerateIcon";
import DiagnosisIcon from "@/shared/assets/icons/DiagnosisIcon";

type Step = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

interface StepsBarProps {
  className?: string;
}

const steps: Step[] = [
  { label: "1 - Photos and X-ray", icon: PhotosIcon },
  { label: "2 - Diagnosis chart", icon: DiagnosisIcon },
  { label: "3 - Treatment chart", icon: TreatmentIcon },
  // { label: "Generate TxPlan", icon: GenerateIcon },
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
        <div className="flex items-center justify-center gap-9 ">
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
                    className={`h-6 w-6 ${
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
