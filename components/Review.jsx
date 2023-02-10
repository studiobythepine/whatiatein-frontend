import React from "react";
import Image from "next/image";
import Link from "next/link";

const Review = ({ review }) => {
  console.log(review.attributes);

  var total_score =
    review.attributes.taste + review.attributes.value + review.attributes.vibes + review.attributes.bathroom;

  return (
    <div
      key={review.id}
      style={{
        backgroundImage: `url(${review.attributes.image.data[0].attributes.formats.medium.url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={`w-screen h-2/5 md:w-1/2  md:h-1/2 p-3 ring-4 ring-white ring-inset font-semibold text-slate-50 filter brightness-90 contrast-75 hover:brightness-100 hover:contrast-100`}
    >
      <div id="card-top-right" className="flex items-center justify-evenly ">
        <h2 className="text-4xl">{review.attributes.name}</h2>
        <h3>
          {review.attributes.place.data.attributes.city}, {review.attributes.place.data.attributes.country}
        </h3>
      </div>

      <p className=" text-lg">{review.attributes.content}</p>
      <br />
      <div className="rating-bar-container">
        <div className="rating-bar" style={{ width: `${total_score}0%` }}>
          {total_score}/10
        </div>
      </div>
      <div id="scores" className="grid grid-cols-2">
        <h3>Taste: {review.attributes.taste}</h3>
        <h3>Value: {review.attributes.value}</h3>
        <h3>Humans: {review.attributes.vibes}</h3>
        <h3>Bathroom: {review.attributes.bathroom}</h3>
      </div>
    </div>
  );
};

export default Review;
