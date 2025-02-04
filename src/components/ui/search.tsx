import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { ChangeEventHandler, FC } from "react";
import { Input } from "./input";

interface SearchProps {
  id?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  type?: "text" | "search";
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Search: FC<SearchProps> = ({
  id = "search",
  placeholder = "Search...",
  className = "",
  inputClassName = "",
  type = "search",
  value,
  onChange,
}) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
        <SearchIcon className="h-4 w-4" />
      </div>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={cn("w-full rounded-lg bg-background pl-8", inputClassName)}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
