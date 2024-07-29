import styled from "styled-components"

export const ContainerFormulario = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    max-width: 380px;
    margin-left: 160px;
    margin-top: 100px;
    width: 100%;
    height: 65vh;
    gap: 40px;

    > h2 {
        color: #000;
        font-family: Helvetica;
        text-align: left;
        margin: 20px 0 0 14px;
     }

     > div{
        margin: 0 auto;
        border-radius: 12px;
        background-color: #fff;

        & .active {
            background-color: #669bbc;
            color: #fff;
        }    
        
        > button {
            padding: 12px;
            border: 0;
            border-radius: 12px;
            color: #000;
            font-family: Helvetica;
            font-weight: 700;
            cursor: pointer;
        }
     }

     & .proprietario {
        background-color: #fff;
        width: 380px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 0;
        padding: 12px 0;
        margin-top: 10px;

        > p, span {
            font-family: Helvetica;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer; 
        }

        @media (max-width: 767px){
            width: 57vw;
            margin-left: -28px;
            margin-top: -20px;

      }

      @media (min-width: 768px) and (max-width: 1024px) {
        width: 37vw;
        margin-top: -20px;
        
    }
     }

      @media (max-width: 767px){
        width: 100vw;
        padding: 30px;

      }

      @media (min-width: 768px) and (max-width: 1024px) {
        margin-top: 120px;
        padding-bottom: 30px;
        
    }

`
export const ContentForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;

    > input {
        padding: 16px;
        border: 1px solid #e3e3e3;
        border-radius: 6px;
        max-width: 320px;
        margin-left: 12px;
    }

    & .select-quartos {
        display: flex;
        justify-content: space-around;
        gap: 40px;
        

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px;
            width: 100px;
            background-color: #fff;
            border: none;

            > select {
                border: none; 
            }

            > img{
                width: 30px; 
            }
        }
    }

    > button {
        width: 80%;
        margin: 0 auto;
        padding: 14px;
        background-color: #669bbc;
        color: #fff;
        font-weight: 700;
        font-family: Helvetica;
        border: none;
        border-radius: 20px;
    }

    @media (max-width: 767px){
    

      }
`