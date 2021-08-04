import React from "react";

const TooltipsAverage = (props) => {
  const { payload, active } = props;

  if (active && payload) {
    return (
      <div className='tooltips_average'>
        <span>{`${payload[0].value}min`}</span>
      
      </div>
    );
  }

  return null;
};

export default TooltipsAverage
