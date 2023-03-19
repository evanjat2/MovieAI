export default function Landing() {
  return (
    <div className="h-[91vh] grid content-center gap-12 text-white font-poppins w-full text-center">
      <div className="font-bold text-lg">
        <div> AI-POWERED</div>
        <div> MOVIE RECOMENDATIONS </div>
      </div>
      <div>
        <div>"Let AI be your movie matchmaker - Discover your</div>
        <div> perfect movie match with ease!"</div>
      </div>
      <div className="flex justify-center gap-16 text-black font-semibold ">
        <div className="bg-gradient-to-tr from-[#E7E0C6] to-[#CE8FFF] p-2 cursor-pointer rounded-xl hover:scale-110 transition duration-500 transition-all ">Use mini quiz</div>
        <div className="bg-gradient-to-br from-[#E7E0C6] to-[#3C57C4] p-2 cursor-pointer rounded-xl hover:scale-110 transition duration-500 transition-all">Use emotion detection</div>
      </div>
    </div>
  );
}
