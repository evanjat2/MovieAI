import Header from "../components/Header";
import Footer from "../components/Footer";
export default function quiz() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-[#1E2A5E] to-[#000000]">
        <Header />
        <div className="text-center w-screen min-h-screen content-center grid">
          <p className="font-poppins text-2xl text-center text-white mb-8">
            Share your thoughts and feelings
          </p>
          <p className="font-poppins text-base text-center text-white mb-8">
            It helps to figure out what's going on with you right now!
          </p>
          <div className=" transition-all gap-4 grid text-left font-poppins bg-gradient-to-bl from-[#B999ED] to-[#5B9FD9] w-[55vw] min-h-[45vh] m-auto rounded-[45px] p-[22px] mb-8">
            <div class="p-3 relative mb-3" data-te-input-wrapper-init>
              <textarea
                class="py-3 textarjustify-center peer block resize-none min-h-[auto] w-full rounded-[30px] outline-none border-0 bg-white px-3 leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-grey dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50"
                id="exampleFormControlTextarea1"
                rows="10"
                placeholder="Write your feelings here..."
              ></textarea>
            </div>
          </div>
          <div className="bg-white w-[55vw] bg-gradient-to-b from-[#E7E0C6] to-[#ACBCFF] m-auto rounded-[45px] p-2 font-bold cursor-pointer hover:scale-105 transition duration-500">
            SUBMIT
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
