import React from "react";
import Input from "../components/Input";
import Textarea from "../components/TextArea";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Element, Link } from "react-scroll";

const Contactus = () => {
  return (
    <>
      <section>
        <div className="relative bg-[url('/myimage.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="p-8 relative z-10 flex items-center justify-center">
            <div className="text-white flex flex-col max-w-md items-center text-center gap-8">
              <h2 className="md:text-7xl text-5xl font-semibold">Contact Us</h2>
              <p className="leading-loose text-sm md:text-base">
                Pioneer Chicory is an off spring of the "Family PAGALAM" which
                is involved in the Indian Chicory business now for the past 70
                years.
              </p>
              <Link to="map-section" smooth={true}>
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
        <Element name="map-section">
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-40 md:mx-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium">VISIT OUR STORE</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm">Address</p>
                  <p>
                    Block No. 78-79, Anand - Sojitra Main Road,Ravipura 388 440,
                    Gujarat, India.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Phone</p>
                  <p>+(91) 9601051104</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p>pagalakumar@pioneerchicory.com</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Open Time</p>
                  <p>
                    Our store has re-opened for shopping, exchange Every day
                    11am to 7pm
                  </p>
                </div>

                <div className="flex items-center gap-10">
                  <Facebook />
                  <Youtube />
                  <Twitter />
                  <Instagram />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-medium">GET IN TOUCH</h2>
                <p className="text-sm text-gray-600">
                  If you&apos;ve got great products your making or looking to
                  work with us then drop us a line.
                </p>
              </div>

              <div>
                <form className="space-y-3">
                  <div className="space-y-3">
                    <Input label="Name" placeholder="Surya" />
                    <Input label="Email" placeholder="surya123@gmail.com" />
                  </div>
                  <Textarea label="Description" placeholder="Type here..." />
                  <button className="bg-dark-brown text-white px-4 py-1.5 rounded-md cursor-pointer">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Element>
      </section>

      <section>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.0061617696674!2d72.89169200862138!3d22.541441934030438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e52017297c13d%3A0x3fd2691483535c71!2s78%2C%20Anand%20-%20Sojitra%20Rd%2C%20Main%20Road%2C%20Village%3A%2C%20Ravipura%2C%20Anand%2C%20Gujarat%20388440!5e0!3m2!1sen!2sin!4v1743575375077!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contactus;
