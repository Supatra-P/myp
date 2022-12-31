import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavProContainer = styled.div`
    position: fixed;
    top: 2vw;
    left: 2vw;
    display: flex;
`;

const NavProBox = styled.div`
    margin: 0;
    padding: 0;
    width: calc(2vh);
    height: calc(2vh);
    cursor: pointer;
    transition: all .5s ease;
`;

export function NavProgress() {
    return (
        <NavProContainer>
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    backgroundColor: isActive ? '#FFA9E7' : '#EDFFEC',
                })}>
                <NavProBox />
            </NavLink>
            <NavLink
                to="/about"
                style={({ isActive }) => ({
                    backgroundColor: isActive ? '#F8B4C3' : '#ffeaef',
                })}>
                <NavProBox />
            </NavLink>
            <NavLink
                to="/projects"
                style={({ isActive }) => ({
                    backgroundColor: isActive ? '#F7FF85' : '#feffe3',
                })}>
                <NavProBox />
            </NavLink>
            <NavLink
                to="/caps"
                style={({ isActive }) => ({
                    backgroundColor: isActive ? '#8BF9F3' : '#e4fffe',
                })}>
                <NavProBox />
            </NavLink>
            <NavLink
                to="/contact"
                style={({ isActive }) => ({
                    backgroundColor: isActive ? '#A19EE6' : '#ebeaff',
                })}>
                <NavProBox />
            </NavLink>
        </NavProContainer>
    );
}