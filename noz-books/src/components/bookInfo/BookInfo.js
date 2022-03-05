import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { BookInfoContainer } from './style'
import Context from '../../global/Context';
import axios from 'axios';
import { Base_URL } from '../../api/URL';


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

    if (bookDetail) {
        return (
            <BookInfoContainer key={bookId}>
                <img src={bookDetail.imageUrl} alt={`Capa do livro ${bookDetail.title}`} />
                <h1>{bookDetail.title}</h1>
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


