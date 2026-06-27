import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About" },
        { name: "Pricing" },
        { name: "Testimonials" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog" },
        { name: "FAQ" },
        { name: "Contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Instagram", href: "https://instagram.com" },
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "Email", href: "mailto:hello@creatorstack.com" },
      ],
    },
  ];

  return (
    <footer className="relative pt-20 pb-12">
      {/* Background */}
      <div className="absolute inset-0 border-t border-white/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500" />
              <span className="font-inter font-bold text-lg text-white">CreatorsDost</span>
            </div>
            <p className="font-inter font-normal text-white/60 max-w-sm leading-relaxed">
              Helping creators grow smarter, not harder. Personalized content strategy, professional editing, and growth consulting for ambitious creators.
            </p>
          </motion.div>

          {/* Newsletter (Optional) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-inter font-semibold text-white text-lg mb-4">Stay Updated</h3>
            <p className="font-inter font-normal text-white/60 mb-4 text-sm">
              Get tips, strategies, and updates straight to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 font-inter focus:outline-none focus:border-cyan-500/50"
              />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-inter font-semibold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/10">
          {footerLinks.map((column) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-inter font-semibold text-white text-sm uppercase tracking-wide mb-6 opacity-70">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href || "#"}
                      className="font-inter font-normal text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-inter font-normal text-white/40 text-sm">
            © 2026 CreatorsDost. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            {[
              { name: "Instagram", emoji: "📸", href: "https://instagram.com" },
              { name: "LinkedIn", emoji: "💼", href: "https://linkedin.com" },
              { name: "Twitter", emoji: "𝕏", href: "https://twitter.com" },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-xl hover:bg-white/20 hover:border-white/30 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                {social.emoji}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
