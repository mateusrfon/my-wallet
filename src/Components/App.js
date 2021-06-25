import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Resetcss from './Resetcss.js';
import UserContext from '../Contexts/UserContext.js';
import React, { useState } from 'react';

import Signin from './Sign/Signin.js';
import Signup from './Sign/Signup.js';
import Home from './Home.js';
import NewEntry from './NewEntry.js';

export default function App() {
  const [user, setUser] = useState({ name: '', token: '' });

  return (
    <BrowserRouter>
      <Resetcss />
      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
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
            <NewEntry type='income'/>
          </Route>
          <Route path="/new-expense">
            <NewEntry type='expense'/>
          </Route>
          <Route path="/balance">
          </Route>
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  )
}