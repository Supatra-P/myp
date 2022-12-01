import logo from "../Img/LogoSP.svg";
// import logo from "../Img/LogoSPO4.svg";
import "../Styles/main.css";
import "../Styles/home.css";
import { CiCircleChevDown } from 'react-icons/ci';

function Home() {

    return (
        <section>
            <div className="topic">
                <div className="intro">
                    <div className="logoname">
                        {/* <img src={logo} alt="logoSP" /> */}
                        <h1><b></b>SUPATRA&nbsp;PINJINDA</h1>
                    </div>
                    <h3>SOFTWARE ENGINEERING STUDENT</h3>
                    <p>AT THAMMASAT UNIVERSITY</p>
                    <img src={logo} alt="logoSP" width={44} />
                </div>
                <div className="down">
                    <button className="down-btn">
                        <a href="#about"><CiCircleChevDown size={44} /></a>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;