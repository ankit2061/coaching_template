import React from 'react';
import { motion } from 'framer-motion';
import content from '../config/content.json';

export const Footer: React.FC = () => {
  const { site } = content;
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#hero' },
        { label: 'Courses', href: '#courses' },
        { label: 'Faculty', href: '#faculty' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Study Material', href: '#' },
        { label: 'Mock Tests', href: '#' },
        { label: 'FAQs', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Careers', href: '#' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-slate-900 dark:bg-dark-base text-white border-t border-white/10 dark:border-primary-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
              {site.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {site.description}
            </p>
            <div className="flex gap-4 mt-6">
              {Object.entries(site.socialLinks).map(([name, url]) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-600 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {name.charAt(0).toUpperCase()}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="mb-8 pb-8 border-b border-white/10 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <p className="text-slate-400 text-sm mb-1">Phone</p>
            <a href={`tel:${site.phone}`} className="text-white font-semibold hover:text-primary-400">
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">Email</p>
            <a href={`mailto:${site.email}`} className="text-white font-semibold hover:text-primary-400">
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-1">Address</p>
            <p className="text-white font-semibold text-sm">{site.address}</p>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>&copy; {currentYear} {site.name}. All rights reserved.</p>
          <p>Made with love for education</p>
        </motion.div>
      </div>
    </footer>
  );
};
