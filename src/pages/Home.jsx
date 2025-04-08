import React from "react";
import ProductWrapper from "../components/ProductWrapper";
import ProductDisplayCard from "../components/ProductDisplayCard";
import productImgOne from "../assets/image4.png";
import productImgTwo from "../assets/image3.png";
import productImgThree from "../assets/image5.png";
import productImgFour from "../assets/image6.png";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Input from "../components/Input";
import Textarea from "../components/TextArea";
import { PRODUCTS } from "../config/products";
import { Link } from "react-router-dom";

const DISPLAY_PRODUCTS = [
  {
    img: productImgTwo,
    name: "Chicory seeds",
  },
  {
    img: productImgOne,
    name: "Un-Roasted Chicory",
  },
  {
    img: productImgThree,
    name: "Roasted Chicory",
  },
  {
    img: productImgFour,
    name: "Instant Chicory",
  },
];

const Home = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row">
        {/* Desktop-Only Colored Section */}
        <div className="hidden md:flex flex-1 bg-light-brown/10 items-center justify-center p-8">
          <div className="max-w-xl space-y-6 text-dark-brown">
            <h1 className="text-5xl lg:text-6xl font-bold">Pagalam Chicory</h1>
            <p className="text-lg">
              Family PAGALAM which is involved in the Indian Chicory business
              now for the past 70 years.
            </p>
            <Link
              to="/enquire"
              className="bg-light-brown text-white flex items-center justify-center px-8 rounded-md h-10 w-fit hover:bg-dark-brown"
            >
              Inquire Now
            </Link>
          </div>
        </div>

        {/* Image Section with Overlay and Text */}
        <div className="relative flex-1">
          <div className="absolute inset-0 bg-black/40"></div>

          <img
            src="/image1.png"
            className="w-full h-full object-cover"
            alt="Background"
          />

          {/* Mobile & Partial Desktop Text Overlay */}
          <div className="absolute inset-0 flex md:items-start items-center justify-center md:p-12 text-white text-center  md:hidden">
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <h1 className="text-5xl font-bold">Pagalam Chicory</h1>
              <p className="max-w-sm md:text-lg md:text-left">
                Family PAGALAM which is involved in the Indian Chicory business
                now for the past 70 years.
              </p>
              <Link
                to="/enquire"
                className="bg-light-brown text-white flex items-center justify-center px-8 rounded-md h-10 w-fit"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row">
          {/* Image on the left that overlaps the right container */}
          <div className="relative flex-1 hidden md:block">
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 z-40">
              <img
                src="/image2.png"
                className="w-full h-auto md:w-[500px] md:h-auto"
                alt="About Us Image"
              />
            </div>
          </div>

          {/* Brown content section on the right */}
          <div className="bg-dark-brown lg:py-20 p-8 flex-1 md:pl-20 relative z-0">
            <div className="text-white flex flex-col items-center md:items-end gap-10">
              <h2 className="font-bold text-6xl text-center md:text-right w-full">
                About Us
              </h2>
              <p className="text-center leading-loose md:text-right">
                Pioneer Chicory is an off spring of the "Family PAGALAM" which
                is involved in the Indian Chicory business now for the past 70
                years. The company is headed by its current CEO Mr.Pagalakumar
                RAJAMANICKAM who is the 3rd generation to continue this family
                business. During the late 1940's & early 1950's chicory was not
                cultivated in India.So the FAMILY was active in importing
                roasted chicory from European Companies and distributed the same
                to Indian coffee companies.
              </p>

              <div className="text-white flex items-center text-center justify-center gap-12">
                <div>
                  <h4 className="font-semibold text-2xl">40+</h4>
                  <p>Categories</p>
                </div>
                <div>
                  <h4 className="font-semibold text-2xl">60+</h4>
                  <p>Products</p>
                </div>
                <div>
                  <h4 className="font-semibold text-2xl">100+</h4>
                  <p>Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-6 bg-dark-brown/10 flex flex-col gap-10">
          <h2 className="text-2xl font-semibold">Shop by Categories</h2>
          <ProductWrapper>
            {DISPLAY_PRODUCTS.map((product) => (
              <ProductDisplayCard key={product.name} product={product} />
            ))}
          </ProductWrapper>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row">
          <div className="bg-dark-brown p-8 flex-1 md:pr-20 relative z-0">
            <div className="text-white flex flex-col items-center md:items-start gap-10">
              <h2 className="font-bold text-6xl">History</h2>
              <p className="text-center md:text-left leading-loose">
                Pioneer Chicory is an off spring of the "Family PAGALAM" which
                is involved in the Indian Chicory business now for the past 70
                years. The company is headed by its current CEO Mr.Pagalakumar
                RAJAMANICKAM who is the 3rd generation to continue this family
                business. During the late 1940's & early 1950's chicory was not
                cultivated in India.So the FAMILY was active in importing
                roasted chicory from European Companies and distributed the same
                to Indian coffee companies.
              </p>

              <div className="flex flex-col items-center md:items-start gap-6">
                <h4 className="text-2xl font-semibold">Certification</h4>
                <div className="text-white flex items-center text-center justify-center gap-4 md:gap-10">
                  <div className="rounded-full overflow-hidden bg-white size-14">
                    <img src="/certificates/certificate1.png" />
                  </div>
                  <div className="rounded-full overflow-hidden bg-white size-14">
                    <img src="/certificates/certificate2.png" />
                  </div>
                  <div className="rounded-full overflow-hidden bg-white size-14">
                    <img src="/certificates/certificate3.png" />
                  </div>
                  <div className="rounded-full overflow-hidden bg-white size-14">
                    <img src="/certificates/certificate4.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1 hidden md:block">
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 z-40">
              <img
                src="/image2.png"
                className="w-full h-auto md:w-[500px] md:h-auto"
                alt="About Us Image"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative">
          <div className="absolute inset-0 bg-cover bg-center z-0">
            <img
              src="/image12.png"
              className="w-full h-[600px] object-cover"
              alt="About Us Image"
            />
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center h-[600px]">
          {/* Content section */}
          <div className="relative z-10 flex flex-col items-center justify-center bg-black/40 text-white gap-20 p-8 md:p-20 max-w-sm md:max-w-xl">
            <div className="w-full text-center md:text-left flex flex-col gap-6 rounded-xl">
              <h2 className="font-bold text-4xl md:text-6xl">Activity</h2>
              <p className="leading-loose">
                Since the late 1950's many seed Varities were imported from
                Various European companies.
              </p>
            </div>

            <div className="flex justify-between w-full">
              <Link
                to="/enquire"
                className="bg-white px-6 py-2 text-black rounded-md hover:bg-white/90"
              >
                Inquire Now
              </Link>
              <div className="flex gap-4">
                <span className="rounded-full ring-1 ring-white p-2">
                  <ArrowLeft />
                </span>
                <span className="bg-white rounded-full p-2">
                  <ArrowRight className=" stroke-black" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-dark-brown p-8 flex flex-col gap-14">
          <h2 className="text-white text-4xl">Shop by Categories</h2>
          <ProductWrapper>
            {PRODUCTS.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </ProductWrapper>
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
            <h4 className="text-2xl font-semibold">Book your products</h4>
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

export default Home;
