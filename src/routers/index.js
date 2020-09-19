import React, { memo } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import { routes } from 'app-constants'
import Home from 'screens/home'
import NotFound from 'screens/not-found'

const { HOME, NOT_FOUND } = routes

const Routers = () => {
  return (
    <Switch>
      <Route exact path={NOT_FOUND} component={NotFound} />
      <Route exact path={HOME} component={Home} />
      <Redirect exact path="/*" to={NOT_FOUND} />
    </Switch>
  )
}

export default memo(Routers)
