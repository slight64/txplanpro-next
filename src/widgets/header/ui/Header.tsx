import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import PlusIcon from "@/shared/assets/icons/PlusIcon";
import PatientIcon from "@/shared/assets/icons/PatientIcon";

export function Header() {
  return (
    <Card className="flex flex-col items-center gap-4 px-4 py-2 w-full bg-background-dark rounded-2xl overflow-hidden shadow-button-shadow">
      <CardContent className="inline-flex flex-col items-center gap-1">
        <div className="inline-flex flex-col">
          <h2 className="w-fit text-24 text-text-black">
            Welcome to TxPlanPro
          </h2>
        </div>
        <div>
          <div className="flex-col">
            <p className="self-stretch  font-body-text  text-text-black tracking-16">
              Upload Your clinic specific photos and information to be used in
              Your treatment plans templates
            </p>
          </div>
        </div>
      </CardContent>
      <div className="inline-flex items-start gap-4">
        <Button className="flex w-btn items-center justify-center gap-3 px-3 py-2 bg-btn rounded-[10px] shadow-button-shadow h-auto hover:[background:var(--background-btn-active)]">
          <span className="w-fit text-background-light overflow-hidden">
            Create new plan
          </span>
          <PlusIcon className="!w-6 !h-6" variant="light" />
        </Button>
        <Button className="flex w-btn bg-[#c2c0c0] items-center justify-center gap-3 px-3 py-2 rounded-[10px] shadow-button-shadow h-auto hover:[background:var(--background-btn-active)]">
          <span className="w-fit text-background-light overflow-hidden">
            Create new DSD{" "}
          </span>
          <PatientIcon className="!w-6 !h-6" variant="light" />
        </Button>
      </div>
    </Card>
  );
}
