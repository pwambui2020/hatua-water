
import React from "react"
import Image from "next/image";
// import Card from "./components/Card";
import Landing from "./components/home/Landing";
// import About from "./components/home/About";
import Services from "./components/home/Services";
import About from "./components/home/About";


export default function Home() {
  return (
    <>
    {/* <Landing /> */}
    <About />
    <Services />
      {/* <div className="container m-10 px-4">
      <div className="relative ">
        {/* <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/water6.avif"
                        alt="water tank"
                        // height={1000}
                        // width={1000}
                        layout="fill"
                        objectFit="cover"
                    />
                </div> */}

        {/* <div className="absolute inset-1 flex justify-center items-center flex-col"> */}
        {/* <div className="bg-yellow">
          <h1 className=" break-normal text-6xl text-white font-bold">Empowering Life with  Sustainable <br /> Water and Energy Solutions
          </h1>
          <br />
          <button className=" bg-blue-500 w-[150px] h-[45px] rounded-[5px] text-white cursor-pointer">Learn More</button>
        </div>
      </div>  */}

      {/* </div> */}
      {/* <div className="bg-red-200">
        <h2>footer</h2>
        <h2>this is my footer this is my footer this is my footer this is my footer this is my footer this is my footer this is my footer</h2>

      </div> */}
    </>
  );
}