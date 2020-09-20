import React from 'react'

import { Button, makeStyles } from '@material-ui/core'

import useResponsive from 'hooks/responsive.hook'

const useStyles = makeStyles((theme) => ({
  buttonElement: {
    minWidth: 'auto',
  },
}))

function ButtonTopic({ label, onClick }) {
  const classes = useStyles()
  const { isSmallScreen } = useResponsive()

  const buttonProps = {
    size: isSmallScreen ? 'small' : 'large',
  }

  return (
    <Button
      {...buttonProps}
      className={classes.buttonElement}
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default ButtonTopic
