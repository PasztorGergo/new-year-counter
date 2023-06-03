import { MotionValue, motion, useTransform } from "framer-motion";
import React from "react";

export const Number = ({
  place,
  number,
  mv,
}: {
  number: number;
  mv: MotionValue;
  place: number;
}) => {
  const y = useTransform(mv, (latest) => {
    const height: number = 64;
    let playValue = (latest / place) % 10;
    const offset: number = (10 + number - playValue) % 10;
    let memo: number = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });
  return (
    <motion.span className="absolute inset-0 flex justify-center" style={{ y }}>
      {number}
    </motion.span>
  );
};
