import React from 'react'

import { Box, Typography, makeStyles } from '@material-ui/core'

import ButtonTopic from 'components/button-topic'

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
  const {
    onClickThis,
    onClickHoisting,
    onClickExecutionContext,
    onClickLexicalEnvironment,
    onClickScope,
  } = useHome()

  return (
    <Box textAlign="center">
      <Typography color="primary" variant="h2">
        Advanced JavaScript Concepts
      </Typography>
      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        <Typography color="primary" variant="h4">
          JavaScript Foundations
        </Typography>
        <Box
          className={classes.optionsContainer}
          width="80%"
          alignItems="center"
          mt={3}
          display="flex"
          flexWrap="wrap"
        >
          <ButtonTopic
            label="Execution Context"
            onClick={onClickExecutionContext}
          />
          <ButtonTopic
            label="Lexical Environment"
            onClick={onClickLexicalEnvironment}
          />
          <ButtonTopic label="Scope" onClick={onClickScope} />
          <ButtonTopic label="Hoisting" onClick={onClickHoisting} />
          <ButtonTopic label="This" onClick={onClickThis} />
        </Box>
      </Box>
    </Box>
  )
}

export default Home
