import React, { Fragment, memo } from 'react'

import Wrapper from 'screens/layout/wrapper'
import code from 'content/hoisting'
import Details from 'components/details'

function Hoisting() {
  const content = [
    {
      code: code,
      descriptions: [
        `Hoisting is a JavaScript mechanism where variables and function
      declarations are moved to the top of their scope before code
      execution.`,
      ],
    },
    {
      subtitle: 'Some other details',
      descriptions: [
        `Here is the JS lifecycle: Declaration -> Initialization/Assigment ->
        usage.`,
        `This happens in the JS enginee.`,
        `Hoisting works for 'var' or 'function' declaration.`,
        `In JavaScript, a variable can be declared after it has been used.`,
        `In other words; a variable can be used before it has been declared.`,
      ],
    },
  ]

  return (
    <Wrapper title="HOISTING">
      <Fragment>
        {content.map((item, index) => (
          <Details key={index} item={item} />
        ))}
      </Fragment>
    </Wrapper>
  )
}

export default memo(Hoisting)
