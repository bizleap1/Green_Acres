"use client";

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import properties from "../data/properties.json";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Properties() {
  const [filter, setFilter] = useState("all");
  const [hoveredProperty, setHoveredProperty] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
const [showPricePopup, setShowPricePopup] = useState(false);


  const { ref: propertiesRef, inView: propertiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // ✅ Apply filter
  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((p) => p.type?.toLowerCase() === filter);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const filterButtons = [
    { key: "all", label: "All Properties" },
    { key: "house", label: "Houses" },
    { key: "apartment", label: "Apartments" },
    { key: "villa", label: "Villas" },
    { key: "commercial", label: "Commercial" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Properties - Green Acres Realty | Premium Real Estate Listings</title>
        <meta
          name="description"
          content="Discover premium properties with Green Acres Realty. Browse houses, apartments, villas, and commercial spaces with 11+ years of trusted expertise."
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

      {/* Global brand styles & Tailwind-class overrides */}
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
          className="relative bg-gradient-to-br from-green-700 via-emerald-700 to-teal-800 min-h-[60vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden"
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
                Premium Properties
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Discover Your
              <br />
              <span style={{ color: "#fffbe5" }}>Dream Property</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Curated selection of <span className="font-semibold text-white">premium homes</span> and 
              <span className="font-semibold text-white"> investment opportunities</span> with 
              <span className="text-green-300 font-semibold"> 11+ years of trusted expertise</span>
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

        {/* Filters Section */}
        <section className="py-12 bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {filterButtons.map((button) => (
                <motion.button
                  key={button.key}
                  onClick={() => setFilter(button.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
                    filter === button.key
                      ? "bg-green-600 text-white shadow-lg shadow-green-600/25 border-green-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-green-600 hover:text-green-600 hover:bg-green-50/50"
                  }`}
                >
                  {button.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Results Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-6"
            >
              <p className="text-gray-600">
                Showing <span className="font-bold text-green-600">{filteredProperties.length}</span>{" "}
                {filteredProperties.length === 1 ? "property" : "properties"}
                {filter !== "all" && (
                  <span> in <span className="font-semibold text-gray-800">{filter}s</span></span>
                )}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Properties Grid */}
        <section ref={propertiesRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-6">
    {filteredProperties.length > 0 ? (
      <motion.div
        initial="initial"
        animate={propertiesInView ? "animate" : "initial"}
        variants={staggerChildren}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {filteredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            variants={fadeInUp}
            initial="initial"
            animate={propertiesInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
          >
            {/* Property Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={property.images[0]}
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full text-white font-semibold"
                style={{ backgroundColor: "#173319" }}>
                {property.status || "Available"}
              </span>
            </div>

            {/* Property Details */}
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 truncate">{property.name}</h3>
              <p className="text-sm font-medium text-gray-500 flex items-center gap-1">
                📍 {property.location}
              </p>

              <div className="flex flex-wrap gap-2">
                {property.bhk?.split(",").map((unit, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#fffbe5] text-[#173319] border border-[#D4A89C] rounded-md text-[12px] font-medium"
                  >
                    {unit.trim()} BHK
                  </span>
                ))}
              </div>

              <p className="text-base font-semibold text-[#173319]">📐 {property.sqft?.toLocaleString()} sqft</p>

              {/* CTA Buttons */}
              <button
  onClick={() => {
    setSelectedProperty(property);
    setShowPricePopup(true);
  }}
  className="w-full bg-[#173319] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0a1a0c] transition"
>
  View Price
</button>


              <Link
                href={`/propertyview?id=${property.id}`}
                className="block bg-white border border-[#173319] text-[#173319] py-2.5 rounded-lg text-center font-semibold hover:bg-[#173319] hover:text-white transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ) : (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🏡</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">No Properties Found</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          We couldn't find any properties matching your current filter.
        </p>
        <button
          onClick={() => setFilter("all")}
          className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          View All Properties
        </button>
      </div>
    )}
  </div>
  
</section>

        
      </main>

      <Footer />
    </div>
  );
}