import React from "react";

const TooltipsActivity = (props) => {
  const { payload, active } = props;

  if (active && payload) {
    return (
      <div className='tooltips_activity'>
        <span>{`${payload[0].value}kg`}</span>
        <span>{`${payload[1].value}kcal`}</span>
      </div>
    );
  }

  return null;
};

export default TooltipsActivity
