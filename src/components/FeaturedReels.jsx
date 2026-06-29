import { motion } from "framer-motion";

const reelFallbackThumbnail =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80";

const getInstagramReelThumbnail = (instagramUrl) => {
  if (!instagramUrl) return null;
  try {
    const url = new URL(instagramUrl);
    const segments = url.pathname.split("/").filter(Boolean);
    if (segments[0] === "reel" && segments[1]) {
      return `https://www.instagram.com/reel/${segments[1]}/media/?size=l`;
    }
  } catch (error) {
    return null;
  }
  return null;
};

const featuredReels = [
  {
    id: "reel-1",
    title: "How I Got 3.6M Views in 48 Hours",
    views: "3.6M",
    likes: "228K",
    caption: "Learn why this reel exploded and how creators can replicate the format.",
    thumbnail: "src/assets/reel_1.svg",
    instagramUrl: "https://www.instagram.com/reel/DTDZA8CAYMO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "reel-2",
    badge: "⭐ Creator's Pick",
    title: "5 Editing Tricks for Instant Growth",
    views: "1.1M",
    likes: "52K",
    caption: "Swipe through the exact creative edits that boosted engagement fast.",
    thumbnail: "/src/assets/reel_7.png",
    instagramUrl: "https://www.instagram.com/reel/DTaK0lAAYGD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "reel-3",
    badge: "📈 Most Viewed",
    title: "From Zero to 618K Reach Overnight",
    views: "618K",
    likes: "8.9K",
    caption: "The posting strategy that turned one clip into a creator funnel.",
    thumbnail: "/src/assets/reel3.png",
    instagramUrl:
      "https://www.instagram.com/reel/DYaB1ukvy_T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "reel-4",
    badge: "❤️ Fan Favorite",
    title: "The Hook That Kept Everyone Watching",
    views: "777K",
    likes: "9802",
    caption: "A look at the storytelling move that kept viewers glued.",
    thumbnail: "/src/assets/reel5.png",
    instagramUrl: "https://www.instagram.com/reel/DZ2Zjpmh5V2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },

  {
    id: "reel-5",
    badge: "🔥 Viral",
    title: "Reel Blueprint for Creator Growth",
    views: "173K",
    likes: "3901",
    caption: "A repeatable formula for high-retention short-form content.",
    thumbnail: "/src/assets/reel4.png",
    instagramUrl:
      "https://www.instagram.com/reel/DUYjsGtD_mD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "reel-6",
    badge: "⭐ Creator's Pick",
    title: "The Caption That Triggered Shares",
    views: "686K",
    likes: "43.1K",
    caption: "Why this caption made the reel feel personal and shareable.",
    thumbnail: "/src/assets/reel6.png",
    instagramUrl: "https://www.instagram.com/reel/DSxRgJlAYnN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const ReelCard = ({ badge, title, views, likes, caption, thumbnail, instagramUrl }) => {
  const finalThumbnail =
    thumbnail || getInstagramReelThumbnail(instagramUrl) || reelFallbackThumbnail;

  return (
    <motion.div
      className="group rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-primary/5 backdrop-blur-2xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-primary/20"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary via-secondary to-accent-pink p-[2px]">
        <div className="relative overflow-hidden rounded-[26px] bg-slate-950">
          <img
            src={finalThumbnail}
            alt={title}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = reelFallbackThumbnail;
            }}
            className="h-[560px] w-full object-cover object-center transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 shadow-lg shadow-black/20 transition duration-300 group-hover:scale-110">
              <svg
                className="h-10 w-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div className="space-y-3">
          <h3 className="font-inter font-semibold text-white text-2xl leading-tight">
            {title}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
              <span>👁</span> {views} Views
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
              <span>❤️</span> {likes} Likes
            </span>
          </div>
        </div>

        <p className="font-inter text-white/60 leading-relaxed">{caption}</p>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-transparent hover:bg-orange-500 hover:text-white"
        >
          Watch Reel
        </a>
      </div>
    </motion.div>
  );
};

const FeaturedReels = () => (
  <section id="featured-reels" className="relative py-20">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-16 h-80 w-80 rounded-full bg-accent-pink/10 blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="mb-4 text-lg uppercase tracking-[0.32em] text-primary/80">
          Results
        </p>
        <h2 className="font-inter font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-white mb-5">
          Featured Reels
        </h2>
        <p className="mx-auto max-w-3xl font-inter text-white/70 text-lg leading-8">
          Real content. Real growth. Explore some of my highest-performing Instagram
          Reels that have reached millions and helped creators grow.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredReels.map((reel) => (
          <ReelCard key={reel.id} {...reel} />
        ))}
      </div>

    </div>
  </section>
);

export default FeaturedReels;
