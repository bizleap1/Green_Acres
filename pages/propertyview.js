import { useRouter } from "next/router";
import properties from "../data/properties.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function PropertyView() {
  const router = useRouter();
  const { id } = router.query;
  const property = properties.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Property Not Found</h1>
          <button 
            onClick={() => router.back()}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-16 container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex space-x-2 text-sm text-gray-600 mb-8">
          <button onClick={() => router.push('/')} className="hover:text-green-600 transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => router.push('/properties')} className="hover:text-green-600 transition-colors">Properties</button>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{property.name}</span>
        </nav>

        {/* Property Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">{property.name}</h1>
            <p className="text-lg text-gray-600">{property.location}</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-green-600">{property.price}</div>
            <div className="text-sm text-gray-600">Asking Price</div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
          <div className="lg:col-span-3 h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img src={property.images[selectedImage]} alt={property.name} className="w-full h-full object-cover"/>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative h-24 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${selectedImage === idx ? 'ring-4 ring-green-500 scale-105' : 'hover:scale-105'}`}
              >
                <img src={img} alt={`${property.name} view ${idx + 1}`} className="w-full h-full object-cover"/>
              </button>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Property Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">{property.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-200 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{property.sqft.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Square Feet</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{property.bhk}</div>
              <div className="text-sm text-gray-600">BHK</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{property.type}</div>
              <div className="text-sm text-gray-600">Type</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{property.status}</div>
              <div className="text-sm text-gray-600">Status</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
