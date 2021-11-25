import './Card.css';
// import image from '../../../Images/girasol.jpg'; 

export const Card = ({lobo}) => {
    return(
        <>
            <div key={lobo.id} className="card">
                <img className="card-image" src = {lobo.URL} alt ="image-card" />
                <h2 className="card-title">{lobo.name}</h2>
            </div>
        </>
    )
}