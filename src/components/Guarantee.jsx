import Image from "next/image";
import { Call } from "./Icon";
export default function Guarantee() {
  return (
    <div className=" py-lg-5 py-md-4 py-3 position-relative" id="faq">
      <Image src="/assets/images/svg/arrow4.svg" alt="arrow" width={160} height={60} className="arrow4 position-absolute"/>
      <div className="container py-lg-5 py-md-4 py-3"> 
        <div className="row pt-2 flex-column-reverse flex-lg-row">
          <div className="col-lg-7">
            <h2 className=" text-capitalize text-offgrey text-50 font-jost lh-72 mb-2 fw-medium text-center text-lg-start" data-aos="fade-right">
              our Guarantee
            </h2>
            <p className=" font-jost text-24 lh-41 fw-normal text-lightgrey mb-0 text-center text-lg-start" data-aos="fade-right">
              If you decide coding isn’t right for you within 15 days of
              starting the program, we’ll give you your money back.
            </p>
            <p className=" pt-18 text-gradient font-jost text-16 lh-23 fw-semibold mb-lg-5 mb-md-4 mb-3 text-center text-lg-start" data-aos="fade-right">
              I want to become a software engineer in 6 months!
            </p>
            <div className=" d-flex justify-content-center d-lg-block">
              <a href="tel:9873659749">
                <button className=" d-flex btn1 gap-10 align-items-center" data-aos="zoom-in">
                  <span>
                    <Call />
                  </span>
                  <span className=" text-white font-jost text-18 fw-black text-uppercase mb-0 lh-26">
                    Book a Call NOW
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <Image
              src="/assets/images/svg/logo.svg"
              alt="logo"
              width={386}
              height={313}
              className="max-sm-w-100"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
