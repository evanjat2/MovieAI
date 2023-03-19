import Header from "../component/Header";
import Landing from "../component/Landing";

export default function LandingPage() {
  return (
    <>
      <div className="-z-10 fixed top-0 bg-[conic-gradient(var(--tw-gradient-stops))] from-[#1A2552]  via-[#060812] to-[#1A2552] w-full h-full"></div>
      <Header />
      <Landing />
    </>
  );
}
