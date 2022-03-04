import React from 'react'
import { BackgroundStyle, Form, MainContainer, StyledInput, Title } from './style'
import logo from "../../images/noz.svg"
import { useState, useEffect, useContext } from 'react'
import Context from "../../global/Context"
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Base_URL } from '../../api/URL'

const Login = () => {
    const navigate = useNavigate()
    const { states, setters } = useContext(Context)
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleChange = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value })
    }


    const signIn = () => {
        axios.post(`${Base_URL}/auth/sign-in`, values)
            .then((res) => {
                localStorage.setItem("token", res.headers.authorization)
                navigate("home")
                console.log(res);
            }).catch((err) => {
                console.log(err.response);
                if (err.response.status === 401) {
                    alert(`${err.response.data.errors.message}`)
                    return <></>
                } else if (err.response.status === 500) {
                    alert(`${err.response.data.errors.message}`)
                    return <></>
                }
            })
    }

    return (
        <MainContainer>

            <BackgroundStyle>

                <Form>

                    <Title> <img src={logo} alt="Logotipo Noz" /> Books </Title>

                    <StyledInput >
                        <div>Email</div>
                        <input type="email" value={values.email} onChange={handleChange("email")} />
                    </StyledInput>

                    <StyledInput  >
                        <div>Senha</div>
                        <input type="password" value={values.password} onChange={handleChange("password")} />
                        <button onClick={signIn}>Entrar</button>
                    </StyledInput>

                </Form>

            </BackgroundStyle>

        </MainContainer>
    )
}

export default Login