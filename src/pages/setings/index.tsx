"use client";

import FilterIcon from "@/shared/assets/icons/FilterIcon";
import PlusIcon from "@/shared/assets/icons/PlusIcon";
import SortIcon from "@/shared/assets/icons/SortIcon";
import { Search } from "@/shared/components/Search";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import ProfileDetails from "./ui/ProfileDetails";
import SignInMethods from "./ui/SignInMethods";
import Notifications from "./ui/Notifications";
import { DeactivateAccountSection } from "./ui/DeactivateAccount";

const navigationTabs = [
  { id: "overview", label: "Overview", active: false },
  { id: "settings", label: "Settings", active: true },
  { id: "texts", label: "Texts and Photos", active: false },
  { id: "billing", label: "Billing", active: false },
  { id: "statements", label: "Statements", active: false },
  { id: "referrals", label: "Referrals", active: false },
  { id: "api", label: "API Keys", active: false },
  { id: "logs", label: "Logs", active: false },
];

const SettingsPage = () => {
  return (
    <div className="w-full">
      <Card className="flex flex-row items-center py-1 px-3 w-full bg-card-background-light rounded-2xl shadow-button-shadow">
        <Button className="text-dropdown w-[198px] h-[24px] items-center justify-center gap-3 p-0! bg-btn-dark rounded-[10px] shadow-button-shadow hover:[background:var(--background-btn-active)]">
          <span className="w-fit overflow-hidden">New patient</span>
          <PlusIcon className="!w-6 !h-6" variant="dark" />
        </Button>
        <Button className="text-text-black px-1! py-1! bg-btn-dark rounded-[10px] shadow-button-shadow h-auto hover:[background:var(--background-btn-active)]">
          <FilterIcon className="!w-6 !h-6" />
        </Button>
        <Button className="text-text-black px-1! py-1! bg-btn-dark rounded-[10px] shadow-button-shadow h-auto hover:[background:var(--background-btn-active)]">
          <SortIcon className="!w-6 !h-6" />
        </Button>
        <Search className="h-[30px] rounded-xl" />
      </Card>
      <div className="mt-2 gap-4.5 flex justify-center">
        {navigationTabs.map((tab, index) => (
          <Button
            variant={"ghost"}
            key={index}
            className="p-0 m-0 inline-flex flex-col items-center gap-1 relative hover:bg-transparent"
          >
            <span
              className={` ${
                tab.active ? "text-btn border-b-2 border-btn" : "text-dropdown"
              }`}
            >
              {tab.label}
            </span>
          </Button>
        ))}
      </div>

      <ProfileDetails />
      <SignInMethods />
      <Notifications />
      <DeactivateAccountSection />
    </div>
  );
};

export default SettingsPage;
