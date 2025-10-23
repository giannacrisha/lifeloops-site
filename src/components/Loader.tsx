import { motion } from 'motion/react';
import loopyImage from 'figma:asset/e53305cca3ecc11c4fa37900a5c01a8204bba788.png';

export function Loader() {
  return (
    <div className="flex items-center justify-center">
      <motion.img
        src={loopyImage}
        alt="Loopy"
        className="w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
