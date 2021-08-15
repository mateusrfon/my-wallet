import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Resetcss from './components/Resetcss.js';
import UserContext from './contexts/UserContext.js';

import Signin from './pages/Signin.js';
import Signup from './pages/Signup.js';
import Home from './pages/Home.js';
import NewEntry from './pages/NewEntry.js';

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
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  )
}