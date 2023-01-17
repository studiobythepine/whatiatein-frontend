import ToggleNav from "../../components/ToggleNav";
import Search from "../../components/Search";
import axios from "axios";
import { fetchAPI } from "../../lib/api";
import { useState } from "react";
import Link from "next/link";
import Map from "../../components/Map";
import BigMap from "../../components/BigMap";

const Places = ({ places, list }) => {
  const [menuToggle, setMenuToggle] = useState("list");
  const [sorted, setSorted] = useState([places]);

  return (
    <div className="absolute top-28 flex flex-col w-full md:flex-row md:flex-wrap md:w-3/4 md:top-0 md:left-1/4 md:h-full">
      <div
        id="top-section"
        className="flex flex-col items-center pb-5 justify-center align-middle w-full h-1/5"
      >
        <div className="flex justify-evenly align-middle w-48 bg-slate-500 h-auto m-4 p-2">
          <button
            className="h-8 bg-red-400 w-16"
            onClick={() => {
              setMenuToggle("list");
            }}
          >
            List
          </button>
          <button
            className="h-8 bg-red-400 w-16"
            onClick={() => {
              setMenuToggle("map");
            }}
          >
            Map
          </button>
        </div>
        {/* <Search /> */}
      </div>

      {menuToggle === "list" ? ( //list section
        <div className="flex flex-col justify-center md:flex-row flex-wrap h-4/5 md:justify-evenly w-full">
          {places.map((place) => {
            return (
              <Link href={`/places/${place.attributes.slug}`} key={place.id}>
                <a
                  className="bg-slate-500 w-full h-40 md:w-2/5 md:h-1/5 text-4xl text-slate-100"
                  style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${place.attributes.image.data.attributes.url})`,
                  }}
                >
                  {place.attributes.city}, {place.attributes.country}
                </a>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="h-96 w-screen md:h-4/5 md:w-full">
          <BigMap list={list} />
        </div>
      )}
    </div>
  );
};

export default Places;

export async function getStaticProps() {
  const placesRes = await fetchAPI("/places", { populate: ["image"] });
  const list = await fetchAPI("/articles", { populate: "*" });

  return {
    // props: { reviews: postRes.data.data },
    props: { places: placesRes.data, list: list.data },
  };
}
