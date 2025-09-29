import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import properties from "../data/properties.json";
import Link from "next/link";
import { useState } from "react";

export default function Properties() {
  const [filter, setFilter] = useState("all");

  // ✅ Apply filter
  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((p) => p.type?.toLowerCase() === filter);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>All Properties | Green Acres Realty</title>
        <meta
          name="description"
          content="Browse all available properties with Green Acres Realty"
        />
      </Head>

      <Header />

      <main className="flex-1">
        {/* HERO IMAGE HEADER */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <img
            src="/images/hero.jpg" // 🔥 replace with your own image
            alt="Properties"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Your Perfect Property
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Browse through our extensive collection of premium properties
            </p>
          </div>
        </section>

        {/* FILTERS */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {["all", "house", "apartment", "villa"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    filter === type
                      ? "bg-green-500 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {type === "all"
                    ? "All Properties"
                    : type.charAt(0).toUpperCase() + type.slice(1) + "s"}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PROPERTIES GRID */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 group"
                  >
                    {/* Property Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={property.images[0]}
                        alt={property.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {property.status || "Available"}
                        </span>
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                          {property.name}
                        </h3>
                        <span className="text-2xl font-bold text-green-600">
                          {property.price}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-600 mb-4">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {property.location}
                      </div>

                      <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-800">
                            {property.sqft.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">SQ FT</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-800">
                            {property.bedrooms || 3}
                          </div>
                          <div className="text-sm text-gray-600">BEDS</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-800">
                            {property.bathrooms || 2}
                          </div>
                          <div className="text-sm text-gray-600">BATHS</div>
                        </div>
                      </div>

                      <Link
                        href={`/propertyview?id=${property.id}`}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                      >
                        View Full Details
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-lg">
                No properties available in this category.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
