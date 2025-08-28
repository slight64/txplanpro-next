"use client";

import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";
import { AlertCircle } from "lucide-react";

export function DeactivateAccountSection() {
  return (
    <Card className="flex py-3 px-3 mt-6 gap-3 w-full bg-card-background-light rounded-2xl shadow-button-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Deactivate account</CardTitle>

        <Button className="h-9 rounded-full px-5 shadow-none bg-btn-destructive">
          Deactivate Account
        </Button>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="rounded-3xl bg-white px-5 py-4">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl">
              <AlertCircle className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <div className="text-lg font-medium">
                You Are Deactivating Your Account
              </div>
              <div className="text-sm opacity-70">
                For extra security, this requires you to confirm your email or
                phone number when you reset your password.{" "}
                <a href="#" className="text-link">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        <label className="mt-6 flex items-center gap-3 text-xl">
          <Checkbox
            aria-label="Confirm account deactivation"
            className="h-5 w-5 border-dropdown"
          />
          <span className="text-14">I confirm my account deactivation</span>
        </label>
      </CardContent>
    </Card>
  );
}
