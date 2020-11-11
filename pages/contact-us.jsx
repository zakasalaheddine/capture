import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation, titleAnimation } from "../animation";
import { Hide } from "../styles/styles";

export default function ContactUs() {
  return (
    <ContactContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Email US</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Whatsapp us</h2>
          </Social>
        </Hide>
      </div>
    </ContactContainer>
  );
}

const ContactContainer = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;
