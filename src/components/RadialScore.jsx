import React from "react";
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";
import CustomRadialScore from "./CustomRadialScore";
import PropTypes from "prop-types";

const RadialScore = ({ dataScore, dataScore2 }) => {
  const data = [
    { value: dataScore || dataScore2 },
    { value: 1 - dataScore || 1 - dataScore2 },
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

RadialScore.prototype = {
  dataScore: PropTypes.number.isRequired,
  dataScore2: PropTypes.number.isRequired,
};
