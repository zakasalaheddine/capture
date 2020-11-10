import styled from "styled-components";
import { Container, Description, Hide, Image } from "../styles/styles";

export default function AboutSection() {
  return (
    <Container>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make </h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography that you have. we have
          professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src="/img/home1.png" alt="Guy with a camera" />
      </Image>
    </Container>
  );
}
