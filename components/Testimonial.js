"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHandshake, FaHome, FaUsers, FaLightbulb } from "react-icons/fa";

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const features = [
    {
      icon: <FaHandshake className="text-[#D4A89C] w-12 h-12 mx-auto mb-4" />,
      title: "Transparency & Trust",
      desc: "Full clarity on pricing, documentation, and processes.",
    },
    {
      icon: <FaHome className="text-[#173319] w-12 h-12 mx-auto mb-4" />,
      title: "Premium Locations",
      desc: "Carefully curated properties in high-demand areas.",
    },
    {
      icon: <FaUsers className="text-[#D4A89C] w-12 h-12 mx-auto mb-4" />,
      title: "Expert Guidance",
      desc: "Personalized help from experienced real estate consultants.",
    },
    {
      icon: <FaLightbulb className="text-[#173319] w-12 h-12 mx-auto mb-4" />,
      title: "Modern Approach",
      desc: "Virtual tours, smart tools, and innovative solutions.",
    },
  ];

  const testimonials = [
    {
      name: "Rohit Sharma",
      feedback:
        "Green Acres made buying our first home a seamless experience. Highly recommend their team!",
      avatar: "/images/testimonial1.jpg",
    },
    {
      name: "Priya Mehta",
      feedback:
        "Professional, transparent, and truly caring. Our dream home became a reality.",
      avatar: "/images/testimonial2.jpg",
    },
    {
      name: "Ankit Verma",
      feedback:
        "From consultation to handover, the process was smooth and stress-free.",
      avatar: "/images/testimonial3.jpg",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-white">
      {/* Heading */}
      <motion.h2
        initial={{ filter: "blur(8px)", opacity: 0 }}
        animate={inView ? { filter: "blur(0px)", opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-blink font-extrabold text-center mb-16 max-w-4xl mx-auto"
      >
        Why <span style={{ color: "#D4A89C" }}>Choose Green Acres</span>
      </motion.h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto mb-20">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
            animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 text-center"
          >
            {feature.icon}
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#173319]">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ filter: "blur(8px)", opacity: 0 }}
          animate={inView ? { filter: "blur(0px)", opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#173319]"
        >
          What Our Clients Say
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
              animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-3 text-sm md:text-base">
                "{t.feedback}"
              </p>
              <h4 className="font-semibold text-[#173319]">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
