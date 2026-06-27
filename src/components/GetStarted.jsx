import { motion } from "framer-motion";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const calendarUrl =
    "https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20Creator%27s%20Stack%2C%20I%20would%20like%20to%20book%20a%20call.";

  return (
      <a href={calendarUrl} target="_blank" rel="noopener noreferrer" aria-label="Schedule a call on WhatsApp">
        <motion.button
          type="button"
          className={`${styles.flexCenter} px-6 py-3 rounded-lg bg-blue-gradient text-white font-poppins font-semibold gap-3`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="flex items-center gap-2">
            <span>Schedule Call</span>
            <motion.img
              src={arrowUp}
              alt="arrow-up"
              className="w-[18px] h-[18px]"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </span>
        </motion.button>
      </a>
  );
};

export default GetStarted;
