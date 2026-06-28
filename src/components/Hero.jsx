import { motion } from "framer-motion";
import styles from "../style";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full pt-32 pb-20 overflow-hidden"
    >
      {/* Gradient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.div
            className="w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/30 flex items-center gap-2"
            variants={itemVariants}
          >
            <span className="text-primary text-sm font-medium">✨ New</span>
            <span className="text-white/70 text-sm">AI-powered content strategy</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="font-bold text-5xl mt-4 mb-4">
              Your Job Pays the Bills
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Your Personal Brand Builds Your Future.
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="max-w-lg text-slate-200/80 text-base md:text-lg lg:text-xl leading-8 md:leading-10 tracking-wide"
            variants={itemVariants}
          >
            <span className="block text-white/80">
              CreatorsDost helps busy professionals become recognized creators through research-driven content, strategic storytelling, and end-to-end content execution.
            </span>
            <span className="block mt-5 text-white font-semibold text-lg md:text-xl lg:text-2xl">
              You bring the expertise.
            </span>
            <span className="block mt-3 text-white font-semibold text-lg md:text-xl lg:text-2xl">
              We build the brand.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.a
              href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20Creator%27s%20Stack%2C%20I%20would%20like%20to%20book%20a%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-inter font-semibold transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 133, 89, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.a>
            <motion.a
              href="#pricing"
              className="px-8 py-3 rounded-lg border border-white/20 text-white font-inter font-semibold hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10"
            variants={itemVariants}
          >
            {[
              { icon: "👥", label: "20K+ Creators" },
              { icon: "🎯", label: "Personalized Strategy" },
              { icon: "🤝", label: "Creator Support" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white/80 text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - 3D Phone Scene */}
        <motion.div
          className="relative h-[430px] sm:h-[520px] w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="absolute bottom-6 left-1/2 h-20 w-[78%] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-2 left-1/2 h-12 w-[68%] -translate-x-1/2 rounded-full bg-slate-950/70 blur-2xl" />
          </div>

          <motion.div
            className="absolute left-1/2 top-6 -translate-x-1/2 z-20 w-56 rounded-[24px] border border-primary/20 bg-slate-900/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            animate={{ y: [0, -10, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Followers</span>
              <span className="text-emerald-400">+24%</span>
            </div>
            <div className="mt-3 text-3xl font-semibold text-white">45.2K</div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: "30%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1.6 }}
              />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
              <span>Engagement</span>
              <span className="font-semibold text-white">8.5%</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-2 top-20 z-20 w-48 rounded-[22px] border border-white/10 bg-white/10 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            animate={{ y: [0, 10, 0], rotate: [0, -1, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-primary" />
              <div>
                <p className="text-sm font-semibold text-white">@creatorstack</p>
                <p className="text-xs text-white/60">4.8K posts</p>
              </div>
            </div>
            <div className="mt-3 space-y-2 rounded-2xl border border-white/10 bg-slate-950/50 p-2">
              <div className="h-2 w-3/4 rounded-full bg-white/10" />
              <div className="h-2 w-full rounded-full bg-white/10" />
              <div className="h-2 w-2/3 rounded-full bg-white/10" />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-white/70">
              <span>Stories</span>
              <span className="text-primary">Live</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 z-10"
            animate={{ y: [0, -6, 0], rotate: [-8, -6, -8] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
              <div className="relative h-[300px] w-[180px] rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-2 shadow-[0_35px_90px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-950 p-3">
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-primary/20 to-transparent" />
                <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/15" />
                <div className="relative flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-primary" />
                  <div>
                    <p className="text-xs font-semibold text-white">Instagram</p>
                    <p className="text-[10px] text-white/50">Reels • Live</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/10 p-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-primary/80">
                    <span>Reach</span>
                    <span>Now</span>
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-white">892K</div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3 text-[11px] text-white/70">
                  <div className="flex items-center justify-between">
                    <span>Story views</span>
                    <span className="text-white">18.2K</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-primary to-secondary" />
                  </div>
                </div>

                <motion.div
                  className="absolute inset-x-4 bottom-4 rounded-full bg-primary/25 blur-3xl"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-1/2 h-14 w-[220px] -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"
            animate={{ opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
