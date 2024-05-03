"use client"
"use strict"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Arrow, Call, LeftArrow, Linkedin, RightArrow } from "./Icon";
import Slider from "react-slick";

const sliderdata = [
    {
        head:'Ross O’Rourke Founder, iC-1 Solutions. CEO  Onboarding',
        para:"Vitae elit dapibus facilisis magna. lorem  Sem amet sem ullamcorper augue Sem amet magna egestas sit tempus, cras. Mauris gravida elit eget mi et vitae viverra duis eget. Aliquam, quisque gravida est pretium suscipit vel. Non blandit eget tortor netus pellentesque mauris, diam. ",
        name:"Ross O’Rourke",
        user:"@Ross O’Rourke",
        userimg:'/assets/images/userimg1.webp'
    },
    {
        head:'“Luke O’Malley Tech Lead Agile Onboarding.”',
        para:"I highly recommend kody Doherty. I have had the pleasure of working with him on variety of software projects over the past three years and his guidance has been intergral to my personal success. He is a driven, organized engineer who develops relationships with his students. ",
        name:'Luke O’Malley',
        user:"@Luke O’Malley",
        userimg:'/assets/images/userimg2.webp',

    },
    {
        head:"Leslie Sage Director of Data Science at DevResults",
        para:"I had the pleasure of working with Kolton in 2019. In a team of a dozen people, Kolton stood out for his curiosity and drive. He executed ambitious projects with efficiency and attention to detail. He executed ambitious projects with efficiency and attention to detail.",
        name:"Leslie Sage",
        user:"@Leslie Sage",
        userimg:"/assets/images/userimg3.webp",
        class:"max-w-335"
    }
]
export default function Students() {
    const slider = React.useRef(null);
    const slidercard = sliderdata.map((slide,i)=> (
    <div className=" slidecard w-100 h-100 mx-auto " data-aos="zoom-in" key={i}>
    <h4 className=" font-jost text-24 fw-normal lh-36 text-white mb-1">{slide.head}</h4>
    <p className={` font-jost text-16 text-lightgrey fw-normal lh-25-68 pl-2 mb-1 ${slide.class}`}>{slide.para}</p>
    <a href="" className=" font-jost fw-semibold lh-25-68 text-light text-16 pl-2 pb-1">Read More...</a>
    <div className=" d-flex justify-content-between mt-4 pl-2 align-items-center">
    <div className=" d-flex gap-13">
        <Image src={slide.userimg} width={52.62} height={52.62} alt="user"/>
        <div>
            <h5 className=" text-20 font-jost text-white lh-28 fw-normal mb-0 ">{slide.name}</h5>
            <p className=" text-14 font-jost lh-20 text-lightgrey mb-0">{slide.user}</p>
        </div>
    </div>
    <span className="pe-3"><Linkedin/></span>
    </div>
    </div>
    ))
    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        Arrows:false,
        centerMode: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
          
              }
            }
        ]
      };
    return(
        <div className=" py-lg-5 py-md-4 py-3 position-relative">
<div className="container py-lg-5 py-md-4 py-3">
<h2 className=" pt-md-3  text-capitalize text-center text-50 font-jost text-offgrey lh-68 fw-medium mb-lg-5 mb-md-4 pb-1">
What our <span className=" text-gradient">students</span> are saying
</h2>
<div className=" flex justify-content-center">
    <Slider {...settings} ref={slider} className=" mb-3">
    {slidercard}
    </Slider>
</div>
<div className=" d-flex justify-content-center gap-5">
    <button onClick={() => slider?.current?.slickPrev()} className=" sliderbtn d-flex justify-content-center align-items-center left-arrow">
        <LeftArrow/>
    </button>
    <button onClick={() => slider?.current?.slickNext()} className=" sliderbtn d-flex justify-content-center align-items-center right-arrow">
        <RightArrow/>
    </button>
</div>
<div className=" d-flex justify-content-center mt-lg-5 mt-md-4 mt-3">
          <button className=" d-flex btn1 gap-10 align-items-center" data-aos="zoom-in">
          <span><Call/></span>
          <span className=" text-white font-jost text-18 fw-black text-uppercase mb-0 lh-26">Book a Call NOW</span>
          </button>
        </div>
</div>

        </div>
    )
}