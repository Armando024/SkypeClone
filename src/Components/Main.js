import { Switch, Route } from 'react-router-dom'

import React, { Component } from 'react';
import Login from './Login'
import Register from './Register'
import Welcome from './Welcome'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/schedule' component={Login}/>
      <Route path='/welcome' component={Welcome}/>
    </Switch>
  </main>
)

export default Main
