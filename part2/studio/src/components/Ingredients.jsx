import recipedata from "./recipe.json";

function IngredientList() {
  const recipeIngredients = recipedata.map((data) => {
   return data.ingredients.map((ingredients,index) => {
    return <li key={index}>{ingredients}</li>
   })
  });
   return recipeIngredients;
 }
 
 export default IngredientList;
