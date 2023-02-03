import React from "react";
import product from '../Assests/product.png'
const ProductCard = ({
  name = "nike",
  id,
  price = 5000,
  handler,
  src = product,
  key
}) => {
  return (
    <div className="container" >
      <div className="card">
        <div className="imgBx">
          <img src={src} alt={name} />
        </div>

        <div className="contentBx">
          <h2 className="size">{name}</h2>
          <h2 className="size">₹{price}</h2>
           {/* <button onClick={()=>handler()}> Buy Now</button> */}
          <button  onClick={() => handler({name,id,price,quantity:1,src})}>Add to Cart</button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
