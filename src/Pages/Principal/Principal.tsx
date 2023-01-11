import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import Recipes from "../../Components/Recipes";

const Principal = () => {

    return(
        <div>
            <Header></Header>
            <div>
                <Menu></Menu>
                <Recipes></Recipes>
            </div>
        </div>
    )
};

export default Principal;

/*fonts
font-family: 'Oregano', cursive;
font-family: 'Satisfy', cursive;
font-family: 'Titillium Web', sans-serif;
*/