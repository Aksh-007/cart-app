import React from "react";
const ProductCard = ({
  name = "nike",
  id,
  price = 5000,
  handler,
  src = "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png",
}) => {
  return (
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img src={src} alt={name} />
        </div>

        <div className="contentBx">
          <h2 className="size">{name}</h2>
          <h2 className="size">{price}</h2>
          <a href="google">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
