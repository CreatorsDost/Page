import { motion } from "framer-motion";
import { stats } from "../constants";
import styles from "../style";

const StatBox = ({ id, title, value }) => (
  <motion.div
    key={id}
    className={`flex-1 flex justify-start items-center flex-row m-3`}
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, type: "spring" }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.h4
      className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {value}
    </motion.h4>
    <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
      {title}
    </p>
  </motion.div>
);

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <StatBox key={stat.id} {...stat} />
    ))}
  </section>
);

export default Stats;
