import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SidebarBtnWrap} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen = {isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon/>
                </Icon>
                <SidebarMenu>
                    <SidebarLink to="/">Menu</SidebarLink>
                    <SidebarLink to="/">Productos</SidebarLink>
                    <SidebarLink to="/">Empresa</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/">Contacto</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarContainer>  
        </>
    )
}

export default Sidebar
