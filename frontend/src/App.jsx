import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.get("/api/recipes")
      .then(res => {
        console.log(res.data);
        setRecipes(res.data);
      })
      .catch(err => {
        console.error("Error fetching recipes:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>RecipeVault</h1>

      {recipes.map(recipe => (
        <div key={recipe._id} style={{ marginBottom: "20px" }}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
