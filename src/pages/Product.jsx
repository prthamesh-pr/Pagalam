import React from "react";
import ProductImgOne from "../assets/image4.png";
import ProductImgTwo from "../assets/image5.png";
import ProductImgThree from "../assets/image6.png";
import ProductImgFour from "../assets/image26.png";
import ProductWrapper from "../components/ProductWrapper";
import ProductOneImg from "../assets/image18.png";
import ProductTwoImg from "../assets/image28.png";
import ProductThreeImg from "../assets/image29.png";
import ProductFourImg from "../assets/image30.png";
import ProductFiveImg from "../assets/image31.png";
import ProductSixImg from "../assets/image32.png";
import ProductSevenImg from "../assets/image33.png";
import ProductEightImg from "../assets/image35.png";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const ProductsInfo = [
  {
    img: ProductImgOne,
    name: "Un-Roasted Chicory",
  },
  {
    img: ProductImgTwo,
    name: "Roasted Chicory",
  },
  {
    img: ProductImgThree,
    name: "Instant Chicory",
  },
  {
    img: ProductImgFour,
    name: "Roasted Chicory Extracts",
  },
];

const Products = [
  {
    img: ProductOneImg,
    name: "UN-Roasted Chicory",
  },
  {
    img: ProductTwoImg,
    name: "UN-Roasted Chicory",
  },
  {
    img: ProductThreeImg,
    name: "UN-Roasted Chicory",
  },
  {
    img: ProductFourImg,
    name: "UN-Roasted Chicory",
  },
  {
    img: ProductFiveImg,
    name: "UN-Roasted Chicory",
  },
  {
    img: ProductSixImg,
    name: "UN-Roasted Chicory",
  },
  {
    img: ProductSevenImg,
    name: "UN-Roasted Chicory",
  },
  {
    img: ProductEightImg,
    name: "UN-Roasted Chicory",
  },
];

const Product = () => {
  return (
    <>
      <section>
        <div className="p-4 md:p-8">
          <div className="bg-[url('/image3.png')] bg-cover bg-center h-80 rounded-2xl flex justify-center text-center md:justify-end p-8  md:p-14">
            <p className="text-3xl md:text-6xl">Chicory seeds</p>
          </div>
        </div>
      </section>

      <section>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ProductsInfo.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl h-60 overflow-hidden relative"
              >
                <img src={product.img} className="w-full h-full object-cover" />
                <p className="absolute inset-0 flex  justify-center text-white text-lg pt-6 font-bold bg-black/30">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="p-8 space-y-10">
          <h2 className="text-4xl text-center font-semibold">
            Pagalam Chicory Products Lineup
          </h2>
          <ProductWrapper>
            {Products.map((product, index) => (
              <Link key={index} to="/product-details">
                <ProductCard product={product} />
              </Link>
            ))}
          </ProductWrapper>
        </div>
      </section>
    </>
  );
};

export default Product;
