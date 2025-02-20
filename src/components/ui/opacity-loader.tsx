import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface Props {
  messsage?: string;
  open: boolean;
}

const OpacityLoader = ({ messsage, open }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          exit={{
            opacity: 0,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
            zIndex: 100, // Ensure it layers on top of the map
            borderRadius: "6px",
          }}
        >
          <div className="flex h-full w-full flex-col items-center justify-center space-y-2 text-white">
            <Loader2 className="z-50 h-5 w-5 animate-spin text-white" />
            {messsage ?? "Loading..."}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpacityLoader;
