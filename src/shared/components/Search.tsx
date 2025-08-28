import SearchIcon from "@/shared/assets/icons/SearchIcon";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/lib/utils";

interface SearchProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Search = ({
  value,
  onChange,
  placeholder = "Search",
  className,
}: SearchProps) => {
  return (
    <div
      className={cn(
        `flex items-center gap-2 px-2 py-0 w-full bg-background rounded-[10px] overflow-hidden`,
        className
      )}
    >
      <div className="flex items-center gap-2 flex-1">
        <SearchIcon className="w-4 h-4 text-muted-foreground shrink-0" />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="p-0 border-0 shadow-none focus-visible:ring-0 font-button-text text-[length:var(--button-text-font-size)] leading-[var(--button-text-line-height)] tracking-[var(--button-text-letter-spacing)]
          placeholder:text-muted "
        />
      </div>

      <div className="flex w-5 h-5 items-center justify-center bg-[#f0f8ffe6] rounded border border-[#0000000a]">
        <button className="font-12-regular text-[#5e788f80] text-center cursor-pointer">
          /
        </button>
      </div>
    </div>
  );
};
