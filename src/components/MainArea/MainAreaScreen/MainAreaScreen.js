import React from "react";
import "./MainAreaScreen.css";
import TopBarSection from "../TopBarSection/TopBarSection";
import TitleSection from "../TitleSection/TitleSection";
import MiddleSection from "../MiddleSection/MiddleSection";
import BottomSection from "../BottomSection/BottomSection";

const MainAreaScreen = () => {
  return (
    <div className="main-area-container">
      <div className="top-bar-section">
        <TopBarSection />
      </div>
      <div className="title-section">
        <TitleSection />
      </div>
      <div className="middle-section">
        <MiddleSection />
      </div>
      <div className="bottom-section">
        <BottomSection />
      </div>
    </div>
  );
};

export default MainAreaScreen;
