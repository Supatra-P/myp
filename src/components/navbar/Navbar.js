import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";

const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 2.5vw;
    background-color: transparent;
    transition: all .5s ease;
    position: fixed;
`;

export function Navbar(props) {
    return <NavbarContainer><HamburgerMenu /></NavbarContainer>;
};