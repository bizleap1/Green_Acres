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
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Popup state
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleSubmit = () => {
    if (!name || !mobile) return alert("Please fill all fields!");
    const message = `Hello! I want the price details for ${property?.name}. My name is ${name}, Mobile: ${mobile}`;
    const whatsappURL = `https://wa.me/919767312345?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
    setShowPopup(false);
    setName("");
    setMobile("");
  };

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
          <div>
            {/* Removed price */}
            <button
              onClick={() => setShowPopup(true)}
              className="bg-[#173319] text-white py-2.5 px-6 rounded-lg font-semibold hover:bg-[#0a1a0c] transition"
            >
              View Price
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <div className="relative w-full h-80 lg:h-[500px] mb-4 bg-gray-900">
            <img
              src={property.images[selectedImage]}
              alt={property.name}
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => setIsFullscreen(true)}
            />
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  ›
                </button>
              </>
            )}
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square overflow-hidden border-2 transition-all ${
                  selectedImage === idx
                    ? "border-green-500 scale-105"
                    : "border-gray-300 hover:scale-105"
                }`}
              >
                <img
                  src={img}
                  alt={`${property.name} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Fullscreen Modal */}
        {isFullscreen && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={property.images[selectedImage]}
                alt={property.name}
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full hover:bg-opacity-70 transition-colors"
                onClick={() => setIsFullscreen(false)}
              >
                ✕
              </button>
              {property.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full hover:bg-opacity-70 transition-colors"
                    onClick={prevImage}
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 w-10 h-10 rounded-full hover:bg-opacity-70 transition-colors"
                    onClick={nextImage}
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>
        )}

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

      {/* WHATSAPP POPUP */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[999] px-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white p-8 rounded-2xl w-full max-w-md relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            <h2 className="text-center font-bold text-2xl mb-4 text-[#173319]">
              Get Price Details
            </h2>

            <p className="text-center text-sm mb-4 text-gray-600">{property.name}</p>

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

      <Footer />
    </div>
  );
}
