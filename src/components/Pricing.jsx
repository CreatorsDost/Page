import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: {
    y: -15,
    boxShadow: "0px 40px 100px rgba(14, 203, 255, 0.2)",
    transition: { duration: 0.3 },
  },
};

const PricingCard = ({ name, monthlyPrice, ctaText, isPopular, features }) => (
  <motion.div
    className={`flex-1 flex flex-col p-8 rounded-2xl backdrop-blur-sm transition-all min-w-[320px] max-w-[380px] h-full ${
      isPopular
        ? "relative bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/20"
        : "bg-white/5 border border-white/10 hover:bg-white/10"
    }`}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
  >
    {isPopular && (
      <motion.div
        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-bold"
        variants={itemVariants}
      >
        Most Popular ⭐
      </motion.div>
    )}

    <motion.h3
      className="font-inter font-bold text-white text-2xl mb-2 mt-2"
      variants={itemVariants}
    >
      {name}
    </motion.h3>

    <motion.div className="flex items-baseline mb-2" variants={itemVariants}>
      <span className="font-inter font-bold text-white text-5xl">
        {monthlyPrice}
      </span>
      <span className="font-inter font-normal text-white/60 text-lg ml-2">
        /month
      </span>
    </motion.div>

    <motion.a
      href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20Creator%27s%20Stack%2C%20I%20would%20like%20to%20book%20a%20call."
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-3 px-6 rounded-lg font-inter font-semibold text-base mb-8 transition-all text-center block ${
        isPopular
          ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"
          : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
      }`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      variants={itemVariants}
    >
      {ctaText}
    </motion.a>

    <motion.div className="flex flex-col gap-4 flex-1" variants={containerVariants}>
      <h4 className="font-inter font-semibold text-white text-sm uppercase tracking-wide opacity-70">Includes:</h4>
      {features.map((feature, index) => (
        <motion.div key={index} className="flex items-start gap-3" variants={itemVariants}>
          <span className="text-green-400 mt-1 text-lg flex-shrink-0">✓</span>
          <p className="font-inter font-normal text-white/70 text-sm leading-relaxed">{feature}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter Stack",
      monthlyPrice: "₹1,999",
      ctaText: "Get Started",
      isPopular: false,
      features: [
        "Content Audit",
        "12 Content Ideas",
        "Monthly Strategy Call",
        "Profile Optimization",
        "Growth Roadmap",
      ],
    },
    {
      name: "Growth Stack",
      monthlyPrice: "₹4,999",
      ctaText: "Start Growing",
      isPopular: true,
      features: [
        "Everything in Starter plus:",
        "Weekly Strategy Calls",
        "30 Content Ideas",
        "8 Edited Videos",
        "Analytics Review",
        "Priority Support",
      ],
    },
    {
      name: "Creator Pro",
      monthlyPrice: "₹9,999",
      ctaText: "Scale My Brand",
      isPopular: false,
      features: [
        "Everything in Growth plus:",
        "Unlimited Consultation",
        "20 Edited Videos",
        "Script Writing",
        "Content Calendar",
        "Personal Branding",
        "Trend Research",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-inter font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white mb-4">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
              Pricing.
            </span>
          </h2>
          <p className="font-inter font-normal text-white/60 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your growth stage and scale with confidence.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
