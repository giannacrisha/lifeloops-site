import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started with automation',
      features: [
        'Unlimited loop tracking',
        'Basic automation builder',
        'Basic integrations',
        'Automated journaling',
      ],
      cta: 'Start for Free',
      isPremium: false,
    },
    {
      name: 'Premium',
      price: '$12',
      period: '/month',
      description: 'For power users who want unlimited automation',
      features: [
        'Everything in Free',
        'Advanced AI automation',
        'Priority support',
        'Team collaboration',
        'Unlimited storage',
        'Custom integrations',
        'Analytics & insights',
      ],
      cta: 'Start for Free',
      isPremium: true,
    },
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-[#191919] mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            Pricing
          </h2>
          <p className="text-[#191919]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Start free, upgrade when you're ready
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative group ${plan.isPremium ? 'md:-mt-4' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Premium badge */}
              {plan.isPremium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#992d2d] text-white px-4 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg z-10">
                  <Sparkles className="w-4 h-4" />
                  <span>Recommended</span>
                </div>
              )}

              <div
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden ${
                  plan.isPremium ? 'border-2 border-[#992d2d]/20' : ''
                }`}
              >
                {/* Background gradient for premium */}
                {plan.isPremium && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#992d2d]/5 to-transparent pointer-events-none" />
                )}

                <div className="relative z-10">
                  {/* Plan header */}
                  <div className="mb-6">
                    <h3 className="text-[#191919] mb-2" style={{ fontSize: '1.5rem' }}>
                      {plan.name}
                    </h3>
                    <p className="text-[#191919]/60 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-[#191919]"
                        style={{
                          fontSize: '3rem',
                          fontFamily: 'MuseoModerno, italic',
                        }}
                      >
                        {plan.price}
                      </span>
                      {plan.period && <span className="text-[#191919]/60">{plan.period}</span>}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.isPremium ? 'bg-[#992d2d]' : 'bg-[#191919]'
                          }`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[#191919]/80 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-full transition-all duration-300 relative overflow-hidden group ${
                      plan.isPremium
                        ? 'bg-[#992d2d] text-white hover:shadow-xl hover:shadow-[#992d2d]/30'
                        : 'bg-[#191919] text-white hover:shadow-xl hover:shadow-[#191919]/30'
                    }`}
                  >
                    <span className="relative z-10">{plan.cta}</span>
                    <motion.div
                      className={`absolute inset-0 ${
                        plan.isPremium ? 'bg-[#7a2424]' : 'bg-[#0a0a0a]'
                      }`}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.p
          className="text-center text-[#191919]/50 mt-12 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
