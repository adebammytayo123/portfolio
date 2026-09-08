"use client";

import { motion } from "motion/react";

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
}

const RevealGroup = ({
  children,
  className,
}: RevealGroupProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealGroup;