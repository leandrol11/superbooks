import { books } from "../FakeData"
import styled from "styled-components"
import BooksCardsContainer from "../BooksCards/CardSectionContainer"
import CardBook from "../BooksCards/Cards"
import TitleOfTheCard from "../BooksCards/CardTitle"

const PageTitle = styled.h2`
    background: #fff;
    font-size: 64px;
    color: #eb9b00;
    heigth: 50px;
    text-align: center;
    padding: 10px;
    padding-bottom: 20px;
`

function Latest() {
    return (
        <section>
            <PageTitle> Lançamentos </PageTitle>
            <BooksCardsContainer BgColor="#ebecee">
                {books.map(
                    book => (
                        <CardBook>
                            <TitleOfTheCard>{book.name}</TitleOfTheCard>
                            <img src={book.src} alt="Imagem foto do livro" />
                        </CardBook>
                    )
                )}
            </BooksCardsContainer>
        </section>
    )
}

export default Latest