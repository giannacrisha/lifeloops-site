import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export function WhyLifeLoops() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const [timeSaved, setTimeSaved] = useState(0);
  const [loopsCompleted, setLoopsCompleted] = useState(0);

  useEffect(() => {
    const timeSavedInterval = setInterval(() => {
      setTimeSaved((prev) => (prev < 124 ? prev + 2 : 124));
    }, 30);

    const loopsInterval = setInterval(() => {
      setLoopsCompleted((prev) => (prev < 1847 ? prev + 37 : 1847));
    }, 30);

    return () => {
      clearInterval(timeSavedInterval);
      clearInterval(loopsInterval);
    };
  }, []);

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div style={{ opacity }}>
            <h2
              className="text-[#191919] mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.2',
              }}
            >
              Automation that learns you.
            </h2>
            <p className="text-[#191919]/70 mb-8 leading-relaxed" style={{ fontSize: '1.125rem' }}>
              LifeLoops doesn't just automate tasks—it learns your patterns, adapts to your rhythm, 
              and grows smarter with every interaction. Experience automation that feels personal.
            </p>

            <div className="space-y-4">
              {[
                'Contextual AI that understands your routine',
                'Privacy-first design with local processing',
                'Seamless integration with your daily tools',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#992d2d] rounded-full" />
                  <p className="text-[#191919]/80">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Stats Chart */}
          <motion.div
            style={{ opacity }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#f8f8f8] to-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-[#191919] mb-8 text-center" style={{ fontSize: '1.25rem' }}>
                Your Impact Over Time
              </h3>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-[#992d2d] mb-2" style={{ fontSize: '2.5rem' }}>
                    {timeSaved}
                  </div>
                  <div className="text-[#191919]/60 text-sm">Hours Saved</div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-[#992d2d] mb-2" style={{ fontSize: '2.5rem' }}>
                    {loopsCompleted.toLocaleString()}
                  </div>
                  <div className="text-[#191919]/60 text-sm">Loops Completed</div>
                </motion.div>
              </div>

              {/* Simple bar chart */}
              <div className="space-y-4">
                {[
                  { label: 'Morning Routine', value: 85, delay: 0 },
                  { label: 'Work Flow', value: 92, delay: 0.1 },
                  { label: 'Evening Wind Down', value: 78, delay: 0.2 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#191919]/70 text-sm">{item.label}</span>
                      <span className="text-[#992d2d] text-sm">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-[#f8f8f8] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#992d2d] to-[#c93939] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: item.delay }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#992d2d]/10 to-transparent blur-3xl -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
