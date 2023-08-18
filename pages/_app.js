import "../styles/globals.css";
import Nav from "../components/Nav";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="What I ate in %s"
        defaultTitle="What I ate in"
        description="Where and what to eat in cities around the world. My goal is to review restaurants that locals would go to so you can get the most authentic food experience, wherever you are in the world."
        canonical="https://www.whatiatein.com/"
        openGraph={{
          url: "https://www.whatiatein.com/",
          title: "What I ate in",
          description:
            "Where and what to eat in cities around the world. My goal is to review restaurants that locals would go to so you can get the most authentic food experience, wherever you are in the world.",
          images: [
            {
              url: "./public/logo.png",
              width: 212,
              height: 400,
              alt: "What I ate in logo",
            },
          ],
        }}
      />
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
