"use client";
import FilterIcon from "@/shared/assets/icons/FilterIcon";
import PlusIcon from "@/shared/assets/icons/PlusIcon";
import SortIcon from "@/shared/assets/icons/SortIcon";
import { Search } from "@/shared/components/Search";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import React from "react";

export const ActionBar = () => {
  return (
    <Card className="flex flex-row items-center py-1 px-3 w-full bg-card-background-light rounded-2xl shadow-button-shadow">
      <Button className="text-dropdown w-[198px] h-[24px] items-center justify-center gap-3 p-0! bg-btn-dark rounded-[10px] shadow-button-shadow hover:[background:var(--background-btn-active)]">
        <span className="w-fit overflow-hidden">New patient</span>
        <PlusIcon className="!w-6 !h-6" variant="dark" />
      </Button>
      <Button className="text-text-black px-1! py-1! bg-btn-dark rounded-[10px] shadow-button-shadow h-auto hover:[background:var(--background-btn-active)]">
        <FilterIcon className="!w-6 !h-6" />
      </Button>
      <Button className="text-text-black px-1! py-1! bg-btn-dark rounded-[10px] shadow-button-shadow h-auto hover:[background:var(--background-btn-active)]">
        <SortIcon className="!w-6 !h-6" />
      </Button>
      <Search className="h-[30px] rounded-xl" />
    </Card>
  );
};
