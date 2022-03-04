import React from 'react'
import { Link } from 'react-router-dom'
import useProtectedPage from "../../hooks/useProtectedPage"

const Home = () => {
    useProtectedPage()
    const token = localStorage.getItem('token')
    console.log(token);
    return (
        <div>
            <h1> Home </h1>
            <Link to="/"> <button>Teste</button> </Link>
        </div>
    )
}

export default Home