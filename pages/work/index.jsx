import styled from "styled-components";
import Link from "next/link";
import { getMovies } from "../../data";
import { motion } from "framer-motion";
import {
  fade,
  lineAnimation,
  pageAnimation,
  photoAnimation,
  slider,
} from "../../animation";
import { Hide } from "../../styles/styles";

export default function OurWork({ movies }) {
  return (
    <WorkContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Frame1 variants={slider} />
      <Frame2 variants={slider} />
      <Frame3 variants={slider} />
      <Frame4 variants={slider} />
      {movies.map((movie) => (
        <MovieContainer key={movie.slug}>
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
      ))}
    </WorkContainer>
  );
}

const WorkContainer = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

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

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

export async function getStaticProps(ctx) {
  const movies = getMovies();
  return { props: { movies } };
}
