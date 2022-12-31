import React from "react";
import { Page, SubTitle, Title } from "./Menu";
import styled from "styled-components";
import { CapsLogo1, CapsLogo2, CapsLogo3 } from "../components/CapsAsset/CapsLogo";
import { NavNextbar } from "../components/navbar/NavNextbar";

export const CContainer = styled.div`
    color: ${props => props.theme.titleColor};
    text-align: start;

    @media (max-width: 768px) {
        margin: 0 8vw;
        h1 {
            font-size: 10vw;
        }

        p {
            font-size: 2.6vw;
        }
    }
`;

const ProgRow = styled.div`
    display: flex;
`;

const ProgBox = styled.div`
    margin: 2vw;
    padding: 1.1vw;
    width: calc(100vw/14);
    height: calc(100vw/14);
    background-color: ${props => props.theme.pageBackgroundS};
    border-radius: 12px;
    
    img {
        width: calc(100vw/20);
        height: calc(100vw/20);
    }

    @media (max-width: 768px) {
        padding: 2vw;
        width: calc(100vw/8);
        height: calc(100vw/8);

        img {
            width: calc(100vw/12);
            height: calc(100vw/12);
        }
    }
`;

export const Capabilities = () => {
    return (
        <Page>
            <NavNextbar />
            <CContainer>
                <Title>Capabilities</Title>
                <SubTitle>Programming Language - Framework - Library - Database</SubTitle>
                <ProgRow>
                    {CapsLogo1.map((logo, key) => (
                        <ProgBox><img src={logo.name} /></ProgBox>
                    ))}
                </ProgRow>
                <ProgRow>
                    {CapsLogo2.map((logo, key) => (
                        <ProgBox><img src={logo.name} /></ProgBox>
                    ))}
                </ProgRow>
                <SubTitle>Operating System</SubTitle>
                <ProgRow>
                    {CapsLogo3.map((logo, key) => (
                        <ProgBox><img src={logo.name} /></ProgBox>
                    ))}
                </ProgRow>
            </CContainer>
        </Page>
    );
};