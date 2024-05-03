import Image from "next/image";
import { Call } from "./Icon";
export default function About() {
  return (
    <div className=" py-lg-5 py-md-4 py-3 position-relative z-1">
      <Image src="assets/images/svg/arrow2.svg" alt="arrow" width={160} height={60} className="arrow2 position-absolute z-n1 d-none d-lg-block"/>
      <div className="container pb-lg-5 pb-md-4 pb-3 pt-1">
        <div className="row pb-lg-5 pb-md-4 pb-3 flex-column-reverse flex-lg-row">
          <div className="col-lg-7 ">
            <h2 className=" font-jost text-white text-50 lh-68 text-center text-lg-start" data-aos="fade-right">
              What is KodeDen's <span className=" text-gradient">6-Month</span>{" "}
              <span className=" text-xl-nowrap">
                Software Engineering Course?
              </span>
            </h2>
            <ul className="list1 font-jost lh-32 fw-normal text-grey text-16 ps-4">
              <li data-aos="fade-right">
                <span className="font-jost lh-32 fw-normal text-grey text-16" >
                  With 6-figure salaries, unlimited PTO, and the flexibility to
                  work anywhere in the world—&#40;or
                </span>
              </li>
              <li data-aos="fade-right">
                <span className="font-jost lh-32 fw-normal text-grey text-16">
                  simply pick your kids up from school &#41;, you want in.
                </span>
              </li>
              <li data-aos="fade-right" >
                <span className="font-jost lh-32 fw-normal text-grey text-16">
                  But who has $25k+ to drop on a bootcamp?
                </span>
              </li>
              <li data-aos="fade-right">
                <span className="font-jost lh-32 fw-normal text-grey text-16">
                  Or semesters of free time to dedicate to going back to school?
                </span>
              </li>
              <li data-aos="fade-right">
                <span className="font-jost lh-32 fw-normal text-grey text-16">
                  Or YEARS to go through the trial and error involved in
                  teaching yourself?
                </span>
              </li>
              <li data-aos="fade-right">
                <span className="font-jost lh-32 fw-normal text-grey text-16">
                  Heck, most people don’t even know where to start.
                </span>
              </li>
              <li data-aos="fade-right">
                <span className="font-jost lh-32 fw-normal text-grey text-16">
                  If that's you, you’ve been dreaming of a high-paying tech
                  career but paralyzed when it{" "}
                  <span className=" d-block">comes time to take action.</span>
                </span>
              </li>
            </ul>
            <p className=" text-gradient font-jost text-16 fw-semibold lh-23 mb-lg-5 mb-md-4 mb-2 text-center text-lg-start" data-aos="fade-right">
              I want to Start My Software Engineering Journey!
            </p>
            <div className=" d-flex justify-content-center d-lg-block">
              <button className=" d-flex btn1 gap-10 align-items-center" data-aos="zoom-in">
                <span>
                  <Call />
                </span>
                <span className=" text-white font-jost text-18 fw-black text-uppercase mb-0 lh-26">
                  Book a Call NOW
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <Image
              src="/assets/images/aboutimg.webp"
              alt="img"
              width={461}
              height={562}
              className=" w-lg-100 max-sm-w-100 object-fit-contain -mt-70 -mb-55" data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
