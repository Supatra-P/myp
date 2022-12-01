import "../Styles/about.css";
import "../Styles/contact.css";
import logosp from "../Img/LogoSP.svg";
import cin from "../Img/c-in.svg";
import cemail from "../Img/c-email.svg";
import cgithub from "../Img/c-github.svg";
import cloca from "../Img/c-loca.svg";
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

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
                        <a href="https://www.linkedin.com/in/supatra-p/" target="_blank" rel="noopener noreferrer"><div className="circle"><FaLinkedinIn size={20} color="var(--secondaryColor)"/></div></a>
                        <a href="https://github.com/Supatra-P" target="_blank" rel="noopener noreferrer"><div className="circle"><AiOutlineGithub size={24} color="var(--secondaryColor)" /></div></a>
                        <a href="mailto:supatra.pinjinda@gmail.com"><div className="circle"><HiOutlineMail size={24} color="var(--secondaryColor)" /></div></a>
                        <a href="https://goo.gl/maps/9KZHoQ2RR84m38328" target="_blank" rel="noopener noreferrer"><div className="circle"><HiOutlineLocationMarker size={24} color="var(--secondaryColor)" /></div></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;