import styled from "styled-components";
import "../styles/NavHome.css";
import { TbCoffee } from 'react-icons/tb';
import { TbMoodBoy } from 'react-icons/tb';
import { TbBolt } from 'react-icons/tb';
import { TbMotorbike } from 'react-icons/tb';
import { Link } from "react-router-dom";
import { NavNextbar } from "../components/navbar/NavNextbar";

export const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 4vw;
    letter-spacing: 1px;
    font-size: 4vw;
`;

export const SubTitle = styled.p`
    font-size: 1.2vw;
    font-weight: 400;
`;

const NavH = styled.div`
    display: flex;

    a {
        font-size: 2.5vw;
        font-weight: 900;
        justify-content: center;
        text-decoration: none;
    }
`;

export function Menu() {
    return (
        <Page>
            <Container>
                <NavH>
                    <div>
                        <Link to="/about"><div className="boxR boxA">About<br></br><TbCoffee /></div></Link>
                        <Link to="/portfolio"><div className="boxR boxB">Portfolio<br></br><TbMoodBoy /></div></Link>
                    </div>
                    <div>
                        <Link to="/caps"><div className="boxR boxC">Capabilities<br></br><TbBolt /></div></Link>
                        <Link to="/contact"><div className="boxR boxD">Contact<br></br>< TbMotorbike /></div></Link>
                    </div>
                </NavH>
                <NavNextbar />
            </Container>
        </Page>
    );
};