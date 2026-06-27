import { motion } from "framer-motion";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <motion.div
    className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-card-surface border border-card-border"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{
      y: -10,
      boxShadow: "0px 20px 50px rgba(100, 100, 255, 0.2)",
    }}
  >
    <motion.img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.p
      className="font-poppins font-normal text-[18px] leading-[32.4px] text-page-text my-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {content}
    </motion.p>

    <motion.div
      className="flex flex-row"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.img
        src={img}
        alt={name}
        className="w-[48px] h-[48px] rounded-full"
        whileHover={{ scale: 1.2 }}
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-page-text">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-secondary-text">
          {title}
        </p>
      </div>
    </motion.div>
  </motion.div>
);

export default FeedbackCard;
