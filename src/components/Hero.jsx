import { motion } from "framer-motion";
import { AiFillInstagram, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiSend } from "react-icons/fi";
import styles from "../style";
import leftIcon from "../assets/edit2.png";

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
      className="relative min-h-screen w-full pt-12 pb-20 overflow-hidden"
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
  <h1 className="font-bold font-['Inter'] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight mt-4 mb-6">
    Your Job Pays the Bills
    <br />
    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
      Your Personal Brand Builds Your Future.
    </span>
  </h1>
</motion.div>

{/* Subheading */}
<motion.p
  className="max-w-xl text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed tracking-normal"
  variants={itemVariants}
>
  <span className="block">
    CreatorsDost helps busy professionals become recognized creators through
    research-driven content, strategic storytelling, and end-to-end content
    execution.
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
              { icon: "👥", label: "Growing Creator Community"},
              { icon: "🎯", label: "Personalized Strategy" },
              { icon: "🤝", label: "1-on-1 Creator Support" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white/80 text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Illustration */}
        <motion.div
          className="relative h-[520px] sm:h-[620px] w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <div className="absolute top-10 left-10 h-28 w-28 rounded-full bg-primary/20 blur-2xl" />
          <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />

          <motion.img
            src={leftIcon}
            alt="App illustration"
            className="relative z-10 h-[96%] w-full max-w-[720px] object-contain"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />

          <motion.div
            className="absolute top-8 left-8 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/15 px-3 py-2 text-sm text-white shadow-glow"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <AiFillInstagram className="h-4 w-4 text-white" />
            <span>1.2M</span>
          </motion.div>

          <motion.div
            className="absolute top-24 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/25 text-white shadow-glow"
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <AiOutlineHeart className="h-7 w-7" />
          </motion.div>

          <motion.div
            className="absolute bottom-24 left-8 flex h-16 w-16 items-center justify-center rounded-full bg-accent/25 text-white shadow-glow"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiMessageSquare className="h-7 w-7" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-20 flex h-16 w-16 items-center justify-center rounded-full bg-primary/25 text-white shadow-glow"
            animate={{ x: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiSend className="h-7 w-7" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
