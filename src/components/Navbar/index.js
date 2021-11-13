import React from 'react';
import {Bars, Nav, NavIcon, NavLogo} from './NavbarElements';
import logo from '../../images/logo.png';

export const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLogo to="/"><img src={logo} alt="Logo"/></NavLogo>
                <p>Ubicados en la Calle XXXXXXX<br />
                   Telefono: XXX - XXX XXXX<br />
                   Email: emp@nada.com.co
                </p>
                <NavIcon onClick={toggle}>
                <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar