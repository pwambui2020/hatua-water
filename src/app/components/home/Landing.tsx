import Image from 'next/image'
import React from 'react'

function Landing() {
    return (
        <>
            {/* <div className="container m-10 px-4"> */}
            {/* <div className="relative ">
                <div className=" absolute inset-x-0 top-0 w-1/2">
                    <Image
                        src="/images/water6.avif"
                        alt="water tank"
                        height="1200"
                        width="1200"
                        className=""
                    //   layout="fill"
                    //   objectFit="cover"
                    />
                </div>

                <div className="flex items-center w-1/2 m-2 flex-col justify-center inset-1 py-8">
                    <h1 className=" absolute break-normal text-4xl font-bold">Empowering Life with  Sustainable <br /> Water and Energy Solutions
                    </h1>
                    <br />
                    <button className=" bg-blue-500 w-[150px] h-[45px] rounded-[5px] text-white cursor-pointer">Learn More</button>
                </div>
            </div> */}

            <div className="relative bg-blue-500">
                {/* <div className="absolute inset-x-0 top-[70px] md:top-0 w-full md:w-1/2 h-full overflow-hidden">
                    <Image
                        src="/images/water6.avif"
                        alt="water tank"
                        layout="fill"
                        objectFit="cover"
                    />
                </div> */}
                <div className=" absolute inset-x-0 top-[70px] md:top-0 w-full h-full">
                    <Image
                        src="/images/water-tower.avif"
                        alt="water tank"
                        height="1200"
                        width="1200"
                        className=""
                    //   layout="fill"
                    //   objectFit="cover"
                    />
                </div>

                <div className="absolute mt-40 bg-yellow-900 text-white flex justify-center items-center">
                    <div className="text-center items-center mx-10 p-8 md:p-0">
                        <h1 className="text-4xl font-bold">Empowering Life with Sustainable <br /> Water and Energy Solutions</h1>
                        <button className="bg-blue-500 mt-4 px-6 py-3 rounded text-white cursor-pointer">Learn More</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Landing
