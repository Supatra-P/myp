import React from "react";
import { RiSunFoggyLine } from "react-icons/ri";
import { RiMoonFoggyFill } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "../../App";
import styled from "styled-components";

export const Toggle = styled.button`
    cursor: pointer;
    position: fixed;
    left: 2vw;
    bottom: 2vw;
    height: 50px;
    width: 50px;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.hoverColor};
    &:focus {
        outline: none;
    }
    &:hover {
        color: ${props => props.theme.titleColor};
    }
    transition: all .5s ease;
`;

export function ChangeThemeIcon() {
    const { theme, setTheme } = useContext(AppContext);

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    const icon = theme === "dark" ? <RiSunFoggyLine size={40} /> : <RiMoonFoggyFill size={40} />;

    return (
        <Toggle onClick={changeTheme}>
            {icon}
        </Toggle>
    );
};
