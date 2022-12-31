import styled from "styled-components";

export const AboutPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;

    @media (max-width: 786px) {
        height: auto;
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 786px) {
        margin: 20vw 0;
    }
`;

export const AboutBox = styled.div`
    display: flex;
    a {
        text-decoration: none;
        color: #000;
    }

    @media (max-width: 786px) {
        flex-direction: column;
    }
`;

export const AboutPht = styled.div`
    img {
        width: calc(100vw/6);
        height: calc(100vw/6);
        border-radius: 18px;
    }

    @media (max-width: 786px) {
        text-align: start;
        img {
            width: calc(100vw/2);
            height: calc(100vw/2);
        }
    }
`;

export const AboutTitleBox = styled.div`
    width: calc(100vw/3);
    height: calc(100vw/6);
    background-color: transparent;
    border-radius: 18px;

    h1 {
        text-align: end;
        color: ${props => props.theme.titleColor};
    }

    p {
        padding: 1vw;
        text-align: start;
        font-size: 1.2vw;
        font-weight: 600;
        letter-spacing: 1px;
        color: ${props => props.theme.titleColor};
    }

    @media (max-width: 786px) {
        width: calc(80vw);
        height: calc(100vw/6);

        h1 {
            font-size: 10vw;
            margin: 4vw 0;
        }

        p {
            font-size: 4vw;
            margin: 4vw 0;
        }
    }
`;

export const AboutDetails = styled.div`
    width: calc(100vw/3);
    height: calc(100vw/6);
    background-color: transparent;
    border-radius: 18px;
    padding: 1vw;
    text-align: start;
    font-size: 1.2vw;
    letter-spacing: 1px;
    color: ${props => props.theme.titleColor};

    @media (max-width: 786px) {
        margin-top: 30vw;
        width: calc(80vw);
        height: calc(40vw);
        font-size: 3.5vw;
    }
`;

export const AboutResumeContainer = styled.div`
    @media (max-width: 786px) {
        display: flex;
        justify-content: end;
    }
`;

export const AboutResume = styled.div`
    width: calc(100vw/6);
    height: calc(100vw/6);
    background-color: var(--dYellow);
    border-radius: 18px;
    padding: .8vw;
    text-align: end;
    color: #000;
    font-size: 1vw;
    letter-spacing: 2px;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: var(--dBlue);
    }

    @media (max-width: 786px) {
        margin-top: 15vw;
        width: calc(50vw);
        height: calc(50vw);
        font-size: 3vw;
        padding-right: 6vw;
    }
`;

export const AboutContact = styled.div`
    @media (max-width: 786px) {
        display: flex;
        justify-content: center;
    }
`;