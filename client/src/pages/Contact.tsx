import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", businessName: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#2c3e50] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-lg text-[#2c3e50]">SerpFlow AI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Home</a>
              <a href="/#services" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Services</a>
              <a href="/#about" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">About</a>
              <a href="/#blog" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Blog</a>
              <a href="/pricing" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Pricing</a>
              <a href="/#audit" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Free Audit</a>
              <a href="/contact" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Contact</a>
              <Button className="bg-[#2c3e50] hover:bg-[#1a1a1a]">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have questions about our SEO and AI automation services? We're here to help. Reach out and let's discuss your business goals.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
                  Send us a Message
                </h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 font-medium">
                      ✓ Thank you for reaching out! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name / Website</label>
                    <Input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Your business name or website"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#2c3e50] hover:bg-[#1a1a1a]">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <Mail className="h-6 w-6 text-[#2c3e50] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[#2c3e50] mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:serpflowai@gmail.com" className="hover:text-[#2c3e50]">
                            serpflowai@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <Phone className="h-6 w-6 text-[#2c3e50] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[#2c3e50] mb-1">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+919580601297" className="hover:text-[#2c3e50]">
                            +91 9580601297
                          </a>
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <MapPin className="h-6 w-6 text-[#2c3e50] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[#2c3e50] mb-1">Response Time</h3>
                        <p className="text-gray-600">
                          We typically respond within 24 hours during business days.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="mt-12 p-6 bg-[#2c3e50] text-white rounded-lg">
                  <h3 className="font-bold mb-2">Ready to Get Started?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Schedule a free strategy call to discuss your SEO and AI automation needs.
                  </p>
                  <Button className="bg-white text-[#2c3e50] hover:bg-gray-100">
                    Book Free Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-gray-900 font-bold">S</span>
                </div>
                <span className="font-bold text-white">SerpFlow AI</span>
              </div>
              <p className="text-sm">Professional SEO and AI automation services for global businesses.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#services" className="hover:text-white">SEO Services</a></li>
                <li><a href="/#services" className="hover:text-white">AI Automation</a></li>
                <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#about" className="hover:text-white">About Us</a></li>
                <li><a href="/#blog" className="hover:text-white">Blog</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 SerpFlow AI. All rights reserved. | Founder: Moin Ur Rahman Siddiqui</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
