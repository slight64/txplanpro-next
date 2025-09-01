"use client";
import upperTeeth from "@/shared/assets/img/upper-jaw.png";
import lowerTeeth from "@/shared/assets/img/lower-jaw.png";
import xRay from "@/shared/assets/img/x-ray.png";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import CloudIcon from "@/shared/assets/icons/CloudIcon";

const items = [
  { id: "upper", title: "Upper Jaw Photo Upload", image: upperTeeth },
  { id: "lower", title: "Lower Jaw Photo Upload", image: lowerTeeth },
  { id: "pano", title: "X-ray Pano Photo Upload", image: xRay },
];

interface PhotoUploadsProps {
  className?: string;
}

export default function PhotoUploads({ className }: PhotoUploadsProps) {
  return (
    <div
      className={cn(
        "p-2 bg-card-background-light rounded-2xl shadow-button-shadow flex justify-center",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-[864px]">
        {items.map((it) => (
          <UploadCard key={it.id} title={it.title} image={it.image} />
        ))}
      </div>
    </div>
  );
}

function UploadCard({
  title,
  image,
}: {
  title: string;
  image: StaticImageData;
}) {
  return (
    <Card className="p-2 bg-card-background-light rounded-2xl shadow-button-shadow gap-3 items-center">
      <h3 className="text-center text-16 font-semibold tracking-16">{title}</h3>

      <div className="rounded-2xl border-2 border-dashed relative flex items-center justify-center w-[215px] h-[165px] ">
        <Image src={image} alt="" fill className="object-contain rounded-xl" />
        <CloudIcon className="h-8 w-8 absolute" />
      </div>

      <div className="flex justify-center">
        <Button
          type="button"
          variant="outline"
          className="h-7 w-[84px] rounded-[10px] px-6 text-dropdown"
        >
          Upload
        </Button>
      </div>

      <div className="px-1  w-full">
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-12 text-gray-500 font-[Inter]">OR</span>
          <Separator className="flex-1" />
        </div>
      </div>

      <div>
        <Button
          type="button"
          variant="outline"
          className="h-8 w-[212px] rounded-[10px] text-dropdown"
        >
          Upload photo from database
        </Button>
      </div>
    </Card>
  );
}
