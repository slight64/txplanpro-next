import { StatusPill, StatusPillVariant } from "@/shared/components/StatusPill";

export type TxPlanStatus = "Approved" | "Ready" | "To-do" | "Rejected";

const mapToVariant: Record<TxPlanStatus, StatusPillVariant> = {
  Approved: "approved",
  Ready: "ready",
  "To-do": "todo",
  Rejected: "rejected",
};

export function TxPlanStatusPill({ status }: { status: TxPlanStatus }) {
  return <StatusPill variant={mapToVariant[status]}>{status}</StatusPill>;
}
