import React from 'react'
import Context from './Context'
import { useState } from 'react'

const GlobalState = (props) => {

    const [books, setBooks] = useState()
    const [user, setUser] = useState({})

    const states = {
        books,
        user
    }

    const setters = {
        setBooks,
        setUser
    }

    return (

        <Context.Provider value={{ states, setters }} >

            {props.children}

        </Context.Provider >

    )
}

export default GlobalState