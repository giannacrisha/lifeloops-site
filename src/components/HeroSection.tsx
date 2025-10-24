import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import loopyImage from "figma:asset/e53305cca3ecc11c4fa37900a5c01a8204bba788.png";

export function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #699669 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #699669 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Loopy mascot */}
        {/* <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={loopyImage}
            alt="Loopy"
            className="w-24 h-24"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div> */}

        <motion.h1
          className="text-[#272727] mb-6"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: "1.1",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          making time more visible.
        </motion.h1>

        <motion.p
          className="text-[#272727]/70 mb-12 max-w-2xl mx-auto"
          style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          LifeLoops helps you see patterns and build better
          systems.
        </motion.p>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <button
    onClick={() => window.open("https://forms.gle/your-google-form-link", "_blank")}
    className="group relative px-8 py-4 bg-[#699669] text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#699669]/30 hover:scale-105"
  >
    <span className="relative z-10 flex items-center gap-2">
      Join Waitlist
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </span>
    <motion.div
      className="absolute inset-0 bg-[#557a55]"
      initial={{ x: "-100%" }}
      whileHover={{ x: 0 }}
      transition={{ duration: 0.3 }}
    />
  </button>
</motion.div>

        {/* Looping progress bar animation */}
        <motion.div
          className="mt-16 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="h-2 bg-white/50 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-[#699669] to-[#85b585] rounded-full"
              animate={{
                width: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}