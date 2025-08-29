"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import sliderImg from "@/shared/assets/img/slider-img.png";
import chartImg from "@/shared/assets/img/chart-img.png";

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

export function DiagnosisChart({ className }: DiagnosisChartProps) {
  return (
    <Card
      className={cn(
        "relative p-6 bg-card-background-light rounded-2xl shadow-button-shadow",
        className
      )}
    >
      <div className="flex gap-8 justify-between pr-15">
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

        <div className="flex flex-col gap-7">
          <div className="rounded-xl w-[640px]">
            <Image src={chartImg} alt="chart" />
          </div>

          <div className="rounded-xl w-[640px] relative">
            <Image src={sliderImg} alt="slider" />
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="absolute right-[-38px] top-[50%] -translate-y-1/2 h-7 w-7 rounded-full bg-background"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
