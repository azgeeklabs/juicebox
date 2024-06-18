"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation?: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="-mr-4 relative group w-[2vw]"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-full translate-x-1/2 flex text-[--12px] flex-col items-center justify-center rounded-[--50px] bg-black z-50 shadow-xl px-[--16px] py-[--sy-8px]"
              >
                <div className="absolute left-1/2 -translate-x-1/2 z-30 w-[20%] -bottom-[--1px] bg-gradient-to-r from-transparent via-[var(--highlight-yellow)] to-transparent h-[--1px]" />
                <div className="absolute left-1/2 -translate-x-1/2 w-[20%] z-30 -bottom-[--1px] bg-gradient-to-r from-transparent via-[var(--highlight-yellow)] to-transparent h-[--1px]" />
                <div className="font-bold text-white relative z-30 text-[--14px]">
                  {item.name}
                </div>
                <div className="text-white text-[--12px]">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-[2vw] w-[--55px] border-[--2px] group-hover:scale-105 border-[var(--highlight-yellow)] relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
