import styled from "styled-components";
import Award from "../../components/award";
import { getMovies } from "../../data";

export default function MovieDetail({ movie }) {
  return (
    <Details>
      <HeadLine>
        <h1>{movie.title}</h1>
        <img src={movie.mainImg} alt={movie.title} />
      </HeadLine>
      <Awards>
        {movie.awards.map((award, idx) => (
          <Award key={idx} award={award} />
        ))}
      </Awards>
      <ImageDisplay>
        <img src={movie.secondaryImg} alt={movie.title} />
      </ImageDisplay>
    </Details>
  );
}

const Details = styled.div`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h1 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export async function getStaticPaths() {
  const movies = getMovies();
  const paths = movies.map((movie) => `/work/${movie.slug}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movies = getMovies();
  const selectedMovie = movies.find((movie) => movie.slug == params.slug);
  return { props: { movie: selectedMovie } };
}
