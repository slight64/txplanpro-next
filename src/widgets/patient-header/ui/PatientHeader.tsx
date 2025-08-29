import { Card, CardContent } from "@/shared/ui/card";

interface PatientHeaderProps {
  name: string;
}

export function PatientHeader({ name }: PatientHeaderProps) {
  return (
    <Card className="flex flex-col items-center gap-4 px-4 py-2 w-full bg-background-dark rounded-2xl overflow-hidden shadow-button-shadow">
      <CardContent className="inline-flex flex-col items-center gap-1">
        <div className="inline-flex flex-col">
          <h2 className="w-fit text-24 text-text-black">Patient: {name}</h2>
        </div>
        <div>
          <div className="flex-col">
            <p className="self-stretch  font-body-text  text-text-black tracking-16">
              Create a new complex or local segment treatment plan for Your
              patient
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
 