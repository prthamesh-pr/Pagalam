import {
  Copyright,
  Dot,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light-brown/15">
      <div className="p-6 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <img className="w-20" src="/logo.png" />
          <div className="flex flex-col items-start gap-4">
            <p className="text-gray-600 leading-loose md:max-w-xl">
              Also the family established its first roasting factory in the
              south of India in the name & style of SPRING HAVEN & CO. in 1957.
              Later on one another roasting factory was established in the West
              of India in the name & style of PAGALAM & PAGALAM in 1971.After
              which the family also become a serious player in the importation
              of the Chicory seeds from European Companies.
            </p>
            <div className="flex justify-center items-center gap-10">
              <Facebook />
              <Youtube />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </div>

        <ul className="flex flex-col">
          <div>
            <li className="flex gap-2 items-center">
              <Dot className="stroke-dark-brown size-10" />
              <Link to="/">Home</Link>
            </li>
          </div>
          <div>
            <li className="flex gap-2 items-center">
              <Dot className="stroke-dark-brown size-10" />
              <Link to="/about">About us</Link>
            </li>
          </div>
          <div>
            <li className="flex gap-2 items-center">
              <Dot className="stroke-dark-brown size-10" />
              <Link to="/products">Products</Link>
            </li>
          </div>
          <div>
            <li className="flex gap-2 items-center">
              <Dot className="stroke-dark-brown size-10" />
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <div>
            <li className="flex gap-2  items-center">
              <Dot className="stroke-dark-brown size-10" />
              <Link to="/enquire">Enquire</Link>
            </li>
          </div>
        </ul>

        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold">Sign Up for Email</h4>
          <p className="max-w-sm">
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events and more
          </p>
          <div className="flex justify-center items-center py-4 w-full">
            <form className="flex items-center w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-light-brown"
                required
              />
              <button
                type="submit"
                className="bg-light-brown text-white px-4 py-2 rounded-r-lg hover:bg-light-brown/80"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="h-px w-full bg-black/20 mb-5" />

        <p className="flex md:items-center justify-center gap-2 text-sm">
          <Copyright className="size-4 stroke-gray-600 " />
          Copyright @ {new Date().getFullYear()} ,Pagalam Chicory All rights
          reserved Developed By Barbikan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
