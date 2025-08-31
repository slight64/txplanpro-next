"use client";

import * as React from "react";
import { Input } from "@/shared/ui/input";
import { Badge } from "@/shared/ui/badge";
import { X } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { cn } from "@/shared/lib/utils";

/* ----- справочники (стабильные коды → лейблы) ----- */
type Option = { value: string; label: string };

const LANGUAGE_OPTIONS: Option[] = [
  { value: "en", label: "English" },
  { value: "ru", label: "Русский" },
  { value: "de", label: "Deutsch" },
  { value: "es", label: "Español" },
];

const COUNTRY_OPTIONS: Option[] = [
  { value: "US", label: "United States" },
  { value: "HK", label: "Hong Kong" },
  { value: "GB", label: "United Kingdom" },
  { value: "DE", label: "Germany" },
];

/* ----- типы полей ----- */
type Field =
  | { kind: "text"; id: "firstName" | "lastName" | "phone"; value: string }
  | { kind: "badges"; id: "specialties"; value: string[] }
  | {
      kind: "labeled";
      id: "clinic" | "clinicSite";
      label: string;
      value: string;
    }
  | {
      kind: "select";
      id: "country" | "language" | (string & {});
      label: string;
      value?: string; // код из options (напр., 'US' или 'en')
      options: Option[];
      placeholder?: string;
    };

/* ----- исходные поля (восстановлены все, как у тебя) ----- */
const initialFields: Field[] = [
  { kind: "text", id: "firstName", value: "John" },
  { kind: "text", id: "lastName", value: "Doe" },
  { kind: "text", id: "phone", value: "+852 19850622" },
  { kind: "badges", id: "specialties", value: ["Surgery", "Restorative"] },
  {
    kind: "labeled",
    id: "clinic",
    label: "Clinic",
    value: "Smile Clinic Ltd.",
  },
  {
    kind: "labeled",
    id: "clinicSite",
    label: "Clinic Site",
    value: "smileclinic.website",
  },
  {
    kind: "select",
    id: "country",
    label: "Country",
    value: "US",
    options: COUNTRY_OPTIONS,
    placeholder: "Select country",
  },
  {
    kind: "select",
    id: "language",
    label: "Language",
    value: "en",
    options: LANGUAGE_OPTIONS,
    placeholder: "Select language",
  },
];

export default function ProfileDetails({ className }: { className?: string }) {
  // единое состояние по id — легко добавлять новые поля
  const [form, setForm] = React.useState<
    Record<string, string | string[] | undefined>
  >(
    Object.fromEntries(
      initialFields.map((f) => [
        f.id,
        f.kind === "badges" ? [...f.value] : (f as any).value,
      ])
    )
  );

  const setField = (id: string, value: string | string[] | undefined) =>
    setForm((s) => ({ ...s, [id]: value }));

  return (
    <Card className={cn(" gap-1.5 py-3 px-4.5", className)}>
      <CardHeader className="p-0 m-0">
        <CardTitle className="text-sm ">Profile Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {initialFields.map((f) => {
          if (f.kind === "text") {
            return (
              <div
                key={f.id}
                className="flex flex-col rounded-2xl bg-white items-start"
              >
                <Input
                  value={String(form[f.id] ?? "")}
                  onChange={(e) => setField(f.id, e.target.value)}
                  className="h-10 rounded-2xl w-full bg-white border-none shadow-none"
                />
              </div>
            );
          }

          if (f.kind === "badges") {
            const items = (form[f.id] as string[]) ?? [];
            return (
              <div key={f.id} className="flex flex-col gap-2">
                <div className="h-10 rounded-2xl px-3 flex items-center gap-2 flex-wrap bg-white">
                  {items.map((tag, i) => (
                    <Badge
                      key={`${tag}-${i}`}
                      variant="secondary"
                      className="rounded-xl px-3 py-1 flex items-center gap-1"
                    >
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const next = items.filter((_, idx) => idx !== i);
                          setField(f.id, next);
                        }}
                        className="ml-1 hover:opacity-80"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {/* при желании сюда можно добавить input/combobox для добавления тегов */}
                </div>
              </div>
            );
          }

          if (f.kind === "labeled") {
            return (
              <div
                key={f.id}
                className="flex flex-col rounded-2xl bg-white items-start"
              >
                <span className="text-sm px-3 pt-2 text-dropdown">
                  {f.label}
                </span>
                <Input
                  value={String(form[f.id] ?? "")}
                  onChange={(e) => setField(f.id, e.target.value)}
                  className="h-10 rounded-2xl w-full bg-white border-none shadow-none"
                />
              </div>
            );
          }

          if (f.kind === "select") {
            return (
              <div
                key={f.id}
                className="flex flex-col rounded-2xl bg-white items-start"
              >
                <span className="text-sm px-3 pt-2 text-dropdown">
                  {f.label}
                </span>
                {/* контролируемый Select: placeholder видно, когда value = undefined */}
                <Select
                  value={(form[f.id] as string | undefined) ?? undefined}
                  onValueChange={(val) => setField(f.id, val)}
                >
                  <SelectTrigger className="h-10 rounded-2xl w-full bg-white border-none shadow-none">
                    <SelectValue placeholder={f.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {f.options.map((opt) => (
                      <SelectItem
                        key={`${f.id}-${opt.value}`}
                        value={opt.value}
                      >
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            );
          }

          return null;
        })}
      </CardContent>
    </Card>
  );
}
