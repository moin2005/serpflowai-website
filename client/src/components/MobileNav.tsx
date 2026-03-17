import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  logoUrl: string;
  onStrategyCallClick: () => void;
}

export default function MobileNav({ logoUrl, onStrategyCallClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 md:hidden">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoUrl} alt="SerpFlow AI" className="h-10 w-10" />
            <span className="font-bold text-lg text-[#2c3e50]">SerpFlow AI</span>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#2c3e50]" />
            ) : (
              <Menu className="h-6 w-6 text-[#2c3e50]" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="mt-4 space-y-3 pb-4">
            <a
              href="/"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#blog"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium"
            >
              Blog
            </a>
            <a
              href="/pricing"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium"
            >
              Pricing
            </a>
            <a
              href="#audit"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium"
            >
              Free Audit
            </a>
            <a
              href="/contact"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium"
            >
              Contact
            </a>
            <button
              onClick={() => {
                onStrategyCallClick();
                closeMenu();
              }}
              className="w-full px-4 py-2 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white rounded-md font-medium transition-colors text-sm"
            >
              Book Strategy Call
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
