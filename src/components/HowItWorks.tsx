import { motion } from 'motion/react';
import { Database, BarChart3, Lightbulb } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: Database,
      title: 'Get Your Data',
      description: 'LifeLoops connects to your phone\'s existing data—app usage, screen time, and activity patterns.',
    },
    {
      number: '2',
      icon: BarChart3,
      title: 'See Your Flow',
      description: 'View your day in chronological order with app usage duration, revealing how your time actually flows.',
    },
    {
      number: '3',
      icon: Lightbulb,
      title: 'Daily Insights',
      description: 'Get a recap at the end of each day with personalized suggestions for tomorrow—turning patterns into progress.',
    },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-[#272727] mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            How It Works
          </h2>
          <p className="text-[#272727]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Three simple steps to make your time visible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Number badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-[#f5f5f5] rounded-full flex items-center justify-center text-[#699669] group-hover:bg-[#699669] group-hover:text-white transition-colors duration-300">
                  <span style={{ fontFamily: 'Parkinsans' }}>
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f5f5f5] to-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <step.icon className="w-8 h-8 text-[#699669]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-[#272727] mb-3" style={{ fontSize: '1.5rem' }}>
                  {step.title}
                </h3>
                <p className="text-[#272727]/70 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#699669]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"
                />
              </div>

              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#699669]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
