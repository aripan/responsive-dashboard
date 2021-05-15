import React from "react";
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

const TopBarSection = () => {
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
            <InlineIcon icon={shoppingCart} className="top-bar-icon" />
            <InlineIcon icon={bellIcon} className="top-bar-icon" />
          </div>

          <p className="top-bar-username">
            <span style={{ fontWeight: "700" }}>Username</span> <br />
            <span style={{ marginLeft: "25px" }}>admin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBarSection;
