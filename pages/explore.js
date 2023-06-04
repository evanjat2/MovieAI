import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackgroundSearch from "../public/images/bgsearch.png";
import Background from "../public/images/background.png";
import Cover from "../public/images/cover.png";
import Up from "../public/images/up-arrow.png";

import { animateScroll as scroll } from "react-scroll";

export default function ExplorePage() {
  const router = useRouter();
  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();
  const [search, setSearch] = useState();
  const searchQuery = router.query.search || "";

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "32e949509dmshd0e1ddcbd891bd4p197768jsncad0283bf5d1",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    fetch(
      "https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_250&limit=20&endYear=2023",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
    fetch(
      "https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_series_250&limit=20&endYear=2023",
      options
    )
      .then((response) => response.json())
      .then((response) => setSeries(response.results))
      .catch((err) => console.error(err));
    fetch(
      "https://moviesdatabase.p.rapidapi.com/titles/search/title/" +
        searchQuery +
        "?exact=false&endYear=2023&limit=30&sort=year.decr",
      options
    )
      .then((response) => response.json())
      .then((response) => setSearch(response.results))
      .catch((err) => console.error(err));
  }, [searchQuery]);

  useEffect(() => {
    console.log(movies);
    console.log(series);
    console.log(searchQuery);
  }, []);

  if (searchQuery !== "") {
    return (
      <>
        <div className="min-h-screen font-poppins text-white overflow-hidden">
          <Header />
          <div className="absolute top-0 -z-10">
            <Image src={Background} />
          </div>
          <div className="absolute -top-20 -z-20">
            <Image src={BackgroundSearch} />
          </div>
          <div className="bg-black fixed w-screen h-screen -z-30"></div>

          <div className="pl-[60px] ">
            <div className="text-xl font-bold mt-[40vh] mb-[20px] align-middle">
              {search && search.length > 0
                ? `SEARCH RESULTS FOR "${searchQuery}"`
                : `NO SEARCH RESULTS FOUND FOR "${searchQuery}"`}
            </div>

            <div className="flex gap-12 overflow-x-scroll scrollbar-hide">
              {search
                ?.filter((l) => l.primaryImage?.url)
                .map((l) => (
                  <div key={l.id} className="flex-none w-[126px]">
                    <div className="w-[126px] h-[200px]">
                      <img
                        alt="img-movie"
                        className="w-full"
                        src={l.primaryImage?.url}
                      ></img>
                    </div>
                    <div className="font-bold">{l.titleText.text}</div>
                    <div className="font-bold text-[#AFAFAF] mb-[50px]">
                      {l.releaseYear?.year}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="fixed bottom-10 right-5 animate-bounce">
            <Image
              alt="scroll-button"
              src={Up}
              className="cursor-pointer"
              onClick={scroll.scrollToTop}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="min-h-screen font-poppins text-white overflow-hidden">
          <Header />
          <div className="absolute top-0 -z-10">
            <Image src={Background} />
          </div>
          <div className="absolute -top-20 -z-20">
            <Image src={Cover} />
          </div>
          <div className="bg-black fixed w-screen h-screen -z-30"></div>

          <div className="pl-[60px] ">
            <div className="mt-[40vh] text-xl font-bold mb-3">
              TOP MOVIES TODAY
            </div>
            <div className="flex gap-12 overflow-x-scroll scrollbar-hide">
              {movies
                ?.filter((l) => l.primaryImage?.url)
                .map((l) => (
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

            <div className="mt-[10vh] text-xl font-bold mb-3">
              TOP SERIES TODAY
            </div>
            <div className="flex gap-12 overflow-x-scroll scrollbar-hide">
              {series
                ?.filter((l) => l.primaryImage?.url)
                .map((l) => (
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
            <Image
              alt="scroll-button"
              src={Up}
              className="cursor-pointer"
              onClick={scroll.scrollToTop}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
