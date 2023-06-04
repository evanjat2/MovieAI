import { useEffect, useContext, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import axios from "axios";

import { dataGenre } from "../data/dataGenre";
import Header from "../components/Header";
import gambar from "../public/images/result.png";
import { AppContext } from "../context/appContext";

export default function result() {
  const [mood, setMood] = useState();
  const [genre, setGenre] = useState();
  const [movie, setMovie] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMood(JSON.parse(localStorage.getItem("myMood")));
      setGenre(JSON.parse(localStorage.getItem("myGenre")));
      setMovie(JSON.parse(localStorage.getItem("myMovie")));
    }
  }, []);
  return (
    <>
      <div className="bg-gradient-to-b from-[#1E2A5E] to-[#172048] min-h-screen text-white">
        <Header />
        <div className="font-poppins text-center px-[20%] pt-8 w-full">
          <p className="pb-8 font-bold">Your mood is {mood}</p>
          <p className="pb-8 font-bold">
            Congratulations! Here is your ideal movie pick with genre {genre}
          </p>
          {movie?.map((list) => (
            <>
              <div className="w-full pb-[5vh]" key={list._id}>
                <div className="flex gap-12 w-full">
                  <div className="w-[33%] shrink-0">
                    <img
                      alt="image-movie"
                      src={list.primaryImage?.url}
                      className="w-[80%]"
                    ></img>
                  </div>
                  <div className="text-justify">
                    <p className="pb-8 font-bold">{list.titleText.text}</p>
                    <p>{list.plot.plotText.plainText}</p>
                    <div></div>
                  </div>
                </div>
                <div></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
