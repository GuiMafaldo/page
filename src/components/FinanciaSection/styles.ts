import styled from "styled-components";

export const ContainerContent =styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #2a9d8f;
    width: 70vw;
    height: 60vh;
    margin: 0 auto;
    margin-top: 100px;

    & .title-and-description {
        margin-top: 10px;
        margin-left: 30px;

         > h2 {
             color: #fff;
             font-size: 2em;
             font-family: Helvetica; 
         }

         > p {
             font-family: Helvetica;
             color: #fff;
             
         }

         > button {
            padding: 20px;
            border: none;
            border-radius: 25px;
            margin-top: 40px;
            margin-bottom: 30px;
            font-family: Helvetica;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
         }

         > span {
            font-family: Helvetica;
            margin-left: 10px;
            cursor: pointer; 
         }
    }

    & .poltrona {
        margin-top: 120px;
        margin-left: 30px;
        > img {
            width: 14vw;
         
        }
    }

    @media (max-width: 767px) {
        width: 80vw;
        display: gird;
        grid-template-columns: 1fr 1fr;

        & .title-and-description {

            > h2 {
                font-size: 30px; 
            }
        }

        & .poltrona {
                margin-top: 120px;

                    > img {
                        width: 30vw;
         
                    }
            }
    }
`


export const CarouselContainer = styled.div`
    width: 70vw;
    height: 70vh;
`

export const CarouselContent = styled.div`
    display: block;
    width: 30vw;


    & .content-image {
        
        img{
            width: 600px;
            height: 552px;
        }
    }

    @media(max-width: 767px) {
        display: none;
    }
`