import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import properties from "../data/properties.json";
import Link from "next/link";
import { motion } from "framer-motion";
import WhyChooseGreenAcres from "../components/Whychoose";
import WhyChooseUs from "../components/Testimonial";

export default function Home() {
  const featured = properties.slice(0, 4); // ✅ Only 4 cards

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
        :root{
          --brand-white: #ffffff;
          --brand-cream: #fffbe5;
          --brand-peach: #D4A89C;
          --brand-green: #173319;
          --brand-green-900: #0a1a0c;
          --brand-ink: #051106;
        }

        .text-green-400 { color: var(--brand-peach) !important; }
        .text-green-500 { color: var(--brand-peach) !important; }
        .text-green-600 { color: var(--brand-green) !important; }

        .bg-green-500 { background-color: var(--brand-green) !important; }
        .bg-green-600 { background-color: var(--brand-green-900) !important; }

        .border-green-200 { border-color: rgba(23,51,25,0.12) !important; }
        
        .bg-gray-50 { background-color: var(--brand-cream) !important; }
      `}</style>

      <main className="flex-1">
        {/* HERO */}
        {/* HERO */}
<section 
  className="relative h-[70vh] flex items-center justify-center overflow-hidden"
>
  {/* Background Image */}
  <img
    src="/images/hero2.jpg" // replace with your hero image
    alt="Luxury Homes"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Text */}
  <div className="relative z-10 text-center px-6">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-blink font-extrabold leading-tight mb-4 text-white"
    >
      Discover Your <span style={{ color: "#D4A89C" }}>Dream Home</span>
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
        <section className="py-16 bg-white">
          <div className="text-center mb-12 px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured <span style={{ color: "#D4A89C" }}>Properties</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              A selection of properties that blend elegance, comfort, and luxury.
            </p>
          </div>

          {/* ✅ Grid instead of scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
            {featured.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden group border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span 
                    className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-xs rounded-full"
                    style={{ backgroundColor: "#173319" }}
                  >
                    {property.status}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold truncate">{property.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{property.location}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-green-600 font-bold text-xl">
                      {property.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {property.sqft} sqft • {property.bhk}
                    </span>
                  </div>
                  <Link
                    href={`/propertyview?id=${property.id}`}
                    className="block bg-green-500 text-white py-2 rounded-lg text-center font-semibold hover:bg-green-600 transition"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <div className="flex justify-center mt-10">
            <Link
              href="/properties"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-green-600 transition shadow-md"
              style={{ backgroundColor: "#173319" }}
            >
              View More Properties
            </Link>
          </div>
        </section>
      </main>
      <WhyChooseGreenAcres/>
      <WhyChooseUs/>
      <Footer />
    </div>
  );
}