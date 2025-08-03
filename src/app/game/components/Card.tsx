'use client';

import { motion } from 'framer-motion';

interface CardProps {
  value: number;
  label?: string;
}

export default function Card({ value, label }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white text-black rounded-2xl shadow-lg p-4 w-32 h-48 flex flex-col justify-center items-center border-4 border-gray-300"
    >
      {label && <div className="text-sm text-gray-600 mb-1">{label}</div>}
      <div className="text-4xl font-bold">{value}</div>
    </motion.div>
  );
}
