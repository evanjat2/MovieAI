import { useContext, useState, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import axios from "axios";

import loadingIcon from "../public/images/loading-icon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppContext } from "../context/appContext";

export default function faceRecognition() {
  const [base64Image, setBase64Image] = useState("");
  const router = useRouter();
  const [mood, setMood] = useState();
  const [loading, setLoading] = useState(false);
  const { getGenre } = useContext(AppContext);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setBase64Image(base64String);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (mood) {
      router.push({
        pathname: "/result",
      });
    } else {
      console.log("belum Upload Foto");
    }
  };
  const getMood = async () => {
    setLoading(true);
    axios({
      method: "POST",
      url: "https://classify.roboflow.com/senpro_face2/1",
      params: {
        api_key: "jRJ7jRYo8Grc9rNsKcpk",
      },
      data: base64Image,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(async function (response) {
        console.log(response.data.top);
        let tempMood = response.data.top;
        if (tempMood == "senang") {
          tempMood = "joy";
          console.log("diubah menjadi ", tempMood);
        }
        if (tempMood == "sedih") {
          tempMood = "sadness";
          console.log("diubah menjadi ", tempMood);
        }
        localStorage.setItem("myMood", JSON.stringify(tempMood));
        setMood(tempMood);
        await getGenre(tempMood);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    getMood();
  }, [base64Image]);
  return (
    <div>
      <div className="content-center min-h-screen bg-gradient-to-b from-[#96969C] via-[#5F647F] to-[#121A39]">
        <Header />
        {!loading && (
          <div className="text-center w-screen min-h-screen content-center grid gap-4 font-poppins">
            <p className="font-poppins text-2xl text-center text-white">
              Express yourself according to your current mood!
            </p>
            {!base64Image && (
              <div className="bg-white w-[55vw] h-[55vh] m-auto rounded-[45px]"></div>
            )}
            {base64Image && (
              <img
                className="bg-white h-[55vh] m-auto rounded-[45px]"
                src={base64Image}
                alt="Your Image"
              />
            )}
            <label
              className="bg-white w-[55vw] bg-gradient-to-b from-[#E7E0C6] to-[#ACBCFF] m-auto rounded-[45px] p-2 font-bold cursor-pointer hover:scale-105 transition duration-500"
              htmlFor={"upload-button"}
            >
              <div>Upload File</div>
            </label>
            <input
              type="file"
              id="upload-button"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <div
              onClick={() => handleSubmit()}
              className="bg-white w-[55vw] bg-gradient-to-b from-[#E7E0C6] to-[#ACBCFF] m-auto rounded-[45px] p-2 font-bold cursor-pointer hover:scale-105 transition duration-500"
            >
              <div>Submit</div>
            </div>
          </div>
        )}
        {loading && <Image className="animate-spin m-auto" src={loadingIcon} />}
      </div>
      <Footer />
    </div>
  );
}
