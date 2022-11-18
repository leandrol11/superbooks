import styled from "styled-components"

const BooksCardsContainer = styled.section`
    width: 100%;
    text-align: center;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-itens: center;
    background-color: ${props => props.BgColor || "eb9b00"};
`

export default BooksCardsContainer