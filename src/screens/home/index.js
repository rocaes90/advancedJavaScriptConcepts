import React from 'react'

import { Box, Typography, Button, makeStyles } from '@material-ui/core'

import useHome from './home.hooks'

const useStyles = makeStyles((theme) => ({
  optionsContainer: {
    marginBottom: '20px',
    '& button': {
      margin: '10px',
    },
  },
}))

function Home() {
  const classes = useStyles()
  const { onClickThis, onClickHoisting } = useHome()

  return (
    <Box textAlign="center">
      <Typography variant="h2">Advanced JavaScript Concepts</Typography>
      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4">JavaScript Foundations</Typography>
        <Box
          className={classes.optionsContainer}
          width="80%"
          alignItems="center"
          mt={3}
          display="flex"
          flexWrap="wrap"
        >
          <Button variant="contained" onClick={onClickThis}>
            This
          </Button>
          <Button variant="contained" onClick={onClickHoisting}>
            Hoisting
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
