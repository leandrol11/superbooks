import logo from "../../../img/logo.svg"
import styled from "styled-components"

const FullLogo = styled.div`
    display: flex;
    align-items: center;
`
const LogoName = styled.p`
    font-size: 24px;
`

function Logo() {
    return (
        <FullLogo>
            <img src={logo} alt="logo superbooks" />
            <LogoName>
                <strong>Super</strong>Books
            </LogoName>
        </FullLogo>
    )
}

export default Logo