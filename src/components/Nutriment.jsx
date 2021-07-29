import React from "react";
import calories from "../assets/calories-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import fat from "../assets/fat-icon.svg";
import protein from "../assets/protein-icon.svg";

const Nutriment = () => {
  return (
    <div className="nutriment_container">
      <div className="nutriment">
        <img src={calories} alt="" />
        <div>
          <h2>1930K</h2>
          <h3>Calories</h3>
        </div>
      </div>

      <div className="nutriment">
        <img src={protein} alt="" />
        <div>
          <h2>155g</h2>
          <h3>Protéines</h3>
        </div>
      </div>

      <div className="nutriment">
        <img src={carbs} alt="" />
        <div>
          <h2>290g</h2>
          <h3>Glucides</h3>
        </div>
      </div>

      <div className="nutriment">
        <img src={fat} alt="" />
        <div>
          <h2>50g</h2>
          <h3>Lipides</h3>
        </div>
      </div>
    </div>
  );
};

export default Nutriment;
