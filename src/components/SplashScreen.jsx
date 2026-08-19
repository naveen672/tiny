import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const nameContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.045, delayChildren: 0.75 }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-lightBlue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brand-darkBlue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative text-center px-4">
        {/* Logo with glow + light-sweep */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative inline-block mb-6"
        >
          {/* Pulsing glow behind the prism */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-lightBlue to-brand-darkBlue blur-2xl"
            animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.85, 1.05, 0.85] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative w-28 h-28 sm:w-32 sm:h-32 overflow-hidden rounded-2xl">
            <img
              src="/tinylogo.png"
              alt="Tiny Prism Labs"
              className="relative z-10 w-full h-full object-contain"
            />
            {/* Light refracting through the prism */}
            <motion.div
              className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12"
              initial={{ x: '-150%' }}
              animate={{ x: '150%' }}
              transition={{ delay: 0.55, duration: 0.9, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Company Name — letter stagger */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={nameContainer}
          className="font-heading text-3xl md:text-4xl font-bold text-brand-deepNavy flex justify-center"
        >
          {'Tiny Prism Labs'.split('').map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.5 }}
          className="mt-2 text-sm text-gray-500 tracking-wide"
        >
          Intelligence on the Edge
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-8 w-56 mx-auto"
        >
          <div className="h-[3px] bg-brand-lightGrey rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-darkBlue via-brand-lightBlue to-brand-darkBlue"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
