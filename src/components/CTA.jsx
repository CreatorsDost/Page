import { motion } from "framer-motion";

const CTA = () => (
  <section className="relative py-20">
    {/* Background gradient */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-sky-500/20 blur-3xl" />
    </div>

    <div className="max-w-4xl mx-auto px-6 sm:px-16 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-inter font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white mb-6">
          Ready To Build Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
            Personal Brand?
          </span>
        </h2>

        <p className="font-inter font-normal text-white/70 text-lg max-w-2xl mx-auto mb-12">
          Let's create content people actually remember. Join thousands of creators who are already scaling with CreatorsDost.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20Creator%27s%20Stack%2C%20I%20would%20like%20to%20book%20a%20call."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-inter font-semibold transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(14, 203, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Call
          </motion.a>

          <motion.a
            href="#pricing"
            className="px-8 py-4 rounded-lg border border-white/30 text-white font-inter font-semibold hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Pricing
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
