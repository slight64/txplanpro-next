"use client";

import * as React from "react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  siblingCount?: number;
  labels?: { prev?: string; next?: string };
};

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
  siblingCount = 1,
  labels = { prev: "Previous", next: "Next" },
}: Props) {
  const range = React.useMemo(
    () => getRange(page, totalPages, siblingCount),
    [page, totalPages, siblingCount]
  );

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div
      className={cn(
        "mt-6 flex items-center justify-center gap-6 text-dropdown",
        className
      )}
    >
      <Button
        variant="ghost"
        disabled={!canPrev}
        onClick={() => canPrev && onPageChange(page - 1)}
      >
        {labels.prev}
      </Button>

      <div className="flex items-center gap-3">
        {range.map((item, i) =>
          item === "..." ? (
            <span key={`dots-${i}`} className="px-2 opacity-60 select-none">
              …
            </span>
          ) : (
            <button
              key={item}
              onClick={() => onPageChange(item as number)}
              aria-current={item === page ? "page" : undefined}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-xl shadow-button-shadow transition",
                item === page
                  ? "bg-btn-pagination-active text-white"
                  : "bg-btn-pagination text-black hover:opacity-90"
              )}
            >
              {item}
            </button>
          )
        )}
      </div>

      <Button
        variant="ghost"
        disabled={!canNext}
        onClick={() => canNext && onPageChange(page + 1)}
      >
        {labels.next}
      </Button>
    </div>
  );
}

function getRange(
  current: number,
  total: number,
  siblingCount: number
): Array<number | "..."> {
  const totalNumbers = siblingCount * 2 + 5;
  if (total <= totalNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < total - 1;

  const firstPage = 1;
  const lastPage = total;

  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => i + 1
    );
    return [...leftRange, "...", total];
  }

  if (showLeftDots && !showRightDots) {
    const start = total - (3 + siblingCount * 2) + 1;
    const rightRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => start + i
    );
    return [firstPage, "...", ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i
  );

  return [firstPage, "...", ...middleRange, "...", lastPage];
}
