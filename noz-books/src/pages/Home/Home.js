import React from 'react'
import axios from 'axios'
import useProtectedPage from "../../hooks/useProtectedPage"
import { Base_URL } from '../../api/URL'
import { useEffect, useContext, useState } from 'react'
import Context from '../../global/Context'
import BookCard from '../../components/bookcard/BookCard'
import { HomeContainer, HeaderContainer, CardsContainer, FooterContainer } from './style'
import nozDark from "../../images/nozDark.svg"
import arrow from "../../images/arrow.svg"
import shape from "../../images/shape.svg"
import previous from "../../images/previous.svg"
import next from "../../images/next.svg"

const Home = () => {
    useProtectedPage()

    const [page, setPage] = useState(1)
    const [pageWidth, setPageWidth] = useState(window.innerWidth)
    const token = localStorage.getItem('token')
    const auth = `Bearer ${token}`

    const { states, setters } = useContext(Context)
    const books = states.books
    const setBooks = setters.setBooks
    const user = states.user

    useEffect(() => {
        axios.get(`${Base_URL}/books?page=${page}&amount=12`, {
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

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newPageWidth = window.innerWidth;
            setPageWidth(newPageWidth);
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)
    })

    const nextPage = () => {
        if (page !== 42) {
            setPage(page + 1)
        }
    }

    const previousPage = () => {
        if (page !== 1) {
            setPage(page - 1)
        }
    }

    if (books && user) {
        return (
            <HomeContainer>

                <HeaderContainer>
                    <div className="logo">
                        <img src={nozDark} alt="Logotipo Noz" />
                        <h1>Books</h1>
                    </div>

                    <div className="logout">

                        {
                            pageWidth > 728 ?
                                user.gender === "H" ?
                                    <h1>Bem vindo, <span id="user-name">{`${user.name}!`}</span></h1>
                                    : <h1>Bem vinda, <span id="user-name">{`${user.name}!`}</span></h1>
                                :
                                <></>
                        }

                        <div className="border">
                            <img id="shape" src={shape} alt="Ícone de logout" />
                            <img id="arrow" src={arrow} alt="Ícone de logout" />
                        </div>
                    </div>
                </HeaderContainer>

                <CardsContainer>
                    {books.map((item) => {
                        return (
                            <BookCard book={item} key={item.id} />
                        )
                    })}
                </CardsContainer>
                {
                    pageWidth > 728 ?
                        <FooterContainer>
                            <h1>Página <span className="page-number">{page}</span> de <span className="page-number">42</span></h1>

                            <div className="border" onClick={previousPage}>
                                <img className="page" src={previous} alt="Página anterior" />
                            </div>

                            <div className="border" onClick={nextPage}>
                                <img className="page" src={next} alt="Próxima página" />
                            </div>
                        </FooterContainer>
                        :
                        <FooterContainer>
                            <div className="border" onClick={previousPage}>
                                <img className="page" src={previous} alt="Página anterior" />
                            </div>

                            <h1>Página <span className="page-number">{page}</span> de <span className="page-number">42</span></h1>

                            <div className="border" onClick={nextPage}>
                                <img className="page" src={next} alt="Próxima página" />
                            </div>
                        </FooterContainer>
                }

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