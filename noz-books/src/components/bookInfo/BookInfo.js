import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { BookInfoContainer } from './style'
import Context from '../../global/Context';


const BookInfo = () => {
    const { states } = useContext(Context)

    const bookId = states.bookId

    return (
        <BookInfoContainer key={bookId}>Teste</BookInfoContainer>
    )
}

export default BookInfo


