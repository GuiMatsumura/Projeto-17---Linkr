import styled from 'styled-components'

export const LeftBox = styled.div`
    background-color: #151515;
    width: 66%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 144px;

    h1{
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }

    h2{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
        color: #FFFFFF;
    }

    @media (max-width: 600px){
        width: auto;
        height: 35vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-left: -135px;
    
        h1{
            font-family: 'Passion One';
            font-style: normal;
            font-weight: 700;
            font-size: 76px;
            line-height: 84px;
            letter-spacing: 0.05em;
            color: #FFFFFF;
        }

        h2{
            font-family: 'Oswald';
            font-style: normal;
            font-weight: 700;
            font-size: 23px;
            line-height: 34px;
            text-align: center;
            color: #FFFFFF;
        }
    }`

export const RightBox = styled.div`
    background-color: #333333;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 54px 0 52px;
    }

    input{
        margin-bottom: 13px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 6px;
        width: 429px;
        height: 65px;
        font-size: 20px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
    }

    input::placeholder {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color: #9F9F9F;
        padding: 16px;
    }

    button{
        width: 429px;
        height: 65px;
        background: #1877F2;
        border-radius: 6px;
        color: #FFFFFF;
        border: none;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #FFFFFF;
        margin-top: 14px;
    }

    @media (max-width: 600px){
        width: auto;
        height: 65vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 22px 0 22px;
        }

        input{
            width: 330px;
            height: 55px;
            font-family: 'Oswald';
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 33px;
            color: #9F9F9F;
        }

        button{
            width: 330px;
            height: 55px;
            background: #1877F2;
            border-radius: 6px;
            font-family: 'Oswald';
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 33px;
            color: #FFFFFF;
        }   
        
        h3{
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 20px;
            text-decoration-line: underline;
            color: #FFFFFF;
        }
    }`

export const MainBox = styled.div`
    display: flex;
    height: 100%;
    width: 100vw;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        overflow: hidden;
    }` 
