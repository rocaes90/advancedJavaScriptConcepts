import React from 'react'
import { Box, Typography } from '@material-ui/core'

import Wrapper from 'screens/layout/wrapper'
import { routes } from 'app-constants'

const {
  foundations: { THIS },
} = routes

const hoistingValue = `
  this is a test
this
this
  test
`

function This() {
  return (
    <Wrapper title="THIS" code={hoistingValue} arrowBackRoute={THIS}>
      <Box>
        <Typography>here is the children</Typography>
      </Box>
    </Wrapper>
  )
}

export default This
