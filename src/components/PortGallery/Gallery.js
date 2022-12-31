import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { images } from "./GalAsset";

const GalContainer = styled.div`
    padding: 3vw 16vw;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

const ImgBox = styled.div`
    padding: 1vw;
    border-radius: 12px;
    transition: all .3s ease-in-out;

    &:hover {
        transition: all .3s ease-in-out;
        box-shadow: 0px 0px 0px 9px var(--tPink);
    }
`;

const ImgGal = styled.img`
    width: 100%;
    display: block;
    cursor: pointer;
    border-radius: 12px;
`;

const ImgTag = styled.a`
    text-decoration: none;
    color: ${props => props.theme.titleColor};
`;

export function Gallery() {
    return (
        <GalContainer>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
                <Masonry gutter="2vw">
                    {images.map((image, i) => (
                        <ImgBox>
                            <a href={"https://github.com/Supatra-P/" + image.name} target="_blank" rel="noreferrer">
                                <ImgGal key={i}
                                    src={image.img}
                                    alt={image.name} />
                            </a>
                            <ImgTag href={"https://github.com/Supatra-P/" + image.name} target="_blank" rel="noreferrer">
                                <h4>{image.title}</h4>
                                <h6>{image.created}</h6>
                            </ImgTag>
                        </ImgBox>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </GalContainer>
    );
};