import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Zap, Brain, TrendingUp, MessageSquare, Calendar, Lightbulb, BarChart3, Shield, Eye, Zap as Lightning, Target } from "lucide-react";
import { useState } from "react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import MobileNav from "@/components/MobileNav";
import AnimatedBackground from "@/components/AnimatedBackground";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663440467419/P3fiAVfaV8omLzzwuQ3DCY/pasted_file_ANmRGr_image_89f60f74.png";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    businessType: "",
  });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formType, setFormType] = useState<"strategy-call" | "seo-audit">("strategy-call");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll contact you soon.");
    setFormData({ name: "", email: "", website: "", businessType: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Navigation */}
      <MobileNav logoUrl={LOGO_URL} onStrategyCallClick={() => { setFormType("strategy-call"); setShowLeadForm(true); }} />

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
              <a href="#services" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">About</a>
              <a href="#blog" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Blog</a>
              <a href="/pricing" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Pricing</a>
              <a href="/seo-roi-calculator" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Free SEO ROI Calculator</a>
              <a href="#audit" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Free Audit</a>
              <a href="/contact" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Contact</a>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-2 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white rounded-md font-medium transition-colors">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-48 overflow-hidden">
          <AnimatedBackground />
          {/* Subtle gradient glow background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#2c3e50] mb-8 md:mb-10 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
              Grow Your Business with SEO & AI Automation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Helping businesses increase visibility, generate leads, and automate operations using modern SEO strategies and AI-powered systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => { setFormType("strategy-call"); setShowLeadForm(true); }} className="inline-flex items-center justify-center px-8 py-4 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white rounded-md font-medium transition-colors shadow-lg hover:shadow-xl">
                Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a href="/pricing" className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2c3e50] text-[#2c3e50] hover:bg-gray-50 rounded-md font-medium transition-colors">
                View SEO Plans
              </a>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900/5 via-white to-slate-900/5 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Shield className="h-8 w-8 text-[#2c3e50]" />
                </div>
                <h3 className="font-bold text-[#2c3e50] mb-3">100% White Hat SEO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We follow Google's guidelines strictly and never use black hat techniques.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Eye className="h-8 w-8 text-[#2c3e50]" />
                </div>
                <h3 className="font-bold text-[#2c3e50] mb-3">Transparent Reporting</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Monthly reports with clear metrics and actionable insights you can understand.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Target className="h-8 w-8 text-[#2c3e50]" />
                </div>
                <h3 className="font-bold text-[#2c3e50] mb-3">ROI-Focused Campaigns</h3>
                <p className="text-gray-600 text-sm">Every strategy is tailored to your business goals and designed to generate measurable results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems & Solutions */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900/3 via-white to-slate-900/3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2c3e50] mb-16" style={{ fontFamily: "Playfair Display, serif" }}>
              Common Business Challenges We Solve
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-6">The Problem</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span className="text-gray-700">Your website isn't ranking for important keywords</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span className="text-gray-700">Low organic traffic and limited lead generation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span className="text-gray-700">Manual, repetitive business tasks consuming time</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span className="text-gray-700">Inefficient customer support and lead qualification</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-6">Our Solution</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Data-driven SEO strategies that improve rankings</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Sustainable organic growth and qualified leads</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AI automation to eliminate repetitive work</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Intelligent systems that scale with your business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900/5 via-slate-50 to-slate-900/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2c3e50] mb-16" style={{ fontFamily: "Playfair Display, serif" }}>
              Why Choose SerpFlow AI
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="p-10 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <Lightning className="h-6 w-6 text-[#2c3e50] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#2c3e50] mb-3">Data-Driven SEO Strategies</h3>
                    <p className="text-gray-600 leading-relaxed">Every decision is backed by comprehensive research, competitor analysis, and performance metrics. We don't guess—we analyze.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-10 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <Eye className="h-6 w-6 text-[#2c3e50] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#2c3e50] mb-3">Transparent Monthly Reporting</h3>
                    <p className="text-gray-600 leading-relaxed">You'll receive detailed reports showing exactly what we did, how your rankings improved, and the leads generated from our efforts.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-10 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-[#2c3e50] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#2c3e50] mb-3">White-Hat SEO Methods</h3>
                    <p className="text-gray-600 leading-relaxed">We strictly follow Google's guidelines and best practices. No shortcuts, no risky tactics—just sustainable, long-term growth.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-10 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <Target className="h-6 w-6 text-[#2c3e50] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#2c3e50] mb-3">ROI-Focused Campaigns</h3>
                    <p className="text-gray-600 leading-relaxed">Every strategy is customized to your business. We focus on generating leads and revenue, not just vanity metrics.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-slate-900/3 via-white to-slate-900/3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2c3e50] mb-16" style={{ fontFamily: "Playfair Display, serif" }}>
              Our Services
            </h2>
            
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-12 text-center">SEO Services</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: TrendingUp, title: "Technical SEO", desc: "Optimize site structure, speed, and crawlability for search engines" },
                  { icon: BarChart3, title: "On-Page SEO", desc: "Enhance content, meta tags, and internal linking for better rankings" },
                  { icon: Zap, title: "Content Optimization", desc: "Create and optimize content that ranks and converts visitors" },
                  { icon: MessageSquare, title: "Local SEO", desc: "Dominate local search results and attract nearby customers" },
                ].map((service, i) => (
                  <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                    <service.icon className="h-8 w-8 text-[#2c3e50] mb-4" />
                    <h4 className="font-bold text-[#2c3e50] mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                    <button className="text-[#2c3e50] hover:text-[#1a1a1a] font-medium text-sm mt-4">Learn More →</button>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-12 text-center">AI Automation Services</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: Brain, title: "AI Chatbots", desc: "24/7 customer engagement with intelligent conversational AI" },
                  { icon: Lightbulb, title: "Lead Qualification", desc: "Automatically qualify and prioritize leads for your sales team" },
                  { icon: Zap, title: "Workflow Automation", desc: "Eliminate repetitive tasks and streamline business operations" },
                ].map((service, i) => (
                  <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                    <service.icon className="h-8 w-8 text-[#2c3e50] mb-4" />
                    <h4 className="font-bold text-[#2c3e50] mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                    <button className="text-[#2c3e50] hover:text-[#1a1a1a] font-medium text-sm mt-4">Learn More →</button>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-12 text-center">Google Business Profile Optimization</h3>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Optimize your Google Business Profile to increase visibility, attract more customers, and boost calls and walk-ins.</p>
              <div className="grid md:grid-cols-5 gap-6 mb-8">
                {[
                  { icon: TrendingUp, title: "Business description optimization" },
                  { icon: BarChart3, title: "Google Maps ranking improvement" },
                  { icon: Zap, title: "Services & products management" },
                  { icon: MessageSquare, title: "Customer review strategy" },
                  { icon: Target, title: "Calls & walk-ins boost" },
                ].map((service, i) => (
                  <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                    <service.icon className="h-8 w-8 text-[#2c3e50] mb-4" />
                    <h4 className="font-bold text-[#2c3e50] mb-2 text-sm">{service.title}</h4>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white rounded-md font-medium transition-colors">
                  Optimize Profile <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Process */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900/5 via-slate-50 to-slate-900/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2c3e50] mb-16" style={{ fontFamily: "Playfair Display, serif" }}>
              Our SEO Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Website Audit", desc: "Comprehensive analysis of your current SEO performance and technical issues" },
                { num: "02", title: "Keyword Research", desc: "Identify high-value keywords with search intent matching your business" },
                { num: "03", title: "Optimization", desc: "Implement on-page, technical, and content optimizations" },
                { num: "04", title: "Ranking Growth", desc: "Monitor progress and continuously improve rankings and organic traffic" },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-[#2c3e50] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>{step.num}</div>
                  <h4 className="font-bold text-[#2c3e50] mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process (Professional) */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900/3 via-white to-slate-900/3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2c3e50] mb-16" style={{ fontFamily: "Playfair Display, serif" }}>
              Our Professional Process
            </h2>
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { num: "01", title: "Website & SEO Audit", desc: "Comprehensive analysis of your current performance" },
                { num: "02", title: "Strategy Development", desc: "Custom roadmap tailored to your business goals" },
                { num: "03", title: "Implementation", desc: "Execute strategies with precision and attention to detail" },
                { num: "04", title: "Optimization", desc: "Continuous refinement based on performance data" },
                { num: "05", title: "Growth Tracking", desc: "Monthly reports and transparent communication" },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-[#2c3e50] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>{step.num}</div>
                  <h4 className="font-bold text-[#2c3e50] mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-slate-900/5 via-slate-50 to-slate-900/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-[#2c3e50] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-2">Moin Ur Rahman Siddiqui</h3>
              <p className="text-gray-600 font-medium">Founder & CEO</p>
            </div>
            <p className="text-gray-700 text-center mb-8 leading-relaxed">
              I'm passionate about helping businesses grow through search optimization and intelligent automation systems. My approach is built on transparency, ethical growth practices, and data-driven strategies. Every client partnership is an opportunity to create sustainable, measurable success.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Transparency", desc: "Clear communication & honest reporting" },
                { title: "Expertise", desc: "Data-driven strategies & best practices" },
                { title: "Growth", desc: "Sustainable results & long-term success" },
              ].map((value, i) => (
                <div key={i} className="text-center">
                  <h4 className="font-bold text-[#2c3e50] mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Form */}
        <section id="audit" className="py-16 md:py-24 bg-gradient-to-br from-slate-900/3 via-white to-slate-900/3">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2c3e50] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Get Your Free SEO Audit
            </h2>
            <p className="text-center text-gray-600 mb-8">
              We'll analyze your website using professional tools including PageSpeed Insights, Google Search Console, and technical SEO checks. No automated tool—just expert analysis.
            </p>
            <button onClick={() => { setFormType("seo-audit"); setShowLeadForm(true); }} className="inline-flex items-center justify-center px-8 py-3 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white rounded-md font-medium transition-colors">
              Request Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="py-16 md:py-24 bg-gradient-to-br from-slate-900/5 via-slate-50 to-slate-900/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2c3e50] mb-16" style={{ fontFamily: "Playfair Display, serif" }}>
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { category: "Local SEO", title: "What Is Local SEO and Why It Matters for Small Businesses", desc: "Learn how to optimize your business for local search results and attract nearby customers..." },
                { category: "Technical SEO", title: "Technical SEO Basics Every Website Needs", desc: "Discover the essential technical elements every website must have for better rankings..." },
                { category: "On-Page SEO", title: "On-Page SEO Checklist for 2026", desc: "Master on-page SEO with our comprehensive checklist for ranking higher in search results..." },
              ].map((article, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-4">
                    {article.category}
                  </span>
                  <h4 className="font-bold text-[#2c3e50] mb-2 text-lg">{article.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{article.desc}</p>
                  <a href="/blog" className="text-[#2c3e50] hover:text-[#1a1a1a] font-medium text-sm">Read More →</a>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/blog" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2c3e50] text-[#2c3e50] hover:bg-gray-50 rounded-md font-medium transition-colors">View All Articles</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#2c3e50] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Schedule a free strategy call with our team to discuss your goals and discover how we can help.
            </p>
            <a href="#booking" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2c3e50] hover:bg-gray-100 rounded-md font-medium transition-colors">
              Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Lead Capture Form Modal */}
        <LeadCaptureForm isOpen={showLeadForm} onClose={() => setShowLeadForm(false)} formType={formType} />
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
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
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
            <p>&copy; 2026 SerpFlow AI. All rights reserved. | Founder: Moin Ur Rahman Siddiqui</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
