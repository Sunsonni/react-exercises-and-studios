import styles from './Description.module.css'

export default function RecipePhoto() {
    let photoLink = "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/12/Shakshuka-3-2.jpg";
    return (
        <img src={photoLink} alt="Shakshuka photo." className="{styles.imageUpdates}"/>
    )
}