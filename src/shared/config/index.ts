import AppPlansIcon from "../assets/icons/AppPlansIcon";
import CreateIcon from "../assets/icons/CreateIcon";
import OverviewIcon from "../assets/icons/OverviewIcon";
import Patients from "../assets/icons/PatientsIcon";
import PresentIcon from "../assets/icons/PresentIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import SupportIcon from "../assets/icons/SupportIcon";
import TodoIcon from "../assets/icons/TodoIcon";

export const APP_CONFIG = {
  name: "TxPlanPro",
  version: "1.0.0",
} as const;

export const NAVIGATION_ITEMS = [
  {
    icon: OverviewIcon,
    label: "Overview",
    count: 0,
    isActive: false,
  },
  {
    icon: AppPlansIcon,
    label: "All plans",
    count: 4,
    isActive: false,
  },
  {
    icon: TodoIcon,
    label: "To-do plans",
    count: 2,
    isActive: false,
  },
  {
    icon: PresentIcon,
    label: "Ready to present",
    count: 2,
    isActive: false,
  },
] as const;

export const BOTTOM_NAVIGATION_ITEMS = [
  {
    icon: CreateIcon,
    label: "Create",
    isActive: true,
  },
  {
    icon: Patients,
    label: "Patients",
    isActive: false,
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    isActive: false,
  },
  {
    icon: SupportIcon,
    label: "Help & Support",
    isActive: false,
  },
] as const;

export const CONTACT_INFO = {
  address: "129 - 131 Mar St London E8 3RH",
  email: "info@txplanpro.pro",
  phone: "(+44)123456789",
} as const;
