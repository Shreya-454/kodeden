import Image from "next/image"
export default function Program() {
    return(
        <div className=" py-lg-5 py-md-4 py-2">
<div className="container py-lg-5 py-md-4 py-2">
<div className="row pt-4 align-items-center">
<div className="col-lg-6 d-flex justify-content-center d-lg-block">
    <Image src="/assets/images/programimg.webp" alt="img" width={488} height={541} className="max-sm-w-100 object-fit-contain w-lg-100 -mt-107 -mb-55" data-aos="fade-right"/>
</div>
<div className="col-lg-6">
    <h2 className=" font-jost text-50 text-offgrey fw-medium lh-68 text-center text-lg-start" data-aos="fade-left">Are You A Good Fit For <span className=" d-block">Our Program?</span></h2>
    <p className=" text-16 font-jost text-offgrey lh-23 fw-normal mb-3 pb-1 text-center text-lg-start" data-aos="fade-left">About Who The Program is For</p>
    <h5 className=" text-gradient text-16 fw-semibold font-jost lh-23 mb-2 text-center text-lg-start" data-aos="fade-left">Our 6-Month Software Engeering Course is for individuals that...</h5>
    <p className=" text-16 font-jost text-grey fw-normal lh-23 max-w-lg-558 mb-md-3 mb-0 pb-md-1 pb-2 text-center text-lg-start" data-aos="fade-left">Want to take action now but don't have years to waste in university Are extremely motivated and want to succeed Have dreamed of becoming a software engineer but don't have hundreds of thousands of dollars lying around </p>
    <h5 className=" text-gradient font-jost fw-semibold text-16 lh-23  text-center text-lg-start" data-aos="fade-left">It isn't for...</h5>
    <p className=" text-16 text-grey font-jost fw-normal lh-23 max-w-lg-507 text-center text-lg-start" data-aos="fade-left">People that aren't self-starters People that don't have a sense of urgency to become a software engineeer People that aren't serious about fulfilling their dream</p>
</div>
</div>
</div>
        </div>
    )
}