import { GlobalStyle } from "../styles/global-styles";

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
