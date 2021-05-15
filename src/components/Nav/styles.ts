import styled from "styled-components"

export const NavContent = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f70054;

    .nav-contents{
        width: 55%;
        display: flex;
        justify-content: space-around;
        & a{
            text-decoration: none;
            color: #fff;
            font-size: 22px;
            text-transform: uppercase;

        }
    }
`