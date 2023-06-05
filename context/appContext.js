import React, { useState, useEffect } from "react";
import axios from "axios";

import { dataGenre } from "../data/dataGenre";

const AppContext = React.createContext([{}, () => {}]);

const AppContextProvider = (props) => {
  const getGenre = async (mood) => {
    if (mood == "senang") {
      mood = "joy";
    }
    if (mood == "sedih") {
      mood = "sadness";
    }
    const filteredGenre = dataGenre.filter((data) => data.id == mood);
    const randomNumber = Math.floor(Math.random() * 4);
    const randGenre = filteredGenre[0]?.genre[randomNumber];
    console.log("Genre yang didapat = ", randGenre);
    localStorage.setItem("myGenre", JSON.stringify(randGenre));
    await fetchMovies(randGenre, "3");
  };

  const fetchMovies = async (genre, limit) => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/random",
      params: {
        genre: genre,
        limit: limit,
        info: "base_info",
        list: "most_pop_movies",
      },
      headers: {
        "X-RapidAPI-Key": "eda9cc6761mshd604525a311e726p148243jsn27632d2bc44d",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      localStorage.setItem("myMovie", JSON.stringify(response.data.results));
      console.log("dapet movies", response.data.results)
      await checkMovies();
    } catch (error) {
      console.error(error);
    }
  };

  const checkMovies = async () => {
    const movies = JSON.parse(localStorage.getItem("myMovie"));
    const mood = JSON.parse(localStorage.getItem("myMood"));
    if (movies?.length == 0) {
      console.log("Nggak aman")
      getGenre(mood);
    }
  };

  return (
    <AppContext.Provider value={{ getGenre }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
