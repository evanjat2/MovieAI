export default function Search() {
  return (
    <div className="font-poppins w-full h-full px-2 relative  ">
      <div className="absolute bg-white rounded-xl opacity-50 h-[80%] w-full pointer-events-none top-[50%] translate-y-[-50%]"> </div>
      <input type="text" placeholder="search" className="bg-transparent placeholder-white absolute h-[80%] w-full top-[50%] translate-y-[-50%] px-2 font-bold opacity-100"/>
    </div>
  );
}
