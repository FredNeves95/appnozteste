import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { BookInfoContainer, BookInfoImage, BookInfoText } from './style'
import Context from '../../global/Context';
import axios from 'axios';
import { Base_URL } from '../../api/URL';
import quotes from "../../images/quotes.svg"


const BookInfo = () => {
    const { states } = useContext(Context)
    const [bookDetail, setBookDetail] = useState()
    const token = localStorage.getItem('token')
    const auth = `Bearer ${token}`
    const bookId = states.bookId

    useEffect(() => {
        axios.get(`${Base_URL}/books/${bookId}`, {
            headers: {
                "Accept": "application/json",
                "Authorization": auth,
                "Refresh-token": token
            }
        })
            .then((res) => {
                setBookDetail(res.data)
            })
            .catch((err) => {
                console.log(err.response);
            })
    }, [])
    console.log(bookDetail);
    if (bookDetail) {
        return (
            <BookInfoContainer key={bookId}>

                <BookInfoImage>
                    <img src={bookDetail.imageUrl} alt={`Capa do livro ${bookDetail.title}`} />
                </BookInfoImage>

                <BookInfoText>
                    <h1 id="book-title">{bookDetail.title}</h1>
                    {
                        bookDetail.authors.map((item) => {
                            return <h2 className="book-authors" key={item}>{item}</h2>
                        })
                    }
                    <div id="book-infos">
                        <h1 className="section-title">Informações</h1>
                        <div className="book-info">
                            <h1 className="book-info-title">Páginas</h1> <h1 className="book-info-text">{`${bookDetail.pageCount} páginas`}</h1>
                        </div>
                        <div className="book-info">
                            <h1 className="book-info-title">Editora</h1> <h1 className="book-info-text">{bookDetail.publisher}</h1>
                        </div>
                        <div className="book-info">
                            <h1 className="book-info-title">Publicação</h1> <h1 className="book-info-text">{bookDetail.published}</h1>
                        </div>
                        <div className="book-info">
                            <h1 className="book-info-title">Idioma</h1> <h1 className="book-info-text">{bookDetail.language}</h1>
                        </div>
                        <div className="book-info">
                            <h1 className="book-info-title">Título Original</h1> <h1 className="book-info-text">{bookDetail.title}</h1>
                        </div>
                        <div className="book-info">
                            <h1 className="book-info-title">ISBN-10</h1> <h1 className="book-info-text">{bookDetail.isbn10}</h1>
                        </div>
                        <div className="book-info">
                            <h1 className="book-info-title">ISBN-13</h1> <h1 className="book-info-text">{bookDetail.isbn13}</h1>
                        </div>

                        <h1 className="section-title">Resenha da editora</h1>
                        <h1 className="book-description"> <img src={quotes} alt="Aspas" /> {bookDetail.description}</h1>
                    </div>


                </BookInfoText>

            </BookInfoContainer>
        )
    }
    else {
        return (
            <BookInfoContainer key={bookId}>
                <h1>Loading...</h1>
            </BookInfoContainer>
        )
    }
}

export default BookInfo


