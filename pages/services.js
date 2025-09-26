import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    { title: "Buying", description: "We help you buy the perfect property easily and securely." },
    { title: "Selling", description: "List your property with us to reach thousands of potential buyers." },
    { title: "Investments", description: "We guide you to invest in properties with high returns." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Services - Green Acres Realty</title>
        <meta name="description" content="Explore services offered by Green Acres Realty" />
      </Head>

      <Header />

      <main className="flex-1 w-full">
        <section className="bg-green-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-12 text-green-700">Our Services</h1>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
