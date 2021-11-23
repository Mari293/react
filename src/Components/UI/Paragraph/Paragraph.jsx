import './Paragraph.css'

export const Paragraph = () => {
    return(
        <>
            <div className="information">
                <h2>Recordemos algunas de las características de React</h2> 
                <p className="information-text">Es una librería de Javascript<br></br>
                Funciona basado en un elemento conocido como el virtual DOM<br></br>
                Renderiza solamente los componentes que necesita, lo que hace que sea más versátil<br></br>
                La utilización de los hooks facilita su lógica frontend
                </p>
            </div> 
        </>
    )
}