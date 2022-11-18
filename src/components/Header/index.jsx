import Logo from "./Logo"
import NavbarOptions from "./NavbarOptions"
import NavbarImg from "./NavbarImg"

import styled from "styled-components"

const HeaderContainer = styled.header`
    background-color: #fff;
`
const Navbar = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    font-size: 18px;
`

function Header() {
    return (
        <HeaderContainer>
            <Navbar>
                <Logo />
                <NavbarOptions />
                <NavbarImg />
            </Navbar>
        </HeaderContainer>
    )
}

export default Header 