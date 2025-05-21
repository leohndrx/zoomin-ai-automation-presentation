"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  delay?: number;
  darkMode?: boolean;
}

const Card: React.FC<CardProps> = ({ icon, title, children, delay = 0, darkMode = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`${darkMode ? 'bg-gray-800/90 text-white' : 'bg-white'} rounded-xl shadow-lg p-6 flex flex-col border border-gray-200 relative overflow-hidden`}
    >
      <div className="flex items-center mb-4 relative z-10">
        {icon && <div className={`${darkMode ? 'text-brand' : 'text-brand'} mr-3`}>{icon}</div>}
        <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      </div>
      <div className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} relative z-10`}>{children}</div>
    </motion.div>
  );
};

export default Card; 