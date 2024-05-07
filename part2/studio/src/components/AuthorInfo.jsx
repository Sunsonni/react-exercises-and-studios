import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const authorName = recipedata.map((data) => {
    return <div>{data.author}</div>
  })
  const authorImage = recipedata.map((data) => {
    return <img className="authorImage" src={data.authorImage} alt={data.authorName}/>
  })
  const authorURL = recipedata.map((data) => {
    return <a href={data.website}>The Cozy Cook</a>
  })
   return (
      <div>
        {authorImage}
        {authorName}
        {authorURL}
      </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 