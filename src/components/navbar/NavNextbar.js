import React from "react";
import styled from "styled-components";
import { NavNext } from "./NavNext";
import { TbBorderAll } from 'react-icons/tb'
import { TbCoffee } from 'react-icons/tb';
import { TbMoodBoy } from 'react-icons/tb';
import { TbBolt } from 'react-icons/tb';
import { TbMotorbike } from 'react-icons/tb';

const IconContainer = styled.div`
    position: fixed;
    left: 2vw;
    top: 2vw;
    display: flex;

`;

export function NavNextbar() {

    return (
        <IconContainer>
            <NavNext icon={<TbBorderAll size={24} />} url={"/"} />
            <NavNext icon={<TbCoffee size={24} />} url={"/about"} />
            <NavNext icon={<TbBolt size={24} />} url={"/caps"} />
            <NavNext icon={<TbMoodBoy size={24} />} url={"/portfolio"} />
            <NavNext icon={<TbMotorbike size={24} />} url={"/contact"} />
        </IconContainer>
    );
};