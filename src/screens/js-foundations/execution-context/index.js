import React, { memo, Fragment } from 'react'

import Wrapper from 'screens/layout/wrapper'
import DetailsRow from 'components/details-row'

function ExecutionContext() {
  return (
    <Wrapper title="EXECUTION CONTEXT">
      <Fragment>
        <DetailsRow>
          The environment in which the current code is being evaluated in. There
          can only be one execution context running at any point of time! This
          is because Javascript is single-threaded.
        </DetailsRow>
      </Fragment>
    </Wrapper>
  )
}

export default memo(ExecutionContext)
