import "../styles/globals.css";
import Nav from "../components/Nav";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <Nav />
        <div>
          <Component {...pageProps} />
          <Analytics />
        </div>
      </div>
    </>
  );
}

export default MyApp;
