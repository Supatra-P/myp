import React from "react";
import styled from "styled-components";
import { NavNextbar } from "../components/navbar/NavNextbar";
import { Gallery } from "../components/PortGallery/Gallery";
import { CContainer } from "./Capabilities";
import { SubTitle, Title } from "./Menu";

const ProjPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 12vh;
    height: auto;
    width: 100%;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

export function Portfolio() {
    return (
        <div>
            <ProjPage>
                <NavNextbar />
                <CContainer>
                    <div style={{ width: "65vw" }}>
                        <Title>Portfolio</Title>
                        <SubTitle>ー Projects & Experiences</SubTitle>
                    </div>
                </CContainer>
            </ProjPage>
            <Gallery />
        </div>
    );
};