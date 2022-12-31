import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LinkNav } from "../../pages/Footer";

export const LinkContact = styled.div`
    display: flex;
    gap: 1.1vw;

    @media (max-width: 768px) {
        margin-top: 10vw;
        display: flex;
        flex-direction: column;
        gap: 5vw;
    }
`;

export const CCircle = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1.5px solid ${props => props.theme.titleColor};
    text-align: center;
    align-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export function ContactLink() {
    return (
        <LinkContact>
            <LinkNav>
                <a href="https://www.linkedin.com/in/supatra-p/" target="_blank" rel="noopener noreferrer">
                    <CCircle><FaLinkedinIn size={20} /></CCircle></a>
            </LinkNav>
            <LinkNav>
                <a href="https://github.com/Supatra-P" target="_blank" rel="noopener noreferrer">
                    <CCircle><AiOutlineGithub size={24} /></CCircle></a>
            </LinkNav>
            <LinkNav>
                <a href="mailto:supatra.pinjinda@gmail.com">
                    <CCircle><HiOutlineMail size={24} /></CCircle></a>
            </LinkNav>
            <LinkNav>
                <a href="https://goo.gl/maps/9KZHoQ2RR84m38328" target="_blank" rel="noopener noreferrer">
                    <CCircle><HiOutlineLocationMarker size={24} /></CCircle></a>
            </LinkNav>
        </LinkContact>
    );
};