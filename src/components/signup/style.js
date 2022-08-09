import styled from 'styled-components'

export const LeftBox = styled.div`
background-color: #151515;
width: 66%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


h1{
  font-family: 'Passion One';
  font-style: normal;
  font-weight: 700;
  font-size: 106px;
  line-height: 117px;
  letter-spacing: 0.05em;
  color: #FFFFFF;

  /* padding-top: 301px;
  padding-left: 144px; */
}

h2{
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #FFFFFF;
 /*  padding-left: 144px; */
  
}
`

export const RightBox = styled.div`
background-color: #333333;
width: 34%;
display: flex;
flex-direction: column;
justify-content: center;
    align-items: center;

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const MainBox = styled.div`
display: flex;
height: 100%;
`