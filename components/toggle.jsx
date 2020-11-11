import { motion } from "framer-motion";
import { useState } from "react";

export default function Toggle({ title, children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line" />
    </motion.div>
  );
}
