import styled from 'styled-components';

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (max-width: 600px){
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        overflow: hidden;
    }`

export const BottomBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: red;
`

export const MenuBox = styled.menu`
    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #151515;
    position: relative;

    span {
        margin-left: 3%;

        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;

        letter-spacing: 0.05em;

        color: #FFFFFF;
    }
`

export const ProfileMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2%;

    .icon {
        color: #FFFFFF;
        margin-right: 16px;
    }

    img {
        width: 53px;
        height: 53px;
        object-fit: cover;
        text-align: center;
        display: flex;
        align-items: center;
        background: white;
        border-radius: 26.5px;
    }
`

export const PopUpMenu = styled.div`
    position: absolute;
    width: 150px;
    height: 47px;
    right: 0;
    top: 72px;

    display: flex;
    justify-content: center;
    align-items: center;
    background: #171717;
    border-radius: 0px 0px 0px 20px;

    span {
        width: 57px;
        height: 20px;
        left: 1344px;
        top: 81px;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: 0.05em;

        color: #FFFFFF;
    }
`
