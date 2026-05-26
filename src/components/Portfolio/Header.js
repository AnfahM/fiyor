import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div>

        {/* MOBILE VIEW */}
        <div className="h-screen overflow-hidden relative block md:hidden">

          {/* Background Image */}
          <img
            className="w-full h-full object-cover"
            src={`${process.env.PUBLIC_URL}/images/pkblandeskmobile.jpg`}
            alt="PKB LANDESK"
          />

          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

          {/* Content */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center px-6 z-10 w-full">

            <h1 className="text-white text-4xl font-bold leading-tight tracking-wide">
              PKB LANDESK
            </h1>

            <div className="w-24 h-[2px] bg-[#d7a449] mx-auto my-4"></div>

            <p className="text-gray-200 text-lg font-light italic">
              “Where dreams find an address”
            </p>

          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="h-screen overflow-hidden relative hidden md:block">

          {/* Background Image */}
          <img
            className="w-full h-full object-cover"
            src={`${process.env.PUBLIC_URL}/images/pkblandesksystem.jpg`}
            alt="PKB LANDESK"
          />

          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

          {/* Content */}
          <div className="absolute bottom-20 left-16 lg:left-24 z-10 max-w-2xl">

            <h1 className="text-white text-6xl lg:text-7xl font-bold leading-tight tracking-wide drop-shadow-2xl">
              PKB LANDESK
            </h1>

            <div className="w-32 h-[3px] bg-[#d7a449] mt-6 mb-6"></div>

            <p className="text-gray-200 text-2xl lg:text-3xl font-light italic tracking-wide">
              “Where dreams find an address”
            </p>

          </div>
        </div>

      </div>
    );
  }
}