import styled from "styled-components";
import Link from "next/link";
import { getMovies } from "../../data";

export default function OurWork({ movies }) {
  return (
    <WorkContainer>
      {movies.map((movie) => (
        <MovieContainer key={movie.slug}>
          <h2>{movie.title}</h2>
          <div className="line"></div>
          <Link href={`/work/${movie.slug}`}>
            <a>
              <img src={movie.mainImg} alt={movie.title} />
            </a>
          </Link>
        </MovieContainer>
      ))}
    </WorkContainer>
  );
}

const WorkContainer = styled.div`
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
    background-color: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export async function getStaticProps(ctx) {
  const movies = getMovies();
  return { props: { movies } };
}
