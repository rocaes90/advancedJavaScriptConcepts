import React, { memo } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import { routes } from 'app-constants'
import Home from 'screens/home'
import NotFound from 'screens/not-found'

import Hoisting from 'screens/js-foundations/hoisting'
import This from 'screens/js-foundations/this'

const {
  core: { HOME, NOT_FOUND },
  foundations: { HOISTING, THIS },
} = routes

const Routers = () => {
  return (
    <Switch>
      <Route exact path={NOT_FOUND} component={NotFound} />
      <Route exact path={HOME} component={Home} />
      <Route exact path={HOISTING} component={Hoisting} />
      <Route exact path={THIS} component={This} />
      <Redirect exact path="/*" to={NOT_FOUND} />
    </Switch>
  )
}

export default memo(Routers)
