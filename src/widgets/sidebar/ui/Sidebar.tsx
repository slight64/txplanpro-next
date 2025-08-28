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

export const Sidebar = () => {
  return (
    <aside className="w-[230px] items-center gap-6 px-4 py-7 bg-card-background-light rounded-2xl shadow-button-shadow flex flex-col">
      <nav className="items-start gap-1 self-stretch w-full flex flex-col">
        <header className="flex flex-col pt-0 pb-6 px-0 w-full">
          <h1 className="w-fit font-medium text-dark-blue text-2xl leading-7 overflow-hidden">
            <a className="inline-flex items-center gap-2.5 cupo cursor-pointer">
              <AppLogo />
              {APP_CONFIG.name}
            </a>
          </h1>
        </header>

        {NAVIGATION_ITEMS.map((item, index) => (
          <NavigationItem
            key={`nav-${index}`}
            icon={item.icon}
            label={item.label}
            isActive={item.isActive}
            count={item.count}
          />
        ))}

        <div className="inline-flex h-24 px-3 py-6 rounded-lg items-center gap-3 cursor-pointer">
          <Avatar className="w-12 h-12">
            <AvatarImage src={defaultUserImg.src} alt="Dr. John Doe" />
            <AvatarFallback className="bg-[#0000000a]">JD</AvatarFallback>
          </Avatar>
          <div className="inline-flex flex-col items-start justify-center rounded-lg">
            <span className="self-stretch font-14-regular text-text-black text-[length:var(--14-regular-font-size)]">
              Dr. John Doe
            </span>
          </div>
        </div>

        {BOTTOM_NAVIGATION_ITEMS.map((item, index) => (
          <NavigationItem
            key={`bottom-nav-${index}`}
            icon={item.icon}
            label={item.label}
            isActive={item.isActive}
          />
        ))}
      </nav>
      <Search />
    </aside>
  );
};
