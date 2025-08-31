"use client";
import PatientDetailsPanel from "./ui/PatientDetailsPanel";
import PatientsListPanel from "./ui/PatientsListPanel";

const PatientsPage = () => {
  return (
    <div className="flex flex-row gap-4">
      <PatientsListPanel />
      <PatientDetailsPanel />
    </div>
  );
};

export default PatientsPage;
