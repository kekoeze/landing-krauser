"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb-1 -top-48 -left-48 opacity-30"></div>
        <div className="floating-orb-2 top-1/3 -right-40 opacity-20"></div>
        <div className="floating-orb-3 -bottom-32 left-1/4 opacity-25"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Logo with breathing effect */}
        <motion.div
          className="mb-8 relative"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
          {/* Glow effect behind logo */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            animate={{
              background: [
                "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
          
          {/* Logo */}
          <div className="relative">
            <Image
              src="/logo-fir.png"
              alt="Krauser Logo"
              width={120}
              height={120}
              className="w-30 h-30 mx-auto relative z-10"
            />
          </div>
        </motion.div>
        
        {/* Company name with gradient */}
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="gradient-text">Krauser</span>
        </motion.h2>
        
        {/* Loading text */}
        <motion.p
          className="text-gray-300 mb-8 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Preparando la experiencia...
        </motion.p>
        
        {/* Progress bar container */}
        <div className="w-80 mx-auto">
          {/* Progress bar background */}
          <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-600/30">
            {/* Progress bar fill with gradient */}
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-600 to-purple-700 rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
          
          {/* Progress percentage */}
          <motion.div
            className="flex justify-between items-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-slate-400 text-sm">Cargando recursos</span>
            <span className="text-purple-400 font-semibold">{progress}%</span>
          </motion.div>
        </div>
        
        {/* Loading dots animation */}
        <motion.div
          className="flex justify-center space-x-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}