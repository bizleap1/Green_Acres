import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us - Green Acres Realty</title>
        <meta name="description" content="Learn more about Green Acres Realty" />
      </Head>

      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative bg-green-100 min-h-[40vh] flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-green-700">
            About Green Acres Realty
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            Trusted real estate services for over 10 years. Helping clients buy, sell, and invest in properties with confidence.
          </p>
        </section>

        {/* Company Story */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-8 text-green-700">Our Story</h2>
          <p className="text-gray-700 text-lg mb-4">
            GREENACRES Realty was founded with a vision to make property buying and selling transparent, simple, and rewarding. Over the years, we have helped countless clients find their dream homes and investment properties.
          </p>
          <p className="text-gray-700 text-lg">
            Our team combines local expertise with industry knowledge to provide personalized services for every client. Your satisfaction is our top priority.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-green-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-green-700">Our Mission</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              To provide trustworthy, professional, and personalized real estate services that make property transactions smooth, secure, and profitable for our clients.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12 text-green-700 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Alice Smith", "Bob Johnson", "Charlie Lee"].map((name, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <div className="h-40 w-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xl mb-4">
                  Photo
                </div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-600">Real Estate Specialist</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
