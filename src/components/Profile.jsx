import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    height: 60px;

`
const Wrapper = styled.div`
    border: 1px solid  #ff0000;
    position: absolute;
    top: 250px;
    left: 50px;
    width: 350px;
    height: 700px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`
const Image = styled.div`

    
`
const Text = styled.div`
    margin: 0px 40px 40px 40px;
    
`
const Profile = () => {
  return (
    <Container>
        <Wrapper>
            <Image>
                <img src={require('./images/Profile.png')} style={{width:300}} alt="profile" />
            </Image>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, 
                odio quaerat! Et laboriosam recusandae aliquam a debitis est tempore
                quo quia vel odit ab velit laborum alias eum, ratione repudiandae.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, 
                odio quaerat! Et laboriosam recusandae aliquam a debitis est tempore
                quo quia vel odit ab velit laborum alias eum, ratione repudiandae.
            </Text>
        </Wrapper>
    </Container>
  )
}

export default Profile
