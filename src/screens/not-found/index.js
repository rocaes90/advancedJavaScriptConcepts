import React, { Fragment } from 'react'

import { Box, Typography } from '@material-ui/core'

import ArrowBack from 'components/arrow-back'
import Footer from 'components/footer'
import { routes } from 'app-constants'

const {
  core: { HOME },
} = routes

function NotFound() {
  return (
    <Fragment>
      <Box display="flex" width={{ xs: '100%', md: '80%' }}>
        <ArrowBack label={'GO HOME'} route={HOME} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        height="95vh"
        alignItems="center"
      >
        <Typography color="primary" variant="h1">
          not found
        </Typography>
      </Box>
      <Footer />
    </Fragment>
  )
}

export default NotFound
