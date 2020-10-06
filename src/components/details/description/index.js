import React from 'react'

import { Box, Typography, makeStyles } from '@material-ui/core'

import { text } from 'config/styles'

const useStyles = makeStyles((theme) => ({
  ...text,
}))

function Description({ descriptions }) {
  const classes = useStyles()
  return (
    <Box
      ml={{ xs: 0, md: 4 }}
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      {descriptions.map((description, index) => (
        <Typography key={index} className={classes.text}>
          {description}
        </Typography>
      ))}
    </Box>
  )
}

export default Description
