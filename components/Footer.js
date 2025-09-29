import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Properties", href: "/properties" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-green-50 text-green-800 mt-16">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-green-700">Green Acres Realty</h2>
          <p className="text-green-800 text-sm">
            Helping you find the perfect property — residential, commercial, and investment listings with trusted service.
          </p>
          <div className="flex space-x-3 mt-2 text-green-700">
            <a href="#" className="hover:text-green-900 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-900 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-900 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-green-900 transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-700">Quick Links</h3>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-green-900 transition font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-700">Contact Us</h3>
          <p className="text-green-800 text-sm">Mumbai</p>
          <p className="text-green-800 text-sm">Phone: +91 97691 09898</p>
          <p className="text-green-800 text-sm">Email: info@greenacres.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-200 py-4 text-center text-sm text-green-700">
        © {new Date().getFullYear()} Green Acres Realty — All rights reserved.
      </div>
    </footer>
  );
}
