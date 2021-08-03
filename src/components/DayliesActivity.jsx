import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  Area,
} from "recharts";
import useFetch from "./FetchDating";
import TooltipsActivity from "./TooltipsActivity";

const DayliesActivity = () => {
  const [loading, items] = useFetch("http://localhost:3000/user/12/activity");

  if (loading) {
    return <div>Chargement...</div>;
  }
  console.log(items);

  let kilogramsArray = [];
  let caloriesArray = [];
  let minYKilo = 0;
  let maxYKilo = 0;
  let minYCal = 0;
  let maxYCal = 0;

  if (items.data.sessions) {
    kilogramsArray = items.data.sessions.map((elt) => elt.kilogram);
    minYKilo = Math.min(...kilogramsArray) - 1;
    maxYKilo = Math.max(...kilogramsArray) + 1;

    caloriesArray = items.data.sessions.map((elt) => elt.calories);
    minYCal = Math.min(...caloriesArray) - 10;
    maxYCal = Math.max(...caloriesArray) + 10;
  }

  return (
    <div className="daylies_activities">
      <div className="units">
        <h2>Activité quotidienne</h2>
        <div className="header-elt">
          <div className="round_poids"></div>
          <span>Poids (kg)</span>
        </div>
        <div className="header-elt">
          <div className="round_calorie"></div>
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          barSize={7}
          barGap={8}
          barCategoryGap={54}
          radius={5}
          data={items.data.sessions}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            datakey="day"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
          />
          <YAxis
            orientation="right"
            dataKey="kilogram"
            domain={[minYKilo, maxYKilo]}
          />
          <YAxis yAxisId="cal" hide={true} domain={[minYCal, maxYCal]} />
          <Tooltip
            content={<TooltipsActivity />}
            cursor={{ fill: "#e0e0e0" }}
          />
          <Bar dataKey="calories" fill="#282D30" radius={[5, 5, 0, 0]} />
          <Bar dataKey="kilogram" fill="#E60000" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DayliesActivity;
