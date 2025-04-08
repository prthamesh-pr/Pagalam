import { Triangle } from "lucide-react";
import React from "react";
import { PRODUCTS } from "../config/products";
import ProductCard from "../components/ProductCard";
import ProductWrapper from "../components/ProductWrapper";
import { Element, Link } from "react-scroll";

const Aboutus = () => {
  return (
    <>
      <section>
        <div className="relative bg-[url('/myimage.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="p-8 relative z-10 flex items-center justify-center">
            <div className="text-white flex flex-col max-w-md items-center text-center gap-8">
              <h2 className="md:text-7xl text-5xl font-semibold">About Us</h2>
              <p className="leading-loose text-sm md:text-base">
                Pioneer Chicory is an off spring of the "Family PAGALAM" which
                is involved in the Indian Chicory business now for the past 70
                years.
              </p>
              <Link
                to="products-section"
                smooth={true}
                offset={-100}
                duration={2000}
              >
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
        <div className="p-8 flex flex-col gap-10">
          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto text-center">
            <Element name="products-section">
              <h2 className="font-semibold text-3xl">We are Pagalam Chicory</h2>
            </Element>
            <p className="leading-loose">
              During the late 1940's & early 1950's chicory was not cultivated
              in India.So the FAMILY was active in importing roasted chicory
              from European Companies and distributed the same to Indian coffee
              companies.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-around gap-10 items-center">
            <div className="flex flex-col gap-6 md:gap-10">
              <div className="flex items-center gap-4">
                <Triangle className="fill-black rotate-90 size-4" />
                <span>Flexible and affordable price</span>
              </div>
              <div className="flex items-center gap-4">
                <Triangle className="fill-black rotate-90 size-4" />
                <span>All products is imported</span>
              </div>
            </div>

            <div>
              <img className="h-72" src="/image14.png" />
            </div>

            <div className="flex flex-col gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <Triangle className="fill-black rotate-90 size-4 md:hidden" />
                <span>All products is imported</span>
                <Triangle className="fill-black -rotate-90 size-4 hidden md:block" />
              </div>
              <div className="flex items-center gap-2">
                <Triangle className="fill-black rotate-90 size-4 md:hidden" />
                <span>Flexible and affordable price</span>
                <Triangle className="fill-black -rotate-90 size-4 hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-brown/10">
        <div className="md:flex justify-end items-center">
          <div className="h-96 md:w-96 w-full md:rounded-md overflow-hidden">
            <div className="bg-[url('/image15.png')] h-96 w-96  bg-cover bg-center"></div>
          </div>
          <div className="flex flex-col gap-8 bg-light-brown text-white p-8 md:my-8 md:max-w-2xl">
            <h2 className="text-4xl font-semibold">
              70 Years Of Experience In Chicory Business
            </h2>
            <p className="leading-loose">
              Pioneer Chicory is an off spring of the "Family PAGALAM" which is
              involved in the Indian Chicory business now for the past 70 years.
              The company is headed by its current CEO Mr.Pagalakumar
              RAJAMANICKAM who is the 3rd generation to continue this family
              business. During the late 1940's & early 1950's chicory was not
              cultivated in India.So the FAMILY was active in importing roasted
              chicory from European Companies and distributed the same to Indian
              coffee companies.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col-reverse md:flex-row justify-start items-center">
          <div className="flex flex-col gap-8 bg-light-brown/10 text-dark-brown p-8 md:my-8 md:max-w-2xl">
            <h2 className="text-4xl font-semibold">
              70 Years Of Experience In Chicory Business
            </h2>
            <p className="leading-loose">
              Pioneer Chicory is an off spring of the "Family PAGALAM" which is
              involved in the Indian Chicory business now for the past 70 years.
              The company is headed by its current CEO Mr.Pagalakumar
              RAJAMANICKAM who is the 3rd generation to continue this family
              business. During the late 1940's & early 1950's chicory was not
              cultivated in India.So the FAMILY was active in importing roasted
              chicory from European Companies and distributed the same to Indian
              coffee companies.
            </p>
          </div>

          <div className=" w-full h-96 md:w-96 md:rounded-md overflow-hidden">
            <div className="bg-[url('/image16.png')] h-96 w-96  bg-cover bg-center"></div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-8 bg-dark-brown text-white flex flex-col gap-4 items-center">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-semibold">Quality is our priority</h2>
            <p>
              The family PAGALAM was involved in the import & distribution of
              chicory seeds for now since 40 years.
            </p>
          </div>
          <div className="h-px w-full bg-white/50" />

          <div className="flex flex-col items-center gap-6">
            <h4 className="text-2xl font-semibold ">Certification</h4>
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
      </section>

      <section>
        <div className="py-10 px-10">
          <ProductWrapper>
            {PRODUCTS.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </ProductWrapper>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
