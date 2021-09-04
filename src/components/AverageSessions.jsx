import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import TooltipsAverage from "./TooltipsAverage";
import PropTypes from "prop-types";

/**
 * Change the label on the Axis
 * @param   {object}  data the fetched data from API
 * @return  {string}  The label to display
 */

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

const AverageSessions = ({ averageSessions }) => {
  let sessionArray = [];
  let minY = 0;
  let maxY = 0;

  if (AverageSessions) {
    sessionArray = averageSessions.map((elt) => elt.sessionLength);
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
          data={averageSessions}
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

AverageSessions.propTypes = {
  averageSessions: PropTypes.array.isRequired,
};
