import React, { useCallback } from 'react'

import { Box, Button, Typography } from '@material-ui/core'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'

import useBack from './arrow-back.hook'

function ArrowBack({ route, label }) {
  const { onClickBack } = useBack()

  const onClickBackCallback = useCallback(() => {
    onClickBack(route)
  }, [onClickBack, route])

  return (
    <Box>
      <Button color="primary" onClick={onClickBackCallback}>
        <Box mr={2}>
          <ArrowBackIcon />
        </Box>
        <Typography>{label}</Typography>
      </Button>
    </Box>
  )
}

export default ArrowBack
