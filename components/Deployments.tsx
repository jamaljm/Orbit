import React from "react";
import Link from "next/link";

export default function Orbit_details() {
  return (
    <>
      <section className="  bg-[#2362C0] bg-cover bg-center  px-10  pb-10  flex justify- items-center    flex-col  w-full pt-2 ">
        <div className=" mx-auto max-w-7xl pt-5  lg:pt-24 justify-center items-start flex text-center w-full  mt-10  z-20">
          <div className="relative mt-14  lg:mt-1    ">
            <span className="text-3xl md:text-5xl  lg:text-6xl  relative  font-bold sm:text-4xl text-[#d631b9]">
              Core
            </span>
            <span className="text-3xl md:text-5xl lg:text-6xl  font-bold sm:text-4xl absolute  text-white  left-[0.2rem]">
              Core
            </span>
          </div>
          <div className="relative mt-14 ml-4  lg:mt-1    ">
            <span className="text-3xl md:text-5xl  lg:text-6xl  relative  font-bold sm:text-4xl text-[#d631b9]">
              Deployments
            </span>
            <span className="text-3xl md:text-5xl lg:text-6xl  font-bold sm:text-4xl absolute  text-white  left-[0.2rem]">
              Deployments
            </span>
          </div>
        </div>
      </section>
      <section className="bg-[#2362C0] pb-16">
        <div className="  max-w-[90%] 2xl:max-w-[90%] mx-auto  ">
          <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  justify-center items-center w-full px-10 h-full justify-items-center   py-10 ">
            <ReusableRFC
              image_url="/orbit/deployments/1 (9).jpg"
              title="Arbitrum"
              Website_link="https://arbitrum.io/"
            />
            <ReusableRFC
              image_url="/orbit/deployments/1 (10).jpg"
              title="Avalanche"
              Website_link="https://www.avax.network/"
            />{" "}
            <ReusableRFC
              image_url="/orbit/deployments/1 (11).jpg"
              title="Base"
              Website_link="https://www.base.org/"
            />{" "}
            <ReusableRFC
              image_url="/orbit/deployments/1 (12).jpg"
              title="BNB Chain"
              Website_link="https://www.bnbchain.org/en"
            />{" "}
            <ReusableRFC
              image_url="/orbit/deployments/1 (1).jpg"
              title="Celo"
              Website_link="https://celo.org/"
            />{" "}
            <ReusableRFC
              image_url="/orbit/deployments/1 (2).jpg"
              title="Ethereum"
              Website_link="https://ethereum.org/"
            />
            <ReusableRFC
              image_url="/orbit/deployments/1 (4).jpg"
              title="Manta"
              Website_link="https://manta.network/"
            />{" "}
            <ReusableRFC
              image_url="/orbit/deployments/1 (5).jpg"
              title="Moonbeam"
              Website_link="https://moonbeam.network/"
            />{" "}
            <ReusableRFC
              image_url="/orbit/deployments/1 (13).jpg"
              title="Neutron"
              Website_link="https://www.neutron.org/"
            />{" "}
            <ReusableRFC
              image_url="/orbit/deployments/1 (3).jpg"
              title="Optimism"
              Website_link="https://www.optimism.io/"
            />
            <ReusableRFC
              image_url="/orbit/deployments/1 (6).jpg"
              title="Polygon"
              Website_link="https://polygon.technology/"
            />
            <ReusableRFC
              image_url="/orbit/deployments/1 (8).jpg"
              title="Polygon zkEVM"
              Website_link="https://polygon.technology/polygon-zkevm"
            />
            <ReusableRFC
              image_url="/orbit/deployments/1 (14).jpg"
              title="Scroll"
              Website_link="https://scroll.io/"
            />
            <ReusableRFC
              image_url="/orbit/deployments/1 (7).jpg"
              title="Solana"
              Website_link="https://solana.com/"
            />
          </div>
        </div>
      </section>
    </>
  );
}

interface ReusableRFCProps {
  title: string;
  Website_link?: string;
  image_url: string;
}

const ReusableRFC: React.FC<ReusableRFCProps> = ({
  image_url,
  title,
  Website_link,
}) => {
  return (
    <div className="bg-transparent h-full justify-between mt-5 relative border-2   flex flex-col  w-[95%] py-4 px-8 rounded-2xl   text-center border-white hover:border-[#d631b9] transition-all duration-150 ease-in-out">
      <div className="flex flex-col top-3">
        <img
          className="object-cover border-3  w-32  h-32 mx-auto rounded-full lg:w-32 lg:h-32 xl:w-32 xl:h-32"
          src={image_url || "https://via.placeholder.com/150"}
          alt=""
        />{" "}
        <span className="text-white text-xl mt-2 lg:text-2xl 2xl:text-2xl  font-bold underline  decoration-white decoration-1  underline-offset-[6px]">
          {title}
        </span>
      </div>
      <div className="mb-1">
        <Link href={Website_link || "#"}>
          <div className="relative bottom-0 mt-3 w-full right-0">
            <div className="flex justify-evenly w-full   text-white text-xs lg:text-lg  xl:text-xl font-semibold">
              <div className="flex items-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <span>Website</span>
              </div>
            </div>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};
