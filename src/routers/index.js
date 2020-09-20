import React, { memo } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import { routes } from 'app-constants'
import Home from 'screens/home'
import NotFound from 'screens/not-found'

import Hoisting from 'screens/js-foundations/hoisting'
import This from 'screens/js-foundations/this'
import ExecutionContext from 'screens/js-foundations/execution-context'
import LexicalEnvironment from 'screens/js-foundations/lexical-environment'
import Scope from 'screens/js-foundations/scope'

const {
  core: { HOME, NOT_FOUND },
  foundations: {
    HOISTING,
    THIS,
    EXECUTION_CONTEXT,
    LEXICAL_ENVIRONMENT,
    SCOPE,
  },
} = routes

const Routers = () => {
  return (
    <Switch>
      <Route exact path={NOT_FOUND} component={NotFound} />
      <Route exact path={HOME} component={Home} />
      <Route exact path={HOISTING} component={Hoisting} />
      <Route exact path={THIS} component={This} />
      <Route exact path={EXECUTION_CONTEXT} component={ExecutionContext} />
      <Route exact path={LEXICAL_ENVIRONMENT} component={LexicalEnvironment} />
      <Route exact path={SCOPE} component={Scope} />
      <Redirect exact path="/*" to={NOT_FOUND} />
    </Switch>
  )
}

export default memo(Routers)
