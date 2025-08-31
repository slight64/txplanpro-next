import { Card } from "@/shared/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/shared/ui/table";
import { SendIcon } from "@/shared/assets/icons/SendIcon";
import { EditIcon } from "@/shared/assets/icons/EditIcon";
import { DownloadIcon } from "@/shared/assets/icons/DownloadIcon";
import {
  TxPlanStatus,
  TxPlanStatusPill,
} from "@/entities/tx-plan/ui/TxPlanStatusPill";
import { Pagination } from "@/shared/ui/pagination/Pagination";
import { useMemo, useState } from "react";
import { ChevronsUpDown, ChevronUp, ChevronDown } from "lucide-react";
type Row = {
  id: string;
  type: string;
  patient: string;
  date: string;
  price: string;
  status: TxPlanStatus;
};

const rows: Row[] = [
  {
    id: "#1",
    type: "Complex",
    patient: "Matt Dickerson",
    date: "13/05/2022",
    price: "$14 000",
    status: "Approved",
  },
  {
    id: "#2",
    type: "Ortho",
    patient: "Johanna Doe",
    date: "25/05/2022",
    price: "$12 500",
    status: "Ready",
  },
  {
    id: "#3",
    type: "Surgery",
    patient: "Joe Mark",
    date: "30/05/2022",
    price: "$6 000",
    status: "To-do",
  },
  {
    id: "#4",
    type: "Prosthetic",
    patient: "Inna Sergeeva",
    date: "23/05/2022",
    price: "$7 500",
    status: "Rejected",
  },
  {
    id: "#1",
    type: "Complex",
    patient: "Matt Dickerson",
    date: "13/05/2022",
    price: "$14 000",
    status: "Approved",
  },
  {
    id: "#2",
    type: "Ortho",
    patient: "Johanna Doe",
    date: "25/05/2022",
    price: "$12 500",
    status: "Ready",
  },
  {
    id: "#3",
    type: "Surgery",
    patient: "Joe Mark",
    date: "30/05/2022",
    price: "$6 000",
    status: "To-do",
  },
  {
    id: "#4",
    type: "Prosthetic",
    patient: "Inna Sergeeva",
    date: "23/05/2022",
    price: "$7 500",
    status: "Rejected",
  },
];

const PlansTable = () => {
  const [page, setPage] = useState(1);

  type SortKey = keyof Row;
  type SortDir = "asc" | "desc";
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir } | null>(null);

  function toggleSort(key: SortKey) {
    setSort((prev) =>
      !prev || prev.key !== key
        ? { key, dir: "asc" }
        : prev.dir === "asc"
        ? { key, dir: "desc" }
        : null
    );
  }

  const sortedRows = useMemo(() => {
    const data = [...rows];
    if (!sort) return data;

    const getVal = (r: Row) => {
      switch (sort.key) {
        case "id":
          return Number(r.id.replace(/[^\d.-]/g, "")) || 0;
        case "price":
          return (
            parseFloat(r.price.replace(/\s/g, "").replace(/[^\d.-]/g, "")) || 0
          );
        case "date": {
          const m = r.date.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
          if (m) {
            const [, dd, mm, yyyy] = m;
            return new Date(Number(yyyy), Number(mm) - 1, Number(dd)).getTime();
          }
          const t = Date.parse(r.date);
          return isNaN(t) ? 0 : t;
        }
        case "status": {
          const order: Record<TxPlanStatus, number> = {
            Approved: 3,
            Ready: 2,
            "To-do": 1,
            Rejected: 0,
          };
          return order[r.status];
        }
        default:
          return String(r[sort.key]).toLowerCase();
      }
    };

    data.sort((a, b) => {
      const av = getVal(a) as number | string;
      const bv = getVal(b) as number | string;
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sort.dir === "asc" ? cmp : -cmp;
    });
    return data;
  }, [sort]);
  return (
    <Card className="p-8 bg-card-background-light rounded-2xl shadow-button-shadow w-full">
      <div className="rounded-2xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="text-lg">
              <ThSortable
                label="Plan ID"
                active={sort?.key === "id"}
                dir={sort?.dir}
                onClick={() => toggleSort("id")}
              />
              <ThSortable
                label="Plan type"
                active={sort?.key === "type"}
                dir={sort?.dir}
                onClick={() => toggleSort("type")}
              />
              <ThSortable
                label="Patient"
                active={sort?.key === "patient"}
                dir={sort?.dir}
                onClick={() => toggleSort("patient")}
              />
              <ThSortable
                label="Date"
                active={sort?.key === "date"}
                dir={sort?.dir}
                onClick={() => toggleSort("date")}
              />
              <ThSortable
                label="Price"
                active={sort?.key === "price"}
                dir={sort?.dir}
                onClick={() => toggleSort("price")}
              />
              <ThSortable
                label="Status"
                active={sort?.key === "status"}
                dir={sort?.dir}
                onClick={() => toggleSort("status")}
              />
              <TableHead className="text-right pr-6">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {sortedRows.map((r, i) => (
              <TableRow
                key={r.id}
                className={i % 2 === 0 ? "bg-background" : ""}
              >
                <TableCell className="text-lg">{r.id}</TableCell>
                <TableCell className="text-xl">{r.type}</TableCell>
                <TableCell className="text-xl">{r.patient}</TableCell>
                <TableCell className="text-xl">{r.date}</TableCell>
                <TableCell className="text-xl">{r.price}</TableCell>
                <TableCell>
                  <TxPlanStatusPill status={r.status} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-6 pr-2">
                    <button
                      aria-label="Send"
                      className="opacity-70 hover:opacity-100"
                    >
                      <SendIcon className="h-6 w-6" />
                    </button>
                    <button
                      aria-label="Edit"
                      className="opacity-70 hover:opacity-100"
                    >
                      <EditIcon className="h-6 w-6" />
                    </button>
                    <button
                      aria-label="Download"
                      className="opacity-70 hover:opacity-100"
                    >
                      <DownloadIcon className="h-6 w-6" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination page={page} totalPages={100} onPageChange={setPage} />
    </Card>
  );
};

type AriaSort = React.AriaAttributes["aria-sort"];

function ThSortable({
  label,
  active,
  dir,
  onClick,
}: {
  label: string;
  active?: boolean;
  dir?: "asc" | "desc";
  onClick: () => void;
}) {
  const ariaSort: AriaSort | undefined = active
    ? dir === "asc"
      ? "ascending"
      : "descending"
    : undefined;

  return (
    <TableHead aria-sort={ariaSort}>
      <button
        type="button"
        onClick={onClick}
        className="flex items-center gap-2 select-none"
      >
        <span>{label}</span>
        {!active ? (
          <ChevronsUpDown className="h-4 w-4 opacity-60" />
        ) : dir === "asc" ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
    </TableHead>
  );
}

export default PlansTable;
