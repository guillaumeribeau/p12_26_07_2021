import React from "react";
import yoga from "../assets/yoga.svg";
import swim from "../assets/swim.svg";
import bike from "../assets/bike.svg";
import fitness from "../assets/fitness.svg";

const SidebarIcons = () => {
  return (
    <aside className="sidebar">
      <img src={yoga} alt="yoga icons" />
      <img src={swim} alt="swim icons" />
      <img src={bike} alt="bike icons" />
      <img src={fitness} alt="fitness icons" />
      <span className="copyright">Copyright, SportSee 2020</span>
    </aside>
  );
};

export default SidebarIcons;
