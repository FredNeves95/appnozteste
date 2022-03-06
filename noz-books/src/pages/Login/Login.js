import React from 'react'
import { BackgroundStyle, Form, MainContainer, StyledInput, Title } from './style'
import logo from "../../images/noz.svg"
import { useState, useContext } from 'react'
import Context from "../../global/Context"
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { Base_URL } from '../../api/URL'

const Login = () => {
    const navigate = useNavigate()
    const { setters } = useContext(Context)

    const setUser = setters.setUser

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const [loginError, setLoginError] = useState(false)

    const handleChange = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value })
    }


    const signIn = () => {
        axios.post(`${Base_URL}/auth/sign-in`, values)
            .then((res) => {
                localStorage.setItem("token", res.headers.authorization)
                localStorage.setItem("name", res.data.name)
                localStorage.setItem("gender", res.data.gender)
                setUser({
                    name: res.data.name,
                    gender: res.data.gender
                })
                setLoginError(false)
                navigate("home")
            }).catch((err) => {
                console.log(err.response);
                if (err.response.status === 401) {
                    setLoginError(true)
                } else if (err.response.status === 500) {
                    alert("Ocorreu um erro no servidor.")
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
                        <button onClick={signIn} >Entrar</button>
                    </StyledInput>
                    {
                        loginError ?
                            <div className="login-error">
                                Usuário e/ou senha incorretos.
                            </div> :
                            <></>
                    }

                </Form>

            </BackgroundStyle>

        </MainContainer>
    )
}

export default Login