import React from "react";
import PropTypes from "prop-types";

const TooltipsAverage = (props) => {
  const { payload, active } = props;

  if (active && payload) {
    return (
      <div className="tooltips_average">
        <span>{`${payload[0].value}min`}</span>
      </div>
    );
  }

  return null;
};

export default TooltipsAverage;

TooltipsAverage.PropTypes = {
  payload: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};
