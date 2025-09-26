import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Green Acres Realty</title>
        <meta name="description" content="Green Acres Realty - Find your home" />
      </Head>

      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative bg-green-100 min-h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-green-700">
            Welcome to GREENACRES Realty
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Helping you find the perfect property — residential, commercial, and investment listings with trusted service.
          </p>
          <div className="flex gap-4">
            <a href="/about" className="px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition">
              About Us
            </a>
            <a href="/contact" className="px-6 py-3 border border-green-600 text-green-600 rounded-md font-semibold hover:bg-green-50 transition">
              Contact
            </a>
          </div>
        </section>

        {/* Properties Section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12 text-green-700">Our Featured Properties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-xl">
                  Image {i + 1}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Property {i + 1}</h3>
                  <p className="text-gray-600">Beautiful property in prime location with all amenities.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-green-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 text-green-700">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-2">Buying</h3>
                <p className="text-gray-600">We help you buy the perfect property easily and securely.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-2">Selling</h3>
                <p className="text-gray-600">List your property with us to reach thousands of potential buyers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-2">Investments</h3>
                <p className="text-gray-600">We guide you to invest in properties with high returns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12 text-green-700">About GREENACRES Realty</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
            GREENACRES Realty has been providing trusted real estate services for over 10 years. Our mission is to help clients find their dream homes and investment properties with ease and confidence. Our team of experienced agents is dedicated to guiding you through every step of the property journey.
          </p>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Whether you are buying, selling, or investing, we ensure a smooth, transparent, and rewarding experience. Your dream property is just a click away.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-green-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-green-700">Get in Touch</h2>
            <p className="text-lg mb-6">Have questions or want to find your perfect property? Reach out to us!</p>
            <a href="/contact" className="px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition">
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
