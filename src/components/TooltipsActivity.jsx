import React from "react";

const TooltipsActivity = (props) => {
  const { payload, active } = props;

  if (active && payload) {
    return (
      <div className='tooltips_activity'>
        <span>{`${payload[0].value}kcal`}</span>
        <span>{`${payload[1].value}kg`}</span>
      </div>
    );
  }

  return null;
};

export default TooltipsActivity
