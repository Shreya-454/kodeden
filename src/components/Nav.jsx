"use client";
import { useEffect, useState } from "react";
import React from "react";

export default function Nav() {
  const [show, setshow] = useState(true);
 useEffect(()=>{
  if (show === false) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
 })
  return (
    <>
      <nav className=" pt-18 position-relative z-3">
        <div className="container">
          <div className=" d-flex align-items-center justify-content-end">
            <ul
              className={`${
                show ? "left_100" : "left_0"
              } nav_bar d-flex gap-32`}
            >
              <li onClick={() => setshow(!show)}>
                <a
                  className="text-grey font-jost text-16 fw-medium lh-23 nav-text"
                  href="#about">
                  Home
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a className=" text-grey font-jost text-16 fw-medium lh-23 nav-text"
                  href="#team">
                  About
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a className=" text-grey font-jost text-16 fw-medium lh-23 nav-text"
                  href="#roadmap"
                >
                  Program
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a className="text-grey font-jost text-16 fw-medium lh-23 nav-text"
                  href="#roadmap">
                  How it works
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" text-grey font-jost text-16 fw-medium lh-23 nav-text" href="#roadmap">
                  FAQs
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <button className="nav-btn font-jost lh-20 text-14 fw-black my-1">
                  Contact Us
                </button>
              </li>
            </ul>
            <div
              onClick={() => setshow(!show)}
              className={`${show ? "" : "cross"} navline`}>
              <span className="crl-1"></span>
              <span className="crl-2"></span>
              <span className="crl-3"></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
