import React from 'react'
import styled from 'styled-components';

//styled Components
const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 40px 50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: #336699;
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;

`;
const Logo = styled.h1`
    font-weight: bold;
    font-size: 80px;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 50px;

`;

const Button = styled.div`
    margin-left: 60px;
    font-size: 25px;
`;

//Navbar Component
const NavBar = () => {
  return (
   <Container>
        <Wrapper>
            <Left>
                <Logo>Cecile Gentaline</Logo>
            </Left>
            <Right>
                <Button>About</Button>
                <Button>CV</Button>
                <Button>Contact</Button>
                <Button>Gallery</Button>
            </Right>
        </Wrapper>
   </Container>
  )
}

export default NavBar