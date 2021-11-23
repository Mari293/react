import './Top_footer.css';
import facebook from "../../../Images/facebook.png";
import instagram from "../../../Images/instagram.png";
import twitter from "../../../Images/twitter.png";

export const Top_footer = () => {
    return (
        <>
            <div className="top-footer">
                <img src={facebook} alt="Logo de facebook" />
                <img src={instagram} alt="Logo de instagram" />
                <img src={twitter} alt="Logo de twitter" />
            </div>
        </>
    )
}