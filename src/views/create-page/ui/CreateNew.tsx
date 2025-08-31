"use client";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Image as ImageIcon, Maximize2 } from "lucide-react";

const items = [
  {
    title: "Treatment plan (TxPlan)",
    subtitle: "Ai - generated, fully customizable",
    desc: "Create fast, professional and visual appealing Dental Treatment Plans online in just several minutes. Increase patient's trust and your clinic's brand identity.",
  },
  {
    title: "Digital Smile Design",
    subtitle: "The core of your complex planning",
    desc: "Treatment plan, motivate and educate Your patients. Increase case acceptance and Your understanding of Your patient's clinical needs.",
  },
];

export default function CreateNew() {
  return (
    <section className="space-y-6">
      <h1 className="py-2 px-4 w-full bg-card-background-light rounded-2xl shadow-button-shadow text-4xl">
        Create Your new...
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {items.map((it) => (
          <Card
            key={it.title}
            className="p-6 bg-card-background-light rounded-2xl shadow-button-shadow gap-2"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full border-2">
                <ImageIcon className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-normal">{it.title}</h2>
            </div>

            {/* Subtitle */}
            <p className="mt-3 text-xl font-medium text-dropdown">
              {it.subtitle}
            </p>

            {/* Description */}
            <p className="max-w-3xl  text-dropdown">{it.desc}</p>

            {/* CTA */}
            <div className="mt-7">
              <Button className="h-12 rounded-2xl px-6 bg-btn w-btn">
                <span className="mr-3">Create</span>
                <Maximize2 className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
