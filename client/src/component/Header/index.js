import Search from "./Search";
import Logo from "../../assets/images/logo.png"
export default function Header() {
  return (
    <div className="flex h-[9vh] text-white text-sm font-poppins px-2">
      <div className="w-[10%] px-4 grid content-center"><img src={Logo} className="w-full"></img></div>
      <div className="w-[50%]"><Search/></div>
      <div className="flex w-[40%] justify-around font-bold text-white">
        <div className="hover:text-[#E7E0C6] cursor-pointer grid content-center">Home</div>
        <div className="hover:text-[#E7E0C6] cursor-pointer grid content-center ">Face Recognition</div>
        <div className="hover:text-[#E7E0C6] cursor-pointer grid content-center">Explore</div>
        <div className="hover:text-[#E7E0C6] cursor-pointer grid content-center">Take a quiz</div>
      </div>
    </div>
  );
}
