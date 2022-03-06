import styled from "styled-components";
import bgDesktop from "../../images/bg-desktop.svg";
import bgMobile from "../../images/bg-mobile.svg"


export const MainContainer = styled.div`
position: relative;
width: 100vw;
min-height: 100vh;
`

export const BackgroundStyle = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
background-image: url(${bgDesktop});
background-size: cover; 
background-repeat: no-repeat;
background-position: center;

@media(max-width: 700px){
    background-image: url(${bgMobile});
};
`

export const Form = styled.div`
top: 36vh;
left: 10vw;
position: absolute;
display: flex;
flex-direction: column;

.login-error{
    margin: 0;
    font-family: Heebo;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    width: 264px;
    height: auto;
    color: white;
    padding: 20px;
    position: relative;
    margin-top: 24px;
}
.login-error:after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(255, 255, 255, 0.4);
    top: -10px;
    left: 8%;
}
`

export const Title = styled.h1`
font-family: Heebo;
font-style: normal;
font-weight: 300;
font-size: 28px;
line-height: 40px;
color: #FFFFFF;
margin-bottom: 54px;

img{
    width: 63px;
    height: 24px;
}
`

export const StyledInput = styled.div`
height: 60px;
width: 368px;
margin: 8px 0;
border: none;
background-color: rgba(0, 0, 0, 0.32);
backdrop-filter: blur(2px);
border-radius: 4px;
position: relative;

@media(max-width:700px){
    width: 288px;
}

div{
position: absolute;
left: 16px;
top: 8px;
font-family: Heebo;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: white;
opacity: 0.5;
}

input{
position: absolute;
left: 16px;
top: 28px;
width: 100%;
background: none;
border: none;
color: white;
font-family: Heebo;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

    :focus{
        box-shadow: none;
        outline: none;        
    }
}

button{
    position: absolute;
    top: 12px;
    right: 12px;
    height: 36px;
    width: 85px;
    background-color: white;
    border: none;
    border-radius: 44px;
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #B22E6F;

    :hover{
        background-color: lightgrey;
        cursor: pointer;
    }

    :active{
        background-color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
}

`