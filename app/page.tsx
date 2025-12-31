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
        
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}


          {/* LEFT SIDE: About Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-start">
    
    {/* LEFT COLUMN: Photo & Credentials (1/2 of the width) */}
   <div className="md:col-span-2">
    <h2 className="mb-12 lg:mb-0">
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                A safe space for <span className="text-teal-600">healing</span>.
              </h2>
             
            </h2>
               <div className="prose prose-blue text-gray-600 text-lg space-y-4">
        <p>
          Welcome. Taking the first step toward therapy can be daunting, but you don't 
          have to navigate your journey alone. My approach is centered on creating 
          a safe, non-judgmental space where we can explore the challenges you're facing.
        </p>
        <p>
          Whether you are dealing with anxiety, depression, or life transitions, 
          I utilize evidence-based practices to help you develop the tools needed 
          for lasting change.
        </p>
      <p className="text-3xl md:text-4xl font-bold text-gray-900">
    Healthier <span className="text-teal-600">individuals</span>.
  </p>
  <p className="text-3xl md:text-4xl font-bold text-gray-900">
    Stronger <span className="text-teal-600">families</span>.
  </p>
  <p className="text-3xl md:text-4xl font-bold text-gray-900">
    Lasting <span className="text-teal-600">change</span>.
  </p>
      
   
        <button className="mt-6 bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Schedule a Consultation
        </button>
      </div>
    </div>



    {/* RIGHT COLUMN: Biography/Introduction (1/2 of the width) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="relative w-150 h-150 mb-6">
        <img 
          src="/propic.jpg" 
          alt="Rosalyn James Professional Headshot" 
          className="rounded-lg shadow-xl object-cover w-full h-full border-4 border-white"
        />
      </div>

      <div className="bg-teal-50 p-6 rounded-xl w-full">
        <h3 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-4">
          Rosalyn James LPC-Associate
        </h3>
        <ul className="text-gray-700 text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span> Supervised by Colana Sanders LPC-S
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span> M.Ed. Marriage and Family Therapy
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span> EMDR Trained
          </li>
          {/* Add more credentials here */}
        </ul>
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