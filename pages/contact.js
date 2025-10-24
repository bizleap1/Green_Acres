"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    
    const phoneNumber = '919767312345';
    const message = `*New Contact Request from Green Acres Realty Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Interested In:* ${formData.propertyType || 'Not specified'}

*Message:*
${formData.message}

*Sent via Green Acres Realty Website*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      detail: "+91 97673 12345",
      description: "",
      link: "https://wa.me/919833398980"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      detail: "+91 97673 12345",
      description: "",
      link: "tel:+919767312345"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      detail: "hello@greenacres.com",
      description: "",
      link: ""
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Office",
      detail: "Mumbai, India",
      description: "",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
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

        .text-green-100 { color: var(--brand-cream) !important; }
        .text-green-500 { color: var(--brand-peach) !important; }
        .text-green-600 { color: var(--brand-green) !important; }
        .text-green-700 { color: var(--brand-green-900) !important; }

        .bg-green-50 { background-color: var(--brand-cream) !important; }
        .bg-green-500 { background-color: var(--brand-green) !important; }
        .bg-green-600 { background-color: var(--brand-green) !important; }

        .from-green-600 { --tw-gradient-from: var(--brand-green) !important; }
        .to-emerald-700 { --tw-gradient-to: var(--brand-green-900) !important; }
        .from-green-500 { --tw-gradient-from: var(--brand-green) !important; }
        .to-emerald-600 { --tw-gradient-to: var(--brand-green-900) !important; }
      `}</style>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16"
          style={{ background: "linear-gradient(135deg, #173319 0%, #0a1a0c 100%)" }}
        >
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Ready to find your dream property? We're here to help you every step of the way.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <FaPaperPlane className="text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
                    <p className="text-gray-600">We'll connect you directly via WhatsApp</p>
                  </div>
                </div>

                <form onSubmit={sendToWhatsApp} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interested In
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                      >
                        <option value="">Select property type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Luxury Villa">Luxury Villa</option>
                        <option value="Plot/Land">Plot/Land</option>
                        <option value="Investment">Investment Property</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                      placeholder="Tell us about your requirements, budget, preferred location, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <FaWhatsapp className="text-xl" />
                    Send via WhatsApp
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    You'll be redirected to WhatsApp to send this message directly to our team
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Start a Conversation</h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Whether you're buying, selling, or investing, our team is ready to provide 
                    personalized guidance and expert advice for your real estate journey.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="grid gap-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target={item.title === 'WhatsApp' || item.title === 'Email' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-lg text-gray-700 font-medium">{item.detail}</p>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Quick Action Buttons */}
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white"
                  style={{ background: "linear-gradient(135deg, #173319, #0a1a0c)" }}
                >
                  <h3 className="text-xl font-bold mb-3">Quick Connect</h3>
                  <p className="mb-4 text-green-100">Prefer instant communication?</p>
                  <a
                    href="https://wa.me/919833398980"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition-all duration-300"
                  >
                    <FaWhatsapp className="text-xl" />
                    Chat instantly on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}