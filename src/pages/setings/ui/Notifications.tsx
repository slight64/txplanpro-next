import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";
import React from "react";

const notificationSettings = [
  { id: "notifications", label: "Notifications", email: true, phone: true },
  { id: "billing", label: "Billing Updates", email: true, phone: true },
  { id: "txstatus", label: "New TxPlan Status", email: true, phone: true },
  { id: "completed", label: "Completed Plans", email: false, phone: true },
];

const Notifications = () => {
  return (
    <Card className="flex py-3 px-3 mt-6 gap-0 w-full bg-card-background-light rounded-2xl shadow-button-shadow">
      <CardHeader className="p-0 m-0 flex flex-row justify-between">
        <CardTitle className="text-sm ">Notifications</CardTitle>

        <div className="flex items-center gap-3">
          <Button className="h-9 rounded-full px-4 shadow-none bg-background text-black font-normal">
            Cancel
          </Button>
          <Button className="h-9 rounded-full px-5 bg-btn font-normal shadow-none">
            Save Changes
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="divide-y">
          {notificationSettings.map((row) => (
            <div
              key={row.id}
              className="flex items-center justify-between py-5 border-b-1 border-dropdown pr-4"
            >
              <span className="text-16 text-text">{row.label}</span>

              <div className="flex items-center gap-8">
                <label className="inline-flex items-center gap-2">
                  <Checkbox
                    defaultChecked={row.email}
                    className="h-5 w-5 data-[state=checked]:bg-btn border-dropdown"
                    aria-label={`${row.label} email`}
                  />
                  <span className="text-16 text-text">Email</span>
                </label>

                <label className="inline-flex items-center gap-2 ">
                  <Checkbox
                    defaultChecked={row.phone}
                    className="h-5 w-5 data-[state=checked]:bg-btn "
                    aria-label={`${row.label} phone`}
                  />
                  <span className="text-16 text-text">Phone</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Notifications;
