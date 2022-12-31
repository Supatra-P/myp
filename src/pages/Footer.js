import logo from "../Img/LogoSP.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
    margin: auto;
    padding: 6vh 0 0 0;
    height: 38vh;
    background-color: ${props => props.theme.pageBackground};
    text-align: center;
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;

    @media (max-width: 768px) {
        height: auto;
    }
`;

const BoxFootNav = styled.div`
    margin: 8vh 0;
`;

export const FootNav = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    margin-top: 4vh;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    
`;

export const LinkNav = styled(motion.li)`
    list-style-type: none;
    color: ${props => props.theme.titleColor};

    a {
        cursor: pointer;

        color: ${props => props.theme.titleColor};
        font-size: 1em;
        transition: all .2s ease-in-out;
    }
    
    &:hover {
        a {
            font-size: 1em;
            color: ${props => props.theme.hoverColor};
        }
    }
    
    
`;

function Footer() {
    return (
        <FooterContainer>
            <BoxFootNav>
                <a href="/"><img className="logo" src={logo} alt="Home" width={44} /></a>
                <FootNav>
                    <LinkNav>
                        <Link to="/">Home</Link>
                    </LinkNav>
                    <LinkNav>
                        <Link to="/about">About</Link>
                    </LinkNav>
                    <LinkNav>
                        <Link to="/caps">Capabilities</Link>
                    </LinkNav>
                    <LinkNav>
                        <Link to="/portfolio">Portfolio</Link>
                    </LinkNav>
                    <LinkNav>
                        <Link to="/contact">Contact</Link>
                    </LinkNav>
                </FootNav>
            </BoxFootNav>
            <p style={{fontSize: "1em"}}>
                &copy; 2022-2023 ー SUPATRA. All rights reserved. Privacy Policy | Terms & Conditions | Built & Designed by &#10084;
            </p>
        </FooterContainer>
    );
}
export default Footer;