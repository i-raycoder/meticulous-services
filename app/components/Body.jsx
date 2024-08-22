"use client";
import React from "react";
import Image from "next/image";

const Body = () => {
  return (
    <>
    {/* Banner Section */}
    <section
        id="banner"
        className="relative h-screen bg-cover bg-center"
        style={{
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), #2a2929), url("/people_cleaning.jpg")',
        }}
      >
        <div className="text-center text-white py-[180px]">
          <h1 className="font-sans text-[130px]">We Provider Better.</h1>
          <p className="font-sans italic text-[30px]">
            From home delivery to home cleaning, We have got it all covered.
          </p>
          <div className="mt-[70px]">
            <a
              href="/get-started"
              className="inline-block w-[150px] py-3 mx-2 border border-white text-white font-sans text-[22px] relative z-10 hover:text-black transition-colors"
            >
              <span className="absolute inset-0 bg-white transition-all duration-500 ease-in-out w-0 z-[-1] hover:w-full"></span>
              Get Started
            </a>
            <a
              href="/more"
              className="inline-block w-[150px] py-3 mx-2 border border-white text-white font-sans text-[22px] relative z-10 hover:text-black transition-colors"
            >
              <span className="absolute inset-0 bg-white transition-all duration-500 ease-in-out w-0 z-[-1] hover:w-full"></span>
              More
            </a>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="feature" className="w-full py-[70px]">
        <div className="text-center pb-[70px]">
          <p className="font-bold text-[20px] text-black relative z-10 inline-block after:content-[''] after:w-[50px] after:h-[35px] after:bg-gradient-to-br from-[#2a2929] to-white after:absolute after:top-[-20px] after:left-0 after:z-[-1] after:rotate-[10deg] after:rounded-tl-[35px] after:rounded-br-[35px]">
            FEATURES
          </p>
          <h1 className="font-sans text-[50px] mx-auto">Why Choose Us?</h1>
        </div>
        <div className="w-[80%] mx-auto flex flex-wrap items-center text-center text-[23px] font-sans">
          <div className="flex-[1_1_50%]">
            <h1 className="text-left mb-2 font-bold text-[#2a2929]">
              Experienced Staff
            </h1>
            <div className="flex items-center justify-center mb-[40px]">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                {" "}
                {/* Centering image */}
                <Image src="/staff.png" alt="Staff" width={100} height={100} />
              </div>
              <div className="pl-[20px] text-left">
                <p>
                  Highly experienced staff that has proven its ability to work
                  and maintain hygiene standards, working with dedication and
                  practical skills learned during training.
                </p>
              </div>
            </div>
            <h1 className="text-left mb-2 font-bold text-[#2a2929]">
              Call For Booking!
            </h1>
            <div className="flex items-center justify-center mb-[40px]">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                {" "}
                {/* Centering image */}
                <Image
                  src="/booking.png"
                  alt="Booking"
                  width={100}
                  height={100}
                />
              </div>
              <div className="pl-[20px] text-left">
                <p>
                  We offer the convenience of booking by phone with our friendly
                  staff. They are happy to answer any questions, help you choose
                  the perfect option, and secure your booking quickly.
                  <br></br>
                </p>
              </div>
            </div>
            <h1 className="text-left mb-2 font-bold text-[#2a2929]">
              Affordable Prices
            </h1>
            <div className="flex items-center justify-center mb-[40px]">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                {" "}
                {/* Centering image */}
                <Image
                  src="/low-cost.png"
                  alt="Affordable Prices"
                  width={100}
                  height={100}
                />
              </div>
              <div className="pl-[20px] text-left">
                <p>
                  Whether you are on a tight budget or just looking for the best
                  value, we have something for you. Explore our options and see
                  how much fun you can have without breaking the bank.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_1_50%] mx-auto">
            <Image
              src="/cleaning-woman.jpg"
              alt="Cleaning Woman"
              width={800}
              height={700}
              className="w-[80%] rounded-[10px]"
            />
          </div>
        </div>
      </section>

      {/* Service Section */}
<section id="service" className="w-full py-[70px] bg-[#ededed]">
  <div className="text-center pb-[70px]">
    <p className="font-bold text-[20px] text-black">SERVICES</p>
    <h1 className="font-sans text-[50px] mx-auto">We Provide Better</h1>
  </div>
  <div className="w-[80%] mx-auto flex flex-wrap justify-around">
    {[
      { src: "/ser-1.jpg", alt: "Service 1", serviceName: "Delivery Services", href: "/get-started" },
      { src: "/ser-2.jpg", alt: "Service 2", serviceName: "Cleaning Services", href: "/get-started" },
      { src: "/ser-3.jpg", alt: "Service 3", serviceName: "Clothing Store", href: "/get-started" },
      { src: "/ser-4.jpg", alt: "Service 4", serviceName: "Import and Export", href: "/get-started" },
    ].map((service, index) => (
      <div
        key={index}
        className="flex-[1_1_48%] text-center rounded-[7px] mb-[20px] relative group"
      >
        <Image
          src={service.src}
          alt={service.alt}
          width={500}
          height={500}
          className="w-full rounded-[7px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-[7px] transition-opacity duration-300">
          <div className="text-white text-[24px]">
            <p className="mb-[10px]">{service.serviceName}</p>
            <a
              href={service.href}
              className="bg-black text-white py-[10px] px-[20px] rounded-[5px] hover:bg-gray-800 transition-colors"
            >
              Get Service
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white bg-yellow-300">
        <div className="container mx-auto text-center">
          <p className="font-bold text-[20px] text-black">TESTIMONIALS</p>
          <h1 className="font-sans text-[50px] mx-auto">
            What Our Clients Say
          </h1>
          <div className="flex flex-wrap justify-center mt-[40px]">
            <div className="w-[90%] md:w-[45%] lg:w-[30%] p-5 bg-white rounded-lg shadow-md mb-5 mx-2">
              <p className="italic">
                The cleaning services provided were exceptional. Highly
                recommended!
              </p>
              <p className="font-bold mt-2">- M Rayan.</p>
            </div>
            <div className="w-[90%] md:w-[45%] lg:w-[30%] p-5 bg-white rounded-lg shadow-md mb-5 mx-2">
              <p className="italic">
                Great service and q group of professional people. Totally
                recommended!
              </p>
              <p className="font-bold mt-2">- Jane Smith.</p>
            </div>
            <div className="w-[90%] md:w-[45%] lg:w-[30%] p-5 bg-white rounded-lg shadow-md mb-5 mx-2">
              <p className="italic">
                The cleaning services provided were exceptional. Highly
                recommended!
              </p>
              <p className="font-bold mt-2">- Mark W.</p>
            </div>
            <div className="w-[90%] md:w-[45%] lg:w-[30%] p-5 bg-white rounded-lg shadow-md mb-5 mx-2">
              <p className="italic">
                Great service and q group of professional people. Totally
                recommended! very professional and thorough!
              </p>
              <p className="font-bold mt-2">- Henry F.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-[70px]  text-white">
        <section id="contact" class="py-16 bg-gray-50">
          <div class="container mx-auto text-center">
            <p class="text-black text-xl font-semibold">CONTACT US</p>
            <h1 class="text-3xl md:text-5xl font-bold mt-4 text-black">
              Get in Touch
            </h1>

            <div class="mt-12 max-w-lg mx-auto">
              <form
                action="/submit_form"
                method="POST"
                class="flex flex-col space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  class="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  class="px-4 py-2 border border-gray-300 rounded"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  required
                  class="px-4 py-2 border border-gray-300 rounded"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  class="px-4 py-2 border border-gray-300 rounded h-32"
                ></textarea>
                <button
                  type="submit"
                  class="px-4 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Body