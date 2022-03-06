import styled from "styled-components"

export const BookInfoContainer = styled.div`
    min-width: 800px;
    max-width: 1000px;
    min-height: 80vh;
    background-color: white;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
    border-radius: 4px;

    .loading{
        width: 100%;
        text-align: center;
    }

    @media(max-width: 1100px) {
        width: 84vw;
        justify-content: center;
        padding: 24px 0;
        min-width: 288px;
    }
`

export const BookInfoImage = styled.div`
height: 80vh;
display: flex;
align-items: center;
padding: 48px 24px 48px 48px;
img{
    height: 90%;
}

@media(max-width: 1100px){
    align-items: start;
    padding: 24px;
    height: auto;
    img{
        max-height: 640px;
    }
}

@media(max-width: 640px){
    align-items: start;
    padding: 24px;
    height: auto;
    img{
        max-height: 500px;
    }
}
`

export const BookInfoText = styled.div`
display: flex;
align-items: center;
width: 50%;
min-width: 300px;
height: 80vh;
padding: 48px 48px 48px 24px;

@media(max-width: 1100px){
    align-items: start;
    height: auto;
    width: auto;
    max-width: 50%;
    padding: 0;
}

@media(max-width: 640px){
    padding: 0;
    height: auto;
    width: auto;
}

.book-info-text-container{
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 100%;

    @media(max-width: 640px){
    align-items: start;
}
}

#book-title{
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    color: #333333;
    width: 100%;
}

.book-authors{
    font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #2E63F7;
    width: 100%;
    margin: 4px;

}

#book-infos{
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .section-title{
        font-family: Heebo;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        text-transform: uppercase;
        color: #333333;
        margin-bottom: 24px;
    }

    .book-info{
        display: flex;
        margin: 4px 0;
        .book-info-title{
        font-family: Heebo;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        width: 50%;
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
            width: 50%;
        }
    }
    
    #book-review{
        margin-top: 24px;
    }

    .book-description{
        font-family: Heebo;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        color: #999999;
        img{
            margin-right: 8px;
        }
    }
}
`