import { IconPropsType } from "@/shared/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";

interface NavigationItemProps {
  icon: ComponentType<IconPropsType>;
  label: string;
  count?: number;
  href: string;
  onClick?: () => void;
}

export const NavigationItem = ({
  icon: Icon,
  label,
  count,
  href,
  onClick,
}: NavigationItemProps) => {
  const pathname = usePathname();
  const active =
    pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex w-btn items-center gap-3 px-3 py-2 rounded-[10px]
         ${
           active
             ? "shadow-button-shadow [background:var(--background-btn-active)] text-card-background-light"
             : "hover:[background:var(--background-btn-hover)] h-auto justify-start"
         }`}
      onClick={onClick}
    >
      <Icon className="!w-6 !h-6" variant={active ? "light" : "dark"} />
      <span className={`text-14 tracking-16`}>
        {label} {count ? `(${count})` : ""}
      </span>
    </Link>
  );
};
