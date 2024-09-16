import "./index.css";

const MealCard = ({ mealData }) => {
  const { strMealThumb, strMeal } = mealData;
  return (
    <li className="meal-card">
      <img className="thumbnail" src={strMealThumb} alt={strMeal} />
      <h3>{strMeal}</h3>
    </li>
  );
};

export default MealCard;
