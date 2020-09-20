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
  }, [])

  const onClickHoisting = useCallback(() => {
    history.push(HOISTING)
  }, [])

  const onClickExecutionContext = useCallback(() => {
    history.push(EXECUTION_CONTEXT)
  }, [])

  const onClickLexicalEnvironment = useCallback(() => {
    history.push(LEXICAL_ENVIRONMENT)
  }, [])

  const onClickScope = useCallback(() => {
    history.push(SCOPE)
  }, [])

  return {
    onClickThis,
    onClickHoisting,
    onClickExecutionContext,
    onClickLexicalEnvironment,
    onClickScope,
  }
}

export default useHome
