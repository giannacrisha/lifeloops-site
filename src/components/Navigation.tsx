import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/3c414acfb821ca806a12a673da8523882f150c51.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="LifeLoops" className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('problem')}
            className="text-[#272727] hover:text-[#699669] transition-colors"
          >
            Problem
          </button>
          <button
            onClick={() => scrollToSection('solution')}
            className="text-[#272727] hover:text-[#699669] transition-colors"
          >
            Solution
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-[#272727] hover:text-[#699669] transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-[#272727] hover:text-[#699669] transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('waitlist')}
            className="px-6 py-2 bg-[#699669] text-white rounded-full hover:shadow-lg hover:shadow-[#699669]/30 transition-all duration-300 hover:scale-105"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
