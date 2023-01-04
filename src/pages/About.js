import { Title } from "./Menu";
import pht from "../Img/gimchi.jpg";
import Supatra from "../Supatra.png";
import { ContactLink } from "../components/ContactAsset/ContactLink";
import { AboutBox, AboutContact, AboutContainer, AboutDetails, AboutPage, AboutPht, AboutResume, AboutResumeContainer, AboutTitleBox } from "../styles/AboutStyles";

export function About() {
    return (
        <AboutPage>
            <div>
                <AboutContainer>
                    <AboutBox>
                        <AboutPht>
                            <img src={pht} alt="myphoto" />
                        </AboutPht>
                        <AboutTitleBox>
                            <Title>About</Title>
                            <p>Supatra Pinjinda<br></br><br></br>
                                Software Engineering<br></br>
                                Thammasat University</p>
                        </AboutTitleBox>
                    </AboutBox>
                    <AboutBox>
                        <AboutDetails>
                            <p>
                                I am constantly interested in improving my technical skills to create beautiful websites and mobile applications so that I can become a full-stack developer in the future. I enjoy taking on challenges and learning new things, which makes me enthusiastic about my work.
                            </p>
                        </AboutDetails>
                        <AboutResumeContainer>
                            <a href={Supatra} target="_blank" rel="noreferrer">
                                <AboutResume>
                                    <div style={{ height: "calc(100vw/18)" }}></div>
                                    <p>Here's my</p>
                                    <a href={Supatra} target="_blank" rel="noreferrer"><b>RESUME</b></a>
                                    <p>ー Dec 2022</p>
                                </AboutResume>
                            </a>
                        </AboutResumeContainer>
                    </AboutBox>
                </AboutContainer>
                <AboutContact>
                    <ContactLink />
                </AboutContact>
            </div>
        </AboutPage>
    );
};