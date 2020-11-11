import { AnimatePresence } from "framer-motion";
import Nav from "../components/nav";
import { GlobalStyle } from "../styles/global-styles";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
