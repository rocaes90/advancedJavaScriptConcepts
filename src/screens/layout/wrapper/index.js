import React from 'react'

import {
  Box,
  TextareaAutosize,
  makeStyles,
  Typography,
} from '@material-ui/core'

import ArrowBack from 'components/arrow-back'
import { routes } from 'app-constants'
import useResponsive from 'hooks/responsive.hook'

const {
  core: { HOME },
} = routes

const useStyles = makeStyles((theme) => ({
  codeTextAreaContainer: {
    width: '100%',
  },
  codeTextArea: {
    width: '-webkit-fill-available',
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
  const { isSmallScreen } = useResponsive()

  let routeToUse = arrowBackRoute ? arrowBackRoute : HOME

  const titleProps = {
    variant: isSmallScreen ? 'h3' : 'h2',
  }

  const hasCodeToDisplay = code ? true : false

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={4}
    >
      <Box display="flex" width={{ xs: '100%', md: '80%' }}>
        <ArrowBack label={arrowBackLabel} route={routeToUse} />
      </Box>
      <Typography {...titleProps} color="primary">
        {title}
      </Typography>
      <Box
        display="flex"
        width={{ xs: '100%', md: '80%' }}
        pt={4}
        justifyContent="space-between"
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
      >
        {hasCodeToDisplay && (
          <Box width={{ xs: '100%', md: '50%' }} pr={4}>
            <Box mb={{ xs: 2, md: 3 }}>
              <Typography
                className={classes.subtitles}
                align="center"
                variant="subtitle1"
              >
                Code Example
              </Typography>
            </Box>
            <Box className={classes.codeTextAreaContainer}>
              <TextareaAutosize
                className={classes.codeTextArea}
                rowsMin={40}
                rowsMax={40}
                value={code}
              />
            </Box>
          </Box>
        )}
        <Box width={{ xs: '100%', md: '45%' }}>
          <Box mb={{ xs: 2, md: 3 }}>
            <Typography
              className={classes.subtitles}
              align="center"
              variant="subtitle1"
            >
              Details
            </Typography>
          </Box>
          <Box textAlign={{ xs: 'center' }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Wrapper
