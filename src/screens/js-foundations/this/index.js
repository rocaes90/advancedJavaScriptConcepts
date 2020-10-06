import React, { Fragment, memo } from 'react'

import Wrapper from 'screens/layout/wrapper'
import Details from 'components/details'

import code from 'content/this'

function This() {
  const content = [
    {
      code: code,
      descriptions: [
        `"this" can be thought of as "who called me?"" i.e., what is to the
        left of the dot, such as window.a()`,
      ],
    },
    {
      subtitle: 'Some other details',
      descriptions: [
        `"this" is the object which the function is a property of`,
        `"this" gives functions access to their object and its properties.`,
        `"this" is dynamically scoped, i.e. it doesn’t matter where it was
        written, it matters where it was called.`,
        `Arrow functions bind “this” to the lexical scope`,
      ],
    },
  ]

  return (
    <Wrapper title="THIS" code={code}>
      <Fragment>
        {content.map((item, index) => (
          <Details key={index} item={item} />
        ))}
      </Fragment>
    </Wrapper>
  )
}

export default memo(This)
