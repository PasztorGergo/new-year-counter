import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const NumberCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div className="w-[calc(2ch_+_4rem)] text-5xl font-bold text-center uppercase p-4 backdrop-blur-md rounded-lg border border-[rgba(255,255,255,0.17)] bg-[rgba(255,255,255,0.09)]">
      {Array.from(children?.toString()!).map((str, i) => (
        <motion.span>{str}</motion.span>
      ))}
    </motion.div>
  );
};
