
import logo from './3Dlogo.png';
import avaxLogo from './avax-logo.png';
import bscLogo from './bsc-logo.png';

import './App.css';
import { Card, Container } from "react-bootstrap";
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 20rem;
  overflow: hidden;
  background: rgb(22, 21, 34);
  box-shadow: rgb(165 127 57 / 10%) 0px 20px 36px -8px, rgb(165 127 57 / 5%) 0px 1px 1px;
  border: 2px solid rgb(165, 127, 57);
  border-radius: 10px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
`
const StyledContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  flex: 1;
  display: block;
  padding: auto;
  margin-top: auto;
  margin-bottom: auto;
  height: 100%;
  text-align: center;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledContainer >
          <img src={logo} className="App-logo" alt="logo"/>
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>  */}
          
          <StyledCard>
          <a
            className="App-link"
            href="https://privateavax.dexyswap.com/"
            style={{border: "2px solid #e84142"}}
          >
            <img width="56px" src={avaxLogo}  alt="avax network-logo" />
            <div style={{paddingRight: "10px"}} />
            <text>Avalanche</text>
          </a> 
          <a
            className="App-link"
            href="https://privatebsc.dexyswap.com/"
            style={{border: "2px solid rgb(243, 186, 47)",}}
          >
            <img width="56px" src={bscLogo}  alt="bsc network-logo" />
            <div style={{paddingRight: "10px"}} />
            <text>BSC</text>
          </a> 
          </StyledCard>

        </StyledContainer>
      </header>
    </div>
  );
}

export default App;
