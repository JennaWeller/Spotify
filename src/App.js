import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'

import './App.css'

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControls">BYU IS 531</div>
    </div>
  )
}

export default App
