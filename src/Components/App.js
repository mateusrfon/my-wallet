import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login/Login.js';
import Signin from './Login/Signin.js';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/home">
        </Route>
        <Route path="/new-income">
        </Route>
        <Route path="/new-expense">
        </Route>
        <Route path="/balance">
        </Route>
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
    font-family: 'Raleway', sans-serif;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
  }

  body {
    background-color: #8D18BE;
  }
`;
/*
font-family: 'Raleway', sans-serif;
font-family: 'Saira Stencil One', cursive;
*/