import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        {/* Mobile View: Video */}
        <div className="h-screen overflow-hidden relative block md:hidden">
          <video
            className="min-h-full min-w-full object-cover"
            src={`${process.env.PUBLIC_URL}/video/WhatsApp Video 2025-07-07 at 14.48.20_f4666920.mp4`}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          <div className="absolute top-8 left-4 head-container flex w-full h-full flex-col justify-center items-start gap-7 px-3">
            <h1 className="font-serif text-5xl w-full sm:text-5xl text-start text-white">
              <b>Travel</b> <br />
              <b className="pl-10">Beyond <br /> Limits</b>
            </h1>
          </div>
        </div>

        {/* Desktop View: Video */}
        <div className="h-screen overflow-hidden relative hidden md:block">
          <video
            className="min-h-full min-w-full object-cover"
            src={`${process.env.PUBLIC_URL}/video/videodesktopview.mp4`}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          <div className="absolute top-8 left-28 head-container flex w-full md:w-2/3 h-full flex-col justify-center items-start gap-7 px-3">
            <h1 className="font-serif text-7xl md:leading-[110px] text-white text-start">
              <b>Travel</b> <br />
              <b className="pl-16">Beyond <br /> Limits</b>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
