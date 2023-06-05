import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Background from "../../public/images/background2.png";
import Cover from "../../public/images/cover_preview.png";

import movie_cover from "../../public/images/cover1.png";
import Up from "../../public/images/up-arrow.png";

import { animateScroll as scroll } from "react-scroll";

export default function moviePreview() {
  const router = useRouter();
//   const id = router.query.slug;
    const [id, setId] = useState(router.query.slug)
  const [thisMovie, setThisMovie] = useState();
  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();
  const fetchMovie = async (id) => {
    const url = "https://moviesdatabase.p.rapidapi.com/titles/" + id; 
    const options = {
      method: "GET",
      url: url,
      params: { info: "base_info" },
      headers: {
        "X-RapidAPI-Key": "eda9cc6761mshd604525a311e726p148243jsn27632d2bc44d",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.results);
      setThisMovie(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchReccomended = async () => {
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
  };
  useEffect(() => {
    fetchMovie(router.query.slug);
    fetchReccomended();
  }, [router.query.slug]);

  return (
    <>
      <div className="min-h-screen font-poppins overflow-hidden text-white relative">
        <div className="absolute h-full w-full bg-black -z-20"></div>
        {/* {thisMovie?.originalTitleText.text} */}
        {/* untuk background */}
        <Header />
        <div className="absolute top-0 -z-10">
          <Image src={Background} />
        </div>
        <div className="absolute -top-20 -z-20">
          <Image src={Cover} />
        </div>
        <div className="pl-[60px]">
          <div className="grid" style={{ gridTemplateColumns: "400px 800px" }}>
            <div className="scale-75 pt-[50px]">
              <img src={thisMovie?.primaryImage?.url} alt="image"></img>
            </div>
            <div className="width-[700px] pt-[120px] pr-[100px] font-bold text-4xl">
              {thisMovie?.originalTitleText.text}
              <p className="mt-3 pr-[300px] font-thin text-[12px] leading-5">
                {thisMovie?.plot.plotText.plainText}
              </p>
              <p className="font-bold mt-6 text-[12px] leading-5">
                Starring:{" "}
              </p>
              <div className="font-bold mt-2 text-[12px] leading-5 flex gap-2">
                Genres:
                {thisMovie?.genres.genres.map((l) => (
                  <>
                    <div className="px-2 bg-blue-300 w-fit" key={l.tex}>
                      {l.text}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-12 overflow-x-scroll scrollbar-hide"></div>
          <div className="mt-[10vh]">RECCOMENDED FOR YOU</div>
          <div className="flex gap-12 overflow-x-scroll scrollbar-hide">
            {series?.map((l) => (
              <Link href={`/preview/${l?.id}`}>
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
                    {l?.id}
                  </div>
                </div>
              </Link>
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
