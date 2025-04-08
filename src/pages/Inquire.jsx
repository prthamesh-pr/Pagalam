import React from "react";
import Input from "../components/Input";
import Textarea from "../components/TextArea";
import { Element, Link } from "react-scroll";

const Inquire = () => {
  return (
    <>
      <section>
        <div className="relative bg-[url('/myimage.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="p-8 relative z-10 flex items-center justify-center">
            <div className="text-white flex flex-col max-w-md items-center text-center gap-8">
              <h2 className="md:text-7xl text-5xl font-semibold">Inquire Us</h2>
              <p className="leading-loose text-sm md:text-base">
                Pioneer Chicory is an off spring of the "Family PAGALAM" which
                is involved in the Indian Chicory business now for the past 70
                years.
              </p>
              <Link to="booking-form" offset={-200} smooth duration={2000}>
                <img
                  className="size-12"
                  src="/myimage21.png"
                  alt="scroll down"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative">
          <div className="p-8 h-[350px] hidden md:block">
            <div className="max-w-xl flex flex-col gap-4">
              <h4 className="text-4xl font-semibold">Online Booking</h4>
              <p className="leading-loose">
                Imagine a booking experience tailored to your needs—quick,
                effortless, and available whenever you are. Online booking puts
                you in control, letting you schedule services at your
                convenience, day or night. With just a few clicks, you can
                explore options, check availability in real-time, and confirm
                your plans instantly. Forget the hassle of long wait times or
                complicated processes—this system is built to prioritize your
                ease and satisfaction.
              </p>
            </div>
          </div>
          <div className="relative bg-[url('/image34.png')] p-8 h-[350px]">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative flex flex-col gap-14">
              <div className="text-white flex flex-col gap-4 items-start">
                <h2 className="text-4xl font-semibold">
                  Ready to Discuss With Us..?
                </h2>
                <p>We will be happy to answer all your questions.</p>
                <button className="bg-white px-4 py-1.5 text-black rounded-md ">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div className="md:absolute right-1/12 top-16 bg-white p-4 rounded-lg flex flex-col gap-6 max-w-md w-full shadow">
            <Element name="booking-form">
              <h4 className="text-2xl font-semibold">Book your products</h4>
            </Element>
            <form className="space-y-4">
              <Input label="Name" placeholder="Surya" />
              <Input label="Email" placeholder="surya123@gmail.com" />
              <Input label="Date" placeholder="DD/MM/YYYY" />
              <Input label="Product" placeholder="Tower Bridge" />
              <Textarea label="Description" placeholder="Type here..." />
              <button className="py-1.5 px-4 bg-dark-brown text-white rounded-md">
                Inquire Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inquire;
