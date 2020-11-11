import Nav from "../components/nav";
import { GlobalStyle } from "../styles/global-styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
