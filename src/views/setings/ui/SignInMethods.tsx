import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Shield } from "lucide-react";
import React from "react";

const SignInMethods = () => {
  return (
    <Card className="flex py-3 px-3 mt-6 gap-3 w-full bg-card-background-light rounded-2xl shadow-button-shadow">
      <CardHeader className="p-0 m-0">
        <CardTitle className="text-sm">Sign-in Method</CardTitle>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="flex flex-row justify-between w-full gap-4">
          <div className="flex flex-col gap-2 bg-white rounded-2xl w-full">
            <Label className="text-sm px-3 pt-2 text-dropdown" htmlFor="email">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="byewind@twitter.com"
              className="h-10 border-none focus:outline-none focus-visible:ring-0    focus-visible:ring-offset-0 shadow-none"
              defaultValue="byewind@twitter.com"
            />
          </div>

          <div className="flex flex-col bg-white rounded-2xl w-full">
            <Label
              className="text-sm px-3 pt-2 text-dropdown"
              htmlFor="password"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="****************"
              className="h-10 border-none focus:outline-none focus-visible:ring-0    focus-visible:ring-offset-0 shadow-none"
              defaultValue="****************"
            />
          </div>
        </div>

        <div className="md:col-span-2 mt-2 bg-white rounded-2xl">
          <div className="flex items-center justify-between rounded-2xl px-4 py-3 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl">
                <Shield className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-base font-medium">Secure Your Account</div>
                <div className="text-sm opacity-70">
                  Two-factor authentication adds an extra layer of security to
                  your account. To log in, in addition youll need to provide a 6
                  digit code.
                </div>
              </div>
            </div>

            <Button
              type="button"
              variant="secondary"
              className="rounded-full px-5 h-9"
            >
              Enable
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInMethods;
