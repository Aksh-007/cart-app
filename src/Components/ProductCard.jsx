import React from "react";
const ProductCard = ({
  name="default product" ,
  id,
  price=0,
  handler,
  imgSrc="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png",
  key
}) => {

  const style = {
    ':after': {
      content : {name}
    }
  };
  return (
    <div className="container" >
      <div className="card" style={{style}}>
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
