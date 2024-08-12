import styled from '@emotion/styled'

function Pokemon() {
  return <Container>

    <Box color="yellow" >
      <Box2>
        <Title>Oppenheimer</Title>
        <Box3 src="/img/oppenheimer-smiling-meme.jpg" />
        <Boxtext>Shimmy shimmy yay, shimmy yay, shimmy ya (drank)
Swalla-la-la drank
Swalla-la-la swalla-la-la
Swalla-la-la
Shimmy shimmy yay, shimmy yay, shimmy ya drank
Swalla-la-la drank
Swalla-la-la swalla-la-la
Swalla-la-la</Boxtext>
        <Powers>
          <Opp>Atk: 100</Opp>
          <Opp>Int: 50000</Opp>
          <Opp>Dmg: 99999</Opp>
          <Opp2>ⓈⓅⒺⒸⒾⒶⓁ ⒶⓉⓉⒶⒸⓀ</Opp2>
          <Opp2>市 島 広</Opp2>
        </Powers>
        </Box2>
    </Box>

  </Container>
}

const Container = styled.div`
display: flex;
justify-content: center;
   `;

   const Title = styled.div`
    font-size: 30px;
    margin-top: 10px;
    margin-left: 20px;
    font-family: 'Times New Roman', Times, serif;
   `;

   const Opp = styled.div`
    font-size: 20px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
   `;

   const Opp2 = styled.div`
    font-size: 25px;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 50px;
   `;

const Box2 = styled.div`
margin: 25px;
width: 450px;
background-color: #ffff8d;
border-radius: 13px;
display: flex;
justify-content: center;
flex-direction: column;
`;

const Powers = styled.div`
  font-size: 18px;
`

const Boxtext = styled.div`
  display:flex;
  width: 400px;
  margin: 20px;
`;

const Box = styled.div<{color: string}>`
background-color: yellow;
display: flex;
width: 500px;
justify-content: center;
border-radius: 13px;
`;

const Box3 = styled('img')`
margin: 20px;
border-radius: 13px;
width: auto;
`;

export default Pokemon;
