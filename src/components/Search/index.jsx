import styled from "styled-components"
import InputSearch from "./Input"
import { useState } from "react"
import { books } from "../FakeData"
import BooksCardsContainer from "../BooksCards/CardSectionContainer"
import CardBook from "../BooksCards/Cards"
import TitleOfTheCard from "../BooksCards/CardTitle"

const SearchContainer = styled.section`
    text-align: center;
`
const TitlePag = styled.h2` 
    color: #fff;
    margin-top: 60px;   
    padding: 20px;
    font-size: 40px;
`
const SubTitlePag = styled.h3`
    color: #fff;
    font-size: 22px;
    padding: 20px;
    padding-top: 0;
`

function Search() {

    const [TypedText, setTypedText] = useState([])
    console.log(TypedText)

    return (
        <SearchContainer>
            <TitlePag>Já sabe por onde começar?</TitlePag>
            <SubTitlePag>Encontre seu livro em nossa instante.</SubTitlePag>
            <InputSearch
                placeholder="Faça sua pesquisa"
                onBlur={event => {
                    const searchCommand = event.target.value
                    const searchResult = books.filter(
                        book => book.name.includes(searchCommand)
                    )
                    setTypedText(searchResult)
                }}
            />
            <BooksCardsContainer>
                {TypedText.map(
                    book => (

                        <CardBook>
                            <TitleOfTheCard>{book.name}</TitleOfTheCard>
                            <img src={book.src} alt="Foto da capa do livro" />
                        </CardBook>

                    )
                )}
            </BooksCardsContainer>
        </SearchContainer>
    )
}

export default Search