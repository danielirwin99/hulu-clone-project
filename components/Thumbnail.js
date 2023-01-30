import React, { forwardRef } from "react";
import Image from "next/image";
import { HandThumbUpIcon, ChevronLeftIcon, cHER } from "@heroicons/react/24/outline";
import Results from "./Results";

const Thumbnail = forwardRef(({ result }, ref) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  console.log(result);

  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      ref={ref}
      className=" group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <div className="relative">
        <Image
          layout="responsive"
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          height={1080}
          width={1920}
        />
      </div>
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type.toUpperCase()} -`}
          {""}
          {result.release_date || result.first_air_date} - {""}
          <HandThumbUpIcon className="h-5 mx-2 cursor-pointer" />{" "}
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});
export default Thumbnail;
