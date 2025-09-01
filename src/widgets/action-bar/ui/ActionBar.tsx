"use client";
import FilterIcon from "@/shared/assets/icons/FilterIcon";
import PlusIcon from "@/shared/assets/icons/PlusIcon";
import SortIcon from "@/shared/assets/icons/SortIcon";
import { Search } from "@/shared/components/Search";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";

export const ActionBar = () => {
  return (
    <Card className="flex flex-row items-center py-1.5 px-3 w-full bg-card-background-light rounded-2xl shadow-button-shadow h-[44px] gap-8.5">
      <Button className="items-center justify-between px-4! text-16 tracking-16 text-dropdown w-[180px] h-[28px] gap-3 bg-btn-dark rounded-[10px] shadow-button-shadow hover:[background:var(--background-btn-hover)]">
        <span className="w-fit overflow-hidden">New patient</span>
        <PlusIcon className="!w-5.5 !h-5.5 fill-dropdown" />
      </Button>
      <div className="flex gap-2">
        <Button className="text-text-black h-[28px] w-[28px] px-1! py-1! bg-btn-dark rounded-[10px] shadow-none hover:[background:var(--background-btn-hover)]">
          <FilterIcon className="!w-6 !h-6 " />
        </Button>
        <Button className="text-text-black h-[28px] w-[28px] px-1! py-1! bg-btn-dark rounded-[10px] shadow-none hover:[background:var(--background-btn-hover)]">
          <SortIcon className="!w-6 !h-6" />
        </Button>
      </div>
      <Search className="h-[30px] rounded-[10px]" />
    </Card>
  );
};
