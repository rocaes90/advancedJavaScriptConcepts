import React, { memo } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

import Wrapper from 'screens/layout/wrapper'
import { text } from 'config/styles'
import code from 'content/scope'

const useStyles = makeStyles((theme) => ({
  ...text,
}))

function LexicalEnvironment() {
  const classes = useStyles()

  return (
    <Wrapper title="SCOPE" code={code}>
      <Box>
        <Typography className={classes.text}>
          Scope determines the visibility or accessibility of a variable or
          other resource in the area of your code.
        </Typography>
        <Typography
          color="primary"
          align="center"
          variant="subtitle1"
          className={classes.text}
        >
          Global Scope
        </Typography>
        <Typography className={classes.text}>
          There's only one Global scope in the JavaScript document. The area
          outside all the functions is considered the global scope and the
          variables defined inside the global scope can be accessed and altered
          in any other scopes.
        </Typography>
        <Typography
          color="primary"
          align="center"
          variant="subtitle1"
          className={classes.text}
        >
          Local Scope
        </Typography>
        <Typography className={classes.text}>
          Variables declared inside the functions become local to the function
          and are considered in the corresponding local scope. Every function
          has its own scope. The same variable can be used in different
          functions because they are bound to the respective functions and are
          not mutually visible.
        </Typography>
        <Typography
          color="primary"
          align="center"
          variant="subtitle1"
          className={classes.text}
        >
          Function Scope
        </Typography>
        <Typography className={classes.text}>
          Whenever you declare a variable in a function, the variable is visible
          only within the function. You can't access it outside the function.
          var is the keyword to define a variable for a function-scope
          accessibility.
        </Typography>
        <Typography
          color="primary"
          align="center"
          variant="subtitle1"
          className={classes.text}
        >
          Block Scope
        </Typography>
        <Typography className={classes.text}>
          {`A block scope is the area within if and switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.`}
        </Typography>
        <Typography
          color="primary"
          align="center"
          variant="subtitle1"
          className={classes.text}
        >
          Lexical Scope
        </Typography>
        <Typography className={classes.text}>
          Another point to mention is the lexical scope. Lexical scope means the
          child scopes have access to the variables defined in the parent scope.
          The child functions are lexically bound to the execution context of
          their parents.
        </Typography>
        <Typography
          color="primary"
          align="center"
          variant="subtitle1"
          className={classes.text}
        >
          Dinamic Scope
        </Typography>
        <Typography className={classes.text}>
          Dynamic scope, by contrast, doesn't concern itself with how and where
          functions and scopes are declared, but rather where they are called
          from. In other words, the scope chain is based on the call-stack, not
          the nesting of scopes in code.
        </Typography>
        <Typography className={classes.text}>
          Example code explanation: How can this be? Because when foo() cannot
          resolve the variable reference for a, instead of stepping up the
          nested (lexical) scope chain, it walks up the call-stack, to find
          where foo() was called from. Since foo() was called from bar(), it
          checks the variables in scope for bar(), and finds an a there with
          value 3.
        </Typography>
      </Box>
    </Wrapper>
  )
}

export default memo(LexicalEnvironment)
