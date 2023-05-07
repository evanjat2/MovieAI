export default function Search() {
  return (
    <div className="font-poppins w-full h-full px-2 relative  ">
      <div className="absolute outline-none bg-white rounded-[15px] opacity-50 h-[36px] w-full pointer-events-none top-[50%] translate-y-[-50%]">
        {" "}
      </div>
      <input
        type="text"
        placeholder="Search"
        className="px-5 bg-transparent outline-none placeholder-white absolute h-[80%] w-full top-[50%] translate-y-[-50%] px-2 opacity-80"
      />
    </div>
  );
}
