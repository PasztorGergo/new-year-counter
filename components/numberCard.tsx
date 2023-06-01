import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const NumberCard = ({ children }: { children: React.ReactNode }) => {
  const controllsSec = useAnimation();
  const controllsMin = useAnimation();
  const controllsDays = useAnimation();
  const controllsHours = useAnimation();

  useEffect(() => {
    setInterval(() => {
      controllsMin.start({
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          duration: 0.5,
          ease: "easeOut",
        },
        opacity: 1,
      });
    }, 1000);
  }, [children?.toString().split("")[1]]);
  useEffect(() => {
    setInterval(() => {
      controllsSec.start({
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          duration: 0.5,
          ease: "easeOut",
        },
        opacity: 1,
      });
    }, 60000);
  }, [children?.toString().split("")[0]]);
  useEffect(() => {
    setInterval(() => {
      controllsHours.start({
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          duration: 0.5,
          ease: "easeOut",
        },
        opacity: 1,
      });
    }, 3600000);
  }, [children?.toString().length === 3 && children?.toString().split("")[2]]);

  return (
    <motion.div className="w-[calc(2ch_+_4rem)] text-5xl font-bold text-center uppercase p-4 backdrop-blur-md rounded-lg border border-[rgba(255,255,255,0.17)] bg-[rgba(255,255,255,0.09)]">
      {Array.from(children?.toString()!).map((str, i) => {
        return i === 0 ? (
          <motion.span
            key={i}
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={controllsSec}
          >
            {str}
          </motion.span>
        ) : i === 1 ? (
          <motion.span
            key={i}
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={controllsMin}
          >
            {str}
          </motion.span>
        ) : (
          <motion.span
            key={i}
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={controllsDays}
          >
            {str}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
