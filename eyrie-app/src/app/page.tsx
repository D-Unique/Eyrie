import Navbar from "@/app/component/Navbar";
import { H } from "vitest/dist/chunks/reporters.6vxQttCV.js";
import HorizontalScrollSection from "./component/HorizontalScrollSection";

export default function Home() {
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <Navbar />
      <section className="bg-[url('/herobanner.jpg')] hero-bgimage bg-cover bg-bottom w-screen h-screen bg-repeat flex flex-col">
        <div className="inset-0 bg-black bg-opacity-70 p-10 h-full w-full flex flex-col justify-start items-start">
          <div className=" bg-opacity-50 h-[70%]  w-[70%] p-30 ml-20 my-auto flex flex-col justify-start items-start gap-10 max-sm:ml-2">
            <h1 className="text-8xl font-sans text-start w-[800px] text-[#e6bf33]  mr-[120px] mt-10 max-sm:text-7xl max-sm:w-[400px] max-sm:mr-[150px]">
              {" "}
              Find Your Perfect Home&nbsp;with{" "}
              <span className=" text-[#FFF2C2] font-custom">Eyrie</span>
            </h1>
            <h2 className="text-2xl font-sans text-start w-full  mt-5 ">
              Explore a curated selection of rental <br /> properties that fit
              your lifestyle and budget.
            </h2>
            <button className="bg-green-700 rounded-[40px] p-2 text-center cursor-pointer hover:bg-green-900 max-sm:w-100 ">
              Start Your Search
            </button>
          </div>
        </div>
      </section>
      <div className="overflow-hidden">
    <HorizontalScrollSection />
      </div>
    </div>
  );
}
