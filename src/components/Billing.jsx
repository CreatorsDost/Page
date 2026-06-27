import { motion } from "framer-motion";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, type: "spring", stiffness: 60 },
  },
};

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <motion.div
      className={layout.sectionImgReverse}
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div
      className={layout.sectionInfo}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 className={styles.heading2} variants={itemVariants}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </motion.h2>
      <motion.p className={`${styles.paragraph} max-w-[470px] mt-5`} variants={itemVariants}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </motion.p>

      <motion.div className="flex flex-row flex-wrap sm:mt-10 mt-6" variants={itemVariants}>
        <motion.img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <motion.img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Billing;
