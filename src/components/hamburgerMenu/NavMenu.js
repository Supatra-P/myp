import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const NavList = styled.ul`
    // padding: 8vw 0;
    padding: 6vw 1.5vw;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const NavLink = styled(motion.li)`
    list-style-type: none;

    a {
        padding: 5% 0;
        font-weight: 600; 
        // height: 6vw;
        height: 2vw;
        display: flex;
        align-items: end;
        flex-direction: column;
        cursor: pointer;

        color: ${props => props.theme.titleColorS};
        // font-size: 1.5vw;
        text-decoration: none;
        transition: all .2s ease-in-out;
    }
    
    &:hover {
        a {
            // font-size: 1.65vw;
            color: ${props => props.theme.hoverColor};
        }
    }

    @media (max-width: 768px) {
        a {
            padding: 15% 0;
            font-weight: 600;
            height: 15vw;
            display: flex;
            align-items: center;
            flex-direction: column;
            cursor: pointer;

            color: ${props => props.theme.titleColorS};
            font-size: 1em;
            text-decoration: none;
            transition: all .2s ease-in-out;
        }
        &:hover {
            a {
                font-size: 1.05em;
                color: ${props => props.theme.hoverColor};
            }
        }
      }
`;


const variants = {
    show: {
        transform: "translateX(0)",
        opacity: 1
    },
    hide: {
        transform: "translateX(3em)",
        opacity: 0
    }
}

export function NavMenu({ isOpen }) {

    return (
        <NavMenuContainer>
            <NavList>
                <NavLink
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.1, duration: 0.1 },
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.05, duration: 0.05 },
                        },
                    }}
                >
                    <Link to="/myp/">Home</Link>
                </NavLink>
                <NavLink
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.1, duration: 0.1 },
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.1, duration: 0.05 },
                        },
                    }}>
                    <Link to="/myp/about">About</Link>
                </NavLink>
                <NavLink
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.1, duration: 0.1 },
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.15, duration: 0.05 },
                        },
                    }}>
                    <Link to="/myp/caps">Capabilities</Link>
                </NavLink>
                <NavLink
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.1, duration: 0.1 },
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.2, duration: 0.05 },
                        },
                    }}>
                    <Link to="/myp/portfolio">Portfolio</Link>
                </NavLink>
                <NavLink
                    initial={false}
                    animate={isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.1, duration: 0.1 },
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.25, duration: 0.05 },
                        },
                    }}>
                    <Link to="/myp/contact">Contact</Link>
                </NavLink>
            </NavList>
        </NavMenuContainer>
    );
};