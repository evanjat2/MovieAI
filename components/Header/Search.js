import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (searchText.trim() !== "") {
        router.push({
          pathname: "/explore",
          query: { search: searchText },
        });
        console.log("hai");
        setSearchText("");
      } else {
        // Menampilkan pesan kesalahan jika input teks kosong
        alert("Input text cannot be empty");
      }
    }
  };

  return (
    <div className="font-poppins w-full h-full px-2 relative  ">
      <div className="absolute outline-none bg-white rounded-[15px] opacity-50 h-[36px] w-full pointer-events-none top-[50%] translate-y-[-50%]">
        {" "}
      </div>
      <input
        type="text"
        placeholder="Search"
        className="px-5 bg-transparent outline-none placeholder-white absolute h-[80%] w-full top-[50%] translate-y-[-50%] opacity-80"
        value={searchText}
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
      />
    </div>
  );
}
