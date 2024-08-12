import styled from '@emotion/styled'

function Rainbow() {
  return <Container>

    <Box color="red" />

    <Box color="orange" />

    <Box color="yellow" />

    <Box color="green" />

    <Box color="blue" />

    <Box color="navy" />

    <Box color="purple" />

  </Container>
}

const Container = styled.div`
display: flex;
   `;

const Box = styled.div<{color: string}>`
background-color:  ${(props) => props.color};
flex: 1;
height: 100vh;
`;


export default Rainbow;
