import React from "react";
import Image from "next/image";
import Link from "next/link";

const Review = ({ review }) => {
  let total_score =
    review.attributes.taste + review.attributes.value + review.attributes.vibes + review.attributes.bathroom;

  return (
    <Link href={`/${review.attributes.slug}`} key={review.id}>
      <div
        key={review.id}
        style={{
          backgroundImage: `url(${review.attributes.image.data[0].attributes.formats.medium.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={` flex flex-col justify-between w-screen h-72 md:w-1/2  md:h-1/2 p-3 ring-4 ring-white ring-inset font-semibold text-slate-50`}
      >
        <div id="card-top" className="flex items-center justify-evenly text-4xl text-stone-50 filter contrast-125">
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
                  ? "bg-yellow-500"
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
              {total_score}/10
            </div>
          </div>
          <div id="scores" className="grid grid-cols-2">
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
