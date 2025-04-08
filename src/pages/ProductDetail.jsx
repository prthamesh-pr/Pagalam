import React from "react";
import { PRODUCTS } from "../config/products";
import ProductWrapper from "../components/ProductWrapper";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  return (
    <>
      <section>
        <div className="p-8 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex flex-col-reverse items-center md:flex-row gap-10">
            <div className="flex md:flex-col gap-4">
              <div className="size-20 md:size-40 rounded-md overflow-hidden ">
                <img
                  src="/image28.png"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="size-20 md:size-40 rounded-md overflow-hidden">
                <img
                  src="/image30.png"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="size-20 md:size-40 rounded-md overflow-hidden">
                <img
                  src="/image18.png"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div className="size-72 md:size-[450px] rounded-xl overflow-hidden">
              <img src="/image28.png" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-light-brown text-2xl font-semibold">
                Description
              </h3>
              <div className="h-px w-full bg-light-brown/40" />
              <p className="leading-loose">
                The family PAGALAM was involved in the import & distribution of
                chicory seeds for now since 40 years. Several seed varieties
                were imported earlier from different European countries. But
                since 1998 the collaboration with Florimond Desprez, France
                brought in India a variety called "ORCHIES". Which proved to be
                the best in all the growing areas both in terms of fresh root
                yield to the farmer & dried matter yield to the drying company.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-2">
                <h4 className="font-medium text-lg">Moisture</h4>
                <ul className="list-disc ml-6">
                  <li>Less than 8% during shipping.</li>
                  <li>Germination</li>
                  <li>not less than 80% Purity </li>
                  <li>Not less than 98%</li>
                </ul>
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="font-medium text-lg">Materials Care</h4>
                <p>
                  It should be noted that the germination percentage is valid
                  only for the 1st year of sale, under storage for the next
                  season the germination percentage may drop depending upon the
                  condition of storage.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-lg">Packaging</h4>
              <p>
                Packaging in 1 kg. plastic bags, 10 such bags in one cardboard
                carton. Quality specifications as per ISTA standards
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-dark-brown/5 p-8 pb-20 flex flex-col gap-14">
          <h2 className="text-4xl">Our Products</h2>
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

export default ProductDetail;
