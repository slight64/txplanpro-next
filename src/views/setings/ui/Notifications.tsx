import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";

const notificationSettings = [
  { id: "notifications", label: "Notifications", email: true, phone: true },
  { id: "billing", label: "Billing Updates", email: true, phone: true },
  { id: "txstatus", label: "New TxPlan Status", email: true, phone: true },
  { id: "completed", label: "Completed Plans", email: false, phone: true },
];

const Notifications = ({ className }: { className: string }) => {
  return (
    <Card
      className={cn(
        "flex py-2 px-4 gap-0 w-full bg-card-background-light rounded-2xl shadow-button-shadow",
        className
      )}
    >
      <CardHeader className="flex flex-row p-0 m-0 justify-between items-center">
        <CardTitle className="text-sm ">Notifications</CardTitle>

        <div className="flex items-center gap-3">
          <Button className="h-6 w-16 text-12 rounded-2xl p-4 shadow-none bg-background text-black font-normal hover:text-card-background-light">
            Cancel
          </Button>
          <Button className="h-6 w-[106px] text-12 rounded-2xl p-4 bg-btn font-normal shadow-none text-background">
            Save Changes
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col">
          {notificationSettings.map((row) => (
            <div
              key={row.id}
              className="flex items-center justify-between py-3.5 border-b-1 border-y-gray-400 pr-3"
            >
              <span className="text-14 text-text">{row.label}</span>

              <div className="flex items-center gap-7">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    defaultChecked={row.email}
                    className="h-[17.5px] w-[17.5px]
                    data-[state=checked]:bg-btn 
                    data-[state=checked]:border-btn border-dropdown
                    data-[state=checked]:[&_svg]:[stroke-width:4] data-state=checked]:[&_svg]:h-3
                    data-[state=checked]:[&_svg]:w-3"
                    aria-label={`${row.label} email`}
                  />
                  <span className="text-14 text-text">Email</span>
                </label>

                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    defaultChecked={row.phone}
                    className="h-[17.5px] w-[17.5px]
                    data-[state=checked]:bg-btn 
                    data-[state=checked]:border-btn border-dropdown
                    data-[state=checked]:[&_svg]:[stroke-width:4] data-state=checked]:[&_svg]:h-3
                    data-[state=checked]:[&_svg]:w-3"
                    aria-label={`${row.label} phone`}
                  />
                  <span className="text-14 text-text">Phone</span>
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
