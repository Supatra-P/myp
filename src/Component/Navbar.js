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
import { TbCoffee } from 'react-icons/tb';
import { AiOutlineSmile } from 'react-icons/ai';
import { BsLightning } from 'react-icons/bs';
import { IoChatbubblesOutline } from 'react-icons/io5';

function Navbar() {
    
    const [state, setState] = useState(false);
    
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setState(!state);
    }

    const a = document.querySelectorAll(".links");
    const sec = document.querySelectorAll("section");
    function activeMenu () {
        let len=sec.length;
        while (--len && window.scrollY< sec[len].offsetTop) {}
        a.forEach(ltx => ltx.classList.remove("active"));
        a[len].classList.add("active");
    }
    window.addEventListener("scroll", activeMenu);

    return (
        <header id="home">
            {/* <a href="/#"><img className="logo" src={logospo} alt="Home" width={44}/></a> */}
            {/* <a href="/#" className="logoS">SUPATRA</a> */}
            <button className="nav-btn" onClick={showNavbar}>
                <img src={!state ? hamw : hamwy} alt="mopen" width={32}/>
            </button>
            <nav ref={navRef}>
                <a className="links" onScroll={activeMenu} href="#home"><TbCoffee size={21} color="var(--mainColorLight)"/>Home&nbsp;</a>
                <a className="links" onScroll={activeMenu} href="#about"><AiOutlineSmile size={20} color="var(--mainColorLight)"/>About&nbsp;</a>
                <a className="links" onScroll={activeMenu} href="#skill"><BsLightning size={20} color="var(--mainColorLight)"/>Skill&nbsp;</a>
                <a className="links" onScroll={activeMenu} href="#contact"><IoChatbubblesOutline  size={20} color="var(--mainColorLight)"/>Contact&nbsp;</a>
            </nav>
        </header>
    );
}

export default Navbar;