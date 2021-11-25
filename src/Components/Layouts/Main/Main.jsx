import React from 'react';
import './Main.css';
import { Title } from "../../UI/Title/Title.jsx";
import { Paragraph } from "../../UI/Paragraph/Paragraph.jsx";
import { lobos } from '../../../lobos';
import { Card } from "../../UI/Card/Card.jsx";

export const Main = () => {
    return(
        <>
            <div className="main">
                <Title/>
                <Paragraph/>
                <div className="cards">
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