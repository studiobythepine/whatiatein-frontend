import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Review from "../components/Review";
import { fetchAPI } from "../lib/api";

export default function Home({ reviews }) {
  console.log(reviews)
  return (
    <div className="absolute top-28 flex flex-col md:flex-row md:flex-wrap md:w-3/4 md:top-0 md:left-1/4 md:h-full">
      {reviews.map((review) => {
        // return <Review review={review} key={review.id} />;
        return <h1>
          {review.attributes.name}
        </h1>
      })}
    </div>
  );
}

export async function getStaticProps() {
  // const reviewsRes = await fetchAPI("/api/reviews", { populate: ["image", "place"] });
  const reviewsRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/reviews`);

  return {
    props: { reviews: reviewsRes.data.data },
  };
}
