import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="px-3 flex sm:px-0 py-10 bg-[#D631B9]  pb-12 sm:pt-16 lg:pt-24">
      <div className="flex">
        <div className="footer-line absolute sm:translate-y-0  w-full items-start  -left-2 bottom-0">
          <svg
            width="493"
            height="104"
            viewBox="0 0 493 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="footer-line-desktop hidden sm:block"
          >
            <path
              d="M-2.5 11.5C-2.5 11.5 849.5 -42 311.5 112.5"
              stroke="white"
              stroke-width="5"
              opacity="1"
              pathLength="1"
              stroke-dashoffset="0px"
              stroke-dasharray="1px 1px"
            ></path>
          </svg>
          <svg
            width="341"
            height="118"
            viewBox="0 0 341 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="footer-line-mobile sm:hidden "
          >
            <path
              d="M-5 7.43544C-5 7.43544 774.5 -34.0002 -14 116.5"
              stroke="white"
              stroke-width="3"
              opacity="1"
              pathLength="1"
              stroke-dashoffset="0px"
              stroke-dasharray="1px 1px"
            ></path>
          </svg>
        </div>
        <div className="flex gap-0 sm:gap-3 sm:-translate-y-1 -translate-y-7">
          <div className="sm:ml-[2rem] ml-[0.09rem]   translate-y-2  mt-[0.7rem] pt-1">
            <img
              alt="footer-logo"
              loading="lazy"
              width="117"
              height="118"
              decoding="async"
              data-nimg="1"
              className="footer-logo-image h-auto w-[75%] sm:w-full object-cover relative"
              src="/hyperlane.svg"
            />
          </div>
          <div className="text-xl translate-y-2 sm:translate-y-3 flex flex-col justify-center  sm:ml-[0.3rem] ml-0">
            <span className="text-2xl sm:text-3xl mt-2 font-sans font-semibold text-white">
              Go Interchain
            </span>
            <span className="text-2xl sm:text-3xl mt-2 font-sans font-semibold text-white">
              With Hyperlane
            </span>
          </div>{" "}
        </div>
      </div>
      <div className="relative"></div>
    </section>
  );
}
