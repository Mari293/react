import './Main.css';
import { Title } from "../../UI/Title/Title.jsx";
import { Paragraph } from "../../UI/Paragraph/Paragraph.jsx";
import { Card } from "../../UI/Card/Card.jsx";

export const Main = () => {
    return(
        <>
            <div className="main">
                <Title/>
                <Paragraph/>
                <Card/>
            </div>
        </>
    )
}