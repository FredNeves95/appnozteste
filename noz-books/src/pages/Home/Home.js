import React from 'react'
import axios from 'axios'
import useProtectedPage from "../../hooks/useProtectedPage"
import { Base_URL } from '../../api/URL'
import { useEffect, useContext, useState } from 'react'
import Context from '../../global/Context'
import BookCard from '../../components/bookcard/BookCard'
import { HomeContainer } from './style'

const Home = () => {
    useProtectedPage()
    const { states, setters } = useContext(Context)

    const token = localStorage.getItem('token')
    const auth = `Bearer ${token}`

    const books = states.books
    const setBooks = setters.setBooks
    const [page, setPage] = useState(1)



    useEffect(() => {
        axios.get(`${Base_URL}/books?page=${page}`, {
            headers: {
                "Accept": "application/json",
                "Authorization": auth,
                "Refresh-token": token
            }
        })
            .then((res) => {
                setBooks(res.data.data);
            })
            .catch((err) => {
                console.log((err.response));
            })
    }, [page])

    console.log(books)

    if (books) {
        return (
            <HomeContainer>
                {books.map((item) => {
                    return (
                        <BookCard book={item} key={item.id} />
                    )
                })}
            </HomeContainer>
        )
    }
    else {
        return (
            <HomeContainer>
                Loading...
            </HomeContainer>
        )
    }

}

export default Home