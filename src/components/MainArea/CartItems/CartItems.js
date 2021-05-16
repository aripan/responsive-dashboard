import React, { useEffect, useState } from "react";
import "./CartItems.css";

const CartItems = ({ allCartItems }) => {
  const [items, setItems] = useState([...allCartItems]);
  const [totalItems, setTotalItems] = useState(4);
  const [itemTotalPrice, setItemTotalPrice] = useState(2139.26);

  const handleIncrement = (index, number, price) => {
    items[index].count = number + 1;
    if (index === 0) {
      items[index].price = Number(339.99) * Number(items[index].count);
    }
    if (index === 1) {
      items[index].price = Number(129.29) * Number(items[index].count);
    }
    if (index === 2) {
      items[index].price = Number(669.99) * Number(items[index].count);
    }
    if (index === 3) {
      items[index].price = Number(999.99) * Number(items[index].count);
    }
    const updatedItems = [...items];
    setItems(updatedItems);
  };

  const handleDecrement = (index, number, price) => {
    if (number > 0) {
      items[index].count = number - 1;
      if (index === 0) {
        items[index].price = Number(339.99) * Number(items[index].count);
      }
      if (index === 1) {
        items[index].price = Number(129.29) * Number(items[index].count);
      }
      if (index === 2) {
        items[index].price = Number(669.99) * Number(items[index].count);
      }
      if (index === 3) {
        items[index].price = Number(999.99) * Number(items[index].count);
      }
      const updatedItems = [...items];
      setItems(updatedItems);
    }
  };

  useEffect(() => {
    const itemsPrice = [];
    items.forEach((it) => itemsPrice.push(it.price));

    const updatedPrice = itemsPrice.reduce((total, price) => total + price, 0);
    setItemTotalPrice(updatedPrice);
  }, [items]);

  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-title">
          <p>My Cart</p>
          <p className="cart-title-pill">{totalItems} items</p>
        </div>
        <hr />
        <div className="cart-items">
          {items.map((item, index) => (
            <div key={index}>
              <div className="cart-items-list">
                <div>{item.name}</div>
                <div className="cart-items-count">
                  <span
                    className="cart-items-count-increment"
                    onClick={() => {
                      handleIncrement(index, item.count, item.price);
                    }}
                  >
                    +
                  </span>
                  <span>|</span>
                  <span>{item.count}</span>
                  <span>|</span>
                  <span
                    className="cart-items-count-decrement"
                    onClick={() => {
                      handleDecrement(index, item.count, item.price);
                    }}
                  >
                    -
                  </span>
                </div>
                <div style={{ minWidth: "70px" }}>${item.price}</div>
              </div>

              <hr />
            </div>
          ))}
        </div>
        <div className="cart-checkout">
          <div className="cart-checkout-total">
            <span>Total</span>
            <span>${itemTotalPrice}</span>
          </div>
          <div className="cart-checkout-btn">
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
