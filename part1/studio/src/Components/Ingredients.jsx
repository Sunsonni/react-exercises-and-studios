import styles from './Ingredients.module.css';

 export default function RecipeIngredients(){
    let topFive = ["eggs", "A can of whole peeled tomatoes", "garlic cloves", "red bell pepper", "onion"];

    return (
        <div>
            <h3>Shakshuka Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{topFive[0]}</li>
                <li>{topFive[1]}</li>
                <li>{topFive[2]}</li>
                <li>{topFive[3]}</li>
                <li>{topFive[4]}</li>
            </ul>
        </div>
    )
}
