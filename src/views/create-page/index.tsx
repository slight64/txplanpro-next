import { ActionBar } from "@/widgets/action-bar";

import StepsBar from "./ui/StepsBar";
import PhotoUploads from "./ui/PhotoUploads";
import { DiagnosisChart } from "./ui/DiagnosisChart";
import { TreatmentChart } from "./ui/TreatmentChart";
import CreateNew from "./ui/CreateNew";

const CreatePage = () => {
  return (
    <div className="w-full">
      <ActionBar />
      <StepsBar className="mt-4" />
      <PhotoUploads className="mt-4" />
      {/* <DiagnosisChart className="mt-4" /> */}
      {/* <TreatmentChart /> */}
      {/* <CreateNew /> */}
    </div>
  );
};

export default CreatePage;
