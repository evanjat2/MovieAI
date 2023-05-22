import Image from "next/image";
import Link from "next/link";

import Search from "./Search";
import Logo from "../../public/images/logo.png";
export default function Header() {
  return (
    <div className="flex h-[9vh] text-white text-sm font-poppins px-2">
      <div className="w-[10%] px-4 grid content-center">
        <Image src={Logo} className="w-full" />
      </div>
      <div className="w-[50%]">
        <Search />
      </div>
      <div className="flex w-[40%] justify-around font-bold text-white align-middle">
        <Link href="/">
          <div className="hover:text-[#E7E0C6] cursor-pointer grid content-center h-full">
            Home
          </div>
        </Link>
        <Link href="/face-recognition">
          <div className="hover:text-[#E7E0C6] cursor-pointer grid content-center h-full">
            Face Scan
          </div>
        </Link>
        <Link href="/explore">
          <div className="hover:text-[#E7E0C6] cursor-pointer grid content-center h-full">
            Explore
          </div>
        </Link>
        <Link href="/quiz">
          <div className="hover:text-[#E7E0C6] cursor-pointer grid content-center h-full">
            Spill the Tea!
          </div>
        </Link>
      </div>
    </div>
  );
}
