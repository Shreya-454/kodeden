import { Call, Dots, Insta, Linked, Telegram, Twitter } from "./Icon";
import Nav from "./Nav";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="pb-lg-5 mb-1 pb-md-4 pb-3 min-vh-max-xl-100">
      <div className=" min-vh-xl-100 herobg mb-3 position-relative ">
        <Nav />
        <div className="arrowbox d-flex justify-content-center align-items-center">
          <Dots/>
          <div className="sidebox">
          <div className="mb-2 pb-1 ">
            <a href="https://twitter.com/" target="blank">
              <Twitter />
            </a>
          </div>
          <div className="mb-2 pb-1">
            <a href="https://www.instagram.com/" target="blank">
              <Insta />
            </a>
          </div>
          <div className="mb-2 pb-1">
            <a href="https://telegram.org/" target="blank">
              <Telegram />
            </a>
          </div>
          <div className="pb-1">
            <a href="https://in.linkedin.com/" target="blank">
              <Linked />
            </a>
          </div>
        </div>
        </div>
        <Image
          src="/assets/images/svg/arrow1.svg"
          alt="vector"
          width={160}
          height={60}
          className=" position-absolute arrow1 d-none d-lg-block"
        />
        <div className="container pt-lg-5 pt-md-4 pt-3">
          <h1 className="text-white font-jost text-36 text-center lh-41 pt-4 mt-1 text-uppercase mb-1 pb-3">
            Start the Mini-Course:{" "}
            <span className="text-gradient">Rapidly Learning New </span>
            <span className="d-block text-gradient">Technical Skills</span>
          </h1>
          <h2 className="text-white font-jost text-center text-24 lh-31 fw-semibold text-uppercase pb-md-4 pb-1">
            Learn All The Skills You Need To Become a{" "}
            <span className="d-block">Software Engineer!</span>
          </h2>
          <div className=" d-flex justify-content-center">
            <div className="d-flex justify-content-center position-relative pt-1 max-w-996"  data-aos="zoom-in">
              <Image
                src="/assets/images/heroimg.webp"
                alt="img"
                width={996}
                height={476}
                className="br-24 w-100 object-fit-cover"
              />
              <Image
                src="/assets/images/controls.webp"
                alt="img"
                width={996}
                height={64}
                className=" position-absolute bottom-0 w-100 object-fit-contain"
              />
            </div>
          </div>
          {/* <iframe width="996" height="476" src="https://www.youtube.com/embed/XRH8pca1akY?si=DVV22yD-JDuRQ2n_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>
      </div>
      <div className="container pt-1 pb-lg-5 pb-md-4 pb-3">
        <h2 className=" font-jost text-white text-24 lh-31 text-center text-uppercase mb-1 pb-2">
          Become a <span className=" text-gradient">Software</span> Engineer
          Now!
        </h2>
        <p className=" text-lightgrey text-16 font-jost lh-25 text-center mb-2 pb-4">
          No Math or Science Background Needed
        </p>
        <div className=" d-flex justify-content-center mt-1">
          <button className=" d-flex btn1 gap-10 align-items-center " data-aos="zoom-in">
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
  );
}
