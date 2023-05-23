import { useEffect, useState } from "react";

import { animateScroll as scroll } from "react-scroll";

import Header from "../component/Header";

import Background from "../assets/images/background.png";
import Cover from "../assets/images/cover.png";
import Up from "../assets/images/up-arrow.png";
import Footer from "../component/Footer";

export default function ExplorePage() {
  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "32e949509dmshd0e1ddcbd891bd4p197768jsncad0283bf5d1",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    fetch(
      "https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_250",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
    fetch(
      "https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_series_250",
      options
    )
      .then((response) => response.json())
      .then((response) => setSeries(response.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    console.log(movies);
    console.log(series);
  }, []);

  return (
    <>
      <div className="min-h-screen font-poppins text-white overflow-hidden">
        <Header />
        <div className="absolute top-0 -z-10">
          <img src={Background}></img>
        </div>
        <div className="absolute -top-20 -z-20">
          <img src={Cover}></img>
        </div>
        <div className="bg-black fixed w-screen h-screen -z-30"></div>

        <div className="pl-[60px] ">
          <div className="mt-[40vh]">MOVIES</div>
          <div className="flex gap-12 overflow-x-scroll scrollbar-hide">
            {movies?.map((l) => (
              <div key={l.id} className="flex-none w-[126px]">
                <div className="w-[126px] h-[200px]">
                  <img
                    alt="img-movie"
                    className="w-full"
                    src={l.primaryImage?.url}
                  ></img>
                </div>
                <div className="font-bold">{l.titleText.text}</div>
                <div className="font-bold text-[#AFAFAF]">
                  {l.releaseYear?.year}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[10vh]">SERIES</div>
          <div className="flex gap-12 overflow-x-scroll scrollbar-hide">
            {series?.map((l) => (
              <div key={l.id} className="flex-none w-[126px]">
                <div className="w-[126px] h-[200px]">
                  <img
                    alt="img-movie"
                    className="w-full"
                    src={l.primaryImage?.url}
                  ></img>
                </div>
                <div className="font-bold">{l.titleText.text}</div>
                <div className="font-bold text-[#AFAFAF]">
                  {l.releaseYear?.year}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fixed bottom-10 right-5 animate-bounce">
          <img
            src={Up}
            onClick={scroll.scrollToTop}
            className="cursor-pointer"
          ></img>
        </div>
        <Footer/>
      </div>
    </>
  );
}