import { FC, useState } from 'react';
import Line from '../Line';
import styles from './NewRecipe.module.css';
interface NewRecipeProps {
    handleClickPrint: (title: string, ingredients: string, description: string, selected: string) => void;
}
const NewRecipe: FC<NewRecipeProps> = ({handleClickPrint}) => {
    const [title, setTitle] = useState<string>('');
    const [ingredients, setIngredients] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [selected, setSelected] = useState<string>('');

    return(
        <div>
            <Line title="Write your best recipe" titleStyle={styles.titleStyle} semiCircleFlex={styles.lineFlex}></Line>
            <div className={styles.marginContent}>
                <div className={styles.writeRecipeContent}>
                    <div className={styles.titleContent}>
                        <label className={styles.label}>
                            Recipe
                            <input type="text" className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)}></input>
                        </label>
                    </div>
                    <div className={styles.textareasContent}>
                        <label className={styles.label}>
                            Choose          
                            <select className={styles.select} value={selected} onChange={(e)=> setSelected(e.target.value)}>
                                <option>Kind recipe</option>
                                <option value="meal">Meal</option>
                                <option value="desert">Desert</option>
                                <option value="sweet">Sweet</option>
                            </select>
                        </label>
                        <label className={styles.label}>
                            Ingredients
                            <textarea className={styles.textarea} value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
                        </label>
                        <label className={styles.label}>
                            Directions
                            <textarea className={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </label>
                        <button type="button" onClick={() => handleClickPrint(title, ingredients, description, selected)} className={styles.printBtn}>Print you recipe</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NewRecipe;