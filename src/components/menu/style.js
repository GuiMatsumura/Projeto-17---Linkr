import styled from 'styled-components';

export const MainBox = styled.div`
    position: relative;
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
    background-color: #333333;
`

export const MenuBox = styled.menu`
    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #151515;
    position: fixed;

    top: 0;

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
    position: relative;
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
