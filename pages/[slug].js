import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

const Place = ({ review }) => {
  const router = useRouter();

  return (
    <div className="absolute top-28 flex flex-col w-full text-cyan-900 md:flex-row md:w-3/4 md:top-0 md:left-1/4 md:h-full">
      <div className="w-full">
        <Image
          src={review[0].attributes.image.data[0].attributes.formats.medium.url}
          alt={review[0].attributes.name}
          width={review[0].attributes.image.data[0].attributes.formats.medium.width}
          height={review[0].attributes.image.data[0].attributes.formats.medium.height}
        ></Image>
      </div>
      <div className="flex flex-col">
        <div className="right-side">
          <h2 className="text-4xl">{review[0].attributes.name}</h2>
          <h3>
            {review[0].attributes.place.data.attributes.city}, {review[0].attributes.place.data.attributes.country}
          </h3>
        </div>
        <div className="bottom">
          <p>{review[0].attributes.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Place;

export async function getStaticProps(context) {
  const id = context.params.slug;

  const reviewsRes = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/reviews?filters[slug]=${id}&populate=*`
  );
  return {
    props: { review: reviewsRes.data.data },
  };
}

export const getStaticPaths = async () => {
  const review = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/reviews?populate=*`);

  const paths = review.data.data.map((item) => {
    return {
      params: { slug: item.attributes.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
