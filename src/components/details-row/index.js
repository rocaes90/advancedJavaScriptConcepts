import React from 'react'

import { Typography, makeStyles } from '@material-ui/core'

import { text } from 'config/styles'

const useStyles = makeStyles((theme) => ({
  ...text,
}))

function DetailsRow({ children }) {
  const classes = useStyles()
  return <Typography className={classes.text}>{children}</Typography>
}

export function OtherDetails({ label }) {
  const classes = useStyles()

  const labelToDisplay = label ? label : 'Some other details'

  return (
    <Typography
      color="primary"
      align="center"
      variant="subtitle1"
      className={classes.text}
    >
      {labelToDisplay}
    </Typography>
  )
}

export default DetailsRow
