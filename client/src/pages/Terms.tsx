import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Terms() {
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
              <a href="/pricing" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Pricing</a>
              <a href="/contact" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Contact</a>
              <Button className="bg-[#2c3e50] hover:bg-[#1a1a1a]">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[#2c3e50] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on SerpFlow AI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">3. Disclaimer</h2>
                <p>
                  The materials on SerpFlow AI's website are provided on an 'as is' basis. SerpFlow AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">4. Limitations</h2>
                <p>
                  In no event shall SerpFlow AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SerpFlow AI's website, even if SerpFlow AI or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on SerpFlow AI's website could include technical, typographical, or photographic errors. SerpFlow AI does not warrant that any of the materials on its website are accurate, complete, or current. SerpFlow AI may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">6. Links</h2>
                <p>
                  SerpFlow AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SerpFlow AI of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">7. Modifications</h2>
                <p>
                  SerpFlow AI may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">9. Service Terms</h2>
                <p>
                  <strong>SEO Services:</strong> Our SEO services are provided on a monthly basis. Results may vary depending on competition, current website state, and industry. We recommend a minimum of 3 months to see meaningful results.
                </p>
                <p className="mt-4">
                  <strong>AI Automation Services:</strong> AI automation services are customized based on your business needs. Setup and testing are included. Custom training and modifications may incur additional fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">10. Payment Terms</h2>
                <p>
                  Payment is due at the beginning of each billing cycle. We accept multiple payment methods including Stripe, PayPal, Razorpay, Google Pay, UPI, and bank transfers. Refunds are subject to our refund policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">11. Cancellation</h2>
                <p>
                  You may cancel your service at any time. Cancellations must be submitted in writing. No refunds are provided for partial months.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Last Updated: March 15, 2026
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#2c3e50] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help your business grow with SEO and AI automation.
            </p>
            <Button size="lg" className="bg-white text-[#2c3e50] hover:bg-gray-100">
              Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#about" className="hover:text-white">About Us</a></li>
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
