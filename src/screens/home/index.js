import React from 'react'

import { Box, Typography, makeStyles } from '@material-ui/core'

import ButtonTopic from 'components/button-topic'
import useResponsive from 'hooks/responsive.hook'

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
  const { isSmallScreen } = useResponsive()

  const {
    onClickThis,
    onClickHoisting,
    onClickExecutionContext,
    onClickLexicalEnvironment,
    onClickScope,
  } = useHome()

  const titleProps = {
    variant: isSmallScreen ? 'h3' : 'h2',
  }
  const subtitleProps = {
    variant: isSmallScreen ? 'body1' : 'h4',
  }

  return (
    <Box textAlign="center" pt={{ xs: 5, md: 10 }}>
      <Typography {...titleProps} color="primary">
        Advanced JavaScript Concepts
      </Typography>
      <Box mt={6} display="flex" flexDirection="column" alignItems="center">
        <Typography {...subtitleProps} color="primary">
          JavaScript Foundations
        </Typography>
        <Box
          className={classes.optionsContainer}
          width={{ xs: '100%', md: '80%' }}
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
