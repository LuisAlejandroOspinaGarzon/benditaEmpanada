import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaRegMoon} from 'react-icons/fa';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    p{
        transform: translate(-175%, 100%)
        font-weight: bold;
        top: 2%;
        right: 20%;
        position: absolute;
        color: #fff;
    }
`;

export const NavLogo = styled(Link)`
    cursor: pointer;
    position: absolute;
    top: 2%;
    left: 10%;

    img{
        width: 550px;
        height: 220px;
    }
    @media screen and (max-width: 400px){
        position: absolute;
        top; 10px;
        left: 25px;
    }

`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 4%;
    right: 0;
    cursor: pointer;
    color: #fff;
`;

export const Bars = styled(FaRegMoon)`
    font-size: 2rem;
    transform: scale(1.5) translate(-50%, -15%);
`;