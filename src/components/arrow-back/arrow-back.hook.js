import { useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { routes } from 'app-constants'

const {
  core: { HOME },
} = routes

function useArrowBack() {
  const history = useHistory()

  const onClickBack = useCallback(() => {
    history.push(HOME)
  }, [])

  return {
    onClickBack,
  }
}

export default useArrowBack
