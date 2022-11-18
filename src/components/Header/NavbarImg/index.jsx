import perfil from "../../../img/perfil.svg"
import sacola from "../../../img/sacola.svg"

import styled from "styled-components"

const Icons = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const IconsOptions = styled.li`
    padding: 24px;
    cursor: pointer;
`


function NavbarImg() {

    const ImgOptions = [perfil, sacola]

    return (
        <Icons>
            {ImgOptions.map((img) => (
                <IconsOptions>
                    <img src={img} alt="botão de acesso ao perfil" />
                </IconsOptions>
            ))}
        </Icons>
    )
}

export default NavbarImg