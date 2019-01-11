import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Hello from './components/Hello';
import logo from './logo.svg';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const Wrapper = styled.div`
  text-align: center;
`;
const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`;
const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const Intro = styled.p`
  font-size: large;
`

function App() {
  return (
    <Wrapper>
      <Header>
        <Logo src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </Header>
      <Intro>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </Intro>
      <Hello name="TypeScript" />
    </Wrapper>
  );
}

export default App;

