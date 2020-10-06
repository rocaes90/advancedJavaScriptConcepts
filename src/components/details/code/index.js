import React from 'react'

import { Box, TextareaAutosize, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  codeTextAreaContainer: {
    width: '100%',
  },
  codeTextArea: {
    width: '-webkit-fill-available',
  },
}))

function Code({ code }) {
  const classes = useStyles()

  return (
    <Box display="flex" minWidth={400}>
      <Box className={classes.codeTextAreaContainer}>
        <TextareaAutosize className={classes.codeTextArea} value={code} />
      </Box>
    </Box>
  )
}

export default Code
