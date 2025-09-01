"use client";

import { Button } from "@/shared/ui/button";
import ProfileDetails from "./ui/ProfileDetails";
import SignInMethods from "./ui/SignInMethods";
import Notifications from "./ui/Notifications";
import { DeactivateAccountSection } from "./ui/DeactivateAccount";
import { ActionBar } from "@/widgets/action-bar";

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
      <ActionBar />
      <div className="mt-2.5 gap-5 flex justify-center">
        {navigationTabs.map((tab, index) => (
          <Button
            variant="ghost"
            key={index}
            className="p-0 flex flex-col items-center hover:bg-transparent"
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

      <ProfileDetails className="mt-4" />
      <SignInMethods className="mt-6" />
      <Notifications className="mt-6" />
      <DeactivateAccountSection className="mt-6" />
    </div>
  );
};

export default SettingsPage;
