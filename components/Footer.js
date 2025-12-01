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
    <footer className="bg-white text-[#173319]">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-[#173319]">Green Acres Realty</h2>
          <p className="text-gray-700 text-sm">
            Helping you find the perfect property — residential, commercial, and investment listings with trusted service.
          </p>
          <div className="flex space-x-3 mt-2 text-[#D4A89C]">
            <a href="#" className="hover:text-[#173319] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#173319] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#173319] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#173319] transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#173319]">Quick Links</h3>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#D4A89C] transition font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#173319]">Contact Us</h3>
          <p className="text-gray-700 text-sm">Mumbai</p>
          <p className="text-gray-700 text-sm">Phone: +91 97673 12345</p>
          <p className="text-gray-700 text-sm">Email: info.greenacresrealty@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Green Acres Realty — All rights reserved.
      </div>
    </footer>
  );
}
