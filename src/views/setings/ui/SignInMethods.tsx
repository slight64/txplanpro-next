"use client";

import { useState } from "react";
import { ShieldIcon } from "@/shared/assets/icons/ShieldIcon";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import TwoRowInput from "./components/TwoRowInput";

const SignInMethods = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState("byewind@twitter.com");
  const [password, setPassword] = useState("****************");

  return (
    <Card
      className={cn(
        "flex pt-2 pb-3 px-4.5 gap-2 w-full bg-card-background-light rounded-2xl shadow-button-shadow",
        className
      )}
    >
      <CardHeader className="p-0 m-0">
        <CardTitle className="text-sm tracking-16">Sign-in Method</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-row justify-between w-full gap-4">
          <TwoRowInput
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            label="Email Address"
            onChange={(e) => setEmail(e)}
          />
          <TwoRowInput
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            label="Password"
            onChange={(e) => setPassword(e)}
          />
        </div>

        <div className="md:col-span-2 mt-4 bg-white rounded-2xl">
          <div className="tracking-16 flex items-start justify-between rounded-2xl px-3.5 py-1.5 ">
            <div className="flex gap-x-2.5">
              <ShieldIcon />
              <div className="">
                <div className="text-14 font-medium">Secure Your Account</div>
                <div className="text-12 text-dropdown">
                  Two-factor authentication adds an extra layer of security to
                  your account. To log in, in addition youll need to provide a 6
                  digit code.
                </div>
              </div>
            </div>

            <Button
              type="button"
              variant="secondary"
              className="rounded-2xl h-6 w-[63px] text-12 font-medium bg-gray-400 shadow-none"
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
