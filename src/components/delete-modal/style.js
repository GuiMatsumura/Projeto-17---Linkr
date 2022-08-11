import styled from 'styled-components'

export const Background = styled.div`
background-color: #EBEBEB;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`

export const Box = styled.div`
background: #333333;
border-radius: 50px;
width: 597px;
height: 262px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Text = styled.div`
padding-bottom: 39px;
h1{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;

  color: #FFFFFF;
}
`

export const Buttons = styled.div`
button{
  width: 134px;
  height: 37px;
  background: #FFFFFF;
  border-radius: 5px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
}

.noButton{
  color: #1877F2;
  margin-right: 27px;
}

.yesButton{
  background-color: #1877F2;
  color: #FFFFFF;
}
`