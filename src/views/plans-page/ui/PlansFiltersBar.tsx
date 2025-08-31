"use client";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { ChevronDown, Calendar, Search } from "lucide-react";

export default function PlansFiltersBar() {
  return (
    <Card className="p-3 rounded-2xl shadow-button-shadow bg-card-background-light">
      <div className="flex items-center gap-6">
        <FilterChip label="All time" />

        {/* календарь (отдельная маленькая кнопка) */}
        <Button
          variant="secondary"
          size="icon"
          className="h-10 w-10 rounded-xl shadow-button-shadow"
        >
          <Calendar className="h-5 w-5" />
        </Button>

        <FilterChip label="All plans" />
        <FilterChip label="All types" />

        {/* поиск заполняет остаток ширины */}
        <div className="relative ml-auto w-full max-w-[720px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
          <Input
            placeholder="Search"
            className="h-11 rounded-2xl bg-muted/40 pl-10 pr-12 border-none shadow-none"
          />
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-muted/60 px-2 py-0.5 text-xs opacity-80">
            /
          </span>
        </div>
      </div>
    </Card>
  );
}

/* ===== атом чипа фильтра ===== */
function FilterChip({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="group flex items-center h-11 rounded-2xl pl-4 pr-2 bg-muted/40 shadow-button-shadow"
    >
      <span className="text-base">{label}</span>
      {/* правый сегмент со стрелкой */}
      <span className="ml-2 grid h-9 w-10 place-items-center rounded-xl bg-muted/60">
        <ChevronDown className="h-4 w-4 opacity-80 group-hover:opacity-100" />
      </span>
    </button>
  );
}
