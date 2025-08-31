"use client";
import FileIcon from "@/shared/assets/icons/FileIcon";
import MicIcon from "@/shared/assets/icons/MicIcon";
import SendArrowIcon from "@/shared/assets/icons/SendArrowIcon";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";

type ChatInputProps = {
  className?: string;
};

export function ChatInput({ className }: ChatInputProps) {
  return (
    <div
      className={cn(
        `bg-[#e8eef3] rounded-3xl overflow-hidden border border-solid border-btn relative `,
        className
      )}
    >
      <div className="flex gap-2 py-1 absolute left-2 bottom-4.5">
        <MicIcon className="h-7! w-7! cursor-pointer" />
        <FileIcon className="h-7! w-7!  cursor-pointer" />
      </div>
      <Textarea
        placeholder="Ask us anything..."
        className={cn(
          `flex-1 resize-none overflow-y-auto max-h-[80%] 
                  border border-none rounded-lg
                  px-4 py-4 shadow-none focus-visible:ring-0
                  text-18`,
          className
        )}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
          }
        }}
      />

      <Button
        type="button"
        className="inline-flex bg-btn items-center justify-between gap-2 px-2 w-[94px] py-2
                   rounded-[10px] shadow-button-shadow h-auto absolute right-4 bottom-4 hover:[background:var(--background-btn-active)]"
      >
        <span className="font-normal">Send</span>
        <SendArrowIcon className="h-6! w-6!" variant="light" />
      </Button>
    </div>
  );
}
