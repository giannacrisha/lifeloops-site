import { motion, useScroll, useTransform } from 'motion/react';
import { Eye, Clock, TrendingUp } from 'lucide-react';
import { useRef } from 'react';
import loopyImage from 'figma:asset/e53305cca3ecc11c4fa37900a5c01a8204bba788.png';

export function ProductPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Eye,
      text: 'See your day in chronological flow',
      delay: 0.2,
    },
    {
      icon: Clock,
      text: 'Track app usage without lifting a finger',
      delay: 0.4,
    },
    {
      icon: TrendingUp,
      text: 'Get personalized insights and suggestions',
      delay: 0.6,
    },
  ];

  return (
    <section id="product" ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          style={{ opacity }}
          className="text-center mb-16"
        >
          <h2
            className="text-[#272727] mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            Your Time, Visualized
          </h2>
          <p className="text-[#272727]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            A minimal interface that shows you what matters—turning invisible patterns into visible insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Mobile UI Preview */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <motion.div
              className="relative mx-auto max-w-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Phone frame */}
              <div className="bg-[#272727] rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#f5f5f5] px-6 py-3 flex items-center justify-between">
                    <span className="text-xs text-[#272727]">9:41</span>
                    <div className="flex items-center gap-2">
                      <motion.img
                        src={loopyImage}
                        alt="Loopy"
                        className="w-5 h-5"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </div>
                  </div>

                  {/* App content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[#272727]">
                        Today's Flow
                      </h3>
                      <div className="text-[#699669]">∞</div>
                    </div>

                    {/* Timeline items */}
                    {[
                      { time: '7:30 AM', app: 'Morning Routine', duration: '45m' },
                      { time: '9:15 AM', app: 'Focus Work', duration: '2h 30m' },
                      { time: '12:00 PM', app: 'Social Media', duration: '15m' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-[#f5f5f5] rounded-2xl p-4 shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-2 h-2 bg-[#699669] rounded-full" />
                          <span className="text-xs text-[#272727]/50">{item.time}</span>
                          <span className="text-xs text-[#272727]/50 ml-auto">{item.duration}</span>
                        </div>
                        <p className="text-[#272727] text-sm">{item.app}</p>
                      </motion.div>
                    ))}

                    {/* Progress indicator */}
                    <div className="pt-4">
                      <div className="h-2 bg-[#272727]/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#699669] rounded-full"
                          initial={{ width: '0%' }}
                          whileInView={{ width: '65%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#699669]/20 to-transparent blur-3xl" />
            </motion.div>
          </motion.div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: feature.delay }}
                viewport={{ once: true }}
              >
                <div className="bg-[#f5f5f5] p-3 rounded-2xl group-hover:bg-[#699669] transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#699669] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[#272727] text-lg">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
