import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { useEffect } from "react";
import axios from "axios";

export default function LandingPage() {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    headers: {
      "X-RapidAPI-Key": "32e949509dmshd0e1ddcbd891bd4p197768jsncad0283bf5d1",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <>
      <div className="-z-10 fixed top-0 bg-[conic-gradient(var(--tw-gradient-stops))] from-[#1A2552]  via-[#060812] to-[#1A2552] w-full h-full"></div>
      <Header />
      <Landing />
      <Footer />
    </>
  );
}
