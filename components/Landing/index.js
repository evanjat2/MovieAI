import Image from "next/image";
import Up from "../../public/images/up-arrow.png";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-[91vh] grid content-center gap-12 text-white font-poppins w-full text-center">
      <div className="text-3xl ">
        <div> AI-POWERED</div>
        <div> MOVIE RECOMMENDATIONS </div>
      </div>
      <div className="text-xl">
        <div>"Let AI be your movie matchmaker - Discover your</div>
        <div> perfect movie match with ease!"</div>
      </div>
      <div className="flex justify-center gap-16 text-black font-semibold ">
        <Link href="/quiz">
          <div className="bg-gradient-to-tr from-[#E7E0C6] to-[#CE8FFF] p-4 px-7 cursor-pointer rounded-xl hover:scale-110 duration-500 transition-all ">
            Spill the Tea!
          </div>
          f
        </Link>
        <Link href="/face-recognition">
          <div className="bg-gradient-to-br from-[#E7E0C6] to-[#3C57C4] p-4 px-10 cursor-pointer rounded-xl hover:scale-110 duration-500 transition-all">
            Face Scan
          </div>
        </Link>
      </div>
      <div className="fixed bottom-10 right-5 animate-bounce">
        <Image
          src={Up}
          onClick={scroll.scrollToTop}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
