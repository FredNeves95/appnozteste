import React from 'react'
import { CardContainer } from './style';


const BookCard = (props) => {
    const book = props.book;
    const handleOpenModal = props.function
    return (
        <CardContainer onClick={() => handleOpenModal(book.id)} key={book.id}>

            <div>
                <img src={book.imageUrl} alt={book.title} />
            </div>

            <div>
                <h1>{book.title}</h1>
                {book.authors.map((item) => {
                    return (
                        <h2 key={item}>{item}</h2>
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