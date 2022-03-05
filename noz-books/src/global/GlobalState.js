import React from 'react'
import Context from './Context'
import { useState } from 'react'

const GlobalState = (props) => {

    const [books, setBooks] = useState()
    const [user, setUser] = useState({})
    const [bookId, setBookId] = useState()
    const [bookModal, setBookModal] = useState(false);

    const states = {
        books,
        user,
        bookId,
        bookModal
    }

    const setters = {
        setBooks,
        setUser,
        setBookId,
        setBookModal
    }

    return (

        <Context.Provider value={{ states, setters }} >

            {props.children}

        </Context.Provider >

    )
}

export default GlobalState