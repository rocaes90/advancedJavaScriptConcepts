import React from 'react'

import { Typography, makeStyles } from '@material-ui/core'

import packageJson from '../../../package.json'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    right: 0,
    width: '200px',
    justifyContent: 'center',
  },
  text: {
    color: theme.palette.common.white,
  },
}))

function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.container}>
      <Typography variant="overline" className={classes.text}>
        {`Version ${packageJson.version}`}
      </Typography>
    </footer>
  )
}

export default Footer
