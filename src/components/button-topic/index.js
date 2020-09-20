import React from 'react'

import { Button } from '@material-ui/core'

function ButtonTopic({ label, onClick }) {
  return (
    <Button size="large" variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  )
}

export default ButtonTopic
