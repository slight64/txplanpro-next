"use client";
import upperTeeth from "@/shared/assets/img/upper-jaw.png";
import lowerTeeth from "@/shared/assets/img/lower-jaw.png";
import xRay from "@/shared/assets/img/x-ray.png";
import { AspectRatio } from "@/shared/ui/aspect-ratio";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import { CloudUpload } from "lucide-react";
import Image, { StaticImageData } from "next/image";

const items = [
  { id: "upper", title: "Upper Jaw Photo Upload", image: upperTeeth },
  { id: "lower", title: "Lower Jaw Photo Upload", image: lowerTeeth },
  { id: "pano", title: "X-ray Pano Photo Upload", image: xRay },
];

export default function PhotoUploads() {
  return (
    <div className="rounded-3xl p-4">
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
    <Card className="p-6 bg-card-background-light rounded-2xl shadow-button-shadow">
      <h3 className="text-center text-2xl font-semibold">{title}</h3>

      <div className="mt-4 rounded-2xl border-2 border-dashed relative">
        <AspectRatio ratio={16 / 10}>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={image}
              alt=""
              fill
              className="object-contain rounded-xl"
            />
            <CloudUpload className="h-8 w-8 opacity-60 absolute" />
          </div>
        </AspectRatio>
      </div>

      <div className="mt-4 flex justify-center">
        <Button
          type="button"
          variant="secondary"
          className="h-10 rounded-2xl px-6"
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
          className="h-10 w-full rounded-2xl"
        >
          Upload photo from database
        </Button>
      </div>
    </Card>
  );
}
