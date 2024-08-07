import styled from "styled-components";

export const ContainerContent =styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #023e8a;
    width: 70vw;
    height: 60vh;
    margin: 0 auto;
    margin-top: 100px;

    & .phone{
        margin-top: 70px;
         >img{
            width: 16vw;
            margin-left: 30px;
         }
    }

    & .title-and-description {
        margin-top: 20px;
        margin-left: 30px;

        > h2 {
            color: #fff;
            font-family: Helvetica;
            font-size: 2em;  
        }

        > p {
            color: #fff;
            font-family: Helvetica;
            font-weight: 500;
        }

        > button {
            background-color: #fff;
            padding: 18px;
            margin-top: 40px;
            font-weight: 700;
            margin-bottom: 30px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
        }

        > span {
            font-weight: 600;
            margin-left: 13px;
            color: #fff;
            cursor: pointer;
        }
    }

    

    & .acordo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #fefae0;


            > h2 {
                font-size: 2.2em;
                font-family: Helvetica;
                margin-left: 20px;
            }

            & .acordo-image {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0 30px 80px 30px;


                    img {
                        width: 100px;
                }
            }
        }

    @media (min-width: 340px) and (max-width: 767px) {
        width: 900px;
        display: flex;
        align-items: center;
        margin-left: 25%;
        

        & .title-and-description {
                margin-left: 50px;
                > h2 {
                    font-size: 1.8em;
                    margin-bottom: 40px; 
                }

                > p {
                    font-size: 15px;
                    width: 400px; 
                }
        }

        & .phone {
            margin: 0 auto;
            margin-left: -40px;
            margin-right: 20px;
                > img {
                    width: 46vw;          
            }
        }
        

            & .acordo { 
                margin-top: 1px;
                width: 300px;
                height: 60vh;
                padding: 30px 0 70px 0;

                    > h2 {
                        font-size: 30px; 
                }


                & .acordo-image {
                    margin: 0 auto;
                    width: 200px;

                        > img {
                            margin-right: 20px; 
                        }
                }
            }
    }

    @media(min-width: 768px) and (max-width: 1024px) {
        width: 80vw;

        & .phone {
            margin-top: 100px;
            margin-left: 30px;
        }

        & .title-and-description {

            > h2 {
                font-size: 1.6em; 
            }

            > p, span {
                font-size: 14px;
            }
        }


        & .acordo {
            > h2 {
             margin-top: 100px;
                font-size: 1.6em; 
            }

            & .acordo-image {
                    width: 140px;

                        > img {
                            margin-right: 50px; 
                        }
                }
        }
    }

`
