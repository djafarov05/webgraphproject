import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Youtube, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 bg-apple-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-montserrat font-bold text-neutral-850">Get in Touch</h1>
            <p className="mt-4 text-lg text-gray-600">
              Have a project in mind? Let's work together to create something amazing.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-apple-blue" />
                <span className="ml-4 text-gray-600">contact@jamalthecreator.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-apple-blue" />
                <span className="ml-4 text-gray-600">+370 (xxx) xxxxxxx</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-neutral-850">Follow Me</h2>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-apple-blue transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-apple-blue transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-apple-blue transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-apple-blue focus:ring focus:ring-apple-blue/20"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-apple-blue focus:ring focus:ring-apple-blue/20"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-apple-blue focus:ring focus:ring-apple-blue/20"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-apple-blue focus:ring focus:ring-apple-blue/20"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-apple-blue text-white font-semibold rounded-full hover:bg-apple-blue/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;