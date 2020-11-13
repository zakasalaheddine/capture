import styled from "styled-components";
import { getMovies } from "../../data";
import { motion } from "framer-motion";
import { pageAnimation, slider } from "../../animation";
import Movie from "../../components/movie";
import HeadInfo from "../../components/head-info";

export default function OurWork({ movies }) {
  return (
    <>
      <HeadInfo title="Our Works" />
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
          <Movie movie={movie} key={movie.slug} />
        ))}
      </WorkContainer>
    </>
  );
}

const WorkContainer = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
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
