import React from "react";
import DayliesActivity from "../components/DayliesActivity";
import Navigation from "../components/Navigation";
import AsideNutriment from "../components/AsideNutriment";
import SidebarIcons from "../components/SidebarIcons";
import Hello from "../components/Hello";
import RadarPerformance from "../components/RadarPerformance";
import RadialScore from "../components/RadialScore";
import AverageSessions from "../components/AverageSessions";

const DashBoard = () => {
  return (
    <div>
      <Navigation />
      <SidebarIcons />
      <Hello />
      <div className="global_container">
        <div className="main_container">
          <DayliesActivity />
          <div className="goal_container">
            <AverageSessions />
            <RadarPerformance />
            <RadialScore />
          </div>
        </div>
        <AsideNutriment />
        <div />
      </div>
    </div>
  );
};

export default DashBoard;
