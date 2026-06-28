import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-page bg-gradient-to-r from-primary to-secondary rounded-[10px] outline-none ${styles}`}>
    Book a Call
  </button>
);

export default Button;
