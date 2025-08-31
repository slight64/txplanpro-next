"use client";

import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import RightBarIcon from "@/shared/assets/icons/bar-icons/RightBarIcon";
import ArrowUpIcon from "@/shared/assets/icons/bar-icons/ArrowUpIcon";
import patienPhotoMd from "@/shared/assets/img/patient-photo-md.png";
import { DownloadIcon } from "@/shared/assets/icons/DownloadIcon";
import { EditIcon } from "@/shared/assets/icons/EditIcon";
import { SendIcon } from "@/shared/assets/icons/SendIcon";
import SlimPlusIcon from "@/shared/assets/icons/SlimPlusIcon";
import { TrashIcon } from "@/shared/assets/icons/TrashIcon";
import { CopyIcon } from "@/shared/assets/icons/CopyIcon";
import {
  TxPlanStatus,
  TxPlanStatusPill,
} from "@/entities/tx-plan/ui/TxPlanStatusPill";

type PlanRow = {
  code: string;
  name: string;
  date: string;
  amount: string;
  status: TxPlanStatus;
};

const plans: PlanRow[] = [
  {
    code: "R",
    name: "Restorative plan",
    date: "Jun 24, 2025",
    amount: "$942.00",
    status: "To-do",
  },
  {
    code: "S",
    name: "Surgical Plan",
    date: "Mar 10, 2025",
    amount: "$881.00",
    status: "Rejected",
  },
  {
    code: "E",
    name: "Endo Plan",
    date: "Nov 10, 2025",
    amount: "$409.00",
    status: "Ready",
  },
  {
    code: "C",
    name: "Primary Complex Plan",
    date: "Dec 20, 2025",
    amount: "$953.00",
    status: "Ready",
  },
  {
    code: "O",
    name: "Local Ortho Plan",
    date: "Jul 25, 2025",
    amount: "$907.00",
    status: "Approved",
  },
];

const patient = {
  name: "Andi",
  lastName: "Lane",
  email: "byewind@twitter.com",
  whatApp: "+1 (123) 456 78 90",
};

export default function PatientDetailsPanel() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost">
            <RightBarIcon />
          </Button>
          <Button variant="ghost">
            <ArrowUpIcon />
          </Button>
          <Button variant="ghost">
            <ArrowUpIcon className="rotate-180" />
          </Button>
        </div>
        <Button variant="ghost">
          <X className="h-4 w-4 text-dropdown" />
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Avatar className="h-14 w-14 rounded-md">
          <AvatarImage src={patienPhotoMd.src} alt="Andi Lane" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>

        <h2 className="text-3xl font-semibold">
          {patient.name} {patient.lastName}
        </h2>

        <div className="flex items-center gap-2">
          <Badge className="rounded-full px-3 py-1 text-sm bg-green-100 text-[#34C759] ">
            Ready to present
          </Badge>
          <Badge className="rounded-full px-3 py-1 text-sm bg-yellow-200 text-[#FFCC00]">
            To-do
          </Badge>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-dropdown pl-2">Name</span>
          <Input
            defaultValue="Andi"
            className="h-11 rounded-2xl bg-white shadow-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-dropdown pl-2">Last name</span>
          <Input
            defaultValue="Lane"
            className="h-11 rounded-2xl bg-white shadow-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-dropdown pl-2">Email</span>
          <Input
            type="email"
            defaultValue="byewind@twitter.com"
            className="h-11 rounded-2xl bg-white shadow-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-dropdown pl-2">Whats App</span>
          <Input
            type="tel"
            defaultValue="+1 (123) 456 78 90"
            className="h-11 rounded-2xl bg-white shadow-none"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Tabs defaultValue="tx" className="w-full">
          <div className="flex justify-between">
            <TabsList className="h-auto bg-transparent p-0 gap-6 items-baseline">
              {["tx", "dsd", "photos", "invoices"].map((val, i) => (
                <TabsTrigger
                  key={val}
                  value={val}
                  className="rounded-none cursor-pointer  text-dropdown border-b-2 border-transparent bg-transparent px-0 py-1 text-base data-[state=active]:border-b-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-black"
                >
                  {["TxPlans", "DSD", "Photos and X-rays", "Invoices"][i]}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button className="ml-6 h-11 rounded-2xl px-6 bg-btn w-btn">
              Create
              <SlimPlusIcon className="w-6! h-6!" variant="light" />
            </Button>
          </div>
          <TabsContent value="tx" className="mt-4">
            <PlansTable />
          </TabsContent>
          <TabsContent value="dsd" className="mt-4">
            <PlansTable />
          </TabsContent>
          <TabsContent value="photos" className="mt-4">
            <PlansTable />
          </TabsContent>
          <TabsContent value="invoices" className="mt-4">
            <PlansTable />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl">
            <TrashIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl">
            <CopyIcon className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="w-btn rounded-md [background:var(--background-btn-active)] text-white"
          >
            Cancel
          </Button>
          <Button className="w-btn rounded-md bg-btn">Save</Button>
        </div>
      </div>
    </Card>
  );
}

function PlansTable() {
  return (
    <div className="border-none bg-card-background-light">
      <Table>
        <TableHeader>
          <TableRow className="border-b-1 border-dropdown">
            <TableHead className="w-[40%] text-dropdown">Plan Name</TableHead>
            <TableHead className="text-dropdown">Date</TableHead>
            <TableHead className="text-dropdown">Amount</TableHead>
            <TableHead className="text-dropdown">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {plans.map((p, idx) => (
            <TableRow key={idx} className=" border-none">
              <TableCell className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-plan-bg text-sm text-white border-black border-1">
                  {p.code}
                </span>
                {p.name}
              </TableCell>
              <TableCell>{p.date}</TableCell>
              <TableCell>{p.amount}</TableCell>
              <TableCell>
                {/* <StatusPill status={p.status} /> */}
                <TxPlanStatusPill status={p.status} />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <SendIcon className="h-6! w-6!" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <EditIcon className="h-6! w-6!" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <DownloadIcon className="h-6! w-6!" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
