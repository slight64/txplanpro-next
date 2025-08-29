"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import chartImg from "@/shared/assets/img/chart-img.png";
import Image from "next/image";

const categories = [
  "Surgery",
  "Conservative",
  "Restorations",
  "Perio",
  "Orthodontics",
];

interface DiagnosisChartProps {
  className?: string;
}

export function TreatmentChart({ className }: DiagnosisChartProps) {
  return (
    <Card
      className={cn(
        "relative p-6 bg-card-background-light rounded-2xl shadow-button-shadow",
        className
      )}
    >
      <div className="flex gap-8 justify-between">
        <div className="w-[175px] shrink-0 space-y-3">
          {categories.map((c) => (
            <Button
              key={c}
              variant="secondary"
              className="flex justify-between h-9 w-full rounded-xl px-4 shadow-none bg-background text-black font-normal"
            >
              <span>{c}</span>
              <span className="opacity-70">→</span>
            </Button>
          ))}
        </div>

        <div className="flex ">
          <div className="rounded-xl w-[640px]">
            <Image src={chartImg} alt="chart" />
          </div>
        </div>
      </div>
    </Card>
  );
}
