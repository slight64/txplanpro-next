import { Button } from "@/shared/ui/button";
import type { ComponentType, SVGProps } from "react";

interface NavigationItemProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  count?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavigationItem = ({
  icon: Icon,
  label,
  count,
  isActive = false,
  onClick,
}: NavigationItemProps) => {
  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={`flex w-[198px] items-center gap-3 px-3 py-2 rounded-[10px]
        hover:[background:var(--background-btn-hover)] h-auto justify-start ${
          isActive
            ? "shadow-button-shadow [background:var(--background-btn-active)]"
            : ""
        }`}
      onClick={onClick}
    >
      <Icon className="!w-6 !h-6" />
      <span
        className={`font-button-text font-[number:var(--button-text-font-weight)] text-[length:var(--button-text-font-size)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] [font-style:var(--button-text-font-style)] ${
          isActive ? "text-background-light" : "text-text-black"
        }`}
      >
        {label} {count ? `(${count})` : ""}
      </span>
    </Button>
  );
};
