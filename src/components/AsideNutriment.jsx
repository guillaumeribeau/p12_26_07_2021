import React from "react";
import calories from "../assets/calories-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import fat from "../assets/fat-icon.svg";
import protein from "../assets/protein-icon.svg";
import PropTypes from "prop-types";

const AsideNutriment = ({
  dataCalorie,
  dataProtein,
  dataCarbohydrate,
  dataLipid,
}) => {
  return (
    <div className="nutriment_container">
      <div className="nutriment">
        <img src={calories} alt="" />
        <div>
          <h2>{dataCalorie}Kcal</h2>
          <h3>Calories</h3>
        </div>
      </div>

      <div className="nutriment ">
        <img src={protein} alt="" />
        <div>
          <h2>{dataProtein}g</h2>
          <h3>Protéines</h3>
        </div>
      </div>

      <div className="nutriment">
        <img src={carbs} alt="" />
        <div>
          <h2>{dataCarbohydrate}g</h2>
          <h3>Glucides</h3>
        </div>
      </div>

      <div className="nutriment">
        <img src={fat} alt="" />
        <div>
          <h2>{dataLipid}g</h2>
          <h3>Lipides</h3>
        </div>
      </div>
    </div>
  );
};

export default AsideNutriment;

AsideNutriment.prototype = {
  dataCalorie: PropTypes.number.isRequired,
  dataCarbohydrate: PropTypes.number.isRequired,
  dataLipid: PropTypes.number.isRequired,
  dataProtein: PropTypes.number.isRequired,
};
