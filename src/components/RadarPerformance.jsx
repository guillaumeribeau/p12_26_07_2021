import React from "react";
import {
  PolarGrid,
  PolarAngleAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Change the value of performance data
 * @param   {object}  data the fetched data from API
 * @return  {string}  The label to display
 */

const displayIntensityPerformance = (data) => {
  let value = "";
  switch (data.kind) {
    case 1:
      value = "Cardio";

      break;
    case 2:
      value = "Energie";

      break;
    case 3:
      value = "Endurance";

      break;
    case 4:
      value = "Force";

      break;
    case 5:
      value = "Vitesse";

      break;

    case 6:
      value = "Intensité";

      break;

    default:
      value = "";
  }
  return value;
};

const RadarPerformance = ({ dataPerformance, dataPerformanceValue }) => {
  return (
    <div className="radar_performance_container">
      {dataPerformance && (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="55%"
            data={dataPerformanceValue}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey={displayIntensityPerformance}
              stroke="#fff"
              tickLine={false}
              tick={{ fontSize: 10 }}
            />
            <Radar
              dataKey="value"
              stroke="#ff0101"
              fill="#ff0101"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default RadarPerformance;

RadarPerformance.prototype = {
  dataPerformance: PropTypes.object.isRequired,
  dataPerformanceValue: PropTypes.array.isRequired,
};
