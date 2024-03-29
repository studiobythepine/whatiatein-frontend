import React from "react";
import Image from "next/image";
import Link from "next/link";

const Review = ({ review }) => {
  let total_score =
    review.attributes.taste + review.attributes.value + review.attributes.vibes + review.attributes.bathroom;

  let total_possible;
  if (review.attributes.bathroom) {
    total_possible = 10;
  } else {
    total_possible = 8;
  }

  return (
    <Link href={`/${review.attributes.slug}`} key={review.id} legacyBehavior className="hover:scale-110 object-cover">
      <div
        className={`flex flex-col justify-between font-semibold w-screen h-72 md:w-1/2  md:h-1/2 p-3  text-slate-50 relative md:brightness-75 md:hover:brightness-100 hover:cursor-pointer`}
      >
        <Image
          src={review.attributes.image.data[0].attributes.formats.medium.url}
          alt="review picture"
          fill
          style={{ objectFit: "cover", zIndex: "-1" }}
          className=""
        ></Image>
        <div
          id="card-top"
          className="flex items-center justify-evenly text-4xl text-stone-50 filter contrast-125 opacity-90 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
          "
        >
          <h2 className="text-4xl">{review.attributes.name}</h2>
          <h3>
            {review.attributes.place.data.attributes.city}, {review.attributes.place.data.attributes.country}
          </h3>
        </div>

        <br />
        <div id="card-botoom" className="">
          <div className="rating-bar-container">
            <div
              className={`rating-bar ${
                total_score === 1
                  ? "bg-red-700"
                  : total_score === 2
                  ? "bg-red-600"
                  : total_score === 3
                  ? "bg-red-500"
                  : total_score === 4
                  ? "bg-orange-600"
                  : total_score === 5
                  ? "bg-orange-500"
                  : total_score === 6
                  ? "bg-yellow-600"
                  : total_score === 7
                  ? "bg-lime-400"
                  : total_score === 8
                  ? "bg-lime-600"
                  : total_score === 9
                  ? "bg-green-600"
                  : "bg-green-800"
              }`}
              style={{
                width: `${total_score}0%`,
              }}
            >
              {total_score}/{total_possible}
            </div>
          </div>
          <div id="scores" className="grid grid-cols-2 text-center ">
            <h3>Taste: {review.attributes.taste}</h3>
            <h3>Value: {review.attributes.value}</h3>
            <h3>Vibes: {review.attributes.vibes}</h3>
            <h3>Bathroom: {review.attributes.bathroom}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Review;
