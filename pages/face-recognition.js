import Header from "../components/Header";
import Footer from "../components/Footer";
export default function faceRecognition() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-[#96969C] via-[#5F647F] to-[#121A39]">
        <Header />
        <div className="text-center w-screen min-h-screen content-center grid gap-4 font-poppins">
          <p className="font-poppins text-2xl text-center text-white mb-8">
            Express yourself according to your current mood!
          </p>
          <div className="bg-white w-[55vw] min-h-[55vh] m-auto rounded-[45px]"></div>
          <div className="bg-white w-[55vw] bg-gradient-to-b from-[#E7E0C6] to-[#ACBCFF] m-auto rounded-[45px] p-2 font-bold cursor-pointer hover:scale-105 transition duration-500">CAPTURE</div>
          <div className="bg-white w-[55vw] bg-gradient-to-b from-[#E7E0C6] to-[#ACBCFF] m-auto rounded-[45px] p-2 font-bold cursor-pointer hover:scale-105 transition duration-500">IMPORT FROM LOCAL</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
