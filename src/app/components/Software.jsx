import Image from "next/image"
import { Arrow } from "./Icon"
const carddata = [
    {
        num:"01",
        img:'/assets/images/man1.webp',
        dis:'Master ',
        spn:'Full-Stack Coding Skills'    },
    {
        num:"02",
        img:'/assets/images/books.webp',
        dis:'Build a',
        spn:'Standout Portfolio'
    },
    {
        num:"03",
        img:'/assets/images/money.webp',
        dis:'Launch',
        spn:'Your Tech Career'
    }
]
export default function Software() {
    const card = carddata.map((data,i) => (
        <div className="col-lg-4 col-md-6 d-flex justify-content-center mt-4">
        <div className="num-card w-100"  data-aos="zoom-in">
            <div className=" d-flex justify-content-between align-items-end mb-1">
<h3 className=" font-jost text-30 text-grey lh-47 fw-semibold mb-0 ">{data.num}</h3>
<Image src={data.img} alt="img" width={132.89} height={166.11}  />
            </div>
            <div className=" d-flex align-items-end gap-1">
                <h4 className=" font-jost text-offgrey text-18 fw-bold lh-26 mb-0">{data.dis} <span className=" d-block">{data.spn}</span></h4>
<span><Arrow/></span>
            </div>
        </div>
    </div>
    ))
    return(
        <div className=" py-lg-5 py-md-4 py-3 position-relative ">
            <Image src="/assets/images/svg/arrow3.svg" alt="arrow" width={160} height={60} className="arrow3 position-absolute d-none d-md-block" />
            <div className="container py-lg-5 py-md-4 py-3">
<h2 className=" text-50 text-white font-jost lh-68 text-center mb-2"  data-aos="zoom-in">“From Confused to Coder”: Kodeden's <span className=" d-block">Exclusive 6-Month <span className=" text-gradient">Software Engineering</span> Course</span></h2>
<p className=" fw-normal font-jost text-center text-16 lh-23 text-offgrey"  data-aos="zoom-in">Through twice-weekly live lectures and at-home exercises, you’ll:</p>
<p className=" fw-normal font-jost text-center text-16 lh-23 text-offgrey pb-lg-5 pb-md-4 mb-0"  data-aos="zoom-in">Learn everything you need to know to break into tech from senior engineers with experience at <span className=" d-lg-block">Apple, Amazon, and the DOD.</span></p>
<div className="row max-w-941 mx-auto pb-1 justify-content-center">
 {card}
</div>
            </div>
        </div> 
    )
}