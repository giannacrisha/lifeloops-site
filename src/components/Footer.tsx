import { motion } from 'motion/react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import logoImage from 'figma:asset/3c414acfb821ca806a12a673da8523882f150c51.png';

export function Footer() {
  const navigation = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Integrations', 'Changelog'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Help Center', 'Community', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'Cookies'],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-[#272727] text-[#f5f5f5] pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={logoImage} alt="LifeLoops" className="h-6 w-auto invert" />
            </motion.div>
            <motion.p
              className="text-[#f5f5f5]/60 text-sm leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Making your time visible, one loop at a time.
            </motion.p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#f5f5f5]/10 rounded-full flex items-center justify-center hover:bg-[#699669] transition-colors duration-300 group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="w-4 h-4 text-[#f5f5f5]/70 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {navigation.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * sectionIndex }}
            >
              <h3 className="text-[#f5f5f5] mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-[#f5f5f5]/60 hover:text-[#699669] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-[#f5f5f5]/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[#f5f5f5]/40 text-sm">
            © 2025 LifeLoops. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-[#f5f5f5]/40">
            <span>Made with</span>
            <motion.span
              className="text-[#699669]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              ♥
            </motion.span>
            <span>for people who want to build better systems</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
