import React, { memo } from 'react'

import { Box, Typography, makeStyles } from '@material-ui/core'

import Wrapper from 'screens/layout/wrapper'
import code from 'content/this'
import { text } from 'config/styles'

const useStyles = makeStyles((theme) => ({
  ...text,
}))

function This() {
  const classes = useStyles()

  return (
    <Wrapper title="THIS" code={code}>
      <Box>
        <Typography className={classes.text}>
          "this" can be thought of as "who called me?"" i.e., what is to the
          left of the dot, such as window.a()
        </Typography>
        <Typography
          color="primary"
          align="center"
          variant="subtitle1"
          className={classes.text}
        >
          Some other details
        </Typography>
        <Typography className={classes.text} variant="body2">
          "this" is the object which the function is a property of
        </Typography>
        <Typography className={classes.text}>
          "this" gives functions access to their object and its properties
        </Typography>
        <Typography className={classes.text}>
          "this" is dynamically scoped, i.e. it doesn’t matter where it was
          written, it matters where it was called
        </Typography>
        <Typography className={classes.text}>
          Arrow functions bind “this” to the lexical scope
        </Typography>
      </Box>
    </Wrapper>
  )
}

export default memo(This)
