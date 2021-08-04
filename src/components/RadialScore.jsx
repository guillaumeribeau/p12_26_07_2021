import React from "react";
import useFetch from "./FetchDating";
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";

const RadialScore = () => {
  const [loading, dataScore] = useFetch("http://localhost:3000/user/12");

  if (loading) {
    <div>Chargement...</div>;
  }

  //console.log(dataScore.data.todayScore*100)

  // const data = [{
  //   score: dataScore.data.todayScore*100 }]

  const data = [
    {
      score: 12,
    },
  ];

  return (
    <div className='radar_score_container'>  </div>
  );
};

export default RadialScore;
