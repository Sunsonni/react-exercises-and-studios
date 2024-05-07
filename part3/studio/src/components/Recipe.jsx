import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.foodnetwork.com/fnk/profiles/emily-weinberger";
   let authorPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/plus/profiles/Emily-Weinberger/015_FN_Emily_s4x3.jpg.rend.hgtvcom.336.336.suffix/1569249533178.jpeg";
   let authorName = "Emily Weinberger";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['flour', 'sugar', 'butter', 'whole milk', 'vanilla extract'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2024/03/20/COPYCAT_BERRY_CHANTILLY_CAKE_H_f.jpg.rend.hgtvcom.826.620.suffix/1711029024656.jpeg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
