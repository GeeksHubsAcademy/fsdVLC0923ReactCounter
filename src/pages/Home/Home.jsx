
import { Counter } from "../../common/Counter/Counter";
import "./Home.css";

export const Home = () => {

    return (
        <div className="homeDesign">
            <Counter intervalo={2}/>
            <Counter intervalo={5}/>
            <Counter intervalo={500000}/>
        </div>
    )
}