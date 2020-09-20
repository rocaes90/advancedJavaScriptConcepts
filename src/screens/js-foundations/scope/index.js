import React, { Fragment, memo } from 'react'

import Wrapper from 'screens/layout/wrapper'
import code from 'content/scope'
import DetailsRow, { OtherDetails } from 'components/details-row'

function Scope() {
  return (
    <Wrapper title="SCOPE" code={code}>
      <Fragment>
        <DetailsRow>
          Scope determines the visibility or accessibility of a variable or
          other resource in the area of your code.
        </DetailsRow>
        <OtherDetails label="Global Scope" />
        <DetailsRow>
          There's only one Global scope in the JavaScript document. The area
          outside all the functions is considered the global scope and the
          variables defined inside the global scope can be accessed and altered
          in any other scopes.
        </DetailsRow>
        <OtherDetails label="Local Scope" />
        <DetailsRow>
          Variables declared inside the functions become local to the function
          and are considered in the corresponding local scope. Every function
          has its own scope. The same variable can be used in different
          functions because they are bound to the respective functions and are
          not mutually visible.
        </DetailsRow>
        <OtherDetails label="Function Scope" />
        <DetailsRow>
          Whenever you declare a variable in a function, the variable is visible
          only within the function. You can't access it outside the function.
          var is the keyword to define a variable for a function-scope
          accessibility.
        </DetailsRow>
        <OtherDetails label="Block Scope" />
        <DetailsRow>
          {`A block scope is the area within if and switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.`}
        </DetailsRow>
        <OtherDetails label="Lexical Scope" />
        <DetailsRow>
          Another point to mention is the lexical scope. Lexical scope means the
          child scopes have access to the variables defined in the parent scope.
          The child functions are lexically bound to the execution context of
          their parents.
        </DetailsRow>
        <OtherDetails label="Dinamic Scope" />
        <DetailsRow>
          Dynamic scope, by contrast, doesn't concern itself with how and where
          functions and scopes are declared, but rather where they are called
          from. In other words, the scope chain is based on the call-stack, not
          the nesting of scopes in code.
        </DetailsRow>
        <DetailsRow>
          Example code explanation: How can this be? Because when foo() cannot
          resolve the variable reference for a, instead of stepping up the
          nested (lexical) scope chain, it walks up the call-stack, to find
          where foo() was called from. Since foo() was called from bar(), it
          checks the variables in scope for bar(), and finds an a there with
          value 3.
        </DetailsRow>
      </Fragment>
    </Wrapper>
  )
}

export default memo(Scope)
