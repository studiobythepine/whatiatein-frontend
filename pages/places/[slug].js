import axios from "axios";
import { useRouter } from "next/router";
import { fetchAPI } from "../../lib/api";
import Review from "../../components/Review";
import Image from "next/image";
import Map from "../../components/Map";

const Place = ({ list, place }) => {
  const router = useRouter();

  return (
    <div className="absolute top-28 flex flex-col w-full md:flex-row md:flex-wrap md:w-3/4 md:top-0 md:left-1/4 md:h-full">
      <div
        id="top-section"
        className="flex flex-col items-center border-b-8 border-black justify-equally lign-middle w-full h-1/2 md:flex-row md:h-2/5"
      >
        <div id="top-left" className="flex w-1/3 md:flex-col justify-between align-top">
          <Image
            className="w-auto h-auto"
            width={200}
            height={100}
            layout="responsive"
            src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${place.data[0].attributes.image.data.attributes.url}`}
          ></Image>
          <h1 className="text-4xl text-slate-800">
            {place.data[0].attributes.city}, {place.data[0].attributes.country}
          </h1>
        </div>
        <div id="top-right" className="w-full h-64 md:h-full md:w-2/3 ">
          <Map place={place} list={list} />
        </div>
      </div>
      {list.map((article) => {
        return `/places/${article.attributes.place.data.attributes.slug}` === router.asPath ? (
          <Review key={article.id} review={article} />
        ) : null;
      })}
    </div>
  );
};

export default Place;

export async function getStaticProps(context) {
  const id = context.params.slug;
  const list = await fetchAPI("/articles", { populate: "*" });
  // const place = await fetchAPI("/places", { populate: "*" });
  const place = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/places?filters[slug]=${id}&populate=image`
  );

  return {
    props: { list: list.data, place: place.data },
  };
}

export const getStaticPaths = async () => {
  const place = await fetchAPI("/places", { populate: "*" });
  const paths = place.data.map((item) => {
    return {
      params: { slug: item.attributes.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
