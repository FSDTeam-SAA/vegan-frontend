"use client";

// Packages
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Local imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MerchantSearch() {
  const [activeTab, setActiveTab] = useState("merchants");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    return () => {
      setLoading(false); // Reset loading state on unmount
    };
  }, []);

  const handleSelect = (tab: string) => {
    setActiveTab(tab);
  };

  const onSearch = () => {
    if (!value || !activeTab) return;
    setLoading(true);
    router.push(`/${activeTab}?search=${value}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload on form submission
    onSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[572px] items-center gap-2 rounded-lg bg-white p-3 shadow-sm"
    >
      {/* Category Selector */}
      <Select value={activeTab} onValueChange={handleSelect}>
        <SelectTrigger className="w-[160px] border-0 border-r-[1px] shadow-none">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="merchants">All Merchants</SelectItem>
            <SelectItem value="professionals">All Professionals</SelectItem>
            <SelectItem value="organizations">All Organizations</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Search Input */}
      <Input
        type="text"
        placeholder={`Search ${activeTab}...`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 border-0 bg-transparent text-sm font-light leading-[16.94px] tracking-[-3%] shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-0 focus-visible:ring-offset-0 md:text-sm"
      />

      {/* Search Button with Loading Animation */}
      <motion.div
        initial={{ width: "auto" }}
        animate={{ width: loading ? "130px" : "auto" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Button
          type="submit" // Allows form submission with Enter key
          className="relative bg-[#1D3557] py-[12px] font-inter text-base font-medium leading-[19.36px] hover:bg-[#263c5f] lg:px-[21px]"
          disabled={loading}
        >
          Search {loading && <Loader2 className="ml-2 animate-spin" />}
        </Button>
      </motion.div>
    </form>
  );
}
