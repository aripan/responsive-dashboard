import React from "react";
import "./SideBar.css";
import Select from "react-select";
import { Icon, InlineIcon } from "@iconify/react";
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
  const dropdownOptions = [
    { value: "home", label: "Home" },
    { value: "email", label: "Email" },
    { value: "chat", label: "Chat" },
    { value: "todo", label: "Todo" },
    { value: "calender", label: "Calender" },
    { value: "eCommerce", label: "eCommerce" },
    { value: "typography", label: "Typography" },
    { value: "feather", label: "Feather" },
    { value: "cards", label: "Cards" },
  ];

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
        }}
      >
        <InlineIcon
          icon={homeIcon}
          className="dropdown-icon"
          style={{ marginLeft: "-60px" }}
        />
        {/* <Select defaultValue={dropdownOptions[0]} options={dropdownOptions} />{" "} */}
        <select
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "none",
            marginLeft: "-120px",
          }}
        >
          <option value="" selected="selected">
            Home
          </option>
          <option>Email</option>
          <option>Chat</option>
          <option>Todo</option>
          <option>Calender</option>
          <option>Typography</option>
          <option>Feather</option>
          <option>Cards</option>
        </select>
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
        <button className="side-bar-new-button" style={{ marginLeft: "40px" }}>
          new
        </button>
        <InlineIcon icon={arrowRightAlt2} />
      </p>
    </div>
  );
};

export default SideBar;
