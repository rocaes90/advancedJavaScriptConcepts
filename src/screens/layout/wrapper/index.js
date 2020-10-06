import React from 'react'

import { Box, Typography } from '@material-ui/core'

import ArrowBack from 'components/arrow-back'
import { routes } from 'app-constants'
import useResponsive from 'hooks/responsive.hook'

const {
  core: { HOME },
} = routes

function Wrapper({
  children,
  code,
  title,
  arrowBackRoute,
  arrowBackLabel = 'GO HOME',
}) {
  const { isSmallScreen } = useResponsive()

  let routeToUse = arrowBackRoute ? arrowBackRoute : HOME

  const titleProps = {
    variant: isSmallScreen ? 'h3' : 'h2',
  }

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={4}
    >
      <Box display="flex" width={{ xs: '100%', md: '80%' }}>
        <ArrowBack label={arrowBackLabel} route={routeToUse} />
      </Box>
      <Typography {...titleProps} color="primary">
        {title}
      </Typography>
      <Box
        display="flex"
        width={{ xs: '100%', md: '80%' }}
        pt={4}
        justifyContent="center"
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
      >
        <Box textAlign={{ xs: 'center' }}>{children}</Box>
      </Box>
    </Box>
  )
}

export default Wrapper
