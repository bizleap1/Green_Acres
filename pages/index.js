import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import properties from "../data/properties.json";
import Link from "next/link";
import { motion } from "framer-motion";
import WhyChooseGreenAcres from "../components/Whychoose";
import WhyChooseUs from "../components/Testimonial";
import { useState } from "react";

export default function Home() {
  const featured = properties.slice(0, 4);

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = () => {
    if (!name || !mobile) return alert("Please fill all fields!");

    const message = `Hello! I want the price details for ${selectedProperty?.name}. My name is ${name}, Mobile: ${mobile}`;
    const whatsappURL = `https://wa.me/919833398980?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
    setSelectedProperty(null);
    setName("");
    setMobile("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Green Acres Realty | Premium Properties</title>
        <meta
          name="description"
          content="Premium properties with Green Acres Realty"
        />
      </Head>

      <Header />

      <style jsx global>{`
        :root {
          --brand-white: #ffffff;
          --brand-cream: #fffbe5;
          --brand-peach: #d4a89c;
          --brand-green: #173319;
          --brand-green-900: #0a1a0c;
          --brand-ink: #051106;
        }
        .text-green-400 { color: var(--brand-peach) !important; }
        .text-green-500 { color: var(--brand-peach) !important; }
        .text-green-600 { color: var(--brand-green) !important; }
        .bg-green-500 { background-color: var(--brand-green) !important; }
        .bg-green-600 { background-color: var(--brand-green-900) !important; }
        .border-green-200 { border-color: rgba(23, 51, 25, 0.12) !important; }
        .bg-gray-50 { background-color: var(--brand-cream) !important; }
      `}</style>

      <main className="flex-1">
        {/* HERO */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <img
            src="/images/hero2.jpg"
            alt="Luxury Homes"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-blink font-extrabold leading-tight mb-4 text-white"
            >
              Discover Your{" "}
              <span style={{ color: "#D4A89C" }}>Dream Home</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-dmserif"
            >
              Explore handpicked premium properties with trust and expertise
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/properties"
                className="px-6 py-3 md:px-8 md:py-4 bg-[#173319] text-white font-semibold rounded-lg hover:bg-[#0a1a0c] transition transform hover:scale-105 shadow-lg"
              >
                Explore Properties
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 md:px-8 md:py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#173319] transition"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED PROPERTIES */}
        <section className="py-20 bg-white">
          <div className="text-center mb-12 px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured <span style={{ color: "#D4A89C" }}>Properties</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              A selection of handpicked premium homes for a luxurious lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto">
            {featured.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 group transition"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full text-white font-semibold tracking-wide"
                    style={{ backgroundColor: "#173319" }}
                  >
                    {property.status}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 truncate">
                    {property.name}
                  </h3>

                  <p className="text-sm font-medium text-gray-500 flex items-center gap-1">
                    📍 {property.location}
                  </p>

                  {/* Sqft + BHK */}
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-[#173319]">
                      📐 {property.sqft} sqft
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {property.bhk.split(",").map((unit, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-[#fffbe5] text-[#173319] border border-[#D4A89C] rounded-md text-[12px] font-medium"
                        >
                          {unit.trim()} BHK
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSelectedProperty(property)}
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
          </div>

          {/* VIEW MORE */}
          <div className="flex justify-center mt-12">
            <Link
              href="/properties"
              className="px-10 py-4 rounded-lg text-white font-semibold shadow-md hover:shadow-xl transition"
              style={{ backgroundColor: "#173319" }}
            >
              View More Properties
            </Link>
          </div>
        </section>
      </main>

      {/* POPUP FORM */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[999] px-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md relative shadow-xl">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setSelectedProperty(null)}
            >
              ✕
            </button>

            <h2 className="text-center font-bold text-xl mb-6 text-[#173319]">
              Get Price Details
            </h2>

            <p className="text-center text-sm mb-4 text-gray-600">
              {selectedProperty.name}
            </p>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-3"
            />

            <input
              type="number"
              placeholder="Enter your phone number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-5"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-[#173319] text-white py-3 rounded-lg font-semibold hover:bg-[#0a1a0c] transition"
            >
              Send on WhatsApp ✅
            </button>
          </div>
        </div>
      )}

      <WhyChooseGreenAcres />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
