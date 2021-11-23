import './Footer.css';
import { Top_footer } from "../../UI/Top_footer/Top_footer";
import { Down_footer } from "../../UI/Down_footer/Down_footer";

export const Footer = () => {
    return(
        <>
            <div className="footer">
                <Top_footer/>
                <Down_footer/>
            </div>
        </>
    )
}