import recipedata from "./recipe.json";

function RecipeImage() {
  const recipeImage = recipedata.map((data) => {
    return (
    <div>
      <img className="recipeImage" src={data.recipeImage} alt={data.name}/>
    </div> 
    )
  })
   return recipeImage;
 }
 
 export default RecipeImage;
 