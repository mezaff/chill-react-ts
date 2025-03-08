import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputLabelProps {
  type: string;
  name: string;
  placeholder?: string;
  title: string;
}

const InputLabel = (props: InputLabelProps) => {
  const { type, name, placeholder, title } = props;

  return (
    <div className="grid w-[258px] md:w-[449px] items-center gap-1.5 mb-2 md:mb-5">
      <Label
        htmlFor={name}
        className="font-medium text-white text-[10px] md:text-[18px]"
      >
        {title}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="text-white text-[10px] md:text-[16px] rounded-full border-[#E7E3FC3B] placeholder:text-[#C1C2C4]"
      />
    </div>
  );
};

export default InputLabel;
