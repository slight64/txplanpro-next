import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

interface TwoRowInputProps {
  className?: string;
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  id: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
}

const TwoRowInput = (props: TwoRowInputProps) => {
  const { id, label, onChange, placeholder, value, type, className } = props;

  return (
    <div className={cn("bg-white rounded-2xl w-full", className)}>
      <Label
        className="text-14 w-full pl-5 py-4 text-dropdown pb-0 font-normal"
        htmlFor={id}
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-10 pl-5 border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TwoRowInput;
