import React from 'react'

const Recipe = (reci, id) => {
  const { title, description, totalTime, calories, url } = reci;
  
  return (
    <tr className="recipe-item">
      <th scope="row" className="recipe-item-title">
        {title}
      </th>
      <td className="recipe-item-description">{description}</td>
      <td className="recipe-item-calories">{calories}</td>
      <td className="recipe-item-totalTime">{totalTime}</td>
      <td className="recipe-item-url">{url}</td>
    </tr>
  );
}

export default Recipe;