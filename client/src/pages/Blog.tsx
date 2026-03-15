import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "What Is Local SEO and Why It Matters for Small Businesses",
    category: "Local SEO",
    author: "Moin Ur Rahman Siddiqui",
    date: "March 10, 2026",
    excerpt: "Local SEO is crucial for small businesses looking to attract customers in their geographic area. Learn how to optimize your business for local search results.",
    content: `Local SEO is a digital marketing strategy that focuses on optimizing your online presence to attract local customers. For small businesses, this is essential because most people search for services and products within their area.

## Why Local SEO Matters

Local search is one of the most valuable types of searches because users searching for local businesses have high purchase intent. They're actively looking for a solution nearby.

## Key Local SEO Strategies

1. **Google My Business Optimization**: Ensure your Google My Business profile is complete with accurate information, photos, and regular updates.

2. **Local Citations**: Build consistent business information across directories like Yelp, Apple Maps, and industry-specific directories.

3. **Local Keywords**: Target keywords that include your city or region, such as "plumber in New York" or "best pizza near me."

4. **Local Link Building**: Get backlinks from local websites, community organizations, and local news outlets.

5. **Reviews and Ratings**: Encourage customers to leave reviews on Google, Yelp, and other platforms. Respond to all reviews professionally.

6. **Local Content**: Create content that addresses local events, news, and community interests.

## Measuring Local SEO Success

Track metrics like local search rankings, Google My Business insights, local traffic, and conversion rates from local searches.

Local SEO is an ongoing process that requires consistent effort, but the results can be transformative for small businesses looking to dominate their local market.`,
  },
  {
    id: 2,
    title: "Technical SEO Basics Every Website Needs",
    category: "Technical SEO",
    author: "Moin Ur Rahman Siddiqui",
    date: "March 8, 2026",
    excerpt: "Technical SEO forms the foundation of any successful SEO strategy. Discover the essential technical elements every website must have.",
    content: `Technical SEO refers to the optimization of your website's infrastructure to help search engines crawl and index your pages more effectively. It's the foundation upon which all other SEO efforts are built.

## Core Technical SEO Elements

### 1. Site Speed and Performance
Page speed is a ranking factor. Use tools like Google PageSpeed Insights to identify performance issues. Optimize images, enable compression, and leverage browser caching.

### 2. Mobile Responsiveness
With mobile-first indexing, your website must be fully responsive and provide an excellent mobile user experience. Test your site on various devices and screen sizes.

### 3. XML Sitemaps
Create and submit XML sitemaps to Google Search Console. This helps search engines discover and index all your pages.

### 4. Robots.txt File
Use robots.txt to guide search engines on which pages to crawl and which to avoid.

### 5. SSL Certificate (HTTPS)
Ensure your website uses HTTPS. Google considers SSL as a ranking factor and displays a security warning for non-HTTPS sites.

### 6. Structured Data Markup
Implement schema markup to help search engines understand your content better. This can lead to rich snippets in search results.

### 7. URL Structure
Use clean, descriptive URLs that include relevant keywords. Avoid dynamic parameters and excessive subdirectories.

### 8. Internal Linking
Create a logical internal linking structure to help search engines understand your site's hierarchy and distribute page authority.

## Technical SEO Audit Checklist

- Check for crawl errors in Google Search Console
- Verify all pages are indexable
- Test site speed and performance
- Ensure mobile responsiveness
- Check for duplicate content
- Verify XML sitemap and robots.txt
- Test structured data markup
- Check for broken links

Technical SEO might seem complex, but addressing these basics will significantly improve your website's search engine visibility.`,
  },
  {
    id: 3,
    title: "On-Page SEO Checklist for 2026",
    category: "On-Page SEO",
    author: "Moin Ur Rahman Siddiqui",
    date: "March 5, 2026",
    excerpt: "Master on-page SEO with our comprehensive 2026 checklist. Learn what elements matter most for ranking higher in search results.",
    content: `On-page SEO refers to the optimization of individual pages on your website to rank higher in search results. Here's everything you need to know for 2026.

## Title Tags and Meta Descriptions

Your title tag should be 50-60 characters and include your primary keyword. Meta descriptions should be 150-160 characters and include a call-to-action.

## Heading Structure

Use H1 tags for your main heading (one per page), H2 tags for subheadings, and H3 tags for sub-subheadings. Include keywords naturally in your headings.

## Keyword Optimization

Research and target relevant keywords with search intent that matches your content. Use keywords naturally throughout your content, especially in the first 100 words.

## Content Quality

Create comprehensive, original content that provides real value to your audience. Aim for at least 1,500-2,000 words for pillar content, though quality matters more than length.

## Internal Links

Link to other relevant pages on your website using descriptive anchor text. This helps distribute page authority and establishes site hierarchy.

## Image Optimization

Optimize images by:
- Using descriptive file names
- Adding alt text with keywords
- Compressing images for faster loading
- Using appropriate image formats

## URL Optimization

Keep URLs short, descriptive, and keyword-rich. Use hyphens to separate words, not underscores.

## Mobile Optimization

Ensure your page displays correctly on mobile devices. Test readability, button sizes, and overall user experience.

## Page Speed

Optimize for speed by minimizing CSS and JavaScript, enabling compression, and leveraging caching.

## User Experience Signals

Focus on:
- Clear navigation
- Readable font sizes
- Adequate white space
- Fast loading times
- Mobile responsiveness

Following this on-page SEO checklist will help your pages rank higher and provide a better user experience.`,
  },
  {
    id: 4,
    title: "How SEO Generates Leads for Service Businesses",
    category: "SEO Strategy",
    author: "Moin Ur Rahman Siddiqui",
    date: "February 28, 2026",
    excerpt: "Discover how SEO can be your most cost-effective lead generation channel for service-based businesses.",
    content: `For service businesses, SEO is one of the most cost-effective ways to generate qualified leads. Unlike paid advertising, SEO provides long-term, sustainable growth.

## Why SEO Works for Service Businesses

Service businesses benefit from SEO because:
- People search for services before making decisions
- Local search is highly relevant
- Service businesses can target high-intent keywords
- Long-term ROI is excellent

## The SEO Lead Generation Funnel

### Awareness Stage
Create content that answers common questions your prospects ask. Blog posts, guides, and videos help establish authority.

### Consideration Stage
Create comparison content, case studies, and detailed service pages that help prospects evaluate their options.

### Decision Stage
Create landing pages with clear CTAs, testimonials, and pricing information to convert prospects into leads.

## Key Metrics for Service Business SEO

- Organic traffic to service pages
- Lead form submissions
- Phone call conversions
- Booking requests
- Cost per lead from organic search

## SEO vs. Paid Advertising

While paid ads provide immediate results, SEO provides sustainable, long-term growth. The cost per lead decreases over time as your rankings improve.

## Implementation Timeline

Most service businesses see meaningful results within 3-6 months of consistent SEO efforts. However, the real benefits compound over time.

SEO is not a quick fix, but it's one of the most valuable investments service businesses can make for sustainable growth.`,
  },
  {
    id: 5,
    title: "Common SEO Mistakes That Hurt Rankings",
    category: "SEO Tips",
    author: "Moin Ur Rahman Siddiqui",
    date: "February 20, 2026",
    excerpt: "Avoid these common SEO mistakes that could be hurting your website's search engine rankings.",
    content: `Many websites unknowingly make SEO mistakes that hurt their rankings. Here are the most common ones and how to avoid them.

## 1. Keyword Stuffing

Stuffing too many keywords into your content makes it unreadable and triggers search engine penalties. Use keywords naturally and focus on user experience.

## 2. Ignoring Mobile Optimization

With mobile-first indexing, ignoring mobile optimization is a critical mistake. Ensure your website is fully responsive and fast on mobile devices.

## 3. Poor Site Structure

A confusing site structure makes it hard for search engines to crawl and index your pages. Create a logical hierarchy with clear navigation.

## 4. Duplicate Content

Duplicate content confuses search engines about which version to rank. Use canonical tags and 301 redirects to consolidate duplicate pages.

## 5. Slow Page Speed

Page speed is a ranking factor. Optimize images, enable compression, and minimize code to improve loading times.

## 6. Low-Quality Backlinks

Building backlinks from low-quality or spammy websites can hurt your rankings. Focus on earning links from authoritative, relevant websites.

## 7. Ignoring User Experience

Search engines prioritize websites that provide good user experiences. Focus on readability, navigation, and mobile responsiveness.

## 8. Not Updating Content

Outdated content can hurt your rankings. Regularly update your content to keep it fresh and relevant.

## 9. Ignoring Local SEO

If you serve a local area, ignoring local SEO is a major mistake. Optimize your Google My Business profile and build local citations.

## 10. Expecting Overnight Results

SEO takes time. Most websites see meaningful results within 3-6 months. Avoid tactics that promise instant results.

## Moving Forward

Audit your website for these mistakes and fix them. Focus on creating quality content, optimizing for user experience, and building authority through legitimate means.

Avoiding these common mistakes will put you ahead of your competition and help your website rank higher in search results.`,
  },
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const selectedPost = selectedArticle ? articles.find(a => a.id === selectedArticle) : null;

  if (selectedPost) {
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
                <a href="/#blog" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Blog</a>
                <a href="/pricing" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Pricing</a>
                <a href="/contact" className="text-gray-700 hover:text-[#2c3e50] text-sm font-medium">Contact</a>
                <Button className="bg-[#2c3e50] hover:bg-[#1a1a1a]">Get Started</Button>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          <article className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-[#2c3e50] hover:underline mb-8 flex items-center gap-2"
              >
                ← Back to Articles
              </button>

              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-4">
                {selectedPost.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedPost.date}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                {selectedPost.content.split('\n\n').map((paragraph, i) => (
                  paragraph.startsWith('#') ? (
                    <h2 key={i} className="text-2xl font-bold text-[#2c3e50] mt-8 mb-4">
                      {paragraph.replace(/^#+\s/, '')}
                    </h2>
                  ) : paragraph.startsWith('-') ? (
                    <ul key={i} className="list-disc list-inside space-y-2 ml-4">
                      {paragraph.split('\n').filter(line => line.startsWith('-')).map((item, j) => (
                        <li key={j} className="text-gray-700">{item.replace(/^-\s/, '')}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i} className="text-gray-700 leading-relaxed">{paragraph}</p>
                  )
                ))}
              </div>
            </div>
          </article>

          {/* CTA */}
          <section className="py-16 md:py-24 bg-[#2c3e50] text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
                Ready to Improve Your SEO?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Let's discuss how we can help your website rank higher and generate more leads.
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
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              SEO & AI Automation Insights
            </h1>
            <p className="text-lg text-gray-600">
              Learn proven strategies to improve your search rankings, generate more leads, and automate your business.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedArticle(article.id)}
                >
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#2c3e50] mb-3 hover:text-[#1a1a1a]">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.date}</span>
                    <button className="text-[#2c3e50] hover:text-[#1a1a1a] font-medium">
                      Read More →
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#2c3e50] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help your website rank higher and generate more leads.
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
