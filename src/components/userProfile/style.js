import styled from 'styled-components'

export const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 125px;
left: 259px;
img{
  border-radius: 26.5px;
  width: 50px;
  height: 50px;
  margin-right: 18px;
}
h1{
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #FFFFFF;
}
`

export const Body = styled.div`
background-color: #333333;
height: 100vh;
width: 100vw;
position: relative;
`

export const LeftBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 130px;

img{
  border-radius: 26.5px;
  width: 50px;
  height: 50px;
  margin-bottom: 19px;
}

h1{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 5px;
}

.likeButton{
  color: white;
  font-size: 1.5em;
  font-weight: bold;
}
`

export const RightBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 18px;

h1{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #FFFFFF;
  width: 502px;
  height: 23px;
  margin-bottom: 7px;
}

h2{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #B7B7B7;
  width: 502px;
  height: 52px;
}
`

export const Post = styled.div`
display: flex;
position: absolute;
top: 230px;
left: 241px;
padding: 19px 21px 20px 18px;
width: 611px;
height: 276px;
background-color: #171717;
border-radius: 16px;
`

export const Trending = styled.div`
position: absolute;
left: 877px;
top: 232px;
background-color: #171717;
width: 301px;
height: 406px;
border-radius: 16px;

h1{
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #FFFFFF;
  padding: 9px 0 0 16px;
}

div{
  border: 1px solid #484848;
  margin-top: 12px;
}

li{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  margin-bottom: 10px;
}

ul{
  width: 130px;
  height: 300px;
  padding: 22px 0 30px 16px;
  background-color: red;
}
`