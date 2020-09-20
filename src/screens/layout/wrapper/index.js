import React from 'react'

import {
  Box,
  TextareaAutosize,
  makeStyles,
  Typography,
} from '@material-ui/core'

import ArrowBack from 'components/arrow-back'
import { routes } from 'app-constants'

const {
  core: { HOME },
} = routes

const useStyles = makeStyles((theme) => ({
  codeTextArea: {
    width: '100%',
  },
  subtitles: {
    color: theme.palette.primary.dark,
  },
}))

function Wrapper({
  children,
  code,
  title,
  arrowBackRoute,
  arrowBackLabel = 'GO HOME',
}) {
  const classes = useStyles()
  let routeToUse = arrowBackRoute ? arrowBackRoute : HOME

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={4}
    >
      <Box display="flex" width="80%">
        <ArrowBack label={arrowBackLabel} route={routeToUse} />
      </Box>
      <Typography color="primary" variant="h2">
        {title}
      </Typography>
      <Box display="flex" width="80%" pt={4} justifyContent="space-between">
        <Box width="50%" pr={4}>
          <Box mb={3}>
            <Typography
              className={classes.subtitles}
              align="center"
              variant="subtitle1"
            >
              Code Example
            </Typography>
          </Box>
          <TextareaAutosize
            className={classes.codeTextArea}
            rowsMin={40}
            rowsMax={40}
            value={code}
          />
        </Box>
        <Box width="45%">
          <Box mb={3}>
            <Typography
              className={classes.subtitles}
              align="center"
              variant="subtitle1"
            >
              Details
            </Typography>
          </Box>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Wrapper
