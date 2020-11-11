import styled from "styled-components";

export default function Award({ award }) {
  return (
    <AwardContainer>
      <h3>{award.title}</h3>
      <div className="line"></div>
      <p>{award.description}</p>
    </AwardContainer>
  );
}

const AwardContainer = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
