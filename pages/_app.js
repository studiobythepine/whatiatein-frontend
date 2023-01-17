import "../styles/globals.css";
import Nav from "../components/Nav";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col md:flex-row">
      <Nav />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
