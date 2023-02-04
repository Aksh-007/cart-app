import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  //here we are importing data from cartReducer/ storage
  const { cartItems, subTotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };

  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <main>
      <div className="basket">
        <div className="basket-module">
          <label >Enter a promotional code</label>
          <input
            id="promo-code"
            type="text"
            name="promo-code"
            maxLength="5"
            className="promo-code-field"
          />
          <button className="promo-code-cta">Apply</button>
        </div>
        <div className="basket-labels">
          <ul>
            <li className="item item-heading">Item</li>
            <li className="price">Price</li>
            <li className="quantity">Quantity</li>
            <li className="subtotal">Subtotal</li>
          </ul>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              quantity={i.quantity}
              subTotal={subTotal}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1 style={{ textAlign: "center", marginTop: "15rem" }}>
            No items yet
          </h1>
        )}
      </div>
      <aside>
        <div className="summary">
          <div className="summary-total-items">
            <span className="total-items"></span> Items in your Bag
          </div>
          <div className="summary-subtotal">
            <div className="subtotal-title">Subtotal :</div>
            <div className="subtotal-value final-value" id="basket-subtotal">
              {subTotal}
            </div>
            {/* <div className="summary-promo hide">
              <div className="promo-title">Promotion</div>
              <div className="promo-value final-value" id="basket-promo"></div>
            </div> */}
          </div>
          <div className="summary-subtotal">
            <div className="subtotal-title">Shipping :</div>
            <div className="subtotal-value final-value" id="basket-subtotal">
             {shipping}
            </div>
            {/* <div className="summary-promo hide">
              <div className="promo-title">Promotion</div>
              <div className="promo-value final-value" id="basket-promo"></div>
            </div> */}
          </div>
          <div className="summary-subtotal">
            <div className="subtotal-title">Tax :</div>
            <div className="subtotal-value final-value" id="basket-subtotal">
              {tax}
            </div>
            {/* <div className="summary-promo hide">
              <div className="promo-title">Promotion</div>
              <div className="promo-value final-value" id="basket-promo"></div>
            </div> */}
          </div>
          {/* <div className="summary-delivery">
            <select
              name="delivery-collection"
              className="summary-delivery-selection"
            >
              <option value="0" selected="selected">
                Select Collection or Delivery
              </option>
              <option value="collection">Collection</option>
              <option value="first-class">Royal Mail 1st Class</option>
              <option value="second-class">Royal Mail 2nd Class</option>
              <option value="signed-for">Royal Mail Special Delivery</option>
            </select>
          </div> */}
          <div className="summary-total">
            <div className="total-title">Total :</div>
            <div className="total-value final-value" id="basket-total">
              {total}
            </div>
          </div>
          <div className="summary-checkout">
            <button className="checkout-cta"> Checkout</button>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Cart;
