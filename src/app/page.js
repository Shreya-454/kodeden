"use client"
import "bootstrap/dist/css/bootstrap.css"
import Hero from "../components/Hero";
import About from "../components/About";
import Software from "../components/Software";
import Program from "../components/Program";
import Students from "../components/Students";
import Guarantee from "../components/Guarantee";
import We from "../components/We";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import Backtotop from "../components/Backtotop";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "linear",
    });
  }, []);
  return (
    <div>
    {data ? (
      <div>
        <Preloader/>
      </div>
    ) : (
<div className="bg-base overflow-x-clip">
  <Hero/>
  <About/>
  <Software/>
  <Program/>
  <Students/>
<Guarantee/>
<We/>
<Backtotop/>
</div>
    )}
    </div>
  );
}
