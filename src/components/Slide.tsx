"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const Slide: React.FC<SlideProps> = ({
  id,
  title,
  children,
  className = '',
  titleClassName = '',
  contentClassName = '',
}) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center p-8 md:p-16 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {title && (
        <h2 className={`text-3xl md:text-5xl font-bold mb-8 text-orange-600 relative z-10 ${titleClassName}`}>
          {title}
        </h2>
      )}
      <div className={`mt-4 relative z-10 ${contentClassName}`}>{children}</div>
    </motion.section>
  );
};

export default Slide; 