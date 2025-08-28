import { ActionBar } from "@/widgets/action-bar";
import React from "react";
import StepsBar from "./ui/StepsBar";
import PhotoUploads from "./ui/PhotoUploads";

const CreatePage = () => {
  return (
    <div className="w-full">
      <ActionBar />
      <StepsBar className="mt-4" />
      <PhotoUploads />
    </div>
  );
};

export default CreatePage;
