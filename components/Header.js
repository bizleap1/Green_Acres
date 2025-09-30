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
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      {/* 🔥 Reduced py-2 instead of py-4 */}
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Green Acres Realty Logo"
              className="w-10 h-10 object-contain" // 🔥 smaller logo
            />
            <div className="leading-tight">
              <div
                className="text-xl font-semibold tracking-[0.25em]" // 🔥 smaller text
                style={{
                  background: "linear-gradient(90deg, #d4af37, #cba135, #b8860b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                GREENACRES
              </div>
              <div
                className="text-[10px] tracking-[0.35em] mt-0.5" // 🔥 smaller subtext
                style={{
                  background: "linear-gradient(90deg, #d4af37, #cba135, #b8860b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                REALTY
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-5 font-sans transition">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded-lg transition ${
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
            className={`focus:outline-none transition p-1.5 rounded-lg ${
              scrolled
                ? "text-[#173319] hover:bg-[#D4A89C]"
                : "text-white hover:bg-white hover:bg-opacity-20"
            }`}
          >
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-full bg-white shadow-xl transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="bg-[#173319] p-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Green Acres Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="leading-tight">
                <div
                  className="text-base font-semibold tracking-[0.2em]"
                  style={{
                    background: "linear-gradient(90deg, #d4af37, #cba135, #b8860b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  GREENACRES
                </div>
                <div
                  className="text-[10px] tracking-[0.3em] mt-0.5"
                  style={{
                    background: "linear-gradient(90deg, #d4af37, #cba135, #b8860b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  REALTY
                </div>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#D4A89C] transition-colors p-2"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <div className="space-y-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg text-[#173319] hover:bg-[#fffbe5] hover:text-[#0a1a0c] transition-all group"
                >
                  <div className="text-[#0a1a0c] group-hover:text-[#173319] transition-colors">
                    {link.icon}
                  </div>
                  <span className="font-medium text-base">{link.name}</span>
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
