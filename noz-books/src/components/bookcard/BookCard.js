import React from 'react'
import { CardContainer } from './style';


const BookCard = (props) => {
    const book = props.book;
    return (
        <CardContainer>

            <div>
                <img src={book.imageUrl} alt={book.title} />
            </div>

            <div>
                <h1>{book.title}</h1>
                {book.authors.map((item) => {
                    return (
                        <h2>{item}</h2>
                    )
                })}
                <h3>{book.pageCount} páginas</h3>
                <h3>Editora {book.publisher}</h3>
                <h3>Publicado em {book.published}</h3>
            </div>

        </CardContainer>
    )
}

export default BookCard