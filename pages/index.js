import axios from "axios";
import Review from "../components/Review";

export default function Home({ reviews }) {
  return (
    <div className="absolute top-28 flex flex-col md:flex-row md:flex-wrap md:w-3/4 md:top-0 md:left-1/4 md:h-full ">
      {reviews.map((review) => {
        return <Review review={review} key={review.id}  />;
      })}
    </div>
  );
}

export async function getStaticProps() {
  const reviewsRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/reviews?sort=id:desc&populate=*`);

  return {
    props: { reviews: reviewsRes.data.data },
    revalidate: 60
  };
}
