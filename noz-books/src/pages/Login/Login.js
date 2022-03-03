import React from 'react'
import Home from '../Home/Home'

import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <div>
            <h1> Login </h1>
            <Link to="/home" > <button>Teste</button> </Link>
        </div>
    )
}

export default Login