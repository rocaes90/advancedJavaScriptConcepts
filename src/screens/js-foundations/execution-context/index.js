import React, { memo, Fragment } from 'react'

import Wrapper from 'screens/layout/wrapper'
import Details from 'components/details'

function ExecutionContext() {
  const content = [
    {
      descriptions: [
        `The environment in which the current code is being evaluated in. There
        can only be one execution context running at any point of time! This
        is because Javascript is single-threaded.`,
      ],
    },
  ]
  return (
    <Wrapper title="EXECUTION CONTEXT">
      <Fragment>
        {content.map((item, index) => (
          <Details key={index} item={item} />
        ))}
      </Fragment>
    </Wrapper>
  )
}

export default memo(ExecutionContext)
