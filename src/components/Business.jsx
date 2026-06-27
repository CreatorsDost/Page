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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: {
    y: -10,
    boxShadow: "0 20px 40px rgba(14, 203, 255, 0.25)",
    transition: { duration: 0.3 },
  },
};

const features = [
  {
    id: "content-strategy",
    icon: "📈",
    title: "Content Strategy",
    description: "Personalized content plans based on your niche and audience.",
  },
  {
    id: "editing-support",
    icon: "🎬",
    title: "Editing Support",
    description: "Professional short-form editing for Reels and Shorts.",
  },
  {
    id: "viral-ideas",
    icon: "💡",
    title: "Viral Content Ideas",
    description: "Weekly high-performing content ideas with strong hooks.",
  },
  {
    id: "growth-consulting",
    icon: "🚀",
    title: "Growth Consulting",
    description: "Monthly strategy sessions to improve reach and engagement.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
    variants={cardVariants}
    whileHover="hover"
  >
    {/* Gradient border on hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-teal-500/0 to-sky-500/0 group-hover:from-cyan-500/30 group-hover:via-teal-500/30 group-hover:to-sky-500/30 opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />

    <div className="relative z-10">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-inter font-bold text-xl text-white mb-2">{title}</h3>
      <p className="font-inter font-normal text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const Business = () => (
  <section id="services" className="relative py-20">
    {/* Background gradient */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
          Everything You Need To{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
            Grow.
          </span>
        </h2>
        <p className="font-inter font-normal text-white/60 max-w-2xl mx-auto text-lg">
          Our comprehensive suite of tools and services designed to help creators succeed
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Business;
