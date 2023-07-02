import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

import "./Recipe.css";

// Recipes API:
// https://gist.github.com/justinle/0e9061e1acee4fb2f7e7def2c02a54f1

const RecipeList = () => {
  // Implement fetch for API endpoint here:
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => res.json())
      .then((res) => {
        setRecipe(res);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);
  // https://api.sampleapis.com/recipes/recipes

  return (
    <div>
      <section>
        <table>
          <thead>
            <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Calories</th>
            <th>Total Time</th>
            <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {recipe
              ? recipe.map((reci, id) => {
                  return <Recipe reci={reci} key={reci.id} />;
                })
              : null}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RecipeList;


  /* <h2>Filter by</h2>
<div className="filters">
  <div className="search-bar">
    <input type="text" placeholder="Search title" />
  </div>
  <div>
    <label>Recipes under one hour</label>
    <input type="checkbox" />
  </div>
</div>

<h2>Results</h2>
<table>
<thead>
<tr>
<th>Title</th>
<th>Description</th>
<th>Calories</th>
<th>Total Time</th>
<th>URL</th>
</tr>
</thead>

  {recipe
    ? recipe.map((reci, id) => {
        return <Recipe reci={reci} key={reci.id} />;
      })
    : null}
</table>
<hr />
<div>Debugging Output:</div>
<pre>{JSON.stringify({}, null, 2)}</pre> */

