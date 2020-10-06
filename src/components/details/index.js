import React from 'react'

import { Box, makeStyles, Typography } from '@material-ui/core'

import Description from './description'
import Code from './code'

const useStyles = makeStyles((theme) => ({
  subtitles: {
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
}))

function Details({ item }) {
  const classes = useStyles()

  const { subtitle, code, descriptions } = item

  return (
    <Box>
      {subtitle && (
        <Typography
          className={classes.subtitles}
          align="center"
          variant="subtitle1"
        >
          {subtitle}
        </Typography>
      )}
      <Box
        display="flex"
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
        justifyContent="center"
      >
        {code && <Code code={code} />}
        <Description descriptions={descriptions} />
      </Box>
    </Box>
  )
}

export default Details
