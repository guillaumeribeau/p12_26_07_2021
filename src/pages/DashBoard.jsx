import React from "react";
import DayliesActivity from "../components/DayliesActivity";
import Navigation from "../components/Navigation";
import AsideNutriment from "../components/AsideNutriment";
import SidebarIcons from "../components/SidebarIcons";
import Hello from "../components/Hello";
import RadarPerformance from "../components/RadarPerformance";
import RadialScore from "../components/RadialScore";
import AverageSessions from "../components/AverageSessions";
import { useParams } from "react-router-dom";
import useFetch from "../components/FetchData";

const DashBoard = () => {
  const { id } = useParams();

  const [loadingName, name] = useFetch(`http://localhost:3000/user/${id}`);
  
  const [loadingActivity, dayliesActivity] = useFetch(
    `http://localhost:3000/user/${id}/activity`
  );
  const [loadingDataNutriment, dataNutriment] = useFetch(
    `http://localhost:3000/user/${id}`
  );
  const [loadingAverageSessions, averageSessions] = useFetch(
    `http://localhost:3000/user/${id}/average-sessions`
  );

  const [loadingDataPerformance, dataPerformance] = useFetch(
    `http://localhost:3000/user/${id}/performance`
  );
  const [loadingDataScore, dataScore] = useFetch(
    `http://localhost:3000/user/${id}`
  );

  if (
    loadingName ||
    loadingActivity ||
    loadingDataNutriment ||
    loadingAverageSessions ||
    loadingDataPerformance ||
    loadingDataScore
  ) {
    return <div className="lds-dual-ring"></div>;
  }

  return (
    <div>
      <Navigation />
      <SidebarIcons />
      <Hello name={name.data.userInfos.firstName} />
      <div className="global_container">
        <div className="main_container">
          <DayliesActivity dayliesActivity={dayliesActivity.data.sessions} />
          <div className="goal_container">
            <AverageSessions averageSessions={averageSessions.data.sessions} />
            <RadarPerformance
              dataPerformance={dataPerformance}
              dataPerformanceValue={dataPerformance.data.data}
            />
            <RadialScore
              dataScore={dataScore.data.todayScore}
              dataScore2={dataScore.data.score}
            />
          </div>
        </div>
        <AsideNutriment
          dataCalorie={dataNutriment.data.keyData.calorieCount}
          dataProtein={dataNutriment.data.keyData.proteinCount}
          dataCarbohydrate={dataNutriment.data.keyData.carbohydrateCount}
          dataLipid={dataNutriment.data.keyData.lipidCount}
        />
        <div />
      </div>
    </div>
  );
};

export default DashBoard;
