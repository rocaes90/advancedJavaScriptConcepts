import { useMediaQuery } from '@material-ui/core'

function useResponsive() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return {
    isSmallScreen,
  }
}

export default useResponsive
