import React from "react";
import Image from "next/image";

const Review = ({ review }) => {
  return (
    <div
      key={review.id}
      className={`w-full h-2/5 md:w-1/2  md:h-1/2  border-slate-300 ${
        review.attributes.rating ? "bg-lime-700" : "bg-red-700"
      } `}
    >
      <div id="card-top" className="flex justify-evenly">
        {review.attributes.image.data != null ? (
          <div className="w-1/3 h-1/3">
            <Image
              layout="responsive"
              width={1}
              height={1}
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${review.attributes.image.data.attributes.url}`}
              alt="image"
            />
          </div>
        ) : null}
        <div id="card-top-right" className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-green-900">{review.attributes.name}</h2>
          <h3>
            {review.attributes.place.data.attributes.city}, {review.attributes.place.data.attributes.country}
          </h3>
        </div>
      </div>

      <p className="">{review.attributes.description}</p>
      <br />
      <div id="scores" className="grid grid-cols-2">
        <h3>Taste: {review.attributes.taste}</h3>
        <h3>Value: {review.attributes.value}</h3>
        <h3>Humans: {review.attributes.humans}</h3>
        <h3>Bathroom: {review.attributes.bathroom}</h3>
      </div>
    </div>
  );
};

export default Review;
