import React from 'react';
import './App.css';
import { render } from 'react-dom'
import { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'


const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'darkgrey' }}>M</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'darkgrey' }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'darkgrey' }}>X</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'darkgrey' }}>F</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'darkgrey' }}>I</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'darkgrey' }}>E</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'darkgrey' }}>L</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'darkgrey' }}>D</animated.div>,
 
  
]

function App() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 8), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 1, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 1, transform: 'translate3d(-100%,0,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

export default App;
