import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        
      </Switch>
    </BrowserRouter>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
`;