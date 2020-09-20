import { useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { routes } from 'app-constants'

const {
  foundations: { HOISTING, THIS },
} = routes

function useHome() {
  const history = useHistory()

  const onClickThis = useCallback(() => {
    history.push(THIS)
  }, [])

  const onClickHoisting = useCallback(() => {
    history.push(HOISTING)
  }, [])

  return { onClickThis, onClickHoisting }
}

export default useHome
