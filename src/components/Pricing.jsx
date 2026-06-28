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
    boxShadow: "0px 40px 100px rgba(255, 133, 89, 0.2)",
    transition: { duration: 0.3 },
  },
};

const PricingCard = ({ name, monthlyPrice, originalPrice, ctaText, isPopular, features, bestFor }) => (
  <motion.div
    className={`flex-1 flex flex-col items-start justify-between p-6 md:p-8 rounded-2xl backdrop-blur-sm transition-all min-w-[300px] max-w-[400px] h-full ${
      isPopular
        ? "relative bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/50 shadow-2xl shadow-primary/20"
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
        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold"
        variants={itemVariants}
      >
        Most Popular ⭐
      </motion.div>
    )}

    <motion.h3
      className="font-inter font-bold text-white text-lg md:text-2xl mb-3 mt-1"
      variants={itemVariants}
    >
      {name}
    </motion.h3>

    <motion.div className="mb-3" variants={itemVariants}>
      {originalPrice && (
        <div className="text-xs text-green-300 line-through decoration-1 mb-1">
          {originalPrice}
        </div>
      )}
      <div className="flex items-baseline gap-3">
        <span className="font-inter font-bold text-white text-4xl md:text-5xl leading-none">
          {monthlyPrice}
        </span>
        <span className="font-inter font-medium text-white/60 text-sm md:text-base">
          /month
        </span>
      </div>
    </motion.div>

    <motion.a
      href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20Creator%27s%20Stack%2C%20I%20would%20like%20to%20book%20a%20call."
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-3 md:py-4 px-6 rounded-lg font-inter font-semibold text-base md:text-lg mb-6 transition-all text-center block ${
        isPopular
          ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50"
          : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      variants={itemVariants}
    >
      {ctaText}
    </motion.a>

    <motion.div className="flex flex-col gap-3 mt-2 w-full" variants={containerVariants}>
      <h4 className="font-inter font-semibold text-white text-xs uppercase tracking-wide opacity-75 mb-1">Includes</h4>
      {features.map((feature, index) => (
        <motion.div key={index} className="flex items-start gap-3" variants={itemVariants}>
          <span className="text-green-300 mt-0.5 text-base flex-shrink-0">✓</span>
          <p className="font-inter font-normal text-white/70 text-sm leading-tight">{feature}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const Pricing = () => {
  const pricingTiers = [
    {
      name: "STARTER",
      monthlyPrice: "₹3,999",
      originalPrice: "₹5,000",
      ctaText: "Get Started",
      isPopular: false,
      features: [
        "1 Personal Brand Strategy Session (45 mins)",
        "Niche Selection & Positioning",
        "Profile Audit (Instagram/LinkedIn)",
        "Monthly Content Strategy",
        "20 Research-Based Content Ideas",
        "4 High-Converting Scripts",
        "Hook & CTA Optimization",
        "Recording Guidelines",
        "1 Revision Per Script",
        "WhatsApp Support",
      ],
   
    },
    {
      name: "GROWTH (Most Popular)",
      monthlyPrice: "₹7,999",
      originalPrice: "₹10,000",
      ctaText: "Start Growing",
      isPopular: true,
      features: [
        "Detailed Competitor Research",
        "40 Personalized Content Ideas",
        "8 Viral Scripts",
        "Up to 4 Professionally Edited Reels",
        "Premium Captions",
        "Hashtag & SEO Optimization",
        "Content Calendar",
        "Thumbnail Suggestions",
        "Monthly Analytics Report",
        "2 Strategy Calls / Month",
        "Priority WhatsApp Support",
      ],
    
    },
    {
      name: "PREMIUM",
      monthlyPrice: "₹14,999",
      originalPrice: "₹17,000",
      ctaText: "Get Premium",
      isPopular: false,
      features: [
        "Complete Brand Positioning",
        "Unlimited Content Research",
        "60 Personalized Content Ideas",
        "12 Premium Scripts",
        "Up to 8 Professionally Edited Reels",
        "LinkedIn Content Repurposing (8 posts)",
        "Carousel Content Ideas",
        "YouTube Shorts Strategy",
        "Personal Website Consultation",
        "Advanced Analytics Dashboard",
        "Monthly Growth Roadmap",
        "Weekly Strategy Calls",
        "Priority Delivery",
        "Dedicated Account Manager",
      ],
      bestFor: ["Your Complete Personal Branding Team"],
    },
  ];

  return (
    <section id="pricing" className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
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
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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
