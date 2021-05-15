import React from 'react';

import LogoAfya from "../../assets/img/logo.png"
import { Link } from "react-router-dom"

// import { Container } from './styles';

const Nav: React.FC = () => {
    return (
        <nav>
            <Link to="/">
                <img src={LogoAfya} alt="Logo Afya" />
            </Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Nav;