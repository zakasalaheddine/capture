import Link from "next/link";
import styled from "styled-components";

export default function Nav() {
  return (
    <StyledNav>
      <h1>
        <Link href="/">
          <a id="logo">Capture</a>
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/">
            <a>1. About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a>2. Our Work</a>
          </Link>
        </li>
        <li>
          <Link href="/contact-us">
            <a>3. Contact Us</a>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;
