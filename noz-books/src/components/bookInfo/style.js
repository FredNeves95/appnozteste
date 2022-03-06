import styled from "styled-components"

export const BookInfoContainer = styled.div`
    min-width: 288px;
    max-width: 1000px;
    min-height: 80vh;
    background-color: white;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
    border-radius: 4px;

    @media(max-width: 980px) {
        width: 84vw;
        justify-content: center;
        padding: 24px 0;
    }
`

export const BookInfoImage = styled.div`
height: 80%;
display: flex;
align-items: center;
img{
    height: 80%;
    max-height: 513px;
}

@media(max-width: 400px){
    margin-bottom: 24px;
    img{
        max-height: 351px;
    }
}
`

export const BookInfoText = styled.div`
display: flex;
flex-direction: column;
align-self: start;
width: 50%;
min-width: 300px;
#book-title{
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    color: #333333;
}

.book-authors{
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #2E63F7;

}

#book-infos{
    display: flex;
    flex-direction: column;

    .section-title{
        font-family: Heebo;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        text-transform: uppercase;
        color: #333333;
    }

    .book-info{
        display: flex;

        .book-info-title{
        font-family: Heebo;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        color: #333333;
    }

        .book-info-text{
            font-family: Heebo;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: #999999;
            text-align: end;
        }
    }
    
    .book-description{
        font-family: Heebo;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        text-align: right;
        color: #999999;
    }
}
`