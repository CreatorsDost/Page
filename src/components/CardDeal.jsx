import { motion } from "framer-motion";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

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
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, type: "spring", stiffness: 60 },
  },
};

const CardDeal = () => (
  <section className={layout.section}>
    <motion.div
      className={layout.sectionInfo}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 className={styles.heading2} variants={itemVariants}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </motion.h2>
      <motion.p className={`${styles.paragraph} max-w-[470px] mt-5`} variants={itemVariants}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </motion.p>

      <motion.div variants={itemVariants}>
        <Button styles={`mt-10`} />
      </motion.div>
    </motion.div>

    <motion.div
      className={layout.sectionImg}
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.img
        src={card}
        alt="billing"
        className="w-[100%] h-[100%]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  </section>
);

export default CardDeal;
