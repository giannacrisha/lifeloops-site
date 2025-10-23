import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    null,
  );

  const faqs = [
    {
      question: 'What does "live. learn. loop." mean?',
      answer:
        "It’s our core philosophy. Live: experience your day naturally. Learn: reflect on what works and what doesn’t. Loop: improve and automate what matters most. Every day is a loop — LifeLoops just helps you make it a better one.",
    },
    {
      question:
        "What makes LifeLoops different from other automation tools?",
      answer:
        "LifeLoops combines AI-powered automation with automatic journaling, creating a unique system that learns your patterns and adapts to your lifestyle. Unlike traditional automation tools, we focus on simplicity and human-centric design.",
    },
    {
      question: "How does the AI learning work?",
      answer:
        "Our adaptive AI observes your usage patterns, preferences, and routines to suggest optimizations and create personalized automation flows. All processing happens locally on your device to ensure complete privacy.",
    },
    {
      question: "Can I use LifeLoops on multiple devices?",
      answer:
        "Yes! Your loops and automations sync seamlessly across all your devices. Premium users get unlimited device connections and priority sync.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "Absolutely. We use end-to-end encryption and local processing wherever possible. Your personal data never leaves your device unless you explicitly choose to sync it to our secure cloud storage.",
    },
    {
      question: "What integrations are available?",
      answer:
        "LifeLoops integrates with popular productivity tools, smart home devices, and calendar apps. Premium users get access to custom integrations and our API for building their own connections.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your Premium subscription at any time. You'll continue to have access to Premium features until the end of your billing period, then automatically switch to the Free plan.",
    },
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-[#191919] mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            FAQs
          </h2>
          <p
            className="text-[#191919]/70"
            style={{ fontSize: "1.125rem" }}
          >
            Everything you need to know about LifeLoops
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#f8f8f8] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#f0f0f0] transition-colors"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index,
                  )
                }
              >
                <span className="text-[#191919] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#699669] flex-shrink-0" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p className="text-[#191919]/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-[#191919]/70 mb-4">
            Still have questions?
          </p>
          <button className="text-[#699669] hover:underline transition-all">
            support@mylifeloops.com
          </button>
        </motion.div>
      </div>
    </section>
  );
}