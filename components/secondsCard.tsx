import React, { useEffect, useMemo, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { Number } from ".";

export const SecondsCard = ({
  type,
}: {
  type: "day" | "hour" | "minute" | "sec";
}) => {
  const [time, setTime] = useState<number>(0);
  const date = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0, 0);

  const value = useMemo(
    () =>
      type === "day"
        ? Math.floor(time / (24 * 60 * 60 * 1000))
        : type === "hour"
        ? Math.floor(
            (time / (24 * 60 * 60 * 1000) -
              Math.floor(time / (24 * 60 * 60 * 1000))) *
              24
          )
        : type === "minute"
        ? Math.floor(
            ((time / (24 * 60 * 60 * 1000) -
              Math.floor(time / (24 * 60 * 60 * 1000))) *
              24 -
              Math.floor(
                (time / (24 * 60 * 60 * 1000) -
                  Math.floor(time / (24 * 60 * 60 * 1000))) *
                  24
              )) *
              60
          )
        : Math.floor(
            (((time / (24 * 60 * 60 * 1000) -
              Math.floor(time / (24 * 60 * 60 * 1000))) *
              24 -
              Math.floor(
                (time / (24 * 60 * 60 * 1000) -
                  Math.floor(time / (24 * 60 * 60 * 1000))) *
                  24
              )) *
              60 -
              Math.floor(
                ((time / (24 * 60 * 60 * 1000) -
                  Math.floor(time / (24 * 60 * 60 * 1000))) *
                  24 -
                  Math.floor(
                    (time / (24 * 60 * 60 * 1000) -
                      Math.floor(time / (24 * 60 * 60 * 1000))) *
                      24
                  )) *
                  60
              )) *
              60
          ),
    []
  );
  const animatedValue = useSpring(value);

  setInterval(() => setTime(date.getTime()), 1000);

  useEffect(() => {
    animatedValue.set(value);
    console.log(value);
  }, [animatedValue, time]);

  return (
    <motion.div className="w-[calc(2ch_+_4rem)] h-16 overflow-hidden leading-none flex justify-between text-5xl font-bold text-center uppercase p-4 backdrop-blur-md rounded-lg border border-[rgba(255,255,255,0.17)] bg-[rgba(255,255,255,0.09)]">
      {type === "day" && (
        <div className="relative">
          {[...Array(10).keys()].map((x) => (
            <Number place={10} mv={animatedValue} number={x} key={x}></Number>
          ))}
        </div>
      )}
      <div className="relative">
        {[...Array(type === "day" ? 10 : type === "hour" ? 3 : 6).keys()].map(
          (x) => (
            <Number place={10} mv={animatedValue} number={x} key={x}></Number>
          )
        )}
      </div>
      <div className="relative">
        {[...Array(10).keys()].map((x) => (
          <Number place={1} mv={animatedValue} number={x} key={x}></Number>
        ))}
      </div>
    </motion.div>
  );
};
