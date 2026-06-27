import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Beauty & Lifestyle Creator",
    rating: 5,
    text: "CreatorsDost transformed my content strategy. I went from 10K to 100K followers in 6 months. The editing support alone is worth it!",
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    role: "Tech Influencer",
    rating: 5,
    text: "The weekly strategy calls are goldmines. The team truly understands viral content and audience psychology. Highly recommend!",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Fitness Content Creator",
    rating: 5,
    text: "Best investment I made for my channel. The personalized content ideas hit every single time. Engagement up 300%!",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Gaming & Streaming Creator",
    rating: 5,
    text: "From struggling to find content ideas to having a complete pipeline. CreatorsDost handles everything beautifully.",
  },
  {
    id: 5,
    name: "Zara Khan",
    role: "Fashion & Lifestyle Creator",
    rating: 5,
    text: "The editing support saved me so much time. More time creating, less time editing. Living the dream!",
  },
  {
    id: 6,
    name: "Marcus Johnson",
    role: "Motivational Speaker & Creator",
    rating: 5,
    text: "The growth consulting is on another level. Actionable insights every call. Worth every rupee!",
  },
];

const TestimonialCard = ({ name, role, rating, text }) => (
  <motion.div
    className="flex-shrink-0 w-full sm:w-96 p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all h-full flex flex-col"
    whileHover={{ y: -5 }}
  >
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>

    {/* Text */}
    <p className="font-inter font-normal text-white/80 text-base leading-relaxed mb-6 flex-grow">
      "{text}"
    </p>

    {/* Author */}
    <div className="border-t border-white/10 pt-4">
      <p className="font-inter font-semibold text-white text-sm">{name}</p>
      <p className="font-inter font-normal text-white/60 text-xs">{role}</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;
    const containerWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const interval = setInterval(() => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= containerWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    }, 50);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  return (
    <section id="testimonials" className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
            Creators Love{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 bg-clip-text text-transparent">
              CreatorsDost
            </span>
          </h2>
          <p className="font-inter font-normal text-white/60 max-w-2xl mx-auto text-lg">
            Join thousands of creators who are scaling their personal brands
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <p className="font-inter font-normal text-white/40 text-sm">
            ← Scroll to see more →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
