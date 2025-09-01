import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";

interface OnewRowInputProps {
  className?: string;
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  id: string;
  label: string;
}

const OnewRowInput = (props: OnewRowInputProps) => {
  const { id, onChange, placeholder, value, className } = props;

  return (
    <div className={cn("bg-white rounded-2xl w-full", className)}>
      <Input
        id={id}
        placeholder={placeholder}
        className="h-10 border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default OnewRowInput;
