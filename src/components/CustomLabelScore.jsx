import React from "react";

const CustomLabelScore = (props) => {
  const { value, viewBox } = props;
  const { cx, cy } = viewBox;
  
  return (
    <React.Fragment>
      <text x={cx - 25} y={cy - 5}>
        <tspan
          style={{
            fontWeight: 700,
            fontSize: "26px",
            fill: "#282d30",
            fontFamily: "Roboto",
          }}
        >
          {`${value * 100}%`}
        </tspan>
      </text>
      <text x={cx - 30} y={cy + 15}>
        <tspan
          style={{
            fontWeight: 500,
            fontSize: "16px",
            fill: "#74798c",
            fontFamily: "Roboto",
          }}
        >
          de votre
        </tspan>
      </text>
      <text x={cx - 30} y={cy + 35}>
        <tspan
          style={{
            fontWeight: 500,
            fontSize: "16px",
            fill: "#74798c",
            fontFamily: "Roboto",
          }}
        >
          objectif
        </tspan>
      </text>
    </React.Fragment>
  );
};

export default CustomLabelScore;
