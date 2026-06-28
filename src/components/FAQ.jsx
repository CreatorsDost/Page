import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "How do I get started?",
    answer: "Getting started is simple! Choose a plan, book a free strategy call, and our team will help you optimize your profile and create your first content calendar.",
  },
  {
    id: 2,
    question: "Do you guarantee followers?",
    answer: "We don't guarantee followers, but we guarantee results. Our data-driven strategies focus on engagement, reach, and authentic growth. Most creators see 3-10x growth within 3-6 months.",
  },
  {
    id: 3,
    question: "Do you edit videos?",
    answer: "Yes! Depending on your plan, we provide professional editing for short-form videos (Reels, Shorts, TikToks). Starter Stack includes basic support, while Growth Stack and Creator Pro include full editing with captions, effects, and optimization.",
  },
  {
    id: 4,
    question: "Can beginners join?",
    answer: "Absolutely! We work with creators at every stage - from complete beginners to established influencers. Our Starter Stack is perfect for getting started with solid foundations.",
  },
  {
    id: 5,
    question: "How often do we meet?",
    answer: "It depends on your plan. Starter Stack includes 1 monthly call, Growth Stack includes weekly calls, and Creator Pro includes unlimited consultation. You can also book extra calls anytime.",
  },
  {
    id: 6,
    question: "What platforms do you support?",
    answer: "We specialize in Instagram, TikTok, YouTube Shorts, and Facebook Reels. Our strategies are tailored for short-form video content, but we also support long-form content strategies on YouTube.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      className="border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all"
      initial={false}
    >
      <motion.button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between"
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
      >
        <h3 className="font-inter font-semibold text-white text-lg">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-4 border-t border-white/10">
              <p className="font-inter font-normal text-white/70 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 sm:px-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-inter font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="font-inter font-normal text-white/60 max-w-2xl mx-auto text-lg">
            Everything you need to know about CreatorsDost
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
