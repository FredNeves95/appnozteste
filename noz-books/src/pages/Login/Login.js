import React from 'react'
import { BackgroundStyle, Form, MainContainer, StyledInput, Title } from './style'
import logo from "../../images/noz.svg"
import { useState, useEffect, useContext } from 'react'
import Context from "../../global/Context"

import { Link } from 'react-router-dom'

const Login = () => {

    const { states, setters } = useContext(Context)

    const [user, setUser] = useState()
    const [password, setPassword] = useState()


    const click = () => {
        console.log("cliquei");
    }


    return (
        <MainContainer>

            <BackgroundStyle>

                <Form>

                    <Title> <img src={logo} alt="Logotipo Noz" /> Books </Title>

                    <StyledInput >
                        <div>Email</div>
                        <input type="email" />
                    </StyledInput>

                    <StyledInput  >
                        <div>Senha</div>
                        <input type="password" />
                        <button onClick={click}>Entrar</button>
                    </StyledInput>

                </Form>

            </BackgroundStyle>

        </MainContainer>
    )
}

export default Login