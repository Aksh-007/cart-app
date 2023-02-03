import React from "react";
import product from '../Assests/product.png'
const ProductCard = ({
  name="default product" ,
  id,
  price=0,
  handler,
  imgSrc=product,
  key
}) => {
  return (
    <div className="container" >
      <div className="card">
        <div className="imgBx">
          <img src={imgSrc} alt={name} />
        </div>

        <div className="contentBx">
          <h2 className="size">{name}</h2>
          <h2 className="size">₹{price}</h2>
           {/* <button onClick={()=>handler()}> Buy Now</button> */}
          <button  onClick={() => handler({name,id,price,quantity:1,imgSrc})}>Add to Cart</button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
