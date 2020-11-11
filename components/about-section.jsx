import { motion } from "framer-motion";
import { fade, photoAnimation, titleAnimation } from "../animation";
import { Container, Description, Hide, Image } from "../styles/styles";
import Wave from "./wave";

export default function AboutSection() {
  return (
    <Container>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>come true</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography that you have. we have
          professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src="/img/home1.png"
          alt="Guy with a camera"
        />
      </Image>
      <Wave />
    </Container>
  );
}
