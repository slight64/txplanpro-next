"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";
import { AlertCircle } from "lucide-react";

export function DeactivateAccountSection({ className }: { className: string }) {
  return (
    <Card
      className={cn(
        "flex py-2 px-3 gap-3 w-full bg-card-background-light rounded-2xl shadow-button-shadow",
        className
      )}
    >
      <CardHeader className="flex flex-row  justify-between">
        <CardTitle className="text-base">Deactivate account</CardTitle>

        <Button className="h-7 w-[136px] rounded-full shadow-none bg-btn-destructive">
          Deactivate Account
        </Button>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="rounded-3xl bg-white px-5 py-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5" />

            <div className="flex-1">
              <div className="text-16 font-medium">
                You Are Deactivating Your Account
              </div>
              <div className="text-12 text-dropdown">
                For extra security, this requires you to confirm your email or
                phone number when you reset your password.
                <a href="#" className="text-link">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        <label className="mt-3 pl-4 flex items-center gap-3 text-xl">
          <Checkbox
            aria-label="Confirm account deactivation"
            className="h-4 w-4 border-dropdown"
          />
          <span className="text-14">I confirm my account deactivation</span>
        </label>
      </CardContent>
    </Card>
  );
}
