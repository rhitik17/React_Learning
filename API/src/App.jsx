import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonList from './components/PersonList'
import PersonAdd from './components/PersonAdd'
import PersonRemove from './components/PersonRemove'

function App() {
 

  return (
    <>
      <PersonAdd/>
      <PersonList/>
      <PersonRemove/>
    </>
  )
}

export default App
