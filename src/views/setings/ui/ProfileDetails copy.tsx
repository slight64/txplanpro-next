import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Label } from "@radix-ui/react-label";
import { X } from "lucide-react";

const profileFields = [
  { value: "John", type: "text" },
  { value: "Doe", type: "text" },
  { value: "+852 19850622", type: "text" },
  {
    value: ["Surgery", "Restorative"],
    type: "badges",
  },
  {
    label: "Clinic",
    value: "Smile Clinic Ltd.",
    type: "labeled",
  },
  {
    label: "Clinic Site",
    value: "smileclinic.website",
    type: "labeled",
  },
  {
    label: "Country",
    value: ["United States", "Germany", "France"],
    type: "select",
  },
  {
    label: "Language",
    value: ["English", "German", "French"],
    type: "select",
  },
];

const ProfileDetails = ({ className }: { className?: string }) => {
  return (
    <Card
      className={cn(
        "flex py-3 px-4 gap-3 w-full bg-card-background-light rounded-2xl shadow-button-shadow",
        className
      )}
    >
      <CardHeader className="p-0 m-0">
        <CardTitle className="text-sm ">Profile Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {profileFields.map((field, idx) => {
            if (field.type === "text") {
              return (
                <Input
                  key={idx}
                  value={field.value as string}
                  className="h-10 rounded-2xl bg-white px-4.5"
                  readOnly
                />
              );
            }

            if (field.type === "badges") {
              return (
                <div
                  key={idx}
                  className="h-10 rounded-2xl px-4 flex items-center gap-2 flex-wrap border bg-white"
                >
                  {(field.value as string[]).map((badge, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="rounded-xl px-3 py-1"
                    >
                      <span>{badge}</span>
                      <button
                        type="button"
                        className="ml-1 hover:text-red-500 focus:outline-none cursor-pointer"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              );
            }

            if (field.type === "labeled") {
              return (
                <div
                  key={idx}
                  className="flex flex-col rounded-2xl bg-white items-start"
                >
                  <Label className="text-sm px-4.5 pt-2 text-dropdown w-full">
                    {field.label}
                  </Label>
                  <Input
                    value={field.value as string}
                    className="h-10 px-5 border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    readOnly
                  />
                </div>
              );
            }

            if (field.type === "select") {
              return (
                <div
                  key={idx}
                  className="flex flex-col rounded-2xl bg-white items-start"
                >
                  <span className="text-sm px-5 pt-2 text-dropdown w-full">
                    {field.label}
                  </span>
                  <Select defaultValue={field.value as string} p>
                    <SelectTrigger className="h-10 px-5 rounded-2xl w-full bg-white border-none shadow-none">
                      <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">English</SelectItem>
                      <SelectItem value="Russia">Russian</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              );
            }

            return null;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;
