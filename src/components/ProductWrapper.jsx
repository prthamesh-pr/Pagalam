import React from "react";

const ProductWrapper = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 ">
      {children}
    </div>
  );
};

export default ProductWrapper;
