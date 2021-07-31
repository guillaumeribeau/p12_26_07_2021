import React from "react";
import calories from "../assets/calories-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import fat from "../assets/fat-icon.svg";
import protein from "../assets/protein-icon.svg";
import useFetch from "./FetchDating";

const Nutriment = () => {
  const [loading, dataNutriment] = useFetch("http://localhost:3000/user/12");

  if (loading) {
    return <div>Chargement...</div>;
  }

  console.log(dataNutriment)
  return (
    <div className="nutriment_container">
      <div className="nutriment">
        <img src={calories} alt="" />
        <div>
          <h2>{dataNutriment.data.keyData.calorieCount}kCal</h2>
          <h3>Calories</h3>
        </div>
      </div>

      <div className="nutriment">
        <img src={protein} alt="" />
        <div>
          <h2>{dataNutriment.data.keyData.proteinCount}g</h2>
          <h3>Protéines</h3>
        </div>
      </div>

      <div className="nutriment">
        <img src={carbs} alt="" />
        <div>
          <h2>{dataNutriment.data.keyData.carbohydrateCount}g</h2>
          <h3>Glucides</h3>
        </div>
      </div>

      <div className="nutriment">
        <img src={fat} alt="" />
        <div>
          <h2>{dataNutriment.data.keyData.lipidCount}g</h2>
          <h3>Lipides</h3>
        </div>
      </div>
    </div>
  );
};

export default Nutriment;
