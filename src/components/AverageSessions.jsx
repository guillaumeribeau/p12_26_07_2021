import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import useFetch from "./FetchDating";

import { useLocation, useParams } from "react-router-dom";
import TooltipsAverage from "./TooltipsAverage";

const transformAxisX = (data) => {
  let value = "";
  switch (data.day) {
    case 1:
      value = "L";
      break;
    case 2:
      value = "M";
      break;
    case 3:
      value = "M";
      break;
    case 4:
      value = "J";
      break;
    case 5:
      value = "V";
      break;
    case 6:
      value = "S";
      break;
    case 7:
      value = "D";
      break;
    default:
      value = "";
  }
  return value;
};

const AverageSessions = () => {
  const { id } = useParams();
  const [loading, averageData] = useFetch(
    `http://localhost:3000/user/${id}/average-sessions`
  );
 
  if (loading) {
    return <div className="lds-dual-ring"></div>;
  }

  let sessionArray = [];
  let minY = 0;
  let maxY = 0;

  if (averageData) {
    sessionArray = averageData.data.sessions.map((elt) => elt.sessionLength);
    minY = Math.min(...sessionArray) / 2;
    maxY = Math.max(...sessionArray) * 2;
  }
  return (
    <div className="average_container">
      <h2>
        Durée moyenne des <br />
        sessions
      </h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={258}
          height={263}
          data={averageData.data.sessions}
          margin={{ top: 5, right: 15, left: 15, bottom: 5 }}
        >
          <CartesianGrid
            horizontal={false}
            vertical={false}
            strokeDasharray="0"
          />
          <XAxis
            dataKey={transformAxisX}
            stroke="rgba(255, 255, 255, 0.5)"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis hide={true} domain={[minY, maxY]} />
          <Tooltip content={<TooltipsAverage />} cursor={{ fill: "#FFFFFF" }} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.2)",
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessions;
