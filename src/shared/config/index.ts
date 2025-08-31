import AppPlansIcon from "../assets/icons/AppPlansIcon";
import CreateIcon from "../assets/icons/CreateIcon";
import OverviewIcon from "../assets/icons/OverviewIcon";
import Patients from "../assets/icons/PatientsIcon";
import PresentIcon from "../assets/icons/PresentIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import SupportIcon from "../assets/icons/SupportIcon";
import TodoIcon from "../assets/icons/TodoIcon";
import { IconPropsType } from "../types/types";

export const APP_CONFIG = {
  name: "TxPlanPro",
  version: "1.0.0",
} as const;

type NavItemProps = {
  icon: React.ComponentType<IconPropsType>;
  label: string;
  href: string;
  count?: number;
  isActive: boolean;
};

export const NAVIGATION_ITEMS: NavItemProps[] = [
  {
    icon: OverviewIcon,
    label: "Overview",
    count: 0,
    isActive: false,
    href: "/",
  },
  {
    icon: AppPlansIcon,
    label: "All plans",
    count: 4,
    isActive: false,
    href: "/plans",
  },
  {
    icon: TodoIcon,
    label: "To-do plans",
    count: 2,
    isActive: false,
    href: "/plans",
  },
  {
    icon: PresentIcon,
    label: "Ready to present",
    count: 2,
    isActive: false,
    href: "/",
  },
] as const;

export const BOTTOM_NAVIGATION_ITEMS = [
  {
    icon: CreateIcon,
    label: "Create",
    isActive: true,
    href: "/create",
  },
  {
    icon: Patients,
    label: "Patients",
    isActive: false,
    href: "/patients",
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    isActive: false,
    href: "/settings",
  },
  {
    icon: SupportIcon,
    label: "Help & Support",
    isActive: false,
    href: "/help",
  },
] as const;
