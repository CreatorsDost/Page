import { motion } from "framer-motion";
import { arman, manish, pavan, robot, shweta } from "../assets";

const testimonials = [
  {
    id: 1,
    name: "Arman Gupta (21K Followers)",
    role: "Software Engineer | Gurugram",
    rating: 5,
    image: arman,
    text: "I've wanted to start creating content for over a year, but I never had time to research topics or write scripts after work. \
    CreatorsDost gave me a clear content plan every week, and all I had to do was record. The process became effortless.",
  },
  {
    id: 2,
    name: "Manish Gupta (6K Followers)",
    role: "Teacher | Chandigarh",
    rating: 5,
    image: manish,
    text: "The biggest difference was the strategy. Instead of random content ideas, every post had a purpose. My LinkedIn profile \
    became much more active, and I finally started posting consistently.",
  },
  {
    id: 3,
    name: "Shweta Arora (23K Followers)",
    role: "Fashion & Lifestyle Creator",
    rating: 5,
    image: shweta,
    text: "CreatorsDost has made content creation feel much more organized. Whenever I get stuck, they come up with fresh concepts \
    and make the whole content planning process much easier. Their script suggestions, creative inputs and consistency-focused approach \
    make it much easier to grow your personal brand without constantly wondering what to post next.",
  },
  {
    id: 4,
    name: "Pavan (4K Followers)",
    role: "Student(IIT Delhi) & Aspiring Creator",
    rating: 5,
    image: pavan,
    text: "CeatorsDost bhai crazzzzyyyy hai. Matlab saara kuch provide kar rahe hai even brand promotions bhi :)\
    Mujeh kuch bhi karne ki tension nahi hai. Bas content create karna hai aur upload karna hai.\
    CreatorsDost is the best platform for creators. I am loving it.",
  },

];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialCard = ({ name, role, rating, text, image }) => (
  <motion.div
    className="flex-shrink-0 w-[85vw] sm:w-96 p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all h-full flex flex-col"
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
    <div className="border-t border-white/10 pt-4 flex items-center gap-3">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-lg"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-sm font-semibold text-white shadow-lg">
          {getInitials(name)}
        </div>
      )}
      <div>
        <p className="font-inter font-semibold text-white text-sm">{name}</p>
        <p className="font-inter font-normal text-white/60 text-xs">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20">
      <style>{`
        .testimonial-marquee {
          animation: testimonial-marquee 24s linear infinite;
        }

        .testimonial-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes testimonial-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              CreatorsDost
            </span>
          </h2>
          <p className="font-inter font-normal text-white/60 max-w-2xl mx-auto text-lg">
            Join thousands of creators who are scaling their personal brands
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050816] via-[#050816]/70 to-transparent z-20" />

          <div className="overflow-hidden">
            <motion.div
              className="testimonial-marquee flex w-max gap-6 py-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
