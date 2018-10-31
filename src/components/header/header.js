import React from "react";
import { Navbar, NavItem, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom'


const Header = () => (
    <Row>
        <Navbar className="red darken-2">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="contact">CONTATO</NavLink></li>
        </Navbar>
    </Row>
);
export default Header;