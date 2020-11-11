import { motion } from "framer-motion";
import styled from "styled-components";
import { fade, lineAnimation, photoAnimation } from "../animation";
import { Hide } from "../styles/styles";
import Link from "next/link";
import { useScroll } from "../hooks/useScroll";

export default function Movie({ movie }) {
  const [element, controls] = useScroll();
  return (
    <MovieContainer>
      <motion.h2 variants={fade}>{movie.title}</motion.h2>
      <motion.div variants={lineAnimation} className="line"></motion.div>
      <Link href={`/work/${movie.slug}`}>
        <a>
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={movie.mainImg}
              alt={movie.title}
            />
          </Hide>
        </a>
      </Link>
    </MovieContainer>
  );
}
const MovieContainer = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
