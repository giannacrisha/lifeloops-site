import { motion } from "motion/react";
import {
  Lightbulb,
  Eye,
  BarChart3,
  Network,
} from "lucide-react";

export function SolutionSection() {
  const features = [
    {
      icon: Eye,
      title: "Story Behind the Numbers",
      description:
        "Your day told through context—not just timestamps, but the flow and meaning behind your time.",
    },
    {
      icon: Network,
      title: "Digital Ecosystem Integration",
      description:
        "Seamlessly connects to your existing apps and data sources—no manual tracking required.",
    },
    {
      icon: BarChart3,
      title: "Behavior Pattern Detection",
      description:
        "AI learns your habits, identifies friction points, and suggests improvements over time.",
    },
  ];

  return (
    <section id="solution" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Solution Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#699669]/10 text-[#699669] px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-5 h-5" />
            <span>The Solution</span>
          </div>

          <h2
            className="text-[#272727] mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            LifeLoops
          </h2>

          <p
            className="text-[#272727]/70 max-w-3xl mx-auto leading-relaxed mb-12"
            style={{ fontSize: "1.125rem" }}
          >
            LifeLoops connects your phone's existing data to map
            how your days truly flow.
          </p>

          <motion.div
            className="inline-block bg-[#699669]/10 border border-[#699669]/30 rounded-2xl px-8 py-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p
              className="text-[#272727]"
              style={{
                fontSize: "1.5rem",
                fontFamily: "DM Sans",
                fontStyle: "italic",
              }}
            >
              LifeLoops makes your time visible.
              <br />
              Because you can't change what you can't see.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-[#f5f5f5] rounded-3xl p-8 h-full border border-[#272727]/10 hover:border-[#699669]/50 transition-all duration-300 hover:shadow-lg">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#699669]/20 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#699669]" />
                  </div>
                </div>
                <h3
                  className="text-[#272727] mb-3"
                  style={{ fontSize: "1.5rem" }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#272727]/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#699669]/10 to-[#699669]/5 rounded-3xl p-12 border border-[#699669]/20">
            <p
              className="text-[#272727] leading-relaxed mb-4"
              style={{ fontSize: "1.125rem" }}
            >
              <span className="text-[#699669]">
                For busy people
              </span>{" "}
              who want to build a better life system,
              <span className="text-[#699669]">
                {" "}
                LifeLoops
              </span>{" "}
              is an adaptive AI app that helps you learn from
              your behavior and reduce daily friction.
            </p>
            <p
              className="text-[#272727]/70 leading-relaxed"
              style={{ fontSize: "1.125rem" }}
            >
              LifeLoops understands your patterns and helps you
              iterate and build personal systems,{" "}
              <span className="text-[#699669]">
                one loop at a time
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}