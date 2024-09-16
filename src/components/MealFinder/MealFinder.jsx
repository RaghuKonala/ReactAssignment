import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import MealCard from "../MealCard/MealCard";
import "./index.css";

class MealFinder extends Component {
  state = { searchVal: "", meals: [] };

  componentDidMount() {
    const fetchData = async () => {
      const { searchVal } = this.state;
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`
      );
      const fetchedData = await response.json();
      this.setState({ meals: fetchedData.meals });
    };

    fetchData();
  }

  updateSearch = (event) => {
    this.setState({ searchVal: event.target.value });
  };

  render() {
    const { meals } = this.state;
    console.log(meals);
    return (
      <div className="app-container">
        <Navbar />
        <main className="main-container">
          <div
            style={{
              padding: "20px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "blueviolet" }}>Meal Finder</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="search" onChange={this.updateSearch} />
              <button type="button" onClick={this.fetchData}>
                Search
              </button>
            </div>
          </div>
          <ul className="meals-container">
            {meals.map((eachmeal, index) => (
              <MealCard key={index} mealData={eachmeal} />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default MealFinder;
