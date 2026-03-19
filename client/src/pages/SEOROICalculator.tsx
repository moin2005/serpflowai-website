import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

const LOGO_URL = "https://cdn.manus.app/webdev/pasted_file_ANmRGr_image.png";

export default function SEOROICalculator() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src={LOGO_URL} alt="SerpFlow AI" className="h-10 w-auto" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-gray-900 transition">Home</a>
            </Link>
            <Link href="/">
              <a className="text-gray-700 hover:text-gray-900 transition">Services</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-700 hover:text-gray-900 transition">Blog</a>
            </Link>
            <Link href="/pricing">
              <a className="text-gray-700 hover:text-gray-900 transition">Pricing</a>
            </Link>
            <Link href="/seo-roi-calculator">
              <a className="text-gray-700 hover:text-gray-900 transition font-semibold text-blue-600">
                Free SEO ROI Calculator
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-700 hover:text-gray-900 transition">Contact</a>
            </Link>
            <button
              onClick={() => setShowLeadForm(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Free SEO ROI Calculator for Small Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Estimate how much revenue your business can generate with SEO in minutes.
          </p>
        </div>
      </section>

      {/* Tool Embed Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50 p-4 md:p-6">
              <iframe
                src="https://file-change-ask--moinin1085.replit.app"
                width="100%"
                height="700"
                style={{
                  border: "none",
                  borderRadius: "12px",
                  minHeight: "700px",
                }}
                title="SEO ROI Calculator"
                loading="lazy"
              />
            </div>

            {/* Open Full Tool Button */}
            <div className="mt-6 text-center">
              <a
                href="https://file-change-ask--moinin1085.replit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-medium"
              >
                Open Full Tool in New Tab
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want us to achieve these results for your business?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We help businesses increase traffic, leads, and revenue using proven SEO strategies.
          </p>
          <button
            onClick={() => setShowLeadForm(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium text-lg"
          >
            Get Free SEO Audit
          </button>
        </div>
      </section>

      {/* Lead Form Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Book Your Free Strategy Call</h3>
              <button
                onClick={() => setShowLeadForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website / Business Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your website or business"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your business..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">SerpFlow AI</h3>
              <p className="text-sm">Helping businesses grow with SEO and AI automation.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/">
                    <a className="hover:text-white transition">SEO Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="hover:text-white transition">AI Automation</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog">
                    <a className="hover:text-white transition">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-white transition">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy">
                    <a className="hover:text-white transition">Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <a className="hover:text-white transition">Terms of Service</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 SerpFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
