import React, { Fragment, memo } from 'react'

import Wrapper from 'screens/layout/wrapper'
import DetailsRow, { OtherDetails } from 'components/details-row'

function LexicalEnvironment() {
  return (
    <Wrapper title="LEXICAL ENVIRONMENT" code="N/A">
      <Fragment>
        <DetailsRow>
          Lexical environments means where the code was written.
        </DetailsRow>
        <OtherDetails />
        <DetailsRow>
          The Global Environment is the parent environment to all other
          environments created in the code.
        </DetailsRow>
        <DetailsRow>
          In the browser, the global environment is called window.
        </DetailsRow>
        <DetailsRow>
          In Node.js, the global environment is called global.
        </DetailsRow>
      </Fragment>
    </Wrapper>
  )
}

export default memo(LexicalEnvironment)
