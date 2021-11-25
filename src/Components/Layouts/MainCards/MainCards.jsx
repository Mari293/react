import './MainCards.css';
import { lobos } from '../../../lobos';
import { Card } from "../../UI/Card/Card.jsx";

export const MainCards = () => {
    return(
        <>
            <div className="main">
                <div className="cards">
                    <h1>hola</h1>
                {
                    lobos.map(lobo =>(
                        <Card lobo = {lobo}/>
                    ))
                }
                </div>
            </div>
        </>
    )
}