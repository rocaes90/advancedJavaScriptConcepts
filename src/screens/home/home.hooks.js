import { useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { routes } from 'app-constants'

const {
  foundations: {
    HOISTING,
    THIS,
    EXECUTION_CONTEXT,
    LEXICAL_ENVIRONMENT,
    SCOPE,
  },
} = routes

function useHome() {
  const history = useHistory()

  const onClickThis = useCallback(() => {
    history.push(THIS)
  }, [history])

  const onClickHoisting = useCallback(() => {
    history.push(HOISTING)
  }, [history])

  const onClickExecutionContext = useCallback(() => {
    history.push(EXECUTION_CONTEXT)
  }, [history])

  const onClickLexicalEnvironment = useCallback(() => {
    history.push(LEXICAL_ENVIRONMENT)
  }, [history])

  const onClickScope = useCallback(() => {
    history.push(SCOPE)
  }, [history])

  return {
    onClickThis,
    onClickHoisting,
    onClickExecutionContext,
    onClickLexicalEnvironment,
    onClickScope,
  }
}

export default useHome
