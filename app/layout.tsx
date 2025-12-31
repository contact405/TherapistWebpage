import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="flex flex-col min-h-screen" style={{ fontFamily: '"Inter", sans-serif' }}>
        
        {/* TOP BANNER */}
        <div className="bg-teal-900 text-teal-50 py-2 px-6 text-center text-xs font-medium tracking-widest uppercase">
          Now accepting new clients for virtual and in-person sessions
        </div>

        <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center w-full">
          <div className="text-2xl font-bold tracking-tighter text-teal-900" style={{ fontFamily: '"Playfair Display", serif' }}>
            Healthier Mentality, PLLC<span className="text-teal-600">.</span>
          </div>
          <div className="space-x-8 text-sm font-medium text-slate-600 uppercase tracking-widest flex items-center">
            <Link href="/" className="hover:text-teal-600 transition">Home</Link>
            <a href="#/about" className="hover:text-teal-600 transition">About</a>
            <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">FAQ</a>
            <Link href="/contact" className="bg-teal-800 text-white px-5 py-2 hover:bg-teal-700 transition">Contact</Link>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER BANNER */}
        <footer className="mt-auto">
          <div className="bg-slate-900 text-slate-300 py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p>© 2025 SerenePath Therapy. All rights reserved.</p>
              <div className="flex gap-6">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span> 
                  HIPAA Compliant & Secure
                </span>
                <span>Crisis Line: 988</span>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}