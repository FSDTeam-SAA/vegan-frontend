import Search from "@/components/ui/search";
import { useState } from "react";

const ProfessionalFilterContainer = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Search value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default ProfessionalFilterContainer;
