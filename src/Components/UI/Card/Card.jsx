import './Card.css';
import image from '../../../Images/girasol.jpg'; 

export const Card = () => {
    return(
        <>
            <div className="card">
                <img className="card-image" src = {image} alt ="image-card" />
                <h2 className="card-title">Girasol</h2>
            </div>
        </>
    )
}