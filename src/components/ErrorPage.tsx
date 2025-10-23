import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/3c414acfb821ca806a12a673da8523882f150c51.png';

export function ErrorPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={logoImage}
          alt="LifeLoops"
          className="h-16 w-auto mx-auto mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        
        <motion.h1
          className="text-[#272727] mb-6"
          style={{ fontFamily: 'Parkinsans' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          LifeLoops is still in development.
        </motion.h1>
        
        <motion.p
          className="text-[#272727]/60 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Loop back to home
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-[#699669] text-white rounded-full hover:shadow-lg hover:shadow-[#699669]/30 transition-all duration-300 hover:scale-105"
          >
            Return Home
          </button>
        </motion.div>

        <motion.p
          className="text-[#272727]/40 text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Redirecting in {countdown} seconds...
        </motion.p>
      </motion.div>
    </div>
  );
}
