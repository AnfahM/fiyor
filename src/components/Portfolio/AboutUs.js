import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    return (
      <section className="about-section py-28 relative">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap items-center -mx-4">
            
            {/* Left Content */}
            <div className="w-full md:w-6/12 px-4 mb-10 md:mb-0">
              <div className="pt-12 md:pr-24">
                <div className="sec-title mb-8">
                  <div className="title text-[#974223] text-lg font-bold uppercase mb-4 relative after:content-[''] after:w-10 after:h-px after:bg-gray-400 after:absolute after:right-0 after:bottom-2.5">
                    About Us
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-800">
                    We Are The Leader In <br /> The Travels
                  </h2>
                </div>
                <p className="text-gray-600 text-base leading-7 mb-10">
                We specialize in international tour packages and ticketing at the best prices.
With years of experience and strong industry ties, we deliver smooth travel planning.
From flights to full itineraries, we handle everything with care and professionalism.
Our mission is to make every journey affordable, memorable, and hassle-free.
                </p>
                <p
                  className="theme-btn btn-style-three relative text-md text-center uppercase font-bold bg-white text-gray-800 py-3 px-10 border-2 border-[#974223] hover:bg-[#974223] hover:text-white transition inline-block w-full"
                >
                  Travel With US
                  <span className="absolute inset-0 -z-10 bg-[url('https://i.ibb.co/DKn55Qz/pattern-1.jpg')] bg-repeat translate-x-2 translate-y-2"></span>
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-6/12 px-4 relative">
              <div className="relative md:ml-12">
                <div className="relative">
                  <img
                    src="/images/IMG_3027.PNG"
                    alt="About Us"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="overlay-box absolute left-10 bottom-12">
                    {/* Reserved for overlay content */}
                  </div>
                </div>
                <div className="absolute inset-x-10 inset-y-10 -z-10 border-2 border-[#d7a449]"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
