import "../Styles/about.css";
import "../Styles/contact.css";
import logosp from "../Img/LogoSP.svg";
import cin from "../Img/c-in.svg";
import cemail from "../Img/c-email.svg";
import cgithub from "../Img/c-github.svg";
import cloca from "../Img/c-loca.svg";

function Contact() {
    return (
        <section id="contact">

            <div className="boxContact">
                <div className="topicA">
                    <p>CONTACT</p>
                </div>

                <div className="details">
                    <p>Email ー <a href="mailto:supatra.pinjinda@gmail.com">supatra.pinjinda@gmail.com</a></p>

                    <div className="contactgang">
                        <a href="https://www.linkedin.com/in/supatra-p/" target="_blank"><div className="circle"><img src={cin} alt="linkedin" width={20} /></div></a>
                        <a href="mailto:supatra.pinjinda@gmail.com"><div className="circle"><img src={cemail} alt="email" width={22} height={20} /></div></a>
                        <a href="https://github.com/Supatra-P" target="_blank"><div className="circle"><img src={cgithub} alt="github" width={20} /></div></a>
                        <a href="https://goo.gl/maps/9KZHoQ2RR84m38328" target="_blank"><div className="circle"><img src={cloca} alt="location" width={15} /></div></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;