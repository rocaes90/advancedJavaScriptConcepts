import React, { memo } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

import Wrapper from 'screens/layout/wrapper'
import { text } from 'config/styles'

const useStyles = makeStyles((theme) => ({
  ...text,
}))

function ExecutionContext() {
  const classes = useStyles()

  return (
    <Wrapper title="EXECUTION CONTEXT" code="N/A">
      <Box>
        <Typography className={classes.text}>
          The environment in which the current code is being evaluated in. There
          can only be one execution context running at any point of time! This
          is because Javascript is single-threaded.
        </Typography>
      </Box>
    </Wrapper>
  )
}

export default memo(ExecutionContext)
