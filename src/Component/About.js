import "../Styles/about.css";
import logosp from "../Img/LogoSP.svg"
import pht from "../Img/IMG_4317.jpg";
import cgithub from "../Img/c-github.svg";
import Supatra from "../Supatra.png";
import { AiOutlineGithub } from 'react-icons/ai';

function About() {

    return (
        <section id="about">
            <div className="boxAbout">
                <div className="s1photo">
                    <a><img src={pht} alt="myphoto" /></a>
                </div>
                <div className="s2details">
                    <p>
                    I am constantly interested in improving my technical skills so that I can create beautiful websites and mobile applications, and I want to be a full-stack developer in the future. I enjoy taking on challenges and learning new things, which makes me enthusiastic about my work.
                    </p>
                </div>
                <div className="s3etc">
                    <div className="topicA">
                        <p>ABOUT</p>
                    </div>
                    <a href="https://github.com/Supatra-P" target="_blank" rel="noopener noreferrer"><div className="circle" id="circ">< AiOutlineGithub size={24} color="var(--mainColorLight)" /></div></a>
                    <div className="detailsA">
                        <p>
                            Here’s my <a href={Supatra} target="_blank"><b>CV</b></a><br></br>
                            ー Dec 2022
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;