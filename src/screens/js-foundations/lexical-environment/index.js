import React, { Fragment, memo } from 'react'

import Wrapper from 'screens/layout/wrapper'
import Details from 'components/details'

function LexicalEnvironment() {
  const content = [
    {
      descriptions: [`Lexical environments means where the code was written.`],
    },
    // {
    //   subtitle: 'Some other details',
    //   descriptions: [
    //     `The Global Environment is the parent environment to all other
    //     environments created in the code.`,
    //     `In the browser, the global environment is called window.`,
    //     `In Node.js, the global environment is called global.`,
    //   ],
    // },
  ]
  return (
    <Wrapper title="LEXICAL ENVIRONMENT">
      <Fragment>
        {content.map((item, index) => (
          <Details key={index} item={item} />
        ))}
      </Fragment>
    </Wrapper>
  )
}

export default memo(LexicalEnvironment)
