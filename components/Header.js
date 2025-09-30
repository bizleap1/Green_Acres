"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBuilding, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome className="text-xl" /> },
    { name: "About", href: "/about", icon: <FaInfoCircle className="text-xl" /> },
    { name: "Properties", href: "/properties", icon: <FaBuilding className="text-xl" /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope className="text-xl" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setMobileMenuOpen(false);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#fffbe5] shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Desktop Nav */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#173319] rounded-full flex items-center justify-center text-white font-bold">
            GA
          </div>
          <Link
            href="/"
            className={`font-serif text-xl transition ${
              scrolled ? "text-[#173319] hover:text-[#0a1a0c]" : "text-white"
            }`}
          >
            Green Acres Realty
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-sans transition">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg transition ${
                scrolled
                  ? "text-[#173319] hover:bg-[#D4A89C] hover:text-[#0a1a0c]"
                  : "text-white hover:text-[#D4A89C]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`focus:outline-none transition p-2 rounded-lg ${
              scrolled
                ? "text-[#173319] hover:bg-[#D4A89C]"
                : "text-white hover:bg-white hover:bg-opacity-20"
            }`}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-[#ffffff] shadow-xl transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="bg-[#173319] p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0a1a0c] rounded-full flex items-center justify-center text-white font-bold text-lg">
                GA
              </div>
              <div>
                <div className="text-white font-bold text-lg">Green Acres</div>
                <div className="text-[#D4A89C] text-sm">Realty</div>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#D4A89C] transition-colors p-2"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="p-6">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-xl text-[#173319] hover:bg-[#fffbe5] hover:text-[#0a1a0c] transition-all group"
                >
                  <div className="text-[#0a1a0c] group-hover:text-[#173319] transition-colors">
                    {link.icon}
                  </div>
                  <span className="font-semibold text-lg">{link.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Prevent body scroll when menu is open */}
      <style jsx global>{`
        ${mobileMenuOpen ? `body { overflow: hidden; }` : ""}
      `}</style>
    </header>
  );
}
