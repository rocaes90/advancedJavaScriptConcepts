import React, { Fragment, memo } from 'react'

import Wrapper from 'screens/layout/wrapper'
import code from 'content/hoisting'
import DetailsRow, { OtherDetails } from 'components/details-row'

function Hoisting() {
  console.log('codeExample', code)

  return (
    <Wrapper title="HOISTING" code={code}>
      <Fragment>
        <DetailsRow>
          Hoisting is a JavaScript mechanism where variables and function
          declarations are moved to the top of their scope before code
          execution.
        </DetailsRow>
        <OtherDetails />
        <DetailsRow>
          Here is the JS lifecycle: Declaration -> Initialization/Assigment ->
          usage
        </DetailsRow>
        <DetailsRow>This happens in the JS enginee.</DetailsRow>
        <DetailsRow>
          Hoisting works for 'var' or 'function' declaration.
        </DetailsRow>
        <DetailsRow>
          In JavaScript, a variable can be declared after it has been used.
        </DetailsRow>
        <DetailsRow>
          In other words; a variable can be used before it has been declared.
        </DetailsRow>
      </Fragment>
    </Wrapper>
  )
}

export default memo(Hoisting)
