import React, { useEffect, useState } from "react";
import "./TopBarSection.css";
import { InlineIcon } from "@iconify/react";
import mailIcon from "@iconify-icons/feather/mail";
import messageSquare from "@iconify-icons/feather/message-square";
import checkSquare from "@iconify-icons/feather/check-square";
import calendarIcon from "@iconify-icons/feather/calendar";
import shoppingCart from "@iconify-icons/feather/shopping-cart";
import starIcon from "@iconify-icons/feather/star";
import searchIcon from "@iconify-icons/feather/search";
import bellIcon from "@iconify-icons/feather/bell";
import menuOutlined from "@iconify-icons/ant-design/menu-outlined";
import CartItems from "../CartItems/CartItems";
// import shoppingItems from "../../../data/shopping_cart_items.json";

const TopBarSection = () => {
  const [allCartItems, setAllCartItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch("shopping_cart_items.json")
      .then((res) => res.json())
      .then((data) => setAllCartItems(data.shopping_cart_items));
  }, []);

  const handleShoppingCart = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="top-bar-container">
      <div className="top-bar-content">
        <div className="top-bar-content-left">
          <InlineIcon icon={calendarIcon} className="top-bar-icon" />
          <InlineIcon icon={messageSquare} className="top-bar-icon" />
          <InlineIcon icon={mailIcon} className="top-bar-icon" />
          <InlineIcon icon={checkSquare} className="top-bar-icon" />
          <InlineIcon icon={starIcon} className="top-bar-icon" />
        </div>
        <span className="menu-btn">
          <InlineIcon icon={menuOutlined} className="top-bar-icon" />
        </span>
        <div className="top-bar-content-right">
          <div>
            <InlineIcon icon={searchIcon} className="top-bar-icon" />
            <span className="cart-notification">
              {" "}
              <InlineIcon
                icon={shoppingCart}
                className="top-bar-icon"
                onClick={handleShoppingCart}
              />
              {isVisible && allCartItems.length > 0 && (
                <span className="cart-items-length">{allCartItems.length}</span>
              )}
            </span>

            <InlineIcon icon={bellIcon} className="top-bar-icon" />
          </div>

          <p className="top-bar-username">
            <span style={{ fontWeight: "700" }}>Username</span> <br />
            <span style={{ marginLeft: "25px" }}>admin</span>
          </p>
        </div>
      </div>
      <div className="top-bar-cart">
        {isVisible && (
          <CartItems
            allCartItems={allCartItems}
            setAllCartItems={setAllCartItems}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        )}
      </div>
    </div>
  );
};

export default TopBarSection;
