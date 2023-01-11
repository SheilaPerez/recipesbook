import { useEffect, useState } from 'react';
import Line from '../Line';
import NewRecipe from '../NewRecipe';
import styles from './Recipes.module.css';
interface Recipe {
    title: string;
    ingredients: string;
    description: string;
    kind: string;
}
const Recipes = () => {

    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const printRecipeBtn = (title: string, ingredients: string, description: string, kind: string) => {
        setRecipes((prevState: Recipe[]) => {
            const newRecipes = [...prevState, {
                title: title,
                ingredients: ingredients,
                description: description,
                kind: kind
            }]

            localStorage.setItem("recipes", JSON.stringify(newRecipes));

            return newRecipes;
        })
        
    };

    useEffect(() => {
        const localStorageRecipes = localStorage.getItem("recipes");
        if(localStorageRecipes !== null) {
            setRecipes(JSON.parse(localStorageRecipes));
        }

    },[])

    

    return(
        <div>
            <NewRecipe handleClickPrint={printRecipeBtn}></NewRecipe>
            <Line title="Your recipes" titleStyle={styles.titleStyle} semiCircleFlex={styles.lineFlex}></Line>
            <div className={styles.allRecipesContent}>
                {recipes.map((recipe:Recipe ) => {
                    return(
                        <div className={styles.recipeContent}>
                            <div className={styles.titleContent}>
                                {recipe.kind === "meal" && <div className={styles.meal}></div>}
                                {recipe.kind === "desert" && <div className={styles.desert}></div>}
                                {recipe.kind === "sweet" && <div className={styles.sweet}></div>}
                                <h3>{recipe.title}</h3>
                            </div>
                            <div>
                                <p>Ingredients: </p>
                                <p>{recipe.ingredients}</p>
                            </div>
                            <div>
                                <p>Directions: </p>
                                <p>{recipe.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Recipes;