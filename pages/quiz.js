import Header from "../components/Header";
import Footer from "../components/Footer";
export default function quiz() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-[#1E2A5E] to-[#000000]">
        <Header />
        <div className="text-center w-screen min-h-screen content-center grid">
          <p className="font-poppins text-2xl text-center text-white mb-8">
            What’s your match movies? Find out with our mini quiz!
          </p>
          <div className=" transition-all gap-4 grid text-left font-poppins bg-gradient-to-bl from-[#B999ED] to-[#5B9FD9] w-[55vw] min-h-[55vh] m-auto rounded-[45px] p-[22px]">
            <p className="rounded-[45px] bg-white p-2">Question</p>
            <p className="rounded-[45px] bg-white p-2 mt-4 cursor-pointer hover:scale-105 transition duration-500 ">Answer 1</p>
            <p className="rounded-[45px] bg-white p-2 cursor-pointer hover:scale-105 transition duration-500 ">Answer 2</p>
            <p className="rounded-[45px] bg-white p-2 cursor-pointer hover:scale-105 transition duration-500 ">Answer 3</p>
            <p className="rounded-[45px] bg-white p-2 cursor-pointer hover:scale-105 transition duration-500 ">Answer 4</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
