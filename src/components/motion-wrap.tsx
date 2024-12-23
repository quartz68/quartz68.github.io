'use client';
import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type MotionWrapProps = {
  children: ReactNode;
  className?: string;
  id?: string;
} & MotionProps;

const MotionWrap: React.FC<MotionWrapProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.75,
        ease: [0.01, 0.05, 0.2, 0.95],
        type: "tween",
        delay: 0.25,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default MotionWrap;
