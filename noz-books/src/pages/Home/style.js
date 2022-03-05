import styled from "styled-components"

export const HomeContainer = styled.div`
width: 100%;
min-height: 100vh;
background-color: #E0E6EE;
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: start;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo{
        margin: 5vh auto 5.5vh 12vw;
        img{
            width: 69px;
            height: 26px;
        }

        h1{
            display: inline;
            font-family: Heebo;
            font-style: normal;
            font-weight: 300;
            font-size: 28px;
            line-height: 40px;
            color: #333333;
            margin-left: 12px;
        }
    }

    .logout{
        display: flex;
        align-items: center;
        margin: 5vh 12vw 5.5vh auto;
       
        h1{
            margin-right: 16px;
            font-family: Heebo;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            text-align: right;
            color: #333333;
        }

        #user-name{
            font-weight: 500;
        }

        .border{
            width: 32px;
            height: 32px;
            border: 1px solid rgba(51, 51, 51, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

        #shape{
            img{
                width: 5.5px;
                height: 14px;
            }          
        }

        #arrow{
            img{
                width: 10.5px;
                height: 8px;
            }          
        }
     }
    }

    
`

export const CardsContainer = styled.div`
width: 80%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
align-self: center;
`

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 5vh 12vw auto auto;

    h1{
        font-family: Heebo;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #333333;
        margin: 0 8px;
    }

    .page-number{
        font-weight: 500;
    }

    .border{
            width: 32px;
            height: 32px;
            border: 1px solid rgba(51, 51, 51, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin: 0 8px;
    }
`