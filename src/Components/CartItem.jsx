import React from "react";
import {AiOutlinePlus,AiOutlineMinus,AiTwotoneDelete} from 'react-icons/ai'



const CartItem = ({
  imgSrc,
  name ,
  price  ,
  quantity ,
  decrement,
  increment,
  deleteHandler,
  id ,
}) => {
  return (
    // <div className="cartItem">
    //   <img src={src} alt={name} />
    //   <article>
    //     <h3>{name}</h3>
    //     <h3>{price}</h3>
    //   </article>

    //   <div>
    //      <button onClick={()=> increment(id)}>+</button>
    //      <p>{quantity}</p>
    //      <button onClick={()=> decrement(id)}>-</button>
    //   </div>
    //   <AiFillDelete onClick={() => deleteHandler(id)}/>
    // </div>

     <div className="basket-product">
          <div className="item">
            <div className="product-image">
              <img
                src={imgSrc}
                alt={name}
                className="product-frame"
              />
            </div>
            <div className="product-details">
              <h1>
                {/* <strong> */}
                  <span className="item-quantity"> Product Details:</span>
                {/* </strong> */}
                {/* Lace Sleeve Cuff Dress */}
              </h1>
              <p>
                <strong>{name}</strong>
              </p>
              {/* <p>Product Code - {id}</p> */}
            </div>
          </div>
          <div className="price">{price}</div>
          <div className="quantity">
            <AiOutlineMinus className="cursor" size={25} onClick={()=> decrement(id)}/ >
            <input type="number" value={quantity} min="1" className="quantity-field" />
            <AiOutlinePlus  className="cursor" size={25} onClick={()=> increment(id)}/>
          </div>
          <div className="subtotal">{price}</div>
          <div className="remove">
            {/* <button>Remove</button> */}
            <AiTwotoneDelete className="cursor" onClick={()=> deleteHandler(id)}/>
          </div>
        </div> 


  );
};

export default CartItem;
