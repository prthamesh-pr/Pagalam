import { ShoppingBag } from "lucide-react";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
      <div>
        <img src={product.img} className="h-72 w-full" />
      </div>
      <div className="px-4 py-4 flex justify-between items-center">
        <span>{product.name}</span>
        <ShoppingBag className="size-5 stroke-gray-500" />
      </div>
    </div>
  );
};

export default ProductCard;
