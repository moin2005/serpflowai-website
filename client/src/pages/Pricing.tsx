import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Rocket, TrendingUp, Zap, Trophy } from "lucide-react";
import { useState } from "react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import MobileNav from "@/components/MobileNav";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663440467419/P3fiAVfaV8omLzzwuQ3DCY/pasted_file_ANmRGr_image_89f60f74.png";

export default function Pricing() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const seoPlans = [
    {
      name: "SEO Starter",
      price: 25,
      inrPrice: "₹2,327",
      description: "Best for new websites starting SEO",
      features: [
        "Basic Website SEO Audit",
        "Keyword Research (5–10 keywords)",
        "On-Page SEO Optimization",
        "Meta Title and Description Optimization",
        "Basic Technical SEO Fixes",
        "Google Search Console Setup",
        "Monthly SEO Report",
      ],
      buttonText: "Get Started",
      buttonLink: "https://rzp.io/rzp/xnDeOHc",
      popular: false,
    },
    {
      name: "SEO Growth",
      price: 49,
      inrPrice: "₹4,561",
      description: "Best for businesses wanting consistent rankings",
      features: [
        "Everything in Starter +",
        "Advanced Keyword Research (15–25 keywords)",
        "Competitor Analysis",
        "Technical SEO Optimization",
        "Internal Linking Optimization",
        "2 SEO Blog Posts per Month",
        "SEO Performance Tracking",
      ],
      buttonText: "Get Started",
      buttonLink: "https://rzp.io/rzp/HAyNETGi",
      popular: true,
    },
    {
      name: "SEO Enterprise",
      price: 75,
      inrPrice: "₹6,981",
      description: "Best for businesses wanting aggressive growth",
      features: [
        "Everything in Growth +",
        "Full Website SEO Audit",
        "30+ Keyword Targeting",
        "Advanced Technical SEO Optimization",
        "Content Strategy",
        "4 SEO Blog Posts per Month",
        "Conversion Optimization Suggestions",
        "Priority Support",
      ],
      buttonText: "Get Started",
      buttonLink: "https://rzp.io/rzp/K0airG1p",
      popular: false,
    },
  ];

  const aiPlans = [
    {
      name: "AI Starter",
      price: 49.99,
      inrPrice: "₹4,623",
      description: "Perfect for businesses new to automation",
      features: [
        "AI Chatbot Setup for Website",
        "Lead Capture Automation",
        "FAQ Automation",
        "Basic CRM Integration",
        "Setup and Testing",
      ],
      buttonText: "Get Started",
      buttonLink: "https://rzp.io/rzp/IkTlTrq",
      popular: false,
    },
    {
      name: "AI Growth",
      price: 69.99,
      inrPrice: "₹6,472",
      description: "For scaling your automation",
      features: [
        "Everything in Starter +",
        "Advanced AI Chatbot",
        "Email Automation",
        "Lead Qualification Bot",
        "Workflow Automation",
        "CRM Integration",
      ],
      buttonText: "Get Started",
      buttonLink: "https://rzp.io/rzp/o4xXPfQ",
      popular: false,
    },
    {
      name: "AI Enterprise",
      price: 89.99,
      inrPrice: "₹8,320",
      description: "Complete automation solution",
      features: [
        "Everything in Growth +",
        "AI Customer Support Bot",
        "Appointment Booking Automation",
        "Advanced Workflow Automation",
        "Multi-Channel Integration",
        "Custom AI Training",
      ],
      buttonText: "Get Started",
      buttonLink: "https://rzp.io/rzp/idBJLBtS",
      popular: false,
    },
  ];

  const gbpPlans = [
    {
      name: "Starter Optimization",
      price: 49,
      inrPrice: "₹4,050",
      description: "Perfect for small businesses",
      features: [
        "Business description optimization with keywords",
        "Services & products listing setup",
        "Basic review management guide",
        "Google Maps ranking optimization",
        "Monthly optimization report",
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      popular: false,
    },
    {
      name: "Growth Optimization",
      price: 99,
      inrPrice: "₹8,200",
      description: "For growing businesses",
      features: [
        "Everything in Starter +",
        "Advanced keyword optimization",
        "Review generation strategy",
        "Customer Q&A management",
        "Photo optimization & updates",
        "Bi-weekly performance tracking",
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      popular: true,
    },
    {
      name: "Enterprise Optimization",
      price: 199,
      inrPrice: "₹16,500",
      description: "Complete solution for maximum visibility",
      features: [
        "Everything in Growth +",
        "Multi-location management",
        "Advanced review strategy & response",
        "Competitor analysis",
        "Custom campaigns for calls & walk-ins",
        "Priority support & weekly updates",
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How are your pricing tiers determined?",
      answer: "Our pricing is customized based on your business size, industry, current marketing efforts, and specific goals. We'll discuss your needs during a free consultation to provide an accurate quote.",
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we work with clients on flexible payment arrangements. We accept Stripe, PayPal, Razorpay (for India), and bank transfers via Wise.",
    },
    {
      question: "What's included in the audit?",
      answer: "Our comprehensive audit includes technical SEO analysis, on-page optimization review, competitor analysis, keyword research, and actionable recommendations using professional tools.",
    },
    {
      question: "How long does it take to see results?",
      answer: "SEO typically shows results within 3-6 months depending on competition and current website state. AI automation can show immediate results in lead capture and customer engagement.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a contract or long-term commitment?",
      answer: "No long-term contracts required. You can cancel anytime, but we recommend at least 3 months to see meaningful SEO results.",
    },
  ];

  const bundles = [
    {
      icon: Zap,
      emoji: "🤖",
      name: "AI + SEO Combo",
      description: "Combine automation with SEO growth",
      includes: ["SEO Growth ($49/month)", "AI Starter ($49.99/month)"],
      price: "$85",
      priceNote: "/month",
      buttonText: "Get Started",
      buttonLink: "/contact",
    },
    {
      icon: Trophy,
      emoji: "🏆",
      name: "GBP + SEO Bundle",
      description: "Combine Google Business Profile with SEO",
      includes: ["GBP Growth Optimization ($99)", "SEO Growth 6 months ($294)"],
      price: "$299",
      priceNote: "flat",
      buttonText: "Get Started",
      buttonLink: "/contact",
    },
  ];

  const paymentMethods = [
    {
      name: "Razorpay",
      description: "Indian payment gateway for all payment methods",
      icon: "🏦",
    },
    {
      name: "Google Pay",
      description: "Fast and secure payments via Google Pay",
      icon: "📱",
    },
    {
      name: "UPI",
      description: "Direct UPI transfers (PhonePe, Paytm, BHIM)",
      icon: "💰",
    },
    {
      name: "Bank Transfer",
      description: "Direct bank transfers via Wise for international clients",
      icon: "🏧",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Navigation */}
      <MobileNav logoUrl={LOGO_URL} onStrategyCallClick={() => setShowLeadForm(true)} />

      {/* Desktop Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <img src={LOGO_URL} alt="SerpFlow AI" className="h-10 w-10" />
              <span className="font-bold text-lg text-[#2c3e50]">SerpFlow AI</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Home</a>
              <a href="/#services" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Services</a>
              <a href="/#about" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">About</a>
              <a href="/#blog" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Blog</a>
              <a href="/pricing" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Pricing</a>
              <a href="/#audit" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Free Audit</a>
              <a href="/contact" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Contact</a>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-2 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white rounded-md font-medium transition-colors">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Transparent Pricing
            </h1>
            <p className="text-lg text-gray-600">
              Choose the perfect plan for your business. Scale up as you grow.
            </p>
          </div>
        </section>

        {/* SEO Pricing */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                SEO Services
              </h2>
              <p className="text-gray-600">Professional SEO packages to boost your online visibility</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {seoPlans.map((plan, i) => (
                <Card key={i} className={`p-8 relative ${plan.popular ? "border-2 border-yellow-500 shadow-lg" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#2c3e50] mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#2c3e50]">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.inrPrice}/month</span>
                  </div>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white mb-8"
                    onClick={() => window.open(plan.buttonLink, "_blank")}
                  >
                    {plan.buttonText}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Pricing */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                AI Automation Services
              </h2>
              <p className="text-gray-600">Automate your business processes with AI-powered solutions</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {aiPlans.map((plan, i) => (
                <Card key={i} className={`p-8 ${plan.popular ? "border-2 border-yellow-500 shadow-lg" : ""}`}>
                  <h3 className="text-2xl font-bold text-[#2c3e50] mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#2c3e50]">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.inrPrice}/month</span>
                  </div>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white mb-8"
                    onClick={() => window.open(plan.buttonLink, "_blank")}
                  >
                    {plan.buttonText}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Google Business Profile Optimization Pricing */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Google Business Profile Optimization
              </h2>
              <p className="text-gray-600">Optimize your Google Business Profile to increase visibility, attract more customers, and boost calls and walk-ins</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {gbpPlans.map((plan, i) => (
                <Card key={i} className={`p-8 ${plan.popular ? "border-2 border-yellow-500 shadow-lg" : ""}`}>
                  {plan.popular && <div className="text-center mb-4"><span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span></div>}
                  <h3 className="text-2xl font-bold text-[#2c3e50] mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#2c3e50]">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.inrPrice}</span>
                  </div>
                  <a
                    href={plan.buttonLink}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white rounded-md font-medium transition-colors mb-8"
                  >
                    {plan.buttonText}
                  </a>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Service Bundles */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Recommended Service Bundles
              </h2>
              <p className="text-gray-600">Combine services for maximum value and better results</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {bundles.map((bundle, i) => {
                const BundleIcon = bundle.icon;
                return (
                  <Card key={i} className="p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">{bundle.emoji}</span>
                          <h3 className="text-2xl font-bold text-[#2c3e50]">{bundle.name}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{bundle.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6 py-6 border-t border-b border-gray-200">
                      <p className="text-sm text-gray-600 font-medium mb-3">What's Included:</p>
                      <ul className="space-y-2">
                        {bundle.includes.map((item, j) => (
                          <li key={j} className="flex gap-2 text-gray-700 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[#2c3e50]">{bundle.price}</span>
                        <span className="text-gray-600 text-sm">{bundle.priceNote}</span>
                      </div>
                    </div>
                    
                    <a
                      href={bundle.buttonLink}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white rounded-md font-medium transition-colors"
                    >
                      {bundle.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Card>
                );
              })}
            </div>
            <div className="mt-12 p-8 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-center text-gray-700">
                <strong>💡 Tip:</strong> Bundles are customizable. Contact us to discuss which combination works best for your business goals.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center" style={{ fontFamily: "Playfair Display, serif" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full p-6 text-left font-bold text-[#2c3e50] hover:bg-gray-50 flex justify-between items-center"
                  >
                    {faq.question}
                    <span className={`transform transition-transform ${faqOpen === i ? "rotate-180" : ""}`}>▼</span>
                  </button>
                  {faqOpen === i && (
                    <div className="p-6 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#2c3e50] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Ready to grow your business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get a free consultation to discuss which plan is best for your needs.
            </p>
            <button onClick={() => setShowLeadForm(true)} className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#2c3e50] hover:bg-gray-100 rounded-md font-medium transition-colors">
              Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center" style={{ fontFamily: "Playfair Display, serif" }}>
              Payment Methods We Accept
            </h2>
            <div className="grid md:grid-cols-5 gap-6 mb-12">
              {paymentMethods.map((method, i) => (
                <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h4 className="font-bold text-[#2c3e50] mb-2">{method.name}</h4>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </Card>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4">
                All payments are processed securely with industry-standard encryption. We support multiple payment methods to make it convenient for clients worldwide. For custom payment arrangements or invoicing, please contact us directly at <strong>serpflowai@gmail.com</strong> or call <strong>+91 9580601297</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center" style={{ fontFamily: "Playfair Display, serif" }}>
              Professional Tools & Technologies
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We use industry-leading tools and cutting-edge AI technology to deliver exceptional results for our clients.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                { title: "Google Search Console", desc: "Monitor how Google crawls your site, identify indexing issues, and track search performance." },
                { title: "Screaming Frog", desc: "Technical SEO crawler to identify broken links, duplicate content, and crawl errors." },
                { title: "Google PageSpeed Insights", desc: "Analyze page speed and performance metrics on mobile and desktop devices." },
                { title: "Ubersuggest", desc: "Comprehensive SEO tool for keyword research, competitor analysis, and backlink tracking." },
                { title: "SEMrush", desc: "Competitor analysis and keyword research to find growth opportunities." },
                { title: "Ahrefs", desc: "Backlink analysis and competitor research for link-building opportunities." },
                { title: "AI Automation Platforms", desc: "Advanced AI tools for chatbots, lead qualification, and workflow automation." },
                { title: "Custom AI Solutions", desc: "Tailored AI implementations for your specific business needs and processes." },
              ].map((tool, i) => (
                <div key={i} className="border-l-4 border-[#2c3e50] pl-6 py-2">
                  <h4 className="font-bold text-[#2c3e50] mb-2">{tool.title}</h4>
                  <p className="text-gray-600 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-bold text-[#2c3e50] mb-4">Why These Tools Matter</h3>
              <p className="text-gray-700 mb-4">
                We invest in the best tools because they directly impact the quality of our work. These platforms allow us to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Conduct thorough technical SEO audits and identify optimization opportunities</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Track your rankings and monitor competitor activity in real-time</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Implement advanced AI automation to save you time and improve efficiency</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Provide data-driven recommendations backed by professional analysis</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Deliver transparent reporting so you always know what we're doing and why</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lead Capture Form Modal */}
        <LeadCaptureForm isOpen={showLeadForm} onClose={() => setShowLeadForm(false)} formType="strategy-call" />
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
                <li><a href="#" className="hover:text-white">SEO Services</a></li>
                <li><a href="#" className="hover:text-white">AI Automation</a></li>
                <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
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
