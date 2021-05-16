import React, { useEffect, useState } from "react";
import "./CartItems.css";
import { Icon } from "@iconify/react";
import xIcon from "@iconify-icons/feather/x";

const CartItems = ({
  allCartItems,
  setAllCartItems,
  isVisible,
  setIsVisible,
}) => {
  const [items, setItems] = useState([...allCartItems]);
  const [totalItems, setTotalItems] = useState(4);
  const [itemTotalPrice, setItemTotalPrice] = useState(2139.26);
  const [confirmationMessage, setConfirmationMessage] = useState(false);

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

  const handleMouseOver = (e) => {
    e.target.parentNode.children[0].style.display = "inline";
  };

  const handleCrossBtn = (name) => {
    const filteredItems = items.filter((item) => item.name !== name);
    setItems(filteredItems);
    setAllCartItems(filteredItems);
    setTotalItems(filteredItems.length);
  };

  const handleCheckout = () => {
    const checkedOutItems = [];
    setItems(checkedOutItems);
    setAllCartItems(checkedOutItems);
    setTotalItems(checkedOutItems.length);
    setConfirmationMessage(!confirmationMessage);
  };

  useEffect(() => {
    const itemsPrice = [];
    items.forEach((it) => itemsPrice.push(it.price));

    const updatedPrice = itemsPrice.reduce((total, price) => total + price, 0);
    setItemTotalPrice(updatedPrice);
  }, [items]);

  const handleConfirmationMessage = () => {
    setConfirmationMessage(!confirmationMessage);
    setIsVisible(!isVisible);
  };

  return (
    <div className="cart-container">
      {confirmationMessage && (
        <span className="checkout-confirmation">
          <Icon
            icon={xIcon}
            style={{
              fontSize: "20px",
              marginLeft: "250px",
              width: "25px",
              height: "25px",
              backgroundColor: "#161d31",
              borderRadius: "50%",
              cursor: "pointer",
              padding: "5px",
            }}
            onClick={handleConfirmationMessage}
          />
          <h4>
            Your orders have been placed successfully. <br /> You will be
            notified soon with all necessary details
          </h4>
        </span>
      )}

      <div className="cart">
        <div className="cart-title">
          <p>My Cart</p>
          <p className="cart-title-pill">{totalItems} items</p>
        </div>
        <hr />
        <div className="cart-items">
          {items.map((item, index) => (
            <div key={index} className="cart-items-container">
              <div className="cart-items-list">
                <div>{item.name}</div>
                <div className="cart-items-count">
                  <span
                    className="cart-items-count-decrement"
                    onClick={() => {
                      handleDecrement(index, item.count, item.price);
                    }}
                  >
                    -
                  </span>
                  <span>|</span>
                  <span>{item.count}</span>
                  <span>|</span>
                  <span
                    className="cart-items-count-increment"
                    onClick={() => {
                      handleIncrement(index, item.count, item.price);
                    }}
                  >
                    +
                  </span>
                </div>
                <div onMouseOver={handleMouseOver}>
                  <span
                    className="cart-item-close"
                    onClick={() => {
                      handleCrossBtn(item.name);
                    }}
                  >
                    <Icon icon={xIcon} />
                  </span>

                  <div style={{ minWidth: "70px" }}>${item.price}</div>
                </div>
              </div>

              <hr />
            </div>
          ))}
        </div>
        <div className="cart-checkout">
          <div className="cart-checkout-total">
            <span>Total</span>
            <span style={{ color: "#7367f0" }}>${itemTotalPrice}</span>
          </div>
          <div className="cart-checkout-btn">
            {items.length > 0 && (
              <button onClick={handleCheckout}>Checkout</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
