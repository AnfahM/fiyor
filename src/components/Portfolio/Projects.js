import React, { useState } from "react";

const Carousel = () => {
  const carouselItems = [
    {
      review:
        "Had a great experience booking my tickets through your service. The process was smooth, the support was quick, and everything was handled professionally. Really happy with how easy it was. Will definitely book again!",
      name: "Rishil V P",
      service: "Ticket Booking",
    },
    {
      review:
        "The Bali package was well arranged with clear guidance throughout. Everything was smooth and stress-free. Truly satisfied with the service!",
      name: "Theertha",
      service: "Bali Package",
    },
    {
      review:
        "Great customer support and affordable pricing. My Malaysia tour was well organized from start to finish. Truly impressed and highly recommended!",
      name: "Nihal",
      service: "Malaysia Tour Package",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleLeft = () => {
    setCurrent(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const handleRight = () => {
    setCurrent((prev) => (prev + 1) % carouselItems.length);
  };

  const getPositionClass = (index) => {
    if (index === current) return "z-20 scale-110 translate-x-0";
    if (index === (current - 1 + carouselItems.length) % carouselItems.length)
      return "z-10 -translate-x-[120%] scale-90";
    if (index === (current + 1) % carouselItems.length)
      return "z-10 translate-x-[120%] scale-90";
    return "hidden";
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center pt-16">
        Some Of Our Feedbacks
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-indigo-600 ml-3 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug pb-24">
        From Our Clients
      </h1>

      {/* Carousel Container */}
      <div className="relative w-64 h-80 mb-6">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out transform rounded-lg overflow-hidden shadow-lg bg-gray-800 p-6 flex flex-col justify-between ${getPositionClass(
              index
            )}`}
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              "{item.review}"
            </p>
            <div className="mt-4">
              <p className="text-indigo-400 font-semibold">{item.name}</p>
              <p className="text-gray-400 text-xs">{item.service}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 pt-10">
        <button
          onClick={handleLeft}
          className="bg-transparent border border-white rounded-full w-12 h-12 flex items-center justify-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={handleRight}
          className="bg-transparent border border-white rounded-full w-12 h-12 flex items-center justify-center hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
