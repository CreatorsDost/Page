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
    boxShadow: "0 20px 40px rgba(255, 133, 89, 0.25)",
    transition: { duration: 0.3 },
  },
};

const features = [
   {
    id: "research",
    icon: "🔎",
    title: "Research",
    description: "Personalized content plans based on your niche and audience.",
  },
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
    className="group relative p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all flex flex-col h-full"
    variants={cardVariants}
    whileHover="hover"
  >
    {/* Gradient border on hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/30 group-hover:via-secondary/30 group-hover:to-accent/30 opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />

    <div className="relative z-10">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-inter font-bold text-base text-white mb-1 whitespace-nowrap">{title}</h3>
      <p className="font-inter font-normal text-white/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const Business = () => (
  <section id="services" className="relative py-20">
    {/* Background gradient */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Grow.
          </span>
        </h2>
        <p className="font-inter font-normal text-white/60 max-w-2xl mx-auto text-lg">
          Our comprehensive suite of tools and services designed to help creators succeed
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
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
