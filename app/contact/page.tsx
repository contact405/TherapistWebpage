import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
        <p className="text-lg text-slate-600 mb-12">
          I offer a free 15-minute phone consultation to see if we are a good fit. 
          Please fill out the form below or reach out via phone or email.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-700">
              <div className="bg-teal-100 p-3 rounded-full text-teal-700">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p>(832)582-0948</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-700">
              <div className="bg-teal-100 p-3 rounded-full text-teal-700">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p>contact@healthiermentality.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-700">
              <div className="bg-teal-100 p-3 rounded-full text-teal-700">
                <MapPin size={20} />
              </div>
              <div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-slate-50 p-8 rounded-2xl">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" className="w-full p-2 border border-slate-200 rounded-lg focus:outline-teal-600" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full p-2 border border-slate-200 rounded-lg focus:outline-teal-600" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea rows={4} className="w-full p-2 border border-slate-200 rounded-lg focus:outline-teal-600" placeholder="How can I help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}