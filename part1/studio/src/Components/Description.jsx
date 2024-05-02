import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor(){
    let authorLink = "https://downshiftology.com/";
    let authorPhoto ="https://downshiftology.com/wp-content/uploads/2015/07/Lisa-Bryan-5-1.jpg";
    let authorName = "Lisa Bryan";

    return (
        <div>
            <img src={authorPhoto} alt ="image of Lisa Bryan." className={styles.imageUpdates}/>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Downshiftology</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component{
    render (){
        return (
            <div>
                <div>
                    <h1>Shakshuka</h1>
                    <p>
                        Shakshuka is a North African and Middle Eastern meal of poached eggs in a simmering tomato sauce with spices. 
                        It's easy, healthy and takes less than 30 minutes to make.
                    </p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;