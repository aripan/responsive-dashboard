import React from "react";
import "./SideBar.css";
import { InlineIcon } from "@iconify/react";
import mailIcon from "@iconify-icons/feather/mail";
import messageSquare from "@iconify-icons/feather/message-square";
import checkSquare from "@iconify-icons/feather/check-square";
import calendarIcon from "@iconify-icons/feather/calendar";
import shoppingCart from "@iconify-icons/feather/shopping-cart";
import typeIcon from "@iconify-icons/feather/type";
import homeIcon from "@iconify-icons/feather/home";
import creditCard from "@iconify-icons/feather/credit-card";
import eyeIcon from "@iconify-icons/feather/eye";
import arrowRightAlt2 from "@iconify-icons/dashicons/arrow-right-alt2";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <div
        className="side-bar-dropdown"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "200px",
          padding: "10px 0",
          border: "1px solid black",
          borderRadius: "0.5em",
          fontSize: "16px",
          marginLeft: "-10px",
          backgroundColor: "#161d31",
        }}
      >
        <InlineIcon
          icon={homeIcon}
          className="dropdown-icon"
          style={{ marginLeft: "-80px", color: "#b4b7bd" }}
        />
        <select
          defaultValue="Home"
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "none",
            marginLeft: "-170px",
            backgroundColor: "#161d31",
            color: "#d0d2d6",
          }}
        >
          <option value="Home">Home</option>
          <option>Email</option>
          <option>Chat</option>
          <option>Todo</option>
          <option>Calender</option>
          <option>Typography</option>
          <option>Feather</option>
          <option>Cards</option>
        </select>
        <span className="dropdown-notification">2</span>
      </div>

      <h5>CATEGORY 1</h5>
      <p>
        <InlineIcon icon={mailIcon} className="side-bar-icon" />
        Email
      </p>
      <p>
        <InlineIcon icon={messageSquare} className="side-bar-icon" />
        Chat
      </p>
      <p>
        <InlineIcon icon={checkSquare} className="side-bar-icon" />
        Todo
      </p>
      <p>
        <InlineIcon icon={calendarIcon} className="side-bar-icon" />
        Calender
      </p>
      <p>
        <InlineIcon icon={shoppingCart} className="side-bar-icon" />
        eCommerce{" "}
        <InlineIcon icon={arrowRightAlt2} style={{ marginLeft: "40px" }} />
      </p>

      <h5>CATEGORY 2</h5>
      <p>
        <InlineIcon icon={typeIcon} className="side-bar-icon" />
        Typography
      </p>
      <p>
        <InlineIcon icon={eyeIcon} className="side-bar-icon" />
        Feather
      </p>
      <p>
        <InlineIcon icon={creditCard} className="side-bar-icon" />
        Cards
        <button className="side-bar-new-button">new</button>
        <InlineIcon icon={arrowRightAlt2} />
      </p>
    </div>
  );
};

export default SideBar;
