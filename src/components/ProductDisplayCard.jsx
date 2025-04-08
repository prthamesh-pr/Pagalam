import React from "react";

const ProductDisplayCard = ({ product }) => {
  return (
    <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 h-full w-full bg-black/10"></div>
      <img className="h-full w-full" src={product.img} />
      <button className="absolute bg-white bottom-8 left-1/2 -translate-x-1/2 py-1.5 px-4 rounded-md">
        {product.name}
      </button>
    </div>
  );
};

export default ProductDisplayCard;
