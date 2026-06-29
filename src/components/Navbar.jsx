import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({ theme, toggleTheme }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (event, nav) => {
    event.preventDefault();
    const section = document.getElementById(nav.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(nav.title);
    setToggle(false);
  };

  useEffect(() => {
    const activeOnScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const currentSection = navLinks.find((link) => {
        const section = document.getElementById(link.id);
        return (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        );
      });
      if (currentSection) {
        setActive(currentSection.title);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      activeOnScroll();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-dark/40 border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={logo}
            alt="CreatorsDost"
            className="w-8 h-8 rounded-lg object-cover"
          />
          <span className="font-inter font-bold text-lg text-white">CreatorsDost</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="list-none sm:flex hidden justify-center items-center gap-8 flex-1 ml-12">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-inter font-medium cursor-pointer text-sm transition-colors ${
                active === nav.title ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              <a href={`#${nav.id}`} onClick={(e) => handleNavClick(e, nav)}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <motion.a
            href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20Creator%27s%20Stack%2C%20I%20would%20like%20to%20book%20a%20call."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-inter font-semibold text-sm hover:shadow-lg hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          Contact Us
          </motion.a>

       

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setToggle(!toggle)}
            className="sm:hidden flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`${
          !toggle ? "hidden" : "flex"
        } sm:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-md border-b border-white/10`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
      >
        <ul className="list-none w-full flex flex-col p-6 gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-inter font-medium cursor-pointer text-sm transition-colors ${
                active === nav.title ? "text-white" : "text-white/60"
              }`}
            >
              <a
                href={`#${nav.id}`}
                onClick={(e) => {
                  handleNavClick(e, nav);
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <motion.a
            href="https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello%20Creator%27s%20Stack%2C%20I%20would%20like%20to%20book%20a%20call."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-inter font-semibold text-sm text-center mt-2"
            whileHover={{ scale: 1.02 }}
          >
            Book a Free Call
          </motion.a>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
