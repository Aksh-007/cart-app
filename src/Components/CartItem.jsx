import React from "react";

const CartItem = ({
  src,
  name,
  price,
  quantity,
  decrement,
  increment,
  deleteHandler,
  id,
}) => {
  return (
    <div className="cartItem">
      <img src={src} alt={name} />
      <article>
        <h3>{name}</h3>
        <h3>{price}</h3>
      </article>

      <div>
         <button onClick={()=> increment(id)}>+</button>
         <button onClick={()=> decrement(id)}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
