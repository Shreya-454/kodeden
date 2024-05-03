import Image from "next/image";
export default function Preloader() {
  return (
    <div>
      {" "}
      <div className="min-vh-100 bg-black position-fixed overflow-hidden d-flex justify-content-center align-items-center top-0 left-0 right-0 w-100">
        <div className="position-relative d-flex justify-content-center align-items-center animation">
          <Image src="/assets/images/svg/logo.svg" alt="logo" width={250}  height={180}/>
        </div>
      </div>
    </div>
  );
}