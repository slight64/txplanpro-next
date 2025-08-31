"use client";

import FilterIcon from "@/shared/assets/icons/FilterIcon";
import PlusIcon from "@/shared/assets/icons/PlusIcon";
import SortIcon from "@/shared/assets/icons/SortIcon";
import { Search } from "@/shared/components/Search";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import { Card } from "@/shared/ui/card";
import patientPhoto from "@/shared/assets/img/patient-photo.png";
import { Pagination } from "@/shared/ui/pagination/Pagination";
import { useState } from "react";

const users = [
  { id: 1, name: "Natali Craig", avatar: patientPhoto },
  { id: 2, name: "Kate Morrison", avatar: patientPhoto },
  { id: 3, name: "Drew Cano", avatar: patientPhoto },
  { id: 4, name: "Orlando Diggs", avatar: patientPhoto },
  { id: 5, name: "Andi Lane", avatar: patientPhoto },
  { id: 6, name: "Natali Craig", avatar: patientPhoto },
  { id: 7, name: "Kate Morrison", avatar: patientPhoto },
  { id: 8, name: "Drew Cano", avatar: patientPhoto },
  { id: 9, name: "Orlando Diggs", avatar: patientPhoto },
  { id: 10, name: "Andi Lane", avatar: patientPhoto },
];

const PatientsListPanel = () => {
  const [page, setPage] = useState(1);
  return (
    <Card>
      <div className="flex items-center gap-8">
        <Button className="text-dropdown w-btn h-[28px] items-center justify-between px-4!  gap-3 bg-btn-dark rounded-[10px] shadow-button-shadow hover:[background:var(--background-btn-active)]">
          <span className="w-fit overflow-hidden">New patient</span>
          <PlusIcon className="!w-7 !h-7 fill-dropdown" variant="dark" />
        </Button>
        <div className="flex gap-3">
          <Button className="text-text-black px-0! py-0! h-[28px] bg-btn-dark rounded-[10px] shadow-button-shadowhover:[background:var(--background-btn-active)]">
            <FilterIcon className="!w-6 !h-6" />
          </Button>
          <Button className="text-text-black px-0! py-0! h-[28px] bg-btn-dark rounded-[10px] shadow-button-shadow hover:[background:var(--background-btn-active)]">
            <SortIcon className="!w-6 !h-6" />
          </Button>
        </div>
      </div>
      <Search className="h-[30px] w-[400px] rounded-xl" />
      <div>
        {users.map((u, i) => (
          <div key={u.id}>
            <button className="flex w-full items-center gap-2 py-2 px-3 text-left">
              <Avatar className="h-9 w-9">
                <AvatarImage src={u.avatar.src} alt={u.name} />
                <AvatarFallback>{u.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <span className="text-base">{u.name}</span>
            </button>
            {i < users.length - 1 && <Separator />}
          </div>
        ))}

        <Pagination page={page} totalPages={100} onPageChange={setPage} />
      </div>
    </Card>
  );
};

export default PatientsListPanel;
