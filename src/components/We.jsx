import Image from "next/image";
import { Call } from "./Icon";
export default function We() {
  return (
    <div className=" pt-lg-5 pt-md-4 pt-3 position-relative">
      <Image src="/assets/images/svg/arrow5.svg" alt="arrow" width={160} height={60} className="arrow5 position-absolute d-none d-lg-block" />
      <div className="container py-lg-5 py-md-4 py-3 mb-lg-5 mb-md-4 mb-3">
        <h2 className="pt-2 text-50 text-center lh-72 font-jost fw-medium text-offgrey pb-lg-5 pb-md-4 pb-3 mb-0" data-aos="zoom-in">
          Who Are <span className=" text-gradient">We</span>?
        </h2>
        <div className="row py-md-4 mb-1">
          <div className="col-lg-6 d-flex d-lg-block justify-content-center">
            <Image
              src="/assets/images/weimg.webp"
              alt="img"
              width={474.82}
              height={588.15}
              className="max-sm-w-100 object-fit-contain -my-71" data-aos="fade-right"
            />
          </div>
          <div className=" col-lg-6 d-flex justify-content-lg-end pt-3 pt-md-0">
            <div className=" max-w-lg-494">
              <p className=" font-jost text-14 lh-22 text-light fw-normal mb-1 text-center text-lg-start" data-aos="fade-left">
                MEET YOUR INSTRUCTORS
              </p>
              <h2 className=" text-30 font-jost text-offgrey fw-medium lh-41 mb-3 text-center text-lg-start" data-aos="fade-left">
                Hi, We’re Kody Doherty{" "}
                <span className=" d-block">and Kolton Starr &#128075;</span>
              </h2>
              <p className=" text-lightgrey text-16 lh-25-68 font-jost fw-normal mb-0 text-center text-lg-start" data-aos="fade-left">
                And we know firsthand that building a career as a software
                engineer without a computer science degree is possible.{" "}
              </p>
              <p className=" text-lightgrey text-16 lh-25-68 font-jost fw-normal mb-0 text-center text-lg-start" data-aos="fade-left">
                We started where you are *right now*—without engineering
                degrees, a professional portfolio, or years of experience.{" "}
              </p>
              <p className=" text-lightgrey text-16 lh-25-68 font-jost fw-normal mb-0 text-center text-lg-start" data-aos="fade-left">
                Then we climbed the ranks to hold senior positions at tech
                titans like Amazon, Apple, and the US government.
              </p>
              <p className=" text-lightgrey text-16 lh-25-68 font-jost fw-normal mb-0 text-center text-lg-start" data-aos="fade-left">
                Throughout our careers, we’ve managed entire teams of engineers,
                directed $30 million program budgets, and built 2 successful
                tech startups (one that we sold).
              </p>
              <p className=" text-lightgrey text-16 lh-25-68 font-jost fw-normal mb-0 text-center text-lg-start" data-aos="fade-left">
                Learning to code did more than add a few impressive lines to our
                resumes. It literally changed our lives…
              </p>
              <p className=" text-gradient pt-18 text-16 font-jost lh-23 fw-semibold mb-1 text-center text-lg-start" data-aos="fade-left">
                I want to live my dream now!
              </p>
              <div className=" d-flex justify-content-center d-lg-block">
                <button className=" d-flex btn1 gap-10 align-items-center mt-lg-5 mt-md-4 mt-3" data-aos="zoom-in">
                  <span>
                    <Call />
                  </span>
                  <span className=" text-white font-jost text-18 fw-black text-uppercase mb-0 lh-26">
                    Book a Call NOW
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="container py-lg-5 mt-lg-3 py-md-4 py-3 d-flex justify-content-lg-end justify-content-center ">
        <div className=" d-flex gap-2 pb-lg-3 flex-column flex-md-row align-items-center">
          <a
            href=""
            className=" text-white text-center text-20 opacity-70 font-jost lh-22  fw-normal mb-0"
          >
            Privacy Policy
          </a>
          <a
            href=""
            className=" text-white text-center text-20 opacity-70 font-jost lh-22  fw-normal mb-0"
          >
            {" "}
            | Terms of Service |{" "}
          </a>
          <a
            href=""
            className=" text-white text-center text-20 opacity-70 font-jost lh-22  fw-normal mb-0 "
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
}
