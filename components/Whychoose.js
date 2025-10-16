"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhyChooseGreenAcres() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const points = [
    {
      title: "From Vision to Reality",
      desc: "In 2014, Rishabh Tewani founded OSR Realtors with a vision: to bring transparency and professionalism to real estate.",
    },
    {
      title: "Trust & Excellence",
      desc: "Over 11+ years, we've built a reputation for trust and excellence, guiding countless clients with care.",
    },
    {
      title: "Innovation & Modern Values",
      desc: "Today, as Green Acres Realty, co-founded by Kkajal Kundnani, we continue this legacy with innovation and modern partnership values.",
    },
  ];

  return (
    <section ref={ref} className="py-16 px-6 md:px-12 bg-[#fffbe5]">
      {/* Heading */}
      <motion.h2
        initial={{ filter: "blur(8px)", opacity: 0 }}
        animate={inView ? { filter: "blur(0px)", opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-blink font-extrabold text-center text-[#173319] mb-12 leading-snug max-w-3xl mx-auto"
      >
        Why <span className="text-[#D4A89C]">Choose Green Acres</span>
      </motion.h2>

      {/* Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
            animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-md border border-[#D4A89C] hover:shadow-xl transition-all"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#173319] mb-3 font-blink">
              {point.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base font-dmserif">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
