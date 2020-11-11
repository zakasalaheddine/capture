import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import AboutSection from "../components/about-section";
import FAQSection from "../components/faq-section";
import ServicesSection from "../components/services-section";

export default function Home() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FAQSection />
    </motion.div>
  );
}
