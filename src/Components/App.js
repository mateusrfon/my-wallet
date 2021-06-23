import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Resetcss from './Resetcss.js';

import Signin from './Sign/Signin.js';
import Signup from './Sign/Signup.js';
import Home from './Home'

export default function App() {
  return (
    <BrowserRouter>
      <Resetcss />
      <Switch>
        <Route path="/sign-in">
          <Signin />
        </Route>
        <Route path="/sign-up">
          <Signup />
        </Route>
        <Route path="/" exact>
          <Home />
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