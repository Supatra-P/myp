import styled from "styled-components";
import Footer, { LinkNav } from "./Footer";
import { ContactLink } from '../components/ContactAsset/ContactLink';
import { NavNextbar } from "../components/navbar/NavNextbar";

const ContactContainer = styled.div`
    padding: 36vh 16vw 0 16vw;
    height: 62vh;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;

    @media (max-width: 768px) {
        padding: 16vh 16vw;
    }
`;

const ContactTitle = styled.div`
    font-size: 2.4vw;
    font-weight: 900;
    text-align: start;
    text-decoration: none;
    color: ${props => props.theme.titleColor};

    @media (max-width: 768px) {
        font-size: 1.4em;
        padding-bottom: 1em;
        text-align: center;
    }
`;

const ContactsDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ContactCircle = styled.div`
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

export function Contact() {
    return (
        <div>
            <ContactContainer>
                <NavNextbar />
                <ContactTitle>CONTACT</ContactTitle>
                <ContactsDetails>
                    <LinkNav>
                        Email ー <a href="mailto:supatra.pinjinda@gmail.com">supatra.pinjinda@gmail.com</a>
                    </LinkNav>
                    <ContactLink />
                </ContactsDetails>
            </ContactContainer>
            <Footer />
        </div>
    );
}