import React from "react";
import useFetch from "./FetchDating";
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";
import CustomRadialScore from "./CustomRadialScore";
import { useParams } from "react-router-dom";

const RadialScore = () => {
  const { id } = useParams();
  const [loading, dataScore] = useFetch(`http://localhost:3000/user/${id}`);

  if (loading) {
    return <div className="lds-dual-ring"></div>;
  }

  const data = [
    { value: dataScore.data.todayScore || dataScore.data.score },
    { value: 1 - dataScore.data.todayScore || 1 - dataScore.data.score  },
  ];

  return (
    <div className="radar_score_container">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart width={250} height={180}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={180}
            endAngle={-360}
          >
            {data.map((entry, index) => {
              if (index === 1) {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill="#fbfbfb"
                    stroke-linecap="round"
                  />
                );
              }
              return <Cell key={`cell-${index}`} fill="#ff0000" />;
            })}
            <Label
              content={<CustomRadialScore value={data[0] && data[0].value} />}
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialScore;
