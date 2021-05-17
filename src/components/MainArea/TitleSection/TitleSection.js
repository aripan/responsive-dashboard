import React from "react";
import "./TitleSection.css";

const TitleSection = () => {
  return (
    <div className="title-container">
      <div className="title-heading">
        <span>Title</span>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div className="title-items">
        <div className="title-items-top">
          <span style={{ fontWeight: "700" }}>Title</span>
          <span style={{ fontSize: "12px" }}>updated N month(s) ago</span>
        </div>
        <div className="title-items-bottom">
          <div className="title-items-bottom-one">
            <div className="circle-one">img</div>
            <p style={{ margin: "0.5rem" }}>
              <span style={{ fontWeight: "700" }}>999k</span> <br />
              <span style={{ fontSize: "12px" }}>Lorem</span>
            </p>
          </div>
          <div className="title-items-bottom-two">
            <div className="circle-two">img</div>
            <p style={{ margin: "0.5rem" }}>
              <span style={{ fontWeight: "700" }}>999k</span> <br />
              <span style={{ fontSize: "12px" }}>Lorem</span>
            </p>
          </div>
          <div className="title-items-bottom-three">
            <div className="circle-three">img</div>
            <p style={{ margin: "0.5rem" }}>
              <span style={{ fontWeight: "700" }}>999k</span> <br />
              <span style={{ fontSize: "12px" }}>Lorem</span>
            </p>
          </div>
          <div className="title-items-bottom-four">
            <div className="circle-four">img</div>
            <p style={{ margin: "0.5rem" }}>
              <span style={{ fontWeight: "700" }}>$999</span> <br />
              <span style={{ fontSize: "12px" }}>Lorem</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
