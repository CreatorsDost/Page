import { motion } from "framer-motion";

const CTA = () => (
  <section className="relative py-20">
    {/* Background gradient */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
    </div>

    <div className="max-w-4xl mx-auto px-6 sm:px-16 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-inter font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white mb-6">
          Ready To Build Your{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-inter font-semibold transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 133, 89, 0.4)" }}
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
