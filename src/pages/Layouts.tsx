import styled from "@emotion/styled";
import { Outlet, Link } from "react-router-dom";


function Layouts() {
    return( 
    <Container>
        <Header>
            <HeaderBox>
            <Title>PoPo</Title>
            <Headercontainer>
                <HeaderText><Link to="/">Home</Link></HeaderText>

                <HeaderText><Link to="/rainbow">Profile</Link></HeaderText>

                <HeaderText><Link to="/pokemon">About</Link></HeaderText>
                
                <HeaderText><Link to="/pokemon">Activity</Link></HeaderText>

                <HeaderText><Link to="/study">Study</Link></HeaderText>
            </Headercontainer>
            </HeaderBox>
        </Header>
        <Outlet />
    </Container>
    );
}

const Container = styled.div`
  /* display: flex;
  justify-content: center; */
`;

const Title = styled.div`
    font-size: 40px;
    color: white;
`;

const HeaderBox = styled.div`
    width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


const Header = styled.div`
    width: 100%;
    background-color: purple;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    border-bottom: 3px purple solid;
    z-index: 999;
`;

const HeaderText = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: right;
    margin: 15px;
    margin-right: 30px;
`;

const Headercontainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    margin: 20px;
`;

export default Layouts;