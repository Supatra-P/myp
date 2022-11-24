import logospo from "../Img/LogoSPO.svg";
import logo from "../Img/LogoSP.svg";
import "../Styles/footer.css";

function Footer() {
    return (
        <footer>
            <div className="boxFootNav">
                <a href="#home"><img className="logo" src={logo} alt="Home" width={44} /></a>
                <div className="footNav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skill">Skill</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            &copy; 2022 ー SUPATRA. All rights reserved. Privacy Policy | Terms & Conditions
        </footer>
    );
}
export default Footer;