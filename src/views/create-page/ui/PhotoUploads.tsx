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
        "p-6 bg-card-background-light rounded-2xl shadow-button-shadow",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
    <Card className="p-6 bg-card-background-light rounded-2xl shadow-button-shadow gap-1 items-center">
      <h3 className="text-center text-2xl font-semibold">{title}</h3>

      <div className="mt-4 rounded-2xl border-2 border-dashed relative flex items-center justify-center w-[215px] h-[165px] ">
        {/* <AspectRatio ratio={16 / 10}> */}
        <Image src={image} alt="" fill className="object-contain rounded-xl" />
        <CloudIcon className="h-8 w-8 absolute" />
        {/* </AspectRatio> */}
      </div>

      <div className="mt-4 flex justify-center">
        <Button
          type="button"
          variant="outline"
          className="h-10 rounded-2xl px-6 text-dropdown"
        >
          Upload
        </Button>
      </div>

      <div className="mt-4 px-1">
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />
          <span className="text-sm opacity-70">OR</span>
          <Separator className="flex-1" />
        </div>
      </div>

      <div className="mt-4">
        <Button
          type="button"
          variant="outline"
          className="h-10 w-full rounded-2xl text-dropdown"
        >
          Upload photo from database
        </Button>
      </div>
    </Card>
  );
}
