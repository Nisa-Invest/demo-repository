import { NisaLogo } from "../../assets/Nisa_Logo";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-purple text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <NisaLogo className="h-48" />
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">About Us</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Our Services
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>info@nisainvest.io</li>
              <li>(0203) 343-4567</li>
              <li className="whitespace-nowrap">
                123 Healthcare Ave, Medical District
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
                Cookie Policy
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
                HIPAA Compliance
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/20">
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </div>
          <p className="text-sm text-gray-300">
            © 2024 Nisa Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
