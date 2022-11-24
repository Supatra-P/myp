import "../Styles/about.css";
import logosp from "../Img/LogoSP.svg"
import pht from "../Img/IMG_4317.jpg";
import cgithub from "../Img/c-github.svg";
import Supatra from "../Supatra.png";
import { CiCircleChevDown } from 'react-icons/ci';

function About() {

    return (
        <section id="about">
            <div className="boxAbout">
                <div className="s1photo">
                    <a><img src={pht} alt="myphoto" /></a>
                </div>
                <div className="s2details">
                    <p>
                        I am constantly interested in improving my technical skills in order to create beautiful websites and mobile applications. I enjoy taking on challenges and learning new things, which makes me an enthusiastic.
                    </p>
                </div>
                <div className="s3etc">
                    <div className="topicA">
                        <a href="#about">ABOUT</a>
                    </div>
                    <a href="https://github.com/Supatra-P" target="_blank"><div className="circle"><img src={cgithub} alt="github" width={20} /></div></a>
                    <div className="detailsA">
                        <p>
                            Here’s my <a href={Supatra} target="_blank">CV</a><br></br>
                            ー Nov 2022
                        </p>
                    </div>
                </div>
            </div>
                {/* <div className="down">
                    <button className="down-btn">
                        <a href="#skill"><CiCircleChevDown size={44} /></a>
                    </button>
                </div> */}
        </section>
    );
}
export default About;