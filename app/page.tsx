import React from 'react';
import { Metadata } from 'next';
import { Calendar, Heart, MessageCircle, ShieldCheck, Mail, Phone, MapPin, AlertCircle, HelpCircle } from 'lucide-react';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Healthier Mentality, PLLC | Compassionate Counseling & Mental Health',
  description: 'Individual and couples therapy providing a safe space for healing and growth. HIPAA-compliant care in a professional environment.',
  openGraph: {
    title: 'Healthier Mentality, PLLC',
    description: 'Evidence-based therapy for anxiety, trauma, and personal growth.',
    url: 'https://yourdomain.com',
    siteName: 'Healthier Mentality, PLLC',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Heart className="text-teal-600 w-6 h-6" />
              <span className="font-bold text-xl tracking-tight text-slate-800">Healthier Mentality, PLLC</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-teal-600 transition">Services</a>
              <a href="#faq" className="hover:text-teal-600 transition">FAQ</a>
              <a href="#contact" className="hover:text-teal-600 transition">Contact</a>
            </div>
            <a 
              href="https://your-booking-site.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition shadow-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                A safe space for <span className="text-teal-600">healing</span>.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Stronger Individuals. Healthier Families. Lasting Change. Start your journey today with evidence based
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="https://your-booking-site.com" className="inline-flex justify-center items-center bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition shadow-lg">
                  Book Appointment <Calendar className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl mx-auto w-full max-w-md lg:max-w-none">
  <img 
    src="/Headshot-2.jpg" 
    alt="Professional Headshot" 
    className="w-full h-full object-cover"
  />
</div>
{/* This container must be w-full to center the text properly */}
<div className="mt-6 w-full text-center">
  <p className="text-slate-900 font-semibold tracking-wide text-lg">
    Rosalyn James LPC-Associate
  </p>
  <p className="text-slate-500 text-sm italic mt-1">
    Supervised by: Colana Sanders LPC-S
  </p>
</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Services Offered</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon={<MessageCircle className="text-teal-600" />} title="Individual Therapy" description="One-on-one sessions focused on personal growth and anxiety management." />
            <ServiceCard icon={<Heart className="text-teal-600" />} title="Couples Counseling" description="Improving communication and strengthening bonds." />
            <ServiceCard icon={<ShieldCheck className="text-teal-600" />} title="Trauma Recovery" description="Specialized support for processing past experiences safely." />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-600">Everything you need to know about starting your journey.</p>
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="What can I expect from the first session?" 
              answer="The first session is a 60-minute 'Intake' session. We will discuss your history, current challenges, and goals for therapy. It is a chance for us to see if we are a good fit for working together."

            />
            <FAQItem 
              question="How long do sessions last and how often do they take place?"
              answer="Standard sessions are 50 minutes. Most clients start with weekly sessions to build momentum, though we can adjust frequency based on your specific needs."

            />
            <FAQItem
              question="Do you accept insurance?"
              answer="I currently only accept clients via private pay. Rates begin at $125 a session."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden text-white">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-teal-400">Contact</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-teal-400" /> <span>(832)582-0948</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-teal-400" /> <span>contact@healthiermentality.com</span>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-teal-400 w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Privacy Notice</h4>
                      <p className="text-slate-400 text-sm">Please do not include sensitive health info via email. Use my secure portal for clinical messages.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-12 text-center text-xs border-t border-slate-800">
        <p className="mb-2">© 2025 Healthier Mentality, PLLC. All rights reserved.</p>
        <p className="max-w-md mx-auto opacity-75">
          HIPAA Compliant Care. Records managed via secure BAA-compliant software.
        </p>
      </footer>
    </div>
  );
}

// Reusable Components
function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-200 transition group">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-teal-50 transition">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-xl">
      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
        <HelpCircle className="w-4 h-4 text-teal-600" /> {question}
      </h4>
      <p className="text-slate-600 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}