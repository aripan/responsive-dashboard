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
import dropdownIcon from "@iconify-icons/ls/dropdown";

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
          width: "180px",
          padding: "10px 0",
          border: "1px solid black",
          borderRadius: "0.5em",
          fontSize: "16px",
        }}
      >
        <InlineIcon
          icon={homeIcon}
          className="dropdown-icon"
          style={{ marginLeft: "-50px" }}
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
      <ul className="side-bar-category-one">
        <li>
          <InlineIcon icon={mailIcon} /> Email
        </li>
        <li>
          <InlineIcon icon={messageSquare} /> Chat
        </li>
        <li>
          <InlineIcon icon={checkSquare} /> Todo
        </li>
        <li>
          <InlineIcon icon={calendarIcon} /> Calender
        </li>
        <li>
          <InlineIcon icon={shoppingCart} /> eCommerce
        </li>
      </ul>

      <h5>CATEGORY 2</h5>
      <ul className="side-bar-category-two">
        <li>
          <InlineIcon icon={typeIcon} /> Typography
        </li>
        <li>
          <InlineIcon icon={eyeIcon} /> Feather
        </li>
        <li>
          <InlineIcon icon={creditCard} /> Cards
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
