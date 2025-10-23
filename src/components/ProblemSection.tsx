import { motion } from 'motion/react';
import { Eye, Brain, Clock } from 'lucide-react';

export function ProblemSection() {
  return (
    <section id="problem" className="py-32 px-6 bg-[#272727] text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #699669 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            The Problem: Blindness
          </h2>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block bg-[#699669]/10 border border-[#699669]/30 rounded-2xl px-8 py-6">
              <p className="text-[#e9e9e9]" style={{ fontSize: '1.5rem', fontFamily: 'DM Sans', fontStyle: 'italic' }}>
                Your phone knows everything about you.<br />
                But you don't know what it knows.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Issue */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/80 leading-relaxed mb-6" style={{ fontSize: '1.25rem' }}>
            We want tech that makes us more human—tools that <span className="text-[#699669]">understand us</span> instead of control us.
          </p>
          <p className="text-white/80 leading-relaxed" style={{ fontSize: '1.25rem' }}>
            A world where your phone doesn't drain your time, but <span className="text-[#699669]">teaches you how to live it better</span>.
          </p>
        </motion.div>

        {/* Problem Icons */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="group text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-[#699669]/20 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-[#699669]" />
              </div>
            </div>
            <h3 className="text-white mb-3" style={{ fontSize: '1.25rem' }}>
              Invisible Patterns
            </h3>
            <p className="text-white/60 leading-relaxed">
              Your data exists, but you can't see the story it tells
            </p>
          </motion.div>

          <motion.div
            className="group text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-[#699669]/20 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-[#699669]" />
              </div>
            </div>
            <h3 className="text-white mb-3" style={{ fontSize: '1.25rem' }}>
              Problem Blindness
            </h3>
            <p className="text-white/60 leading-relaxed">
              You can't fix problems you don't know exist
            </p>
          </motion.div>

          <motion.div
            className="group text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-[#699669]/20 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#699669]" />
              </div>
            </div>
            <h3 className="text-white mb-3" style={{ fontSize: '1.25rem' }}>
              Lost Time
            </h3>
            <p className="text-white/60 leading-relaxed">
              Days blur together with no way to learn or improve
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
