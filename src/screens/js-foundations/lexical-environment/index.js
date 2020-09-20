import React, { memo } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

import Wrapper from 'screens/layout/wrapper'
import { text } from 'config/styles'

const useStyles = makeStyles((theme) => ({
  ...text,
}))

function LexicalEnvironment() {
  const classes = useStyles()

  return (
    <Wrapper title="LEXICAL ENVIRONMENT" code="N/A">
      <Box>
        <Typography className={classes.text}>
          Lexical environments means where the code was written.
        </Typography>
        <Typography
          color="primary"
          align="center"
          variant="subtitle1"
          className={classes.text}
        >
          Some other details
        </Typography>
        <Typography className={classes.text}>
          The Global Environment is the parent environment to all other
          environments created in the code.
        </Typography>
        <Typography className={classes.text}>
          In the browser, the global environment is called window.
        </Typography>
        <Typography className={classes.text}>
          In Node.js, the global environment is called global.
        </Typography>
      </Box>
    </Wrapper>
  )
}

export default memo(LexicalEnvironment)
