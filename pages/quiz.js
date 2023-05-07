import Header from "../components/Header";
import Footer from "../components/Footer";
export default function quiz() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-[#1E2A5E] to-[#000000]">
        <Header />
        <div className="text-center w-screen min-h-screen content-center grid">
          <p className="font-poppins text-3xl text-center text-white">
            Share your thoughts and feelings
          </p>
          <p className="font-poppins text-base text-center text-white mb-8">
            It helps to figure out what's going on with you right now!
          </p>
          <div className=" transition-all gap-4 grid text-left font-poppins bg-gradient-to-bl from-[#B999ED] to-[#5B9FD9] w-[55vw] min-h-[20vh] m-auto rounded-[45px] p-[22px]">
            <input type="text" className="rounded-[45px] bg-white p-1 text-center" placeholder="Type Here"/>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
