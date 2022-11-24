import { useRef, useState } from "react";
import "../Styles/main.css";
import logo from "../Img/LogoSP.svg";
import logos from "../Img/LogoS.svg";
import logospo from "../Img/LogoSPO.svg";
import mhome from "../Img/mhome.svg";
import mabout from "../Img/mabout.svg";
import mskill from "../Img/mskill.svg";
import mcontact from "../Img/mcontact.svg";
import hamw from "../Img/hambrw.svg";
import hamwy from "../Img/hambrwy.svg";

function Navbar() {
    const navRef = useRef();

    const [state, setState] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setState(!state);
    }

    const a = document.querySelectorAll(".links");
    const sec = document.querySelectorAll("section");
    function activeMenu () {
        let len=sec.length;
        while (--len && window.scrollY < sec[len].offsetTop) {}
        a.forEach(ltx => ltx.classList.remove("active"));
        a[len].classList.add("active");
    }
    window.addEventListener("scroll", activeMenu);

    return (
        <header id="home">
            {/* <a href="/#"><img className="logo" src={logospo} alt="Home" width={44}/></a> */}
            {/* <a href="/#" className="logoS">SUPATRA</a> */}
            <nav ref={navRef}>
                <a className="links" onScroll={activeMenu} href="#home"><img className="micon" src={mhome} alt="home" width={24}/>Home</a>
                <a className="links" onScroll={activeMenu} href="#about"><img className="micon" src={mabout} alt="about" width={24}/>About</a>
                <a className="links" onScroll={activeMenu} href="#skill"><img className="micon" src={mskill} alt="skill" width={24} height={32}/>Skill</a>
                <a className="links" onScroll={activeMenu} href="#contact"><img className="micon" src={mcontact} alt="contact" width={24}/>Contact</a>
                <button className="nav-btn nav-close-btn " onClick={showNavbar}>
                    {/* <img src={hamwy} alt="mclose" width={32}/> */}
                    <h2>lll</h2>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <img src={!state ? hamw : hamwy} alt="mopen" width={32}/>
            </button>
        </header>
    );
}

export default Navbar;