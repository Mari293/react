import './Logo.css';
import logo from '../../../Images/Logo.png'


export const Logo = () =>{
    return (
        <>
            <img className="imgLogo" src={logo} alt="Img-Logo" />
        </>
    )
}