import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

function Home() {
    return (<>
        <BackgroundImage >
            <Container>
                <Spaceman src="/img/space_man.svg" />
                <Rocket src="/img/rocket.svg" />
                <Words>
                <Dream>
                    MY DREAM IS TO BE AN
                </Dream>
                <Spacedude>
                    ASTRONAUT
                </Spacedude>
                </Words>
            </Container>
        </BackgroundImage>

        <A2>
            <Container2 src="/img/profile.png" />
            <Info>
            <Small>Name</Small>
            <Niel>Neil Alden Armstrong</Niel>
            <Small>Birth date</Small>
            <Niel>1930. 08. 05</Niel>
            <Small>Nationality</Small>
            <Niel>USA</Niel>
            <Small>Hobby</Small>
            <Niel>Stargazing, Solve math problems</Niel>
            </Info>
        </A2>

        <A3>
            <Image1 src="/img/section_1.png" />
            <Image2 src="/img/section_2.png" />
            <Image3 src="/img/section_3.png" />
            <Planet1 src="/img/planet_1.svg" />
            <Planet2 src="/img/planet_2.svg" />
            <Planet3 src="/img/planet_3.svg" />
            <Drem>What is an astronaut?</Drem>
        </A3>

        <Iwanttogohome>

            <Bigtext>My efforts in achieving my dream</Bigtext>
            <Imghm>
             <Memes src="/img/section_4.png" />
             <Memes src="/img/section_5.png" />
             <Memes src="/img/section_6.png" />
             <Memes src="/img/section_7.png" />
            </Imghm>
<Textholder>
            <Smalltext>I am learning Taekwondo to have healthy physical strength and strong mental strength.</Smalltext>
            <Smalltext>I review the math and science I learned at school for an hour every day before going to bed.</Smalltext>
            <Smalltext>I am planning to prepare various certifications so that I can use computers proficiently.</Smalltext>
            <Smalltext>Every day, I search and study space-related content on YouTube.</Smalltext>
</Textholder>
        </Iwanttogohome>
    </>)
}




const BackgroundImage = styled.div`
  background-image: url("/img/main_visual.png");
  width: 100%;
  height: 721px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Container = styled.div`
    width: 1170px;
    height: 721px;
    margin: 0 auto;
    position: relative;
`;

const Spaceman = styled('img')`
    position: absolute;
    right: 0;
    top: 100px;
    animation: space-man 5s ease-in infinite alternate;

    @keyframes space-man {
      form {
        top: 100px;
      }
      to {
        top: 200px;
      }
    }
`;

const Rocket = styled('img')`
  position: absolute;
  left: 0;
  top: 450px;
  animation: rockets 3s ease-in infinite alternate;

  @keyframes rockets {
    form {
      top: 450px;
    }
    to {
      top: 550px;
    }
  }
`;

const Words = styled.div`
    
`;

const Dream = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 300px;
  font-size: 35px;
  font-family: 'Bungee', sans-serif;
  color: #ffe5ff;
`;

const Spacedude = styled.div`
    font-family: 'Bungee', sans-serif;
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 65px;
    top: 300px;
    color: yellow;
`;

const A2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Container2 = styled('img')`
  width: 450px;
  height: 0 auto;
  margin: 60px;
  margin-left: 300px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Niel = styled.div`
  font-size: 50px;  
  margin: 30px;
`;

const Small = styled.div`
  margin-left: 30px;
  color: grey;
  font-size: 25px;
  font-style: italic;  
`;

const A3 = styled.div`
    width: 100%;
    background-color: #310382;
    display: flex;
    justify-content: space-evenly;
    padding-top: 160px;
    padding-bottom: 70px;
`;

const Image1 = styled('img')`
  width: 350px;
  border-radius: 50%;
  animation-duration: 1.5s;
  transition: all .4s;

  &:hover {
    transform: scale(1.2);
    transition: all .4s;
  }
`;

const Image2 = styled('img')`
  width: 350px;
  border-radius: 50%;
  
  &:hover {
    transform: scale(1.2);
    transition: all .4s;
  }
`;

const Image3 = styled('img')`
  width: 350px;
  border-radius: 50%;
  
  &:hover {
    transform: scale(1.2);
    transition: all .4s;
  }
`;


const Planet1 = styled('img')`
    position: absolute;
    left: 0;
    bottom: -850px;
    animation: planet1 3s ease-in infinite alternate;

  @keyframes planet1 {
    form {
      bottom: -850px;
    }
    to {
      bottom: -750px;
    }
  }
`;

const Planet2 = styled('img')`
    position: absolute;
    right: 0;
    bottom: -700px;
    animation: rockets 5s ease-in infinite alternate;

  @keyframes rockets {
    form {
      bottom: -700px;
    }
    to {
      bottom: -500px;
    }
  }
`;

const Planet3 = styled('img')`
    position: absolute;
    right: 500px;
    bottom: -850px;
    animation: planet2 3s ease-in infinite alternate;

  @keyframes planet2 {
    form {
      bottom: -850px;
    }
    to {
      bottom: -800px;
    }
  }
`;

const Drem = styled.div`
  position: absolute;
  bottom: -500px;
  font-size: 50px;
  color: yellow;  
`;

const Iwanttogohome = styled.div`
  width: 100%;
  height: 0 auto;
  background-color: #8123dc;  
`;

const Imghm = styled.div`
    display: flex;
    justify-content: center;
`;

const Memes = styled('img')`
  height: 300px;
  width: 300px;  
  margin-top: 50px;
  margin-bottom: 150px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Bigtext = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: #ffffe2;
  padding-top: 150px;
`;

const Smalltext = styled.div`
  font-size: 20px;  
  color: #ffffe2;
  width: 300px;
  margin: 10px;
  position: relative;
  bottom: 150px;
  text-align: center;
  line-height: 1.5;
`;

const Textholder = styled.div`
    display: flex;
    justify-content: center;
`;

export default Home;