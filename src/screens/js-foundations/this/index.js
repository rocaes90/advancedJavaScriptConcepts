import React, { Fragment, memo } from 'react'

import Wrapper from 'screens/layout/wrapper'
import code from 'content/this'
import DetailsRow, { OtherDetails } from 'components/details-row'

function This() {
  return (
    <Wrapper title="THIS" code={code}>
      <Fragment>
        <DetailsRow>
          "this" can be thought of as "who called me?"" i.e., what is to the
          left of the dot, such as window.a()
        </DetailsRow>
        <OtherDetails />
        <DetailsRow variant="body2">
          "this" is the object which the function is a property of
        </DetailsRow>
        <DetailsRow>
          "this" gives functions access to their object and its properties
        </DetailsRow>
        <DetailsRow>
          "this" is dynamically scoped, i.e. it doesn’t matter where it was
          written, it matters where it was called
        </DetailsRow>
        <DetailsRow>
          Arrow functions bind “this” to the lexical scope
        </DetailsRow>
      </Fragment>
    </Wrapper>
  )
}

export default memo(This)
