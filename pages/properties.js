import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Properties() {
  const properties = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Property ${i + 1}`,
    description: "Beautiful property in prime location with all amenities.",
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Properties - Green Acres Realty</title>
        <meta name="description" content="Explore properties with Green Acres Realty" />
      </Head>

      <Header />

      <main className="flex-1 w-full">
        <section className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-12 text-green-700">Our Properties</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-xl">
                  Image {property.id}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                  <p className="text-gray-600">{property.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
