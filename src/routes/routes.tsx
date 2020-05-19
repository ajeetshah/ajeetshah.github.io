import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'
import MainPage from '../pages/mainPage/mainPage'

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
        {/* {pathComponents.map((item) => (
          <Route exact key={item.path} path={item.path}>
            <item.component />
          </Route>
        ))} */}
      </Switch>
    </Router>
  )
}
