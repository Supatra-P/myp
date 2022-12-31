import logo from "../Img/LogoSP.svg";
// import logo from "../Img/LogoSPO4.svg";
import "../Styles/main.css";
import "../Styles/home.css";
import { CiCircleChevDown } from 'react-icons/ci';
import { TbCoffee } from 'react-icons/tb';
import { AiOutlineSmile } from 'react-icons/ai';
import { BsLightning } from 'react-icons/bs';
import { IoChatbubblesOutline } from 'react-icons/io5';

function Home() {

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
        <section>
            <div className="topic">
                <div className="intro">
                    <div className="logoname">
                        <h1><b></b>SUPATRA&nbsp;PINJINDA</h1>
                    </div>
                    <h3>SOFTWARE ENGINEERING STUDENT</h3>
                    <p>AT THAMMASAT UNIVERSITY</p>
                    <img src={logo} alt="logoSP" />
                </div>
                <div className="down">
                    <button className="down-btn">
                        <a href="#about"><CiCircleChevDown size={44}/></a>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;