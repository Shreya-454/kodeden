"use client"
import { useEffect, useState } from "react";
import { Uparrow } from "./Icon";

export default function Backtotop() {
    const top = () => {
        document.documentElement.scrollTop = 0;
      };
      const [backToTop, setbackToTop] = useState(false);
      useEffect(() => {
        window.addEventListener("scroll", () => {
          if (document.documentElement.scrollTop > 300) {
            setbackToTop(true);
          } else {
            setbackToTop(false);
          }
        });
      }, []);
    return(
        <>
         <button
        className={`position-fixed bounce  back-button justify-content-center align-items-center ${
          backToTop ? "d-flex" : "d-none"
        }`}
        onClick={() => top()}
      >
        <Uparrow/>
      </button>
        </>
    )
}