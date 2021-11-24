import React from 'react'
import Header from './component/Header'
import './App.css'
import Sidebar from './component/Sidebar'
import Main from './component/Main'

function App() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <div>
        <Main/>
      </div>
    </>
  )
}

export default App
