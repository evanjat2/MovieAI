import Header from "../components/Header";
import Image from "next/image";
import gambar from "../public/images/result.png";
export default function result() {
  return (
    <div className="bg-gradient-to-b from-[#1E2A5E] to-[#172048] min-h-screen text-white">
      <Header />
      <div className="font-poppins text-center px-[20%] pt-8 w-full">
        <p className="pb-8 font-bold">
          Congratulations! Here is your ideal movie pick
        </p>

        <div className="w-full">
          <div className="flex gap-12 w-full">
            <div className="w-[33%] shrink-0">
              <Image src={gambar} className="w-full" />
            </div>
            <div className="text-justify">
              <p className="pb-8 font-bold">Sit veniam quis et ea.</p>
              <p>
                Elit enim deserunt id culpa incididunt consequat velit.
                Excepteur eu tempor ullamco enim esse laborum sunt occaecat
                pariatur dolore exercitation do. Incididunt aute non minim eu
                excepteur officia ut. Amet ipsum eiusmod proident enim non non
                do eiusmod Lorem magna amet cillum pariatur amet.
              </p>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
