import React, { Fragment, memo } from 'react'

import Wrapper from 'screens/layout/wrapper'
import Details from 'components/details'

import localScope from 'content/scope/local'
import globalScope from 'content/scope/global'
import blockScope from 'content/scope/block'
import functionScope from 'content/scope/function'
import dynamicScope from 'content/scope/dynamic'

function Scope() {
  const content = [
    {
      descriptions: [
        `Scope determines the visibility or accessibility of a variable or
      other resource in the area of your code.`,
      ],
    },
    {
      subtitle: 'Global Scope',
      code: globalScope,
      descriptions: [
        `There's only one Global scope in the JavaScript document. The area
      outside all the functions is considered the global scope and the
      variables defined inside the global scope can be accessed and altered
      in any other scopes.`,
      ],
    },
    {
      subtitle: 'Local Scope',
      code: localScope,
      descriptions: [
        `Variables declared inside the functions become local to the function
      and are considered in the corresponding local scope. Every function
      has its own scope. The same variable can be used in different
      functions because they are bound to the respective functions and are
      not mutually visible.`,
      ],
    },
    {
      subtitle: 'Function Scope',
      code: functionScope,
      descriptions: [
        `Whenever you declare a variable in a function, the variable is visible
      only within the function. You can't access it outside the function.
      var is the keyword to define a variable for a function-scope
      accessibility.`,
      ],
    },
    {
      subtitle: 'Block Scope',
      code: blockScope,
      descriptions: [
        `A block scope is the area within if and switch conditions or for and while 
        loops. Generally speaking, whenever you see {curly brackets}, it is a block. 
        In ES6, const and let keywords allow developers to declare variables in the 
        block scope, which means those variables exist only within the corresponding 
        block.`,
      ],
    },
    {
      subtitle: 'Dynamic Scope',
      code: dynamicScope,
      descriptions: [
        `Dynamic scope, by contrast, doesn't concern itself with how and where
      functions and scopes are declared, but rather where they are called
      from. In other words, the scope chain is based on the call-stack, not
      the nesting of scopes in code.`,
        `Example code explanation: How can this be? Because when foo() cannot
      resolve the variable reference for a, instead of stepping up the
      nested (lexical) scope chain, it walks up the call-stack, to find
      where foo() was called from. Since foo() was called from bar(), it
      checks the variables in scope for bar(), and finds an a there with
      value 3.`,
      ],
    },
  ]

  return (
    <Wrapper title="SCOPE">
      <Fragment>
        {content.map((item, index) => (
          <Details key={index} item={item} />
        ))}
      </Fragment>
    </Wrapper>
  )
}

export default memo(Scope)
