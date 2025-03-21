import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface Option {
  value: string;
  label: string;
}

interface AnimatedSelectProps {
  options: Option[];
  onValueChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

const AnimatedSelect: React.FC<AnimatedSelectProps> = ({
  options,
  onValueChange,
  placeholder = "Select an option",
  label = "Options",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onValueChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-[48px] w-full rounded-lg border border-input bg-white p-2 px-3 text-left"
        type="button"
      >
        {selected
          ? options.find((opt) => opt.value === selected)?.label
          : placeholder}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-full rounded-lg border border-gray-300 bg-white shadow-lg"
          >
            <p className="px-4 py-2 font-bold text-gray-500">{label}</p>
            <div className="flex w-full flex-col">
              {options.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleSelect(value)}
                  className="w-full cursor-pointer px-4 py-2 text-left text-[14px] hover:bg-gray-100"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedSelect;
