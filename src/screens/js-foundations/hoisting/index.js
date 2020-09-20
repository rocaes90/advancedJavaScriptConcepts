import React, { memo } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

import Wrapper from 'screens/layout/wrapper'
import code from 'content/hoisting'
import { text } from 'config/styles'

const useStyles = makeStyles((theme) => ({
  ...text,
}))

function Hoisting() {
  const classes = useStyles()

  console.log('codeExample', code)

  return (
    <Wrapper title="HOISTING" code={code}>
      <Box>
        <Typography className={classes.text}>
          Hoisting is a JavaScript mechanism where variables and function
          declarations are moved to the top of their scope before code
          execution.
        </Typography>
        <Typography
          color="primary"
          align="center"
          variant="subtitle1"
          className={classes.text}
        >
          Some other details
        </Typography>
        <Typography>Here is the JS lifecycle:</Typography>
        <Typography className={classes.text} variant="body2">
          Declaration -> Initialization/Assigment -> usage
        </Typography>
        <Typography className={classes.text}>
          This happens in the JS enginee.
        </Typography>
        <Typography className={classes.text}>
          Hoisting works for 'var' or 'function' declaration.
        </Typography>
        <Typography className={classes.text}>
          In JavaScript, a variable can be declared after it has been used.
        </Typography>
        <Typography className={classes.text}>
          In other words; a variable can be used before it has been declared.
        </Typography>
      </Box>
    </Wrapper>
  )
}

export default memo(Hoisting)
