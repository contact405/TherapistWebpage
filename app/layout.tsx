'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Lock } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="flex flex-col min-h-screen bg-white" style={{ fontFamily: '"Inter", sans-serif' }}>
        
        {/* TOP BANNER */}
        <div className="bg-slate-900 text-teal-50 py-2 px-6 text-center text-[10px] md:text-xs font-medium tracking-widest uppercase">
          Now accepting new clients for virtual and in-person sessions
        </div>

        {/* NAVIGATION BAR */}
        <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
            
            {/* LOGO */}
            <div className="text-xl md:text-2xl font-bold tracking-tighter text-teal-900" style={{ fontFamily: '"Playfair Display", serif' }}>
              Healthier Mentality, PLLC<span className="text-teal-600">.</span>
            </div>

            {/* DESKTOP MENU (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center space-x-8 text-[11px] font-medium text-slate-600 uppercase tracking-widest">
              <Link href="/" className="hover:text-teal-600 transition">Home</Link>
              <Link href="/about" className="hover:text-teal-600 transition">About</Link>
              <a href="#services" className="hover:text-teal-600 transition">Services</a>
              
              <a href="https://www.healthiermentality.com/sign-in" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-teal-600 transition">
                <Lock className="w-3 h-3 mr-1" /> Portal
              </a>

              <a href="mailto:contact@healthiermentality.com" className="bg-slate-900 text-white px-6 py-2 rounded-md hover:bg-slate-800 transition shadow-sm">
                Contact Me
              </a>
            </div>

            {/* MOBILE MENU BUTTON (Only shows on phones) */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* MOBILE DROPDOWN MENU */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-gray-50 px-6 py-8 space-y-6 shadow-xl absolute w-full left-0 animate-in fade-in slide-in-from-top-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-600 uppercase tracking-widest">Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-600 uppercase tracking-widest">About</Link>
              <a href="#services" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-slate-600 uppercase tracking-widest">Services</a>
              
              <a href="https://www.healthiermentality.com/sign-in" target="_blank" className="flex items-center text-sm font-medium text-teal-600 uppercase tracking-widest">
                <Lock className="w-4 h-4 mr-2" /> Client Portal
              </a>

              <a href="mailto:contact@healthiermentality.com" className="block w-full bg-slate-900 text-white text-center py-4 rounded-lg font-bold">
                Contact Me
              </a>
            </div>
          )}
        </nav>

        {/* MAIN PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>


        {/* FOOTER BANNER */}
<footer className="bg-slate-900 text-white border-t border-white-800 pt-12 pb-8">
  <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between md:gap-8">
    
    {/* LEFT SIDE: Your Professional Contact Info */}
    <div className="mb-8 md:mb-0 md:w-1/3">
      <h3 className="text-lg font-bold mb-4">Healthier Mentality</h3>
      <div className="text-sm text-teal-300 space-y-2">
        <p>
  <strong className="text-white">Email:</strong>{' '}
  <a 
    href="mailto:contact@healthiermentality.com" 
    className="text-teal-300 hover:text-white underline transition-colors"
  >
    contact@healthiermentality.com
  </a>
</p>
        <p>
          
  <strong className="text-white">Phone:</strong>{' '}
  <a href="tel:+8325820948" className="text-teal-300 hover:text-white underline transition-colors">
    (832) 582-0948
  </a>
</p>
        <p><strong className="text-white">Location:</strong> Texas</p>
      </div>
    </div>

    {/* RIGHT SIDE: Mandatory Legal Disclosures (HB 4224) */}
    <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white-700 pt-8 md:pt-0 md:pl-8">
      <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-white">
        Consumer Information & Legal Notice
      </h3>
      <p className="text-sm text-blue-100 mb-4">
        In accordance with <strong className="text-white">House Bill 4224</strong> (Section 181.105, Health and Safety Code), consumers may follow the instructions below:
      </p>

      <ul className="text-sm text-white-100 space-y-3">
        <li>
          <strong className="text-white">1. Request Health Records:</strong> To request your health care records from the licensee, please email 
          <a href="mailto:contact@healthiermentality.com" className="text-teal-300 hover:text-white underline ml-1 transition-colors">
            contact@healthiermentality.com
          </a>
        </li>
        <li>
          <strong className="text-white">2. Contact the Council:</strong> Reach the Texas Behavioral Health Executive Council via their 
          <a href="https://www.bhec.texas.gov/contact-us/index.html" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white underline ml-1 transition-colors">
            Official Contact Page
          </a>.
        </li>
        <li>
          <strong className="text-white">3. File a Complaint:</strong> File a consumer complaint with the 
          <a href="https://www.texasattorneygeneral.gov/consumer-protection" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white underline ml-1 transition-colors">
            Office of the Attorney General
          </a>.
        </li>
      </ul>
    </div>
  </div>

  {/* BOTTOM: Copyright */}
  <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white-800">
    <p className="text-xs text-center text-white-300">
      © {new Date().getFullYear()} Healthier Mentality. All rights reserved.
    </p>
    <p className="text-xs text-center text-white-300">
     HIPAA Compliant Care. Records managed via secure BAA-compliant software.
    </p>
    
  </div>
</footer>

      </body>
    </html>
  );
}