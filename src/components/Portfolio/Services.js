import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    const destinations = [
      {
        name: 'Malaysia',
        image: `${process.env.PUBLIC_URL}/images/malaysia.avif`,
        description: 'Experience vibrant cities, rich culture, and tropical beauty in Malaysia.',
      },
      {
        name: 'Singapore',
        image: `${process.env.PUBLIC_URL}/images/singapor.jpg`,
        description: 'Discover a futuristic cityscape, world-class attractions.',
      },
      {
        name: 'Bali',
        image: `${process.env.PUBLIC_URL}/images/bali.jpg`,
        description: 'Explore serene beaches, spiritual temples, and scenic rice terraces.',
      },
      {
        name: 'Thailand',
        image: `${process.env.PUBLIC_URL}/images/thailand.jpg`,
        description: 'Enjoy exotic islands, vibrant nightlife, and delicious Thai cuisine.',
      },
      {
        name: 'Dubai',
        image: `${process.env.PUBLIC_URL}/images/dubai.jpg`,
        description: 'Visit the glamorous city of Dubai, famous for luxury shopping and modern architecture.',
      },
    ];

    const services = [
      {
        title: 'Ticket Booking',
        image: `${process.env.PUBLIC_URL}/images/ticketing.jpg`,
        alt: 'Ticket Booking',
        desc: 'Quick and affordable flight ticket booking tailored to your travel plan.',
      },
      {
        title: 'Visa Assistance',
        image: `${process.env.PUBLIC_URL}/images/visaprocessing.jpg`,
        alt: 'Visa Assistance',
        desc: 'Get complete support for your visa process and approvals.',
      },
      {
        title: 'Travel Insurance',
        image: `${process.env.PUBLIC_URL}/images/insurance.webp`,
        alt: 'Travel Insurance',
        desc: 'Secure your journey with the best travel insurance options.',
      },
      {
        title: 'Hotel Booking',
        image: `${process.env.PUBLIC_URL}/images/hotel.webp`,
        alt: 'Hotel Booking',
        desc: 'Affordable and luxurious hotel stays for your convenience.',
      },
      {
        title: 'Resort Booking',
        image: `${process.env.PUBLIC_URL}/images/resort.jpg`,
        alt: 'Resort Booking',
        desc: 'Relax at premium resorts with the best amenities and views.',
      },
    ];

    const whatsappLink = "https://wa.me/919745592578";

    return (
      <section className="relative min-h-screen bg-gray-900 text-center py-20 px-6 xl:px-0 flex flex-col justify-center">
        <span className="text-gray-300 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center justify-center">
          Explore Our Top Tour Packages
        </span>
        <h1 className="text-gray-300 text-4xl md:text-5xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
          International Destinations We Offer
        </h1>

        {/* International Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {destinations.map((dest, index) => (
            <a
              key={index}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6 text-left">
                <h2 className="text-white text-2xl font-bold mb-2">{dest.name}</h2>
                <p className="text-white text-sm leading-relaxed">{dest.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-24 bg-gray-800 rounded-xl shadow-lg px-6 py-16 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">We Also Provide</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            Along with international tour packages, we also offer professional <span className="text-indigo-600 font-semibold">Ticket Booking</span>, hassle-free <span className="text-indigo-600 font-semibold">Visa Processing</span>, secure <span className="text-indigo-600 font-semibold">Travel Insurance</span>, comfortable <span className="text-indigo-600 font-semibold">Hotel Booking</span>, and premium <span className="text-indigo-600 font-semibold">Resort Booking</span> services. Our experienced team ensures smooth documentation and timely approvals so you can travel stress-free.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {services.map((service, idx) => (
              <a
                key={idx}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs bg-[#CCCCCC] p-4 rounded-lg hover:shadow-xl transition-shadow block"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-36 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold text-indigo-700 mb-1">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Domestic Services Section */}
        <div className="mt-24 w-full bg-gray-900 text-white py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-300">Domestic Services We Provide</h2>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-left">
              <p className="text-lg leading-relaxed">
                We offer affordable and premium domestic travel services across North India. Our top destinations include the picturesque landscapes of <span className="font-semibold text-yellow-400">Jammu and Kashmir</span>, the snowy mountains of <span className="font-semibold text-yellow-400">Himachal Pradesh</span>, and the spiritual vibes of <span className="font-semibold text-yellow-400">Uttarakhand</span>. <br /><br />
                Explore vibrant cultures in <span className="font-semibold text-yellow-400">Punjab</span> and <span className="font-semibold text-yellow-400">Delhi</span>, royal heritage in <span className="font-semibold text-yellow-400">Rajasthan</span>, and colorful experiences in <span className="font-semibold text-yellow-400">Uttar Pradesh</span>. Let us plan the perfect domestic trip for you.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={`${process.env.PUBLIC_URL}/images/domestic.jpg`}
                alt="Domestic Travel"
                className="w-1/2 h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
