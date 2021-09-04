import React from "react";
import PropTypes from "prop-types";

const Hello = ({ name }) => {
  return (
    <div className="hello">
      <h1>
        Bonjour <strong>{name}</strong> {}
      </h1>
      <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </div>
  );
};

export default Hello;

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};
