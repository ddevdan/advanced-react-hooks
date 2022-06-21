// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


const countReducer = (state, action) => {
  if (typeof action === "function") {
    console.log("function")
    return action(state)
  }
  console.log("value")
  return action
}

function Counter({ initialCount = 0, step = 1 }) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, setState] = React.useReducer(countReducer, { count: initialCount })

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const { count } = state;
  const incrementFunction = () => setState((current) => {
    return { count: current.count + step }
  })


  const incrementValue = () => setState({ count: count + step })


  return <>
    <button onClick={incrementFunction}>Function {count}</button>
    <button onClick={incrementValue}>Value {count}</button>
  </>
}

function App() {
  return <Counter/>
}

export default App
