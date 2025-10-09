"use client";

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      value: 11,
      suffix: "+",
      label: "Years of Excellence",
      desc: "Building trust since 2014 with unwavering professionalism",
      icon: "🏆",
    },
    {
      value: 100,
      suffix: "+",
      label: "Properties Handled",
      desc: "Successful transactions across residential and commercial",
      icon: "🏠",
    },
    {
      value: 90,
      suffix: "%",
      label: "Client Satisfaction",
      desc: "Dedicated to exceeding customer expectations",
      icon: "⭐",
    },
  ];

  const missionPoints = [
    "Provide exceptional service with honesty and integrity",
    "Build long-lasting relationships with clients",
    "Deliver sustainable and value-driven real estate solutions",
    "Innovate constantly to simplify property transactions",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us - Green Acres Realty | Our Story & Vision</title>
        <meta
          name="description"
          content="Discover Green Acres Realty's journey from OSR Realtors. Founded by Rishabh Tewani in 2014, we bring 11+ years of trusted real estate expertise."
        />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      {/* Global brand styles & Tailwind-class overrides (only colors + fonts) */}
      <style jsx global>{`
        :root{
          --brand-white: #ffffff;
          --brand-cream: #fffbe5;
          --brand-peach: #D4A89C;
          --brand-green: #173319;
          --brand-green-900: #0a1a0c;
          --brand-ink: #051106;
          --font-heading: 'Blink Twice', 'Montserrat', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          --font-body: 'Montserrat', 'DM Serif Display', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        /* If you host Blink Twice locally, these will be used automatically */
        @font-face {
          font-family: 'Blink Twice';
          src: url('/fonts/BlinkTwice-Regular.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Blink Twice';
          src: url('/fonts/BlinkTwice-Bold.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        /* Typography */
        html, body, #__next { font-family: var(--font-body); color: var(--brand-ink); }
        h1,h2,h3, .font-bold { font-family: var(--font-heading); }

        /* Brand color overrides for Tailwind green- classes used in this page */
        .text-green-100 { color: var(--brand-cream) !important; }
        .text-green-200 { color: var(--brand-cream) !important; }
        .text-green-300 { color: var(--brand-cream) !important; }
        .text-green-500 { color: var(--brand-peach) !important; }
        .text-green-600 { color: var(--brand-green) !important; }
        .text-green-700 { color: var(--brand-green-900) !important; }

        .bg-green-50 { background-color: var(--brand-cream) !important; }
        .bg-green-100 { background-color: rgba(23,51,25,0.06) !important; }
        .bg-green-500 { background-color: var(--brand-green) !important; }
        .bg-green-600 { background-color: var(--brand-green) !important; }

        .border-green-200 { border-color: rgba(23,51,25,0.12) !important; }

        /* Tailwind gradient variables used on elements in this file */
        .from-green-600 { --tw-gradient-from: var(--brand-green) !important; }
        .via-emerald-700 { --tw-gradient-stops: var(--brand-green), var(--brand-green-900) !important; }
        .to-emerald-700 { --tw-gradient-to: var(--brand-green-900) !important; }
        .from-green-50 { --tw-gradient-from: var(--brand-cream) !important; }
        .to-emerald-100 { --tw-gradient-to: var(--brand-cream) !important; }
        .from-green-700 { --tw-gradient-from: var(--brand-green) !important; }
        .to-teal-800 { --tw-gradient-to: var(--brand-green-900) !important; }

        /* Gray -> brand ink mapping */
        .text-gray-900, .text-gray-800 { color: var(--brand-ink) !important; }
        .text-gray-700, .text-gray-600, .text-gray-500 { color: rgba(5,17,6,0.75) !important; }

        .text-white { color: var(--brand-white) !important; }
        .bg-white { background-color: var(--brand-white) !important; }

        /* Footer safe override */
        .footer { background: var(--brand-ink) !important; color: var(--brand-white) !important; }

        /* Links */
        a { color: var(--brand-green) !important; }

      `}</style>

      <main className="flex-1 w-full overflow-hidden">
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-br from-green-700 via-emerald-700 to-teal-800 min-h-[70vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #173319 0%, #0a1a0c 60%)" }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 2 }}
              className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full"
            />
          </div>

          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span
                className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                style={{ backgroundColor: "rgba(23,51,25,0.12)", color: "#fffbe5" }}
              >
                Trusted Since 2014
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Building Dreams,
              <br />
              <span style={{ color: "#fffbe5" }}>One Property</span> at a Time
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              From <span className="font-semibold text-white">OSR Realtors</span> to{" "}
              <span className="font-semibold text-white">Green Acres Realty</span> - 
              Carrying forward a legacy of <span className="text-green-300 font-semibold">trust, innovation, and excellence</span>
            </motion.p>

          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                <motion.div variants={fadeInUp} className="mb-6">
                  <span className="text-green-600 font-semibold text-lg">OUR JOURNEY</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                    From Vision to <span className="text-green-600">Reality</span>
                  </h2>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    In <span className="font-semibold text-gray-900">2014</span>,{" "}
                    <span className="font-semibold text-green-700">Rishabh Tewani</span> founded{" "}
                    <span className="font-semibold text-gray-900">OSR Realtors</span> with a vision: 
                    to bring <span className="text-green-600">transparency and professionalism</span> to real estate.
                  </p>
                  <p>
                    Over <span className="font-semibold text-green-700">11+ years</span>, we've built a reputation for 
                    <span className="text-green-600"> trust and excellence</span>, guiding countless clients with care.
                  </p>
                  <p>
                    Today, as <span className="font-semibold text-green-700">Green Acres Realty</span>, co-founded by{" "}
                    <span className="font-semibold text-gray-900">Kajal Kundani</span>, we continue this 
                    legacy with innovation and modern partnership values.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl border border-green-200">
                  <div className="space-y-8">
                    {[
                      { year: "2014", event: "OSR Realtors Founded", desc: "Rishabh Tewani establishes the foundation" },
                      { year: "2014-2023", event: "Building Excellence", desc: "11+ years of trusted service" },
                      { year: "Present", event: "Green Acres Realty", desc: "Modern partnership with Kajal Kundani" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-green-700">{item.year}</span>
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="font-semibold text-gray-900">{item.event}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-gradient-to-r from-gray-50 to-green-50/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Numbers That <span className="text-green-600">Tell Our Story</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our journey is measured not just in years, but in successful partnerships and satisfied clients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">
                    {statsInView && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{stat.label}</h3>
                  <p className="text-gray-500 leading-relaxed">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section ref={missionRef} className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white shadow-xl"
                style={{ background: "linear-gradient(135deg, #173319, #0a1a0c)" }}
              >
                <div className="text-4xl mb-4">🌅</div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-xl leading-relaxed text-green-100">
                  To redefine real estate by making property ownership and investment 
                  <span className="font-semibold text-white"> seamless, affordable, and accessible for everyone</span>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4 text-green-600">🎯</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={missionInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <p className="text-gray-700 text-lg">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-green-600 font-semibold text-lg">MEET THE LEADERS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                The Minds Behind <span className="text-green-600">Green Acres</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Passionate professionals dedicated to transforming your real estate dreams into reality
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {[
                {
                  name: "Rishabh Tewani",
                  role: "Founder & Visionary",
                  bio: "With 11+ years in real estate, Rishabh founded OSR Realtors in 2014 and has built a reputation for trust, transparency, and exceptional client service.",
                  initials: "RT",
                  color: "from-green-600 to-emerald-700",
                },
                {
                  name: "Kkajal Kundnani",
                  role: "Co-Founder & Strategist",
                  bio: "Bringing fresh perspective and strategic vision, Kajal ensures Green Acres Realty delivers innovative solutions while maintaining our core values.",
                  initials: "KK",
                  color: "from-blue-600 to-cyan-700",
                },
              ].map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className={`h-48 bg-gradient-to-r ${member.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-4xl font-bold text-white">{member.initials}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
}
