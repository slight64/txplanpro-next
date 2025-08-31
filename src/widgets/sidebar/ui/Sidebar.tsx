"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { NavigationItem } from "@/features/navigation/ui";
import { AppLogo } from "@/shared/assets/icons/AppLogo";
import defaultUserImg from "@/shared/assets/img/user-img.png";
import { Search } from "@/shared/components/Search";
import {
  NAVIGATION_ITEMS,
  BOTTOM_NAVIGATION_ITEMS,
  APP_CONFIG,
} from "@/shared/config";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="w-[230px] items-center gap-6 px-4 py-7 bg-card-background-light rounded-2xl shadow-button-shadow flex flex-col">
      <nav className="items-start gap-1 self-stretch w-full flex flex-col">
        <header className="flex flex-col pt-0 pb-6 px-0 w-full">
          <h1 className="w-fit font-medium text-dark-blue text-2xl leading-7 overflow-hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 cupo cursor-pointer tracking-14"
            >
              <AppLogo />
              {APP_CONFIG.name}
            </Link>
          </h1>
        </header>

        {NAVIGATION_ITEMS.map((item, index) => (
          <NavigationItem
            key={`nav-${index}`}
            icon={item.icon}
            label={item.label}
            count={item.count}
            href={item.href}
          />
        ))}

        <div className="flex h-12 px-3 my-6 rounded-lg items-center gap-3 cursor-pointer">
          <Avatar className="w-12 h-12">
            <AvatarImage src={defaultUserImg.src} alt="Dr. John Doe" />
            <AvatarFallback className="bg-background">JD</AvatarFallback>
          </Avatar>
          <div className="inline-flex flex-col items-start justify-center rounded-lg">
            <span className="self-stretch text-text-black">Dr. John Doe</span>
          </div>
        </div>

        {BOTTOM_NAVIGATION_ITEMS.map((item, index) => (
          <NavigationItem
            href={item.href}
            key={`bottom-nav-${index}`}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </nav>
      <Search />
    </aside>
  );
};
