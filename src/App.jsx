import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GenInfo from './components/GenInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'

function App() {
  return (    
    <>
      <GenInfo></GenInfo>    
      <Education></Education>
      <WorkExperience></WorkExperience>
    </>
  )
}

export default App