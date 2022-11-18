import styled from "styled-components"

const NavOptions = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Options = styled.li`
    padding: 24px;
    cursor: pointer;
`

function NavbarOptions() {

    const textOptions = ["Categorias", "Favoritos", "Estante"]

    return (
        <NavOptions>
            {textOptions.map((text) => (
                <Options>
                    <p>{text}</p>
                </Options>
            ))}
        </NavOptions>
    )
}

export default NavbarOptions